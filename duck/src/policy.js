// Tiny MLP runtime for the exported Microduck policies (61-512-256-128-14, ELU).
// Weights come from export_policies.py; this replaces onnxruntime-web (15 MB wasm).
const DIMS = [61, 512, 256, 128, 14];

export async function loadPolicy(url) {
  const buf = new Float32Array(await (await fetch(url)).arrayBuffer());
  let o = 0;
  const take = (n) => buf.subarray(o, (o += n));
  const mean = take(DIMS[0]), std = take(DIMS[0]);
  const layers = [];
  for (let l = 0; l < 4; l++) layers.push({ n: DIMS[l], m: DIMS[l + 1], w: take(DIMS[l] * DIMS[l + 1]), b: take(DIMS[l + 1]) });
  const acts = DIMS.slice(1).map((n) => new Float32Array(n));
  const x0 = new Float32Array(DIMS[0]);
  return {
    run(obs) {
      for (let i = 0; i < x0.length; i++) x0[i] = (obs[i] - mean[i]) / std[i];
      let x = x0;
      for (let l = 0; l < 4; l++) {
        const { n, m, w, b } = layers[l], y = acts[l];
        for (let j = 0; j < m; j++) {
          let s = b[j];
          const r = j * n;
          for (let i = 0; i < n; i++) s += w[r + i] * x[i];
          y[j] = l < 3 && s < 0 ? Math.expm1(s) : s;
        }
        x = y;
      }
      return x;
    },
  };
}
