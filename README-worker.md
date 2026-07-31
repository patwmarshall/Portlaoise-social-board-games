This branch contains a Cloudflare Worker implementation of the basic Portlaoise Social Board Games site.

What was added

- src/worker.js - Cloudflare Worker (module) that implements:
  - GET /api/health -> { status: 'ok' }
  - GET /api/games  -> sample JSON list
  - GET / or /index.html -> serves the single-page HTML
- wrangler.jsonc - Wrangler configuration pointing to src/worker.js

How to run locally

- Install Wrangler (if you don't have it):
  npm install -g wrangler

- Run locally with Wrangler Dev:
  npx wrangler dev src/worker.js

- Publish to your account:
  npx wrangler publish

Notes

- This worker serves an in-memory list of games (no persistence). If you want persistence, we can wire up Durable Objects or KV.
- If you prefer to keep an Express API with a Node host (Render/Fly/Railway), tell me and I can provide that instead.
