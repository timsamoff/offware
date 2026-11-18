# offware

Source for the home page at offware.io. It is one static HTML page, served as a Cloudflare Worker with static assets. The page is in `public/`, and `wrangler.jsonc` holds the Worker config.

Run locally with `npx wrangler dev`. Deploy with `npx wrangler deploy`.
