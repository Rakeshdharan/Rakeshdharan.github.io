# Portfolio vault

This vault **is** the content of https://rakeshdharan.github.io. Edit notes here, push to GitHub, and the site rebuilds itself.

## What gets published
| Folder | Becomes |
|---|---|
| `Site/Profile.md` | Hero, About, contact links |
| `Projects/` | Work list + one page per project (only `status: published`) |
| `Experience/` | Experience (`kind: work`) and Education (`kind: education`) |
| `Hackathons/` | Hackathons section (only `status: published`); `project:` links to a Projects note |
| `Site/Skills.md` | Skills — `##` = group, `>` = plain explanation, list = tools |
| `Site/Recognition.md` | Patents, publications, awards |
| `Site/Early work.md` | "Earlier" list |
| `Attachments/` | Images & videos, served at `/media/…` |

**Never published:** `Private/`, `Templates/`, this note, and anything inside `%% … %%`.

## Adding a project
1. Command palette → *Templates: Insert template* → **Project** (or duplicate an existing note).
2. Fill the properties. `plain` = one or two sentences a non-engineer understands. `technical` = the version for engineers. Visitors switch between them with the *Everyone / Engineers* toggle.
3. Drop a video/GIF into `Attachments/` and set `video: my-clip.mp4` (or a full https URL). Optional `poster:` image.
4. Set `status: published`, `featured: true` to show it in the top three.
5. Embeds like `![[clip.mp4]]` and links like `[[Other project]]` work on the site too.

## Adding a hackathon
Templates → **Hackathon**, fill `title`, `date`, `org`, `result`, `plain`/`technical`, optional `project: Note name` and `links: - Label | https://url`, then set `status: published`. Bullets in the body show in Engineers mode.

## Publishing an update
Edit in Obsidian, then `git add . && git commit -m "update" && git push` — the site rebuilds in ~1 min. You can also edit any `.md` directly on github.com (pencil icon) and commit; that triggers the same deploy.

## Media tips
- Keep clips short (10–30 s), no audio, under ~5 MB. Compress with:
  `ffmpeg -i in.mov -an -vf "scale=960:-2" -c:v libx264 -crf 28 -movflags +faststart out.mp4`
- Show the robot doing the task first, explain afterwards.

## Preview locally
From the repo root: `node scripts/build.mjs && node scripts/serve.mjs` → http://localhost:4321
