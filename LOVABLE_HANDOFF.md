# Lovable handoff

## The connection constraint

Lovable's GitHub documentation was checked on November 20, 2026:
https://docs.lovable.dev/integrations/github

Lovable creates a new repository when a project is connected. It does **not**
import an existing repository. This `dbm-website` repository is the complete source
handoff, but its existence alone does not connect it to a Lovable project.

## The one setup action still needed

Create or open the intended DBM project in Lovable, then use **Project settings
→ Git → GitHub** to authorize the intended GitHub account and connect the project.
Lovable creates its repository. Give Viktor that repository URL so the tested
site can be transferred into it.

Do not delete a repository, change the live domain or publish a replacement site
to try to force an import. If Lovable offers a newer supported import path, verify
its current documentation before using it.

## Paste-ready project instruction

> Preserve the existing DBM design and copy. This is an implementation handoff,
> not a redesign. Keep the React page and section components, the shared header
> and footer, the exact route URLs, fonts, photography, responsive layouts,
> animations, case studies, inline demo and page metadata. Keep `npm run build`
> including the pre-render step so each URL serves full HTML without JavaScript.
> Do not replace the site with a blank SPA, iframe, screenshot or a new visual
> direction. Keep noindex and Disallow-all until launch is explicitly authorized.
> Forms are demos and must not claim a lead was sent or an appointment was booked.
> Do not add legal copy, real client names, unsupported numbers or real team
> likenesses. Wire the approved lead destination and scheduler only when supplied.

## Completion boundary

The React export can be built and tested independently. Successful local tests
do not prove that Lovable has imported it, that a Lovable preview works, or that
its hosting preserves the generated multi-page HTML. Repeat route, no-JavaScript,
metadata, form and tracking QA on the actual Lovable deployment before launch.
