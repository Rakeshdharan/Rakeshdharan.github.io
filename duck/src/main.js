// Hero duck: Microduck (open-source BDX-style biped) walking in MuJoCo-WASM under pretrained RL policies.
// Robot model, policies and observation layout are from 00make/microduck-arena (MIT) / pollen-robotics
// microduck. Physics 200 Hz, policy 50 Hz, exactly as trained. Everything runs client-side.
import * as THREE from "three";
import loadMujoco from "@mujoco/mujoco";
import { loadPolicy } from "./policy.js";
import { buildRig, loadKinematics, loadGlbGeometries, geometryToBinaryStl, setJoint, MODEL_DIR } from "./duck.js";
import { VARIANTS, materialHookFor, DEFAULT_VARIANT } from "./variants.js";

const BASE = new URL("./", import.meta.url).href;

const JOINT_NAMES = [
  "left_hip_yaw", "left_hip_roll", "left_hip_pitch", "left_knee", "left_ankle",
  "neck_pitch", "head_pitch", "head_yaw", "head_roll",
  "right_hip_yaw", "right_hip_roll", "right_hip_pitch", "right_knee", "right_ankle",
];
const DEFAULT_POSE = new Float32Array([
  0, -0.08726646259971647, -0.457924, -0.004940, 0.452984,
  0.3490658503988659, 0.3490658503988659, 0, 0,
  0, 0.08726646259971647, 0.457924, 0.004940, -0.452984,
]);
const NJ = 14, OBS = 61, TIMESTEP = 0.005, DECIMATION = 4, CTRL_DT = TIMESTEP * DECIMATION;
const VX_MAX = 0.25, WZ_MAX = 1.0, CMD_ALPHA = 0.25;
const FALL_DEBOUNCE = 10, FALL_SETTLE = 15, RECOVER_UPRIGHT = 50, RECOVER_GIVEUP = 300;
const ARENA = 1.4;

async function buildPhysicsXml() {
  const src = await (await fetch(`${MODEL_DIR}/robot_allcollisions.xml`)).text();
  const doc = new DOMParser().parseFromString(src, "text/xml");
  for (const g of [...doc.querySelectorAll('geom[class="visual"]')]) g.remove();
  const used = new Set([...doc.querySelectorAll("geom[mesh]")].map((g) => g.getAttribute("mesh")));
  for (const m of [...doc.querySelectorAll("asset > mesh")]) {
    const name = m.getAttribute("name") ?? m.getAttribute("file").replace(/\.stl$/i, "");
    if (!used.has(name)) m.remove();
  }
  const root = doc.documentElement;
  const el = (tag, attrs) => {
    const e = doc.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    return e;
  };
  root.appendChild(el("option", { timestep: String(TIMESTEP) }));
  doc.querySelector("worldbody").appendChild(el("geom", { name: "floor", type: "plane", size: "0 0 0.05", pos: "0 0 0" }));
  const poseByName = new Map(JOINT_NAMES.map((n, i) => [n, DEFAULT_POSE[i]]));
  const hinges = [...doc.querySelectorAll("body > joint")].map((j) => poseByName.get(j.getAttribute("name")) ?? 0).join(" ");
  const kf = doc.createElement("keyframe");
  kf.appendChild(el("key", { name: "STAND", qpos: `0 0 0.12 1 0 0 0 ${hinges}`, ctrl: Array.from(DEFAULT_POSE).join(" ") }));
  root.appendChild(kf);
  return { xml: new XMLSerializer().serializeToString(doc), meshFiles: [...doc.querySelectorAll("asset > mesh")].map((m) => m.getAttribute("file")) };
}

const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

