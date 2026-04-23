# UnrealTalent — agent and contributor handbook

This document defines **repository layout**, **coding standards**, and expectations for **accessibility**, **reusability**, and **SEO**. Automated assistants and humans should follow it when changing this project.

## Tech stack

- **Astro** (static output by default), **TypeScript** where scripts are used.
- Deploy: static host (e.g. Netlify / Cloudflare Pages); build output is `dist/`.

---

## Repository layout

| Path | Purpose |
|------|--------|
| `src/pages/` | **Routes only.** Thin files: import layout + sections, pass **SEO props** into `BaseLayout`. No large markup blobs duplicated across pages. |
| `src/pages/robots.txt.ts` | **Dynamic `robots.txt`:** allows `Allow` / `Sitemap` line when `PUBLIC_SITE_URL` is set at build time. Do not add a competing `public/robots.txt`. |
| `src/layouts/` | **Document shells:** `<html>`, shared `<head>` (SEO, OG, Twitter, canonical), skip link, global CSS import, site-wide **accessibility options** panel. |
| `src/components/` | **Reusable UI:** **`layout/`** (e.g. `SiteHeader`, `SiteFooter`), **`sections/`** (e.g. `Hero`, `StatsGrid`, `AboutBand`), **`Button.astro`**, **`Video.astro`** (local/self-hosted video player wrapper). One obvious responsibility per file. |
| `src/data/` | **Structured homepage / marketing data** (stats, roster arrays) until Content Collections or a CMS replace it. |
| `src/components/seo/` | **Structured data** and other SEO-only fragments (`SiteJsonLd.astro`, future breadcrumbs, etc.). |
| `src/styles/` | **Shared CSS** — `global.css` defines **brand tokens** (Cinder `#040407`, Scampi `#6a65b1`, Mulled Wine `#46446e`), focus, skip link, motion. `page.css` is for full-bleed homepage bands. Prefer scoped `<style>` in `.astro` when styles are component-local. |
| `public/` | **Static assets** copied verbatim: `favicon.svg`, images, `_headers`. **No** `robots.txt` here (use the endpoint above). |
| `astro.config.mjs` | Reads **`PUBLIC_SITE_URL`** at build time; when set, enables **`site`**, **`@astrojs/sitemap`**, and absolute URLs in layout. |

**Naming:** use **PascalCase** for `.astro` components (`SiteHeader.astro`). Use **lowercase** with hyphens for page routes if you add folders (`src/pages/about/index.astro` → `/about`).

**Environment:** copy `.env.example` to `.env` locally. In production, set **`PUBLIC_SITE_URL`** to the canonical origin (no trailing slash), e.g. `https://www.unrealtalent.com`.

---

## Coding standards (general)

- **Match existing patterns** in the repo before introducing new abstractions.
- **Prefer HTML-first** in `.astro`; add client JS only with `client:*` when interaction requires it.
- **Type `Props`** in the frontmatter of components that accept props (`interface Props { ... }`).
- **No secrets** in the repo; use environment variables and host dashboards for keys.
- **Keep diffs focused** on the requested change; avoid unrelated refactors.

---

## Accessibility (a11y)

Target **WCAG 2.2 Level AA** for new UI. Treat **AAA-style targets** (e.g. larger hit areas) as the default for primary controls where it does not harm layout.

### Global behavior (implemented)

- **`src/styles/global.css`:** skip-link focus, `:focus-visible` ring, `prefers-reduced-motion`.
- **`BaseLayout.astro`:** **skip link** to `#main-content` on every page.
- Every page **must** expose **`<main id="main-content">`** (or equivalent id) as the skip target.

### Buttons and links (`Button.astro`)

- Use **`Button.astro`** (or equivalent semantics) for actions: **native `<button>`** or **`<a href>`** with shared styling — never `<div onclick>`.
- **Minimum target size:** keep controls at least **44×44 CSS px** for primary tap/click targets (exceeds WCAG 2.2 **2.5.8** minimum target size while staying easy to scan).
- **Contrast:** default variants aim for **4.5:1** or better for text on fills; verify when changing palette.
- **Keyboard:** full keyboard support via native elements; **`aria-busy`** when `busy` is true.
- **Icon-only controls:** the visible label must be **`aria-label`** (or visible text); decorative icons need **`aria-hidden="true"`** on the graphic.
- **Disabled actions:** use **`disabled`** on `<button>`. Do not ship “disabled” `<a href>`; remove `href` or use `<button>` instead.

### Structure and semantics

- **One `h1` per page**; logical heading order (`h1` → `h2` → `h3`); do not skip levels for styling.
- Prefer **`header` / `nav` / `main` / `footer` / `section` / `article`** as appropriate.
- **Landmarks:** do not duplicate `banner`/`navigation` roles without reason; keep **one** `main`.

### Keyboard and focus

- **Do not remove** `:focus-visible` styling without replacing it with something **at least as visible**.
- **Modals/menus:** trap focus, restore focus on close, dismiss with **Escape** when expected.
- **No keyboard traps** in custom widgets.

### Images and media

- Meaningful images: descriptive **`alt`**. Decorative: **`alt=""`**.
- Meaningful **SVG controls:** expose name via **`aria-label`** / visible text / `<title>` as appropriate.

### Netlify-hosted video

