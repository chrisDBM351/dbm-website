# DBM website implementation rules

- Preserve Chris's approved cinematic staging design. No unsolicited redesign.
- No em dashes, eyebrow labels above headlines, fabricated testimonials, client
  names, or invented company figures. Plain owner-level copy.
- Keep the page URLs, titles, canonicals and JSON-LD. Production builds must
  pre-render all routes, not serve one empty HTML shell.
- Run `npm run build && npm test` before a code handoff.
- All forms remain demos until a real destination is explicitly approved.
  Never leak form fields into a GET query string.
- Keep noindex and robots Disallow-all until launch is explicitly authorized.
- Leadership/footer portraits are placeholders. Do not describe them as photos
  of the actual DBM staff.
- Never change DNS, production analytics, call tracking or the live website
  as part of a design or repository handoff.
- No screenshot attachments in Chris's Slack handoff. Inspect visual QA internally.
- Edit JSX, metadata and CSS directly. The previous HTML generator is not the
  source of truth for this repository.
- Full-document navigation is intentional. If converting to a client router,
  replace and clean up every observer, timer and event handler first.
