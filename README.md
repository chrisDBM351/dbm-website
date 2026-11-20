# Digital Blueprint Marketing website

The approved cinematic DBM website, ported to React without a visual redesign.

## Run

Node 22 or newer.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` creates a complete static site in `dist/`. Every marketing route
is rendered from its React component at build time. Visitors and crawlers receive
the page text, title, canonical, description and structured data in the initial
HTML. React then hydrates the page and starts the existing interactions.

Do not replace the build command with plain `vite build`. The pre-render step is
intentional and protects page-specific SEO and no-JavaScript content.

## Edit

- `src/pages/`: editable JSX pages, split into named section components.
- `src/components/SiteChrome.jsx`: shared navigation and footer, with home/inner variants.
- `src/manifest.json`: page metadata and original page-specific head styles.
- `src/client-manifest.json`: route/component/behavior map. Add a route to both manifests.
- `src/routes.jsx`: server-render route map. Add each new page here too.
- `public/assets/base.css`: shared homepage-derived design system.
- `public/assets/site.css`: interior-page sections and themes.
- `public/behaviors/`: original interaction code, initialized after hydration.
- `public/img/`, `public/fonts/`: site assets.
- `public/databoard/`: standalone demo used inside the homepage lightbox.
- `scripts/prerender.mjs`: writes complete HTML for every route after Vite compiles.

Navigation deliberately uses real links and full-document loads. This preserves
deep links and resets animation observers between pages. The page components are
React, not screenshots or embedded staging pages. No Viktor, Convex or private
integration service is needed to run this export.

The databoard is an illustrative marketing demo, not a live client-data connection.

## Tests

```sh
npx playwright install chromium
npm run build
npm test
```

The static audit checks all marketing routes for rendered headings, metadata,
valid JSON-LD, local asset/link resolution, preview indexing protection and
non-submitting demo forms. Browser tests cover desktop and phone widths,
navigation, FAQs, the demo modal, lead-signal buttons, demo-form completion,
JavaScript exceptions and no-JavaScript rendering.

## Status

This is a **pre-launch handoff**, not a production launch.

- All marketing pages retain `noindex`; robots.txt disallows crawling.
- Forms are demonstrations. They send no lead data and book no appointment.
- Leadership and footer portraits are placeholders, not real DBM team likenesses.
- Form endpoint, scheduling, analytics, call tracking, conversion tags, final
  content review and domain cutover remain launch work.
- Article dates, the generic article author and time-sensitive industry guidance
  need an editorial check before launch.
- Existing case-study figures and claims are carried over from the approved
  staging snapshot. This migration does not independently refresh those figures.
- Font and stock-photo usage rights must be valid for the production domain.
- No legal pages were invented.

See [LOVABLE_HANDOFF.md](LOVABLE_HANDOFF.md) for the connection step.

Verified build and browser test details: [docs/QA.md](docs/QA.md).
