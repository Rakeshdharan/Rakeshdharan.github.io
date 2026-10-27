# rakeshdharan.github.io

Robotics portfolio of **Rakesh Dhamodharan**, built from an Obsidian vault by a dependency-free Node script.

- `vault/`: the Obsidian vault and **all site content**. Open this folder in Obsidian (*Open folder as vault*).
- `scripts/build.mjs`: turns the vault into static HTML in `dist/`.
- `site/assets/`: CSS, JS (Everyone/Engineers toggle, filters, inverse-kinematics arm, the fallback hero) and favicon.
- `site/assets/duck/`: hero robot duck: MuJoCo WASM + exported RL policies (`policies/*.bin`) + model. The bundle `duck.js` is built from `duck/` (`cd duck && npm install && npm run build`); the site build only copies it. Falls back to the arm when WASM/WebGL2 is missing, on Save-Data/slow links, with reduced motion, on load failure or sustained low frame rate (`?duck=0` forces the fallback). Model and policies: [00make/microduck-arena](https://github.com/00make/microduck-arena) (MIT, see `duck/LICENSE.microduck-arena`); `duck/export_policies.py` converts the ONNX policies to `.bin`.
- `.github/workflows/deploy.yml`: builds and deploys to GitHub Pages on every push and nightly.

## Preview locally
Requires Node 20+. Nothing to install.
```bash
node scripts/build.mjs && node scripts/serve.mjs   # http://localhost:4321
```

## Publish to GitHub Pages (one-time)
```bash
cd ~/Desktop/portfolio
git init -b main
git add .
git commit -m "New portfolio"
git remote add origin https://github.com/Rakeshdharan/Rakeshdharan.github.io.git
git push -f origin main        # -f replaces the old 2020 site
```
Then on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The first deploy takes about 1–2 minutes. Progress shows under the **Actions** tab.

## Updating
Edit notes in Obsidian, then run `git add . && git commit -m "update" && git push`.
See `vault/Home.md` for how each folder maps to the site.

## Privacy
`.gitignore` keeps every `*.pdf` (your CV and LinkedIn export contain your address, phone and date of birth), `vault/Private/` and Obsidian workspace files out of git.
