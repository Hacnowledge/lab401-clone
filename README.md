# lab401.com — static copy (clone)

Static copy of the Lab401 online shop, downloaded on 2026-11-17 and cleaned
on 2026-11-17 for hosting as a static site (e.g. GitHub Pages).

- **Original site:** https://lab401.com/ (Shopify shop, EN only)
- **Copy date:** 2026-11-17
- **Contents:** 642 HTML pages (home, 182 products, 106 collection pages,
  26 pages, 4 blog indexes, 140 articles, 169 tag pages, 34 pagination
  pages), 258 Atom feeds, theme CSS/JS, product/article images, 1 PDF,
  2 videos — 4,984 files, ~1.2 GB.
- **Entry point:** `index.html`

## How the copy was cleaned

- All files that `wget` had saved with a `?` in their name
  (`image.png?v=123&width=400`) were renamed to clean names
  (`image_w400.png`, `image.png`, `theme.css`, …) so they serve
  correctly over plain HTTP — a `?` in a file name breaks on
  GitHub Pages. All links (`href`, `src`, `srcset`, `action`, `url()`)
  were rewritten to the clean relative names. Corrupted `srcset`
  attributes were rebuilt from the original URLs.
- Missing product images (46 products first fetched as HTML only) and
  every other CDN image still referenced as an absolute URL were
  downloaded locally and relinked, including `vendor.swiper.css` and
  `vendor.flickity.css`.
- Page contents (texts, prices, menu) were not modified. No FR/IT/ES/DE
  locales were added.

## What does not work in a static copy (normal for Shopify)

- **Cart / checkout / payment** (Shop Pay, “Buy Now”, `/cart`, `/checkout`)
  — needs the Shopify backend.
- **Search** (`/search`, predictive search) — needs the backend.
- **Customer account** (`/account`, login) — needs the backend.
- **Language / currency selector** — FR/DE/ES/IT pages were not copied
  (EN only); the selector points to the live site.
- **Forms** (contact, newsletter, reviews) — submission needs the backend.
- **Live features:** stock levels, prices in local currency,
  recommendations, verified reviews, consent / wallet banners
  (remote Shopify scripts, loaded online only).
- **Collection filters** (`?filter.*`, `?sort_by=`) — not copied; links
  point to the live site.
- A few links are dead on the live site itself (deleted products,
  old article assets such as `/js/jquery-*.js`, `/css/bootstrap-*.css`,
  `/func.js`, `/style.css`, `software.zip` / `firmware.zip` downloads)
  and stay dead here. Four assets returned 404 on the live site at
  copy time (`ico-select.svg`, `jquery.cart.js`, two old product
  images) and are missing.
- The theme’s responsive-image JavaScript (`data-rimg-template`) still
  references the live CDN with a `{size}` placeholder; the `srcset`
  images themselves are local, so pictures display offline.

## Size note

~1.2 GB / 4,984 files. GitHub recommends staying under 1 GB per
repository and GitHub Pages recommends under 1 GB per site — this copy
is above that guidance. It still pushes (largest file ~17 MB, under
the 100 MB per-file limit), but a lighter variant (e.g. dropping the
largest redundant image widths) is possible if needed.
