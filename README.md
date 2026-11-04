# Clouditech Website

Marketing site for **Clouditech Information Technology Solutions**, a founder-led Azure managed services provider. It is built with [Astro](https://astro.build) and Tailwind CSS v4 and deployed to Azure Static Web Apps.

## Getting started

Requires **Node.js 22.23 or later**.

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # astro check (types) + static build to dist/
npm run preview   # serve the production build
```

## Structure

- `src/pages/`: routes (home, services + `[slug]`, projects + `[slug]`, about, contact, 404, `sitemap.xml`)
- `src/layouts/Layout.astro`: SEO/OG meta, JSON-LD, view transitions, skip link
- `src/components/`: Nav, Footer, HeroNetwork (canvas), ServicesExplorer (tabs), ProjectCard, BeforeAfter, CtaBand, PageHeader, Icon
- `src/data/`: **content source of truth**. Edit these files rather than the markup:
  - `site.ts`: contact details, `schedulerUrl`, nav, stats, testimonials, technologies
  - `services.ts`: the five service lines and the delivery journey
  - `projects.ts`: case studies (problem, solution, results, before/after, optional `metrics`)
- `src/scripts/motion.ts`: nav state, scroll reveals, counters, card tilt
- `src/styles/global.css`: design tokens (`@theme`), utilities, motion system
- `public/`: static assets, `staticwebapp.config.json` (CSP, headers, 404), logos, icons

## Project previews

Project URLs, preview images, and featured visibility are configured in `src/data/projects.ts`. The homepage shows up to four featured projects; all projects remain searchable on the portfolio page. Previews and “Visit live site” links open the configured URL in a new tab, while case-study links stay on this site.

`ProjectPreview.astro` shares an uncropped, responsive browser-style preview between cards and case studies. Store screenshots in `public/assets/projects/` at 1440 × 1000 pixels, capturing only public pages without credentials or private data. Optimize delivery images as WebP; PNG captures can be kept as originals. Use `previewLabel: 'Illustrative preview'` for concept artwork instead of a real screenshot. The Learning & Development Portal uses a labeled illustration because its live URL returned “403 — web app stopped” when checked on November 5, 2026; replace it with an approved screenshot when available.

## Brand and design system ("Liquid Glass Cloud")

- Canvas `#f5f8fc`, ink `#0e1e36`, primary blue `#1769e0`, operational cyan `#0b8f83` (use `#08766d` for cyan text to meet WCAG AA)
- Type: Plus Jakarta Sans (display), Inter (body), JetBrains Mono (labels). All fonts are self-hosted via Fontsource.
- `assets/logo-mark.svg` is the source of truth for the C-path mark. Keep it readable at 16px and allow clear space of at least one terminal-node diameter.

## Motion and accessibility

- Motion uses CSS, IntersectionObserver, and a lightweight canvas, with no animation libraries. Durations come from `--dur-*` tokens and use expo-out easing.
- `prefers-reduced-motion` turns off reveals, tilt, parallax, and counters (content shows immediately), and the hero canvas renders as a static frame.
- `prefers-reduced-transparency` replaces glass blur with solid surfaces.
- Includes a skip link, semantic landmarks, ARIA tabs with arrow-key support, visible focus, 44px targets, and an accessible mobile menu with Escape support. Pages were checked with axe (WCAG 2.1 AA) at 375px.

## Deployment

`.github/workflows/azure-static-web-apps-*.yml` runs `npm ci && npm run build` and uploads `dist/` (`skip_app_build: true`). Pushes to `main` deploy to production, and pull requests get a preview environment.

## Before production launch

1. Set `schedulerUrl` in `src/data/site.ts` (Microsoft Bookings, Calendly, etc.). Until it is set, booking CTAs fall back to email.
2. Add real, approved numbers to `metrics` in `src/data/projects.ts` and quotes to `testimonials` in `src/data/site.ts`. The testimonials section stays hidden while that list is empty.
3. Confirm certifications, registrations, service coverage, and availability claims.
4. Contact form: it currently opens a pre-filled email. To capture submissions server-side, add an Azure Functions API, then update `form-action`/`connect-src` in the CSP.
5. Submit `/sitemap.xml` to Google Search Console and Bing Webmaster Tools.

© 2026 Clouditech Information Technology Solutions