- Use **`Video.astro`** as the local video wrapper. Pass a public asset path via **`src`** (e.g. `/videos/partner-01.mp4`) and a meaningful **`title`**.
- Store videos in **`public/videos/`** so Netlify serves them as static assets.
- Default setup uses **native `<video controls>`** so the browser/player overlay handles play/pause and transport UI.
- Prefer **`preload="metadata"`** and `loading="lazy"` below the fold. Avoid autoplay with sound; pair autoplay with muted when truly needed.
- Add a visible **`caption`** and/or on-page copy when the video conveys information users must not miss (complements WCAG for time-based media where applicable).
- If you need fully custom controls later, create a dedicated wrapper component and keep `Video.astro` as the simple native-controls baseline.

### Forms (when added)

- Associate **labels** with controls; errors with **`aria-invalid`** and **`aria-describedby`**.

### Motion

- **CSS:** honor **`prefers-reduced-motion`** (see `global.css`).

---

## Reusability

### Components

- **Extract** repeated chunks into `src/components/`.
- **Props** stay small; prefer **slots** over boolean explosion.
- **Colocate** styles in the same `.astro` file unless shared — then use `src/styles/`.

### Layouts

- **All** document `<head>` SEO tags that repeat per page belong in **`BaseLayout`** (or shared partials it imports). Pages pass **title**, **description**, optional **`ogImagePath`**, **`robots`**, **`canonicalPath`**, **`twitterSite`**.

### Content

- Prefer **Content Collections** when structured content grows.

---

## SEO — standards-first checklist

Align with **[Google Search Essentials](https://developers.google.com/search/docs/essentials)** (helpful, reliable, people-first content) and technical crawlability. Use external validators before launch: **Rich Results Test**, **Search Console URL Inspection**, **Lighthouse** (SEO + Performance categories).

### Build-time configuration (required for production)

1. Set **`PUBLIC_SITE_URL`** to the **canonical HTTPS origin** (no trailing slash) in the host environment (see `.env.example`, `netlify.toml` notes).
2. Confirm `npm run build` logs **`[@astrojs/sitemap]`** and that **`dist/sitemap-index.xml`** exists.
3. Confirm **`dist/robots.txt`** includes **`Sitemap: …/sitemap-index.xml`** (only generated when `PUBLIC_SITE_URL` was set for that build).

### Every public, indexable page

- **`<title>`:** unique, descriptive, ≤ ~60 characters where possible; include brand last (e.g. `Services — UnrealTalent`).
- **`meta name="description"`:** unique, natural language, **~150–160 characters**; summarize the page, do not keyword-stuff.
- **`link rel="canonical"`:** absolute URL pointing to the preferred URL (handled in **`BaseLayout`** when `site` is configured).
- **`meta name="robots"`:** default `index, follow`; use `noindex` for staging, thank-you pages, or duplicates — pass **`robots`** prop from the page.

### Open Graph and social

- **`og:title`**, **`og:description`**, **`og:url`**, **`og:type`** (`website` or `article`), **`og:locale`** (default `en_US` in layout; extend for multilingual).
- **`og:image`:** add **`ogImagePath`** (root-relative, e.g. `/og/default.png`) when a default share image exists. Use **1200×630** or larger raster, **under 8MB**, **HTTPS absolute URL** in output. If no image yet, layout omits `og:image` and uses **`twitter:card` = `summary`** (not `summary_large_image`).
- **Twitter:** align **`twitter:title` / `twitter:description`** with OG; set **`twitterSite`** prop (handle without `@`) when the brand has an account.

### Structured data

- **`SiteJsonLd.astro`:** emits **Organization** + **WebSite** JSON-LD when `site` is set. Extend with **BreadcrumbList**, **FAQPage**, etc. only when content matches **[schema.org](https://schema.org)** and Google’s documented eligibility.

### Crawling and duplicates

- **One URL** per resource: enforce canonicals on alternate paths (www vs apex, trailing slash policy — pick one and redirect at the host).
- **Pagination / filters:** use `noindex` or canonical to the main view when appropriate (productized later).

### Internationalization (future)

- Add **`hreflang`** alternates only when localized pages exist; keep **`html lang`** accurate per template.

### Performance and Core Web Vitals (SEO-adjacent)

- **LCP:** prioritize hero image dimensions, `fetchpriority="high"` only for the true LCP candidate, modern formats (**AVIF/WebP**).
- **CLS:** explicit `width`/`height` (or aspect-ratio) on images and embeds.
- **INP:** minimize long tasks and unnecessary client JS; prefer static HTML.
- **Lazy-load** non-LCP images (`loading="lazy"` / Astro image patterns).

### Optional later

- **`llms.txt`** or similar only if the business asks for explicit LLM-facing policy; not required for classic SEO.

---

## Verification before merge

- `npm run build` succeeds **with** `PUBLIC_SITE_URL` set (production-like), and `dist/sitemap-index.xml` + `robots.txt` were inspected at least once after a structural change.
- **Keyboard:** Tab through new UI; verify **skip link**, **focus order**, and **visible focus**.
- **Buttons:** confirm targets, disabled state, and **`aria-label`** on icon-only controls.
- **SEO:** view page source — **title**, **meta description**, **canonical**, **OG/Twitter** tags match the page intent; run **Lighthouse SEO** on key templates when possible.

---

## Where Cursor loads rules

- **`.cursor/rules/*.mdc`:** short, always-on reminders for this workspace.
- **`AGENTS.md` (this file):** full detail and rationale.

When in doubt, prefer **accessible, semantic, static HTML** and **small reusable components**.
