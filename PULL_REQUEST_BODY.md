# Cloudflare Worker PR: Merge cloudflare-worker into main

This PR merges the cloudflare-worker branch into the repository's default branch (main). It contains:

- src/worker.js: Cloudflare Worker implementation serving the single-page app and a small API.
- wrangler.jsonc: Wrangler configuration (main: src/worker.js).
- README-worker.md: Notes on running locally and publishing.

Why merge

- Adds a Cloudflare Worker deployment option for a serverless, globally-distributed site.
- Allows immediate testing via Wrangler dev and publishing with `npx wrangler publish`.

Notes

- The worker stores games in memory; if you want persistence, consider KV or Durable Objects.
- I did not change the existing npm-template branch; this PR merges only the cloudflare-worker branch into main.
