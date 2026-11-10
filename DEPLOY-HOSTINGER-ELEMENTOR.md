# Deploying the Tarkbyte website on Hostinger + WordPress + Elementor

Target design: `index-v6d.html` (homepage), `labs.html`, `services/*.html`.
Method: **Elementor Canvas pages + HTML widgets**. The design stays pixel-exact and all animations keep working.

Time needed: about 1–2 hours for the homepage, 10 minutes per inner page.

---

## Before you start

You need:

- Hostinger hosting with WordPress installed (hPanel → Websites → your site → **WordPress**)
- Elementor (free is enough) installed and activated
- Admin login to WordPress
- These files from this project:

| File | Used on |
|---|---|
| `site-v6d.css` | Homepage |
| `v5-sections-v6d.css` | Homepage |
| `site.css` | Labs and service pages |
| `site.js` | All pages (enquiry form → WhatsApp) |
| `beams.js` | All pages (hero and footer beams) |
| `ripple-v6b.js` | Homepage (water ripple) |

> **Important:** the current HTML files are built as standalone pages. Elementor wraps every widget in extra `<div>`s, which breaks a few layout rules (the right side panel's colour switching and the spacing next to it). Ask for the **WordPress-ready build** first. It fixes those rules, rewrites `.html` links to WordPress addresses, and splits each page into numbered paste-ready blocks. The steps below assume you have it.

---

## Step 1 — Prepare WordPress

1. **Use a light theme.** Appearance → Themes → Add New → install and activate **Hello Elementor**. It adds no styles of its own.
2. **Switch off Elementor's global styles** so they don't override the design:
   - Elementor → Settings → General → tick **Disable Default Colors** and **Disable Default Fonts** → Save.
   - Elementor → Settings → Features → set **Optimized DOM Output** to **Active**. This removes some wrapper divs.
3. **Set the address format.** Settings → Permalinks → **Post name** → Save, so pages get addresses like `/labs/`.

## Step 2 — Upload the CSS and JS files

1. hPanel → Websites → **File Manager**.
2. Open `public_html/wp-content/uploads/`.
3. Create a folder named `tarkbyte`.
4. Upload the six files from the table above into `public_html/wp-content/uploads/tarkbyte/`.
5. Check one file opens in the browser:
   `https://tarkbyte.com/wp-content/uploads/tarkbyte/site.js`

## Step 3 — Load fonts and styles with WPCode

1. Plugins → Add New → search **WPCode** → Install → Activate.
2. Code Snippets → **Header & Footer**.
3. Paste into **Header** and save:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@500;600&family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
<script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
```

4. Add the page stylesheets as **separate snippets**, so each page only loads what it needs:
   - Code Snippets → Add Snippet → **Add Your Custom Code** → type **HTML**.
   - **Snippet "Tarkbyte home CSS"**:
     ```html
     <link rel="stylesheet" href="/wp-content/uploads/tarkbyte/site-v6d.css">
     <link rel="stylesheet" href="/wp-content/uploads/tarkbyte/v5-sections-v6d.css">
     ```
     Location: **Site Wide Header**. Smart Conditional Logic → Show → Page → **is** → *Home*.
   - **Snippet "Tarkbyte inner CSS"**:
     ```html
     <link rel="stylesheet" href="/wp-content/uploads/tarkbyte/site.css">
     ```
     Location: **Site Wide Header**. Conditional logic → Page → **is not** → *Home*.
5. Add the scripts as one snippet in the **footer**, so they run after the page content:
   - **Snippet "Tarkbyte scripts"**:
     ```html
     <script src="/wp-content/uploads/tarkbyte/site.js"></script>
     <script src="/wp-content/uploads/tarkbyte/beams.js"></script>
     ```
     Location: **Site Wide Footer**.
   - **Snippet "Tarkbyte ripple"** (homepage only):
     ```html
     <script src="/wp-content/uploads/tarkbyte/ripple-v6b.js"></script>
     ```
     Location: **Site Wide Footer**. Conditional logic → Page is *Home*.
6. Make sure every snippet is switched **Active**.

## Step 4 — Build the homepage

1. Pages → Add New → title **Home**.
2. Right panel → **Template** → **Elementor Canvas** → Save Draft. This removes the theme's header and footer.
3. Click **Edit with Elementor**.
4. For each block in the WordPress-ready build, in order:
   1. Drag an **HTML** widget onto the page.
   2. Paste the block's code.
   3. In the widget's **Advanced** tab, set Margin and Padding to `0`.
5. Homepage blocks, in this order:

| # | Block | Contains |
|---|---|---|
| 01 | Navigation | Right side panel, top nav, mobile menu |
| 02 | Hero | Headline, stats, ps-doc-agent diagram |
| 03 | Marquee | Scrolling services strip |
| 04 | For you | Fit section |
| 05 | Services | Service cards |
| 06 | Industries | School, retail, hospital |
| 07 | Labs | Six products |
| 08 | Portfolio | Eight projects |
| 09 | Why us | Four principles |
| 10 | Reviews | Client quotes |
| 11 | Approach | Four cells and five steps |
| 12 | Resources | Developer and career cards |
| 13 | FAQ | Filterable questions |
| 14 | Contact | Two paths, email, phone, socials |
| 15 | Footer + page script | Footer, plus the script that runs the side panel, diagram, FAQ filter and mobile menu. **Must be last.** |

6. Section container settings: if Elementor added its own **Container**, set Content Width → **Full Width**, Padding → `0`, Gap → `0`.
7. Click **Publish**.
8. Settings → Reading → **A static page** → Homepage: **Home** → Save.

## Step 5 — Build the Labs and service pages

Repeat Step 4 for each page, using **Elementor Canvas** and that page's blocks:

| Page title | Address |
|---|---|
| Tarkbyte Labs | `/labs/` |
| Agentic AI Solutions | `/services/agentic-ai/` |
| Web & App Development | `/services/web-app-development/` |
| Software Solutions | `/services/software-solutions/` |
| Design & SEO | `/services/design-seo/` |
| Tech Advisory | `/services/tech-advisory/` |
| Developer Resources | `/services/developer-resources/` |
| Career Services | `/services/career-services/` |

For `/services/...` addresses:
1. Create a page named **Services** first; it can be blank.
2. In each service page's settings, set **Parent** to *Services*.
3. Set the page slug to the last part of the address, e.g. `agentic-ai`.

## Step 6 — Replace the images

1. Media → Add New → upload your own photos for the three industries.
2. Click each uploaded photo and copy its **File URL**.
3. In Elementor, open the Industries HTML widget and replace each `https://images.unsplash.com/...` address with your URL.
4. Do the same for the Labs screenshot placeholders on `/labs/`.

## Step 7 — Caching (Hostinger LiteSpeed)

Hostinger often installs **LiteSpeed Cache**, which can break the animations by combining or delaying scripts.

1. LiteSpeed Cache → Page Optimization → **JS Settings**:
   - JS Minify: Off (or keep On but exclude, see step 2).
   - JS Combine: **Off**.
   - Load JS Deferred: **Off**, or add `tarkbyte` to **JS Deferred / Delayed Excludes**.
2. LiteSpeed Cache → Page Optimization → **Tuning** → JS Excludes → add:
   ```
   tarkbyte
   phosphor-icons
   ```
3. LiteSpeed Cache → Toolbox → **Purge All**.

## Step 8 — Test before going live

Open the site in a private window and check:

- [ ] Top nav shows on the hero; after scrolling, it becomes the glossy pill and the right side panel appears (screens 1200px wide and up).
- [ ] Side panel names switch colour over white sections.
- [ ] ps-doc-agent diagram runs, and "Run again" replays it.
- [ ] Beams move in the hero and footer.
- [ ] Water ripple plays once when entering Services, Labs, Why us, Approach and FAQ.
- [ ] Get a quote / Start a project / Get career help open the form, and **Send on WhatsApp** opens WhatsApp with the details filled in.
- [ ] WhatsApp, LinkedIn, GitHub, Instagram and Facebook icons link correctly.
- [ ] Service cards open their own pages; "Get started" opens the form instead.
- [ ] Inner pages show **Home** in the nav.
- [ ] On a phone: the menu button opens and closes the menu, and every section stacks cleanly.

## Step 9 — Go live

1. Settings → Reading → untick **Discourage search engines** → Save.
2. hPanel → **SSL** → make sure it's active, then force HTTPS.
3. Settings → General → set both addresses to `https://tarkbyte.com`.
4. Submit `https://tarkbyte.com/wp-sitemap.xml` in Google Search Console.

---

## Editing content later

- **Text:** Edit with Elementor → click the section's HTML widget → change the text inside the code → Update.
- **New section:** duplicate a similar HTML widget and edit it. Keep the footer + script block last.
- **Colours and fonts:** edit `site-v6d.css` in File Manager, then purge the cache.
- **Phone or WhatsApp number:** edit `site.js` (search for `919310961150`) and the contact blocks.

## Troubleshooting

| Problem | Fix |
|---|---|
| Page looks unstyled | Check the CSS snippet is Active and its page condition is right, then purge the cache |
| Fonts look different | Elementor → Settings → tick Disable Default Fonts |
| White gaps between sections | Set the HTML widget's and container's margin and padding to `0` |
| Animations or form don't work | Exclude `tarkbyte` from LiteSpeed JS optimisation; check the footer script block is last |
| Theme header still showing | Page template must be **Elementor Canvas** |
| Side panel missing | It only shows on screens 1200px wide and up |
