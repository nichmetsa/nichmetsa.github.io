# Things I Like

A personal, no-ads, no-tracking website. Plain HTML/CSS/JS, no build step.

## Make it yours
1. Open `content.js`. Edit `SITE` (name, bio, links) and the `POSTS` list.
2. Put your photo at `assets/me.jpg` and any post images in `assets/`.
3. To add a post, copy an object in `POSTS`, give it a unique `slug`, and fill in the fields.

## Preview locally
Double-click `index.html`, or run `python3 -m http.server` and open http://localhost:8000.

## Publish on GitHub Pages
1. Create a new repository on GitHub (for `https://USERNAME.github.io`, name it exactly `USERNAME.github.io`).
2. Upload all these files to it (or `git add . && git commit -m "first version" && git push`).
3. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**.
4. Wait a minute; your site is live.
