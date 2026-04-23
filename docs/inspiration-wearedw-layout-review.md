# Layout & structure review — DW Entertainment (`wearedw.com`)

**Source (reviewed):** [https://wearedw.com/en](https://wearedw.com/en)  
**Purpose of this document:** Capture **information architecture**, **section flow**, and **repeatable layout patterns** to use as **structural inspiration** for the UnrealTalent site—not to copy assets, copy, or proprietary design files.

**Method note:** Findings are derived from the page’s public content outline (headings, blocks, and navigation). A live DOM/CSS inspection in the browser would still be useful later for spacing, motion, breakpoints, and exact component boundaries.

---

## 1. Site positioning (what the page is doing)

- **Category:** Long-form **agency / talent management** marketing homepage (single scroll experience with anchor-friendly sections).
- **Primary promise:** Scale and credibility (“power of influence”) backed by **large metrics** and **partner logos**.
- **Conversion paths:** **Meet our talent** (hero), **Careers** (secondary CTA), **Contact** (form for business; separate channel for PR/press).

Useful takeaway for UnrealTalent: lead with **one clear value line**, then **proof** (numbers or outcomes), then **depth** (who you are / services), then **people or work samples**, then **trust** (logos or partners), then **contact**.

---

## 2. Global chrome

| Element | Role |
|--------|------|
| **Brand mark** | Logo repeated (header + likely mobile menu / footer context in full build). |
| **Primary navigation** | Home, Who we are, Our services, Careers, Contact — **short, action-oriented** labels; implies **in-page anchors** or shallow routes. |
| **Language** | **EN / ES** — explicit locale switch (separate URLs or toggle). |

**Layout implication:** Expect a **persistent header** (sticky or fixed on scroll) with limited nav items and a **locale** control—common pattern for international talent brands.

---

## 3. Section order (top → bottom)

This is the **scroll narrative** as reflected in the page content.

1. **Hero** — Main headline + primary CTA (“Meet our talent”).
2. **Metrics band** — Four **stat blocks** (campaigns, network subscribers, monthly views, monthly interactions) with **large numerals** and short labels.
3. **Who we are** — Section title repeated visually (often used in editorial sites as a **scroll / design motif**), then:
   - **Our mission** (paragraph)
   - **Our vision** (paragraph)
   - **Our long-term partners** (intro copy)
   - **Partner logo strip** (entertainment industry names: CAA, Google, IMG, WME, etc.)
4. **Our services** — Section title repeated, then:
   - **Talent management** — Intro paragraph explaining the offer.
   - **Talent roster** — **Many cards**: each card pairs **talent name** (heading level ~`h3`) with **category tags** (e.g. comedy, travel, lifestyle). Visually this is typically **image-forward cards** in a **grid or horizontal scroll** on smaller screens.
5. **Brand partnerships & marketing agency** — Intro + “secret weapon” line + **second logo cloud** (brands: Adidas, P&G, Netflix, etc.).
6. **Sister companies** — **LAB** and **ARCO** (sub-brands or group entities)—compact **secondary logo / link row**.
7. **Careers** — Repeated section title, short pitch, **“View openings”** CTA.
8. **Contact** — Repeated section title, **map / visual**, **business contact form** (name, position, email, company, message, send), **disclaimer row** for PR/press (email + phone).
9. **Footer** — Copyright, **Privacy notice** link.

---

## 4. Recurring layout patterns (to reuse conceptually)

### 4.1 “Editorial” section headers

- The same **section title** (e.g. “Who we are”, “Our services”, “Careers”, “Contact”) appears **multiple times** in the content flow. On the live site this is often implemented as **oversized type**, **sticky text**, or **parallax layers**, not duplicate copy for screen readers.

**For UnrealTalent / a11y:** Use **one real `h2` per section** in the DOM; replicate **visual** repetition with CSS/backgrounds only, or use `aria-hidden` decorative duplicates only if they are truly decorative and do not confuse assistive tech (prefer avoiding duplicate headings in the accessibility tree).

### 4.2 Hero + immediate proof

- **Headline** → **one primary button** → **four KPIs** without scrolling through long copy first.

**Takeaway:** Put **trust or scale** early if the brand depends on credibility.

### 4.3 Stat grid

- **Four columns** (desktop) / stacked or 2×2 (tablet) / single column (mobile)—classic **“bento” or grid”** for metrics.

### 4.4 Two-column “pillars” (Mission / Vision)

- Short **paired statements** after the “Who we are” intro—good model for **Mission | Vision** or **Problem | Solution** blocks.

### 4.5 Logo cloud (two distinct uses)

1. **Industry / agency partners** (credibility in the talent ecosystem).  
2. **Brand advertisers** (credibility for campaign work).

**Takeaway:** Split **“partners we work with”** vs **“brands we’ve activated”** if both matter; avoids one noisy mixed strip.

### 4.6 Card-based roster

- **Image**, **tags** (chips), **name** — repeated **20+** times. This maps cleanly to **Astro content collections** or a **data file** driving a responsive grid.

### 4.7 Services split

- **Talent management** (people) vs **Brand partnerships & marketing** (campaigns)—clear **dual practice** layout: two chapters with distinct copy and possibly distinct background treatment.

### 4.8 Careers as a lightweight funnel

- One paragraph + **single CTA** to an external ATS or careers subdomain—low friction.

### 4.9 Contact: dual intent

- **Form:** “business queries only” (filters spam / wrong channel).  
- **Alternate contact:** PR/press email and phone **outside** the form.

**Takeaway:** Good pattern when **sales** and **media** must not share one inbox.

---

## 5. Content & component inventory (Astro-oriented)

| Approx. component | Notes |
|------------------|--------|
| `SiteHeader` | Logo, `nav`, lang switch. |
| `Hero` | `h1`, supporting line (if any), primary CTA. |
| `StatsGrid` | 4× stat with number + label (`h2`/`h3` hierarchy per AGENTS). |
| `SectionHeading` | Optional decorative variant vs accessible single title. |
| `RichTextBlock` | Mission, vision, service intros. |
| `LogoStrip` | Props: `logos[]`, `title` optional, `variant` (partners vs brands). |
| `TalentCard` | Image, tags, name, link to profile or modal. |
| `SisterCompanies` | Small sub-brand row. |
| `CareersTeaser` | Copy + link button. |
| `ContactSplit` | Form + aside contact + optional map/static visual. |
| `SiteFooter` | Legal links, copyright. |

---

## 6. UX & visual tendencies (inferred)

- **Long single page** with strong **vertical rhythm**: big type, full-width bands, alternating **dark/light** or **image/full-bleed** sections (typical for this category—confirm in browser).
- **High density of talent cards** → needs **pagination**, **lazy media**, or **“load more”** for performance if UnrealTalent roster grows similarly.
- **Social proof first** (stats + logos) before deep service copy—reduces bounce for cold traffic.

---

## 7. SEO & metadata (observations only)

- Title pattern: **Brand | short tagline** (“DW Entertainment | Connecting with your audience”)—useful template for UnrealTalent’s `<title>` + `og:title` alignment.
- UTM-heavy sharing URLs (as in your link) are normal for social; **canonical** should still point to a **clean** URL without query noise.

---

## 8. Risks & limits of this review

- No **Lighthouse**, **CLS/LCP**, or **keyboard** audit was run here.
- **Exact** grid breakpoints, animation, video usage, and **CMS** are unknown from text extraction alone.
- **Legal:** Do not reuse DW’s copy, logos, or images; only **patterns** and **section types**.

---

## 9. Suggested mapping to UnrealTalent (next build steps)

1. Lock a **section order** similar to: **Hero → proof (stats or logos) → about → services → roster/cards → partners → CTA (careers or “work with us”) → contact → footer**.  
2. Implement **one semantic `h1`**, then **`h2` per major band**, card names as **`h3`** inside each subsection.  
3. Replace **dual logo strips** with UnrealTalent’s real partners when available.  
4. Use **content collections** (or JSON) for any **repeating card** roster early so the page does not become unmaintainable.  
5. For **bilingual** later: mirror DW’s **EN/ES** pattern with `hreflang` and separate routes or a clear locale switch (see `AGENTS.md`).

---

*End of review.*
