// Bundles duck/src/main.js + three + MuJoCo glue into site/assets/duck/duck.js and copies mujoco.wasm.
import { build } from 'esbuild';
import fs from 'node:fs';
const OUT = new URL('../site/assets/duck/', import.meta.url).pathname;
await build({
  entryPoints: ['src/main.js'], bundle: true, format: 'esm', minify: true, target: 'es2022',
  outfile: OUT + 'duck.js', legalComments: 'none',
  // mujoco's emscripten glue probes node builtins; the browser never takes those paths
  external: ['module', 'fs', 'path', 'url', 'node:*'],
});
fs.copyFileSync('node_modules/@mujoco/mujoco/mujoco.wasm', OUT + 'mujoco.wasm');
console.log('duck.js', (fs.statSync(OUT + 'duck.js').size / 1024).toFixed(0) + ' KB');
