# Tarkbyte Design System

Design system and website redesign for **[tarkbyte.com](https://tarkbyte.com)**, the public site of Tarkbyte, a software consultancy that builds custom software, websites, mobile apps and AI agents (RAG, LangChain, LangGraph), and offers design & SEO, tech advisory, developer resources and career services.

The website's job is brand exposure and lead generation: every page leads to an enquiry by form (sent via WhatsApp), email or phone.

- **Contact used across the site:** tarkbyteofficial@gmail.com · 93109 61150 (WhatsApp `919310961150`)
- **Socials:** LinkedIn, GitHub, Instagram, Facebook (Facebook URL still a placeholder)

---

## This repository

| Path | What it is |
|---|---|
| `index.html` | Homepage (design v6d) |
| `labs.html` | Tarkbyte Labs |
| `services/*.html` | 7 service pages |
| `site-v6d.css`, `v5-sections-v6d.css` | Homepage styles |
| `inner-v6d.css` | Labs and service page overrides (v6d palette) |
| `site.js` | Enquiry form → WhatsApp, reveals, card links |
| `beams.js` | Hero and footer beams |
| `ripple-v6b.js` | Water ripple (homepage) |
| `assets/logo.svg` | Tarkbyte mark |
| `DEPLOY-HOSTINGER-ELEMENTOR.md` | Step-by-step WordPress + Elementor guide |

Open `index.html` in a browser to preview. No build step.

## Contents

1. [Quick start](#quick-start)
2. [Project structure](#project-structure)
3. [Website versions](#website-versions)
4. [Pages and sections](#pages-and-sections)
5. [Brand foundations](#brand-foundations)
6. [Interactions and motion](#interactions-and-motion)
7. [Enquiry form and WhatsApp](#enquiry-form-and-whatsapp)
8. [Design system components](#design-system-components)
9. [Deploying to Hostinger + WordPress + Elementor](#deploying-to-hostinger--wordpress--elementor)
10. [Content to confirm before launch](#content-to-confirm-before-launch)
11. [Changelog](#changelog)

---

## Quick start

No build step. Everything is plain HTML, CSS and JavaScript.

1. Open `ui_kits/website/index-v6b.html` in a browser (current working version).
2. Inner pages: `ui_kits/website/labs.html` and `ui_kits/website/services/*.html`.
3. The right section rail appears only at **1200px wide and above**. View on a laptop or desktop to see it.

External resources loaded at runtime: Google Fonts, Phosphor Icons (unpkg), Unsplash images for the industries section.

---

## Project structure

```
/
├── README.md                  This file
├── styles.css                 Design system entry (imports colors_and_type.css)
├── colors_and_type.css        Design tokens: colours, fonts, type scale
├── thumbnail.html             Project tile
├── assets/logo.svg            Tarkbyte mark
├── components/
│   ├── Button/                Reusable button (jsx + d.ts + card)
│   └── SectionHeading/        Label + heading + italic accent
├── preview/                   Token and pattern cards (colours, type, spacing, inputs…)
└── ui_kits/website/
    ├── index-v6b.html         ← current homepage
    ├── labs.html              Tarkbyte Labs product page
    ├── services/              7 service detail pages
    ├── site.js                Shared: reveals, card links, enquiry form → WhatsApp
    ├── beams.js               Animated light beams (hero + footer)
    ├── ripple-v6b.js          Glass water ripple on section entry (v6b only)
    ├── site-v6b.css           v6b styles
    ├── v5-sections-v6b.css    v6b styles for Approach / Resources / FAQ / Contact
    ├── site.css               Shared styles for v4, labs and service pages
    ├── v5/v5.css              v5 stylesheet
    ├── archive/               Older homepages kept for reference
    └── site-*.css             Colour backups (gold, red, lime, sun, royal)
```

---

## Website versions

| File | Status | Summary |
|---|---|---|
| `index-v6b.html` | **Current** | Indigo slate (`#5B6F92` + `#82C8E5` tint, darkened, 20% midnight-purple), glossy floating nav, glass water ripple |
| `index-v6.html` | Option | Charcoal slate version of v4 |
| `index-v5.html` | Option | Redesign following the *landing-page-design* and *unslop* skills: Geist type, ink + orange, node signature, ps-doc-agent hero board |
| `index-v4.html` | Base | Deep midnight, orange accent, labs, portfolio, form, service pages. v5's Approach/Resources/FAQ/Contact ported in |
| `index-v3.html` | Archive | ArtCraft-inspired card grid and first right rail |
| `index-v2.html` | Archive | Fit cards, process timeline, FAQ |
| `index.html` | Archive | First redesign (v1) |

v6 and v6b are homepage-only. Labs and service pages currently use the v4 stylesheet (`site.css`).

---

## Pages and sections

### Homepage (v6b)

| # | Section | Notes |
|---|---|---|
| — | Hero | Headline, CTAs, stats, live **ps-doc-agent** run (question → retrieve → grade → cited answer), beams background |
| 01 | For you | Four problems with "With Tarkbyte" answers |
| 02 | Services | Featured Agentic AI card + 6 service cards. Card click opens the service page; "Get started" opens the form |
| 03 | Industries | School management, retail & shop systems, hospital & clinic software |
| 04 | Our Labs | Six products, links to `labs.html` |
| 05 | Portfolio | Eight delivered projects |
| 06 | Why us | Four principles |
| 07 | Reviews | Client quotes |
| 08 | Approach | Four capability cells + five horizontal steps |
| 09 | Resources | Developer resources and career services |
| 10 | FAQ | Filterable by General / Projects / Support |
| 11 | Contact | Business and professional paths, email, phone, socials incl. WhatsApp |

### Inner pages

- `labs.html`: Edubyte, Aaharbyte, ps-doc-agent, Slide Automation, Inventory Management, Zig Zag. Each with features, status, demo form and WhatsApp.
- `services/`: `agentic-ai`, `web-app-development`, `software-solutions`, `design-seo`, `tech-advisory`, `developer-resources`, `career-services`. Each has what's included, tools, related labs, other services and a contact band. Agentic AI also covers cloud / on-premise / hybrid deployment.
- Every inner page has **Home** as the first nav link.

---

## Brand foundations

### Colour (v6b)

| Role | Value |
|---|---|
| Base slate | `#5B6F92` mixed with 10% `#82C8E5`, then darkened ~26% with a 10% blue and 20% midnight-purple (`#24165C`) overlay |
| Paper (light sections) | `#F3F1EB` / white |
| Ink on light | `#0A1024` |
| Accent | Orange `#FF8A00` (buttons, dots, lines) |
| Accent text on dark | Pale orange `#FFD3A1` (orange text fails contrast on mid-tone blue) |
| Rail on light sections | Dark slate navy `#233A66` |
| WhatsApp | `#128C4B` (hover `#0E7A40`), icon `#25D366` |

Rules: text meets 4.5:1 against its background; orange is never used for body text on blue.

### Type

| Use | Font |
|---|---|
| Display headings (v4/v6 sections) | DM Serif Display |
| Body | Plus Jakarta Sans |
| Labels, numbers | IBM Plex Mono |
| Ported v5 sections, industry titles | Geist / Geist Mono |

Bodoni Moda was dropped in v1 because its hairlines vanished on dark backgrounds.

### Shape and lines

- 1px hairlines; card grids use shared hairline cells.
- Rounded 12–16px for v5-style cards and the glossy nav; square edges elsewhere.
- Signature detail: small square **node** on a thin line (rail, steps, bullets).

---

## Interactions and motion

| Feature | Behaviour |
|---|---|
| Top nav | Full links on the hero. After scrolling past the hero headline, becomes a glossy glass pill and the links hand over to the right rail |
| Right rail (≥1200px) | Past sections stack at top, current section large, upcoming at bottom. Ruler split into 5 bands, each tinted by the background behind it (orange on blue, navy on white) |
| Hero board | ps-doc-agent run animates node by node, "Run again" replays |
| Beams | Drifting light beams in the hero and footer, paused off-screen |
| Water ripple | Plays once when entering Services, Labs, Why us, Approach or FAQ (from the top edge scrolling down, bottom edge scrolling up). Not on hero, footer or white sections |
| Reveals | Fade-up on scroll |
| Easing | `cubic-bezier(.22,1,.36,1)` throughout |

All motion respects `prefers-reduced-motion`.

---

## Enquiry form and WhatsApp

`site.js` injects one modal used by every **Get a quote**, **Start a project**, **Get career help** and **Get started** button (`data-form="quote|project|career"`, optional `data-service="…"`).

- Project / quote: name, phone, email, service, timeline, budget (₹), message.
- Career: help needed, experience, target role, message.
- On submit, validates required fields, then opens `wa.me/919310961150` with all details prefilled. The visitor presses send in WhatsApp.
- No backend or plugin required.

---

## Design system components

| Component | Path | Purpose |
|---|---|---|
| `Button` | `components/Button` | Solid / outline, optional arrow |
| `SectionHeading` | `components/SectionHeading` | Label, heading, italic accent |

Preview cards in `preview/` cover colours, pairings, type, spacing, frames, inputs and service rows. Global tokens live in `colors_and_type.css`, imported by `styles.css`.

---

## Deploying to Hostinger + WordPress + Elementor

The site is compatible: plain HTML/CSS/JS, no server code.

**Recommended: Elementor Canvas pages**

1. In Hostinger File Manager, upload the CSS and JS files to `wp-content/uploads/tarkbyte/`.
2. Install **WPCode** and add a header snippet that loads the fonts, stylesheets and scripts.
3. Create each page in WordPress with Template → **Elementor Canvas** (removes theme header/footer).
4. Add one **HTML widget** per section and paste its markup.
5. Rewrite internal links from `.html` to WordPress slugs (`/labs/`, `/services/agentic-ai/`).
6. Replace Unsplash images with your own Media Library uploads.

**Alternatives:** a custom WordPress theme `.zip` (cleanest, code-edited), or a native Elementor rebuild (fully drag-and-drop, but rail, beams and ripple need add-ons or are lost).

**Before packaging:** merge the layered v6b colour overrides into one clean stylesheet and bring the Labs and service pages to the v6b look.

---

## Content to confirm before launch

- [ ] Facebook page URL (currently `facebook.com`)
- [ ] Labs product screenshots (placeholders on `labs.html`)
- [ ] Hero stats (50+ projects, 10+ industries, 7 services, 24h): confirm they are accurate
- [ ] Review quotes, especially "30% salary increase"
- [ ] Labs and service page copy, tech stacks, ParkCheck and Zig Zag details
- [ ] Budget ranges in the form (₹)
- [ ] Privacy policy and Terms pages
- [ ] Real hero / industry photography (currently stock)

---

## Changelog

- **v6b**: slate + `#82C8E5` tint, darkened with midnight-purple; glossy nav; water ripple; rail text 2px smaller with navy on white.
- **v6**: greyish blue, then charcoal slate version of v4.
- **v5**: full redesign per *landing-page-design* + *unslop* skills; its Approach, Resources, FAQ and Contact later ported into v4.
- **v4**: labs, portfolio, WhatsApp form, service pages, Home link on inner pages; accents moved gold → red → lime → sun yellow → orange; backgrounds royal → deep midnight.
- **v3**: ArtCraft-inspired card grid, numbered labels, right rail.
- **v2**: Masai-inspired fit cards, process timeline, FAQ.
- **v1**: midnight blue redesign; Bodoni replaced with DM Serif Display.
