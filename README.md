# UnrealTalent (Astro)

Marketing homepage for **UnrealTalent** — static Astro site with SEO, accessibility helpers, and Netlify-hosted local video embeds.

- **Layout inspiration notes:** `docs/inspiration-wearedw-layout-review.md`
- **Agent / standards:** `AGENTS.md`

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

Set **`PUBLIC_SITE_URL`** in the environment for production builds so sitemaps, canonical URLs, and OG absolute URLs emit (see `.env.example`).

More: [Astro documentation](https://docs.astro.build).