/** Boots the sim + renderer. Resolves with a controller once the first frame can be drawn. */
export async function createDuck(canvas, opts = {}) {
  const [mujoco, { xml, meshFiles }, kin, policies] = await Promise.all([
    loadMujoco({ locateFile: (p) => (p.endsWith(".wasm") ? BASE + "mujoco.wasm" : p) }),
    buildPhysicsXml(),
    loadKinematics(`${MODEL_DIR}/kinematics.json`),
    Promise.all(["walk", "stand", "roll"].map((n) => loadPolicy(`${BASE}policies/${n}.bin`))).then(([walk, stand, roll]) => ({ walk, stand, roll })),
  ]);

  // ── physics ───────────────────────────────────────────────────────────
  const geoms = await loadGlbGeometries();
  const vfs = new mujoco.MjVFS();
  for (const f of meshFiles) {
    const entry = geoms.get(f);
    if (!entry) throw new Error("missing mesh " + f);
    vfs.addBuffer(`assets/${f}`, new Uint8Array(geometryToBinaryStl(entry.welded)));
  }
  const model = mujoco.MjModel.from_xml_string(xml, vfs);
  const data = new mujoco.MjData(model);
  const qposAdr = JOINT_NAMES.map((n) => model.jnt(n).qposadr);
  const dofAdr = JOINT_NAMES.map((n) => model.jnt(n).dofadr);
  const gyroAdr = model.sensor("imu_ang_vel").adr;
  const trunkId = mujoco.mj_name2id(model, mujoco.mjtObj.mjOBJ_BODY.value, "trunk_base");
  const keyId = mujoco.mj_name2id(model, mujoco.mjtObj.mjOBJ_KEY.value, "STAND");

  // ── render ────────────────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 30);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f99, 1.1));
  const sun = new THREE.DirectionalLight(0xfff1de, 2.4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -0.7, right: 0.7, top: 0.7, bottom: -0.7, near: 0.1, far: 4 });
  sun.shadow.bias = -0.0004;
  scene.add(sun, sun.target);
  const rim = new THREE.DirectionalLight(0x9fc4ff, 0.9);
  rim.position.set(-1.5, 1, -1.5);
  scene.add(rim);

  const rig = await buildRig(kin, { materialForMesh: materialHookFor(VARIANTS[DEFAULT_VARIANT]) });
  rig.placer.traverse((o) => { if (o.isMesh) { o.castShadow = true; } });
  scene.add(rig.placer);
  const trunkGroup = rig.bodies.get("trunk_base");

  // Floor: radial-fading grid that follows the duck (snapped to cells so it reads as endless) + shadow catcher.
  const CELL = 0.2, SPAN = 7;
  const gridTex = new THREE.CanvasTexture(Object.assign(document.createElement("canvas"), { width: 64, height: 64 }));
  gridTex.wrapS = gridTex.wrapT = THREE.RepeatWrapping;
  gridTex.repeat.set(SPAN / CELL, SPAN / CELL);
  gridTex.anisotropy = 4;
  const fadeCv = Object.assign(document.createElement("canvas"), { width: 128, height: 128 });
  {
    const c = fadeCv.getContext("2d"), g = c.createRadialGradient(64, 64, 8, 64, 64, 64);
    g.addColorStop(0, "#fff"); g.addColorStop(1, "#000"); c.fillStyle = g; c.fillRect(0, 0, 128, 128);
  }
  { // white cell outline on transparent; tinted per theme through the material colour
    const c = gridTex.image.getContext("2d");
    c.strokeStyle = "#fff"; c.lineWidth = 2; c.strokeRect(1, 1, 64, 64);
  }
  const gridMat = new THREE.MeshBasicMaterial({ map: gridTex, alphaMap: new THREE.CanvasTexture(fadeCv), transparent: true, depthWrite: false });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(SPAN, SPAN), gridMat);
  floor.rotation.x = -Math.PI / 2;
  floor.renderOrder = -1;
  const shadowFloor = new THREE.Mesh(new THREE.PlaneGeometry(SPAN, SPAN), new THREE.ShadowMaterial({ opacity: 0.28 }));
  shadowFloor.rotation.x = -Math.PI / 2;
  shadowFloor.position.y = 0.0005;
  shadowFloor.receiveShadow = true;
  scene.add(floor, shadowFloor);

  // Waypoint ring + push arrow
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.045, 0.06, 40), new THREE.MeshBasicMaterial({ color: 0xff4f00, transparent: true, opacity: 0.9, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.002; ring.visible = false;
  const arrow = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.2, 10), new THREE.MeshBasicMaterial({ color: 0xff4f00, transparent: true }));
  shaft.rotation.z = Math.PI / 2; shaft.position.x = -0.1;
  const head = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.06, 14), shaft.material);
  head.rotation.z = -Math.PI / 2;
  arrow.add(shaft, head); arrow.visible = false;
  scene.add(ring, arrow);

  const colors = {};
  function refreshColors() {
    const s = getComputedStyle(document.documentElement);
    colors.line = s.getPropertyValue("--ink").trim() || "#000";
    colors.accent = s.getPropertyValue("--accent").trim() || "#ff4f00";
    const dark = document.documentElement.dataset.theme === "dark" || (document.documentElement.dataset.theme !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
    gridMat.color.set(dark ? 0xffffff : 0x0d0f12);
    gridMat.opacity = dark ? 0.22 : 0.16;
    ring.material.color.set(colors.accent);
    shaft.material.color.set(colors.accent);
    shadowFloor.material.opacity = dark ? 0.5 : 0.28;
  }
  refreshColors();

  // ── control state ─────────────────────────────────────────────────────
  const lastAction = new Float32Array(NJ);
  const obs = new Float32Array(OBS);
  const cmdSm = new Float32Array(2); // smoothed [vx, wz]
  let state = "walk";               // walk | roll | fallen | recover
  let stateSteps = 0, fallDebounce = 0, uprightSteps = 0, rollTipped = false;
  let target = null, lastUserTarget = -1e9;
  let wanderAt = 0;
  let pushSteps = 0; const pushForce = [0, 0, 0];
  const stats = { falls: 0, recoveries: 0, pushes: 0, rolls: 0, policy: "walk", hz: 0, speed: 0, vx: 0, wz: 0 };

  mujoco.mj_resetDataKeyframe(model, data, keyId);
  mujoco.mj_forward(model, data);

  const projGravity = () => {
    const q = data.qpos, w = q[3], x = q[4], y = q[5];
    return [-2 * (x * q[6] - w * y), -2 * (y * q[6] + w * x), -(1 - 2 * (x * x + y * y))];
  };
  const yaw = () => { const q = data.qpos; return Math.atan2(2 * (q[3] * q[6] + q[4] * q[5]), 1 - 2 * (q[5] * q[5] + q[6] * q[6])); };

  function reset() {
    mujoco.mj_resetDataKeyframe(model, data, keyId);
    mujoco.mj_forward(model, data);
    lastAction.fill(0); cmdSm.fill(0);
    state = "walk"; stateSteps = fallDebounce = uprightSteps = 0; target = null; pushSteps = 0;
    stats.policy = "walk";
  }

  function wanderTarget(now) {
    const q = data.qpos;
    for (let i = 0; i < 8; i++) {
      const a = Math.random() * Math.PI * 2, r = 0.45 + Math.random() * 0.65;
      const t = { x: Math.cos(a) * r, y: Math.sin(a) * r };
      if (Math.hypot(t.x - q[0], t.y - q[1]) > 0.45) { target = t; wanderAt = now; return; }
    }
    target = { x: 0, y: 0 };
  }

  function desiredTwist(now) {
    if (!target) {
      if (now - lastUserTarget > 3500 && now - wanderAt > 1200) wanderTarget(now);
      return [0, 0];
    }
    const q = data.qpos;
    const dx = target.x - q[0], dy = target.y - q[1], dist = Math.hypot(dx, dy);
    if (dist < 0.12) { target = null; wanderAt = now; return [0, 0]; }
    const err = wrap(Math.atan2(dy, dx) - yaw());
    const wz = clamp(1.8 * err, -WZ_MAX, WZ_MAX);
    // the walk policy only steps when vx is non-trivial: turn on an arc instead of in place
    const vx = clamp(VX_MAX * (1 - Math.abs(err) / 1.4), 0.22, VX_MAX);
    return [vx, wz];
  }

  function buildObs(cmdVx, cmdWz) {
    const qpos = data.qpos, qvel = data.qvel, sens = data.sensordata;
    let i = 0;
    for (let a = 0; a < 3; a++) obs[i++] = sens[gyroAdr + a];
    const g = projGravity();
    obs[i++] = g[0]; obs[i++] = g[1]; obs[i++] = g[2];
    for (let j = 0; j < NJ; j++) obs[i++] = qpos[qposAdr[j]] - DEFAULT_POSE[j];
    for (let j = 0; j < NJ; j++) obs[i++] = qvel[dofAdr[j]];
    for (let j = 0; j < NJ; j++) obs[i++] = lastAction[j];
    obs[i++] = cmdVx; obs[i++] = 0; obs[i++] = cmdWz;
    while (i < OBS) obs[i++] = 0; // head/body command slots
    return obs;
  }

  function controlStep(now) {
    if (state !== "fallen") {
      const [vx, wz] = state === "walk" ? desiredTwist(now) : [0, 0];
      cmdSm[0] += (vx - cmdSm[0]) * CMD_ALPHA;
      cmdSm[1] += (wz - cmdSm[1]) * CMD_ALPHA;
      const sel = state === "recover" ? "stand" : state === "roll" ? "roll" : "walk";
      stats.policy = sel;
      const act = policies[sel].run(buildObs(state === "walk" ? cmdSm[0] : 0, state === "walk" ? cmdSm[1] : 0));
      lastAction.set(act);
      const ctrl = data.ctrl;
      for (let j = 0; j < NJ; j++) ctrl[j] = DEFAULT_POSE[j] + act[j];
    }
    const xfrc = data.xfrc_applied;
    if (pushSteps > 0) { xfrc[trunkId * 6] = pushForce[0]; xfrc[trunkId * 6 + 1] = pushForce[1]; xfrc[trunkId * 6 + 2] = pushForce[2]; pushSteps--; }
    else { xfrc[trunkId * 6] = xfrc[trunkId * 6 + 1] = xfrc[trunkId * 6 + 2] = 0; }
    for (let s = 0; s < DECIMATION; s++) mujoco.mj_step(model, data);

    // state machine
    const g = projGravity(), z = data.qpos[2];
    if (!Number.isFinite(z) || !Number.isFinite(g[2]) || Math.hypot(data.qpos[0], data.qpos[1]) > 4) return reset();
    stateSteps++;
    if (state === "walk") {
      if (g[2] > -0.5 || z < 0.02) {
        if (++fallDebounce >= FALL_DEBOUNCE) { fallDebounce = 0; state = "fallen"; stateSteps = 0; stats.falls++; target = null; }
      } else fallDebounce = 0;
    } else if (state === "fallen") {
      if (stateSteps >= FALL_SETTLE) { state = "recover"; stateSteps = 0; uprightSteps = 0; lastAction.fill(0); }
    } else if (state === "recover") {
      uprightSteps = g[2] < -0.85 ? uprightSteps + 1 : 0;
      if (uprightSteps >= RECOVER_UPRIGHT) { state = "walk"; stateSteps = 0; lastAction.fill(0); cmdSm.fill(0); stats.recoveries++; wanderAt = performance.now(); }
      else if (stateSteps >= RECOVER_GIVEUP) reset();
    } else if (state === "roll") {
      if (obs[5] > -0.3) rollTipped = true;
      const upright = obs[5] < -0.85;
      if ((rollTipped && upright && stateSteps >= 40) || stateSteps >= 150) {
        state = "walk"; stateSteps = 0; lastAction.fill(0); cmdSm.fill(0);
        if (!upright) reset();
      }
    }
  }
  const now = () => performance.now();

  // ── public actions ────────────────────────────────────────────────────
  function push(angle) {
    if (state !== "walk" && state !== "roll") return false;
    const a = angle ?? yaw() + (Math.random() < 0.5 ? 1 : -1) * (Math.PI / 2 + (Math.random() - 0.5) * 0.8);
    const F = 5.5;
    pushForce[0] = Math.cos(a) * F; pushForce[1] = Math.sin(a) * F; pushForce[2] = 0;
    pushSteps = 5; stats.pushes++;
    arrowT = 0.9; arrowAngle = a;
    return true;
  }
  function roll() {
    if (state !== "walk") return false;
    state = "roll"; stateSteps = 0; rollTipped = false; target = null; stats.rolls++;
    return true;
  }
  function goTo(x, y, user = true) {
    target = { x: clamp(x, -ARENA, ARENA), y: clamp(y, -ARENA, ARENA) };
    if (user) lastUserTarget = now();
  }
  const ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), ndc = new THREE.Vector2(), hit = new THREE.Vector3();
  function pointerTo(clientX, clientY) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    if (ray.ray.intersectPlane(plane, hit)) goTo(hit.x, -hit.z);
  }

  // ── frame loop ────────────────────────────────────────────────────────
  const camTarget = new THREE.Vector3(), camGoal = new THREE.Vector3();
  const CAM_OFF = new THREE.Vector3(0.95, 0.78, 1.15);
  let arrowT = 0, arrowAngle = 0, running = true, visible = true, raf = 0, acc = 0, last = now(), hzCount = 0, hzT = last, slow = 0;
  const onRaf = (t) => {
    raf = requestAnimationFrame(onRaf);
    const dt = Math.min((t - last) / 1000, 0.1); last = t;
    if (!running || !visible || document.hidden) return;
    acc += dt;
    let n = 0;
    while (acc >= CTRL_DT && n < 3) { controlStep(now()); acc -= CTRL_DT; n++; hzCount++; }
    if (acc > CTRL_DT) acc = 0;
    if (t - hzT > 500) { stats.hz = Math.round((hzCount * 1000) / (t - hzT)); hzCount = 0; hzT = t; opts.onStats?.(stats, state); }
    dt > 0.045 ? slow++ : (slow = Math.max(0, slow - 1));
    if (slow > 90) { slow = 0; opts.onSlow?.(); }

    const q = data.qpos;
    trunkGroup.position.set(q[0], q[1], q[2]);
    trunkGroup.quaternion.set(q[4], q[5], q[6], q[3]);
    for (let j = 0; j < NJ; j++) setJoint(rig, JOINT_NAMES[j], q[qposAdr[j]]);
    const v = data.qvel; stats.speed = Math.hypot(v[0], v[1]); stats.vx = cmdSm[0]; stats.wz = cmdSm[1]; stats.x = q[0]; stats.y = q[1]; stats.yaw = yaw(); stats.tx = target?.x; stats.ty = target?.y;

    const px = q[0], pz = -q[1];
    camGoal.set(px, 0.09, pz);
    camTarget.lerp(camGoal, 1 - Math.pow(0.001, dt));
    camera.position.copy(camTarget).add(CAM_OFF);
    camera.lookAt(camTarget);
    sun.position.set(px + 0.9, 1.6, pz + 0.6); sun.target.position.set(px, 0, pz);
    floor.position.set(Math.round(px / CELL) * CELL, 0, Math.round(pz / CELL) * CELL);
    shadowFloor.position.x = px; shadowFloor.position.z = pz;
    if (target) { ring.visible = true; ring.position.x = target.x; ring.position.z = -target.y; ring.scale.setScalar(1 + 0.08 * Math.sin(t / 160)); } else ring.visible = false;
    if (arrowT > 0) {
      arrowT -= dt; arrow.visible = arrowT > 0;
      arrow.position.set(px, 0.13, pz); arrow.rotation.y = -arrowAngle; // pointing along the push direction
      shaft.material.opacity = Math.min(1, arrowT * 2);
    }
    renderer.render(scene, camera);
  };

  function resize() {
    const r = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(Math.max(1, r.width), Math.max(1, r.height), false);
    camera.aspect = r.width / Math.max(1, r.height);
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize); ro.observe(canvas.parentElement); resize();
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; last = now(); acc = 0; }); io.observe(canvas);
  camTarget.set(0, 0.09, 0);
  raf = requestAnimationFrame(onRaf);
  canvas.addEventListener("webglcontextlost", (e) => { e.preventDefault(); opts.onSlow?.(); });

  return {
    stats, push, roll, reset, goTo, pointerTo, refreshColors,
    get state() { return state; },
    pause() { running = false; },
    resume() { running = true; last = now(); },
    dispose() { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); renderer.dispose(); },
  };
}
