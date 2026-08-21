# Clouditech Website

A dependency-free, single-page website for **Clouditech Information Technology Solutions**, positioned as a founder-led Azure managed services provider.

## Structure

- `index.html` — semantic HTML, responsive CSS, and accessible mobile-navigation JavaScript
- `favicon.svg` — current scalable browser icon
- `site.webmanifest` — installable-site metadata
- `robots.txt` and `sitemap.xml` — crawler configuration
- `og-image.png` — deployed social preview image
- `assets/logo-mark.svg` — authoritative geometric C-path symbol
- `assets/logo-full.svg` — horizontal lockup for light backgrounds
- `assets/logo-full-white.svg` — reversed horizontal lockup
- `assets/logo-appicon.svg` — square application icon source
- `assets/og-image.svg` — editable social preview source

## Brand system

The logo is an abstract **C infrastructure path**. Its open form represents continuity and forward movement; the terminal nodes reference connected cloud operations without using a literal cloud symbol.

- Canvas: `#f7f8f5`
- Ink: `#10243e`
- Primary blue: `#1769e0`
- Operational cyan: `#0b8f83`
- Typeface: Inter

Use `logo-mark.svg` as the source of truth. The mark must remain readable at 16px and work in monochrome. Keep clear space of at least one terminal-node diameter around it.

## Local preview

Use any static HTTP server. Node is available in this workspace, so a temporary preview can be started with an installed or `npx` static-server package.

## Before production launch

1. Replace every `https://example.com/clouditech-consultation` URL in `index.html` with the real Microsoft Bookings, Calendly, or equivalent scheduler URL.
2. Regenerate raster derivatives from the new SVG identity:
   - `og-image.png`
   - `brand-preview.png`
   - `assets/logo-mark-256.png`
   - `assets/logo-mark-512.png`
   - `assets/logo-full-light.png`
   - `assets/logo-full-dark.png`
   - `assets/icon-192.png`
   - `assets/icon-512.png`
   - `assets/apple-touch-icon.png`
   - `assets/favicon-16.png`
   - `assets/favicon-32.png`
   - `assets/favicon.ico`
3. Confirm certification, CSP, registration, service-coverage, and availability claims before publishing.
4. Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools.

## Accessibility baseline

The page includes a skip link, semantic landmarks, labelled sections, visible keyboard focus, 44px controls, reduced-motion support, and an accessible mobile menu with hidden-state focus protection and Escape handling.

© 2026 Clouditech Information Technology Solutions
