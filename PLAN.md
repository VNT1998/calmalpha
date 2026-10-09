# Calm Alpha: Organization Website Build Plan (for Antigravity CLI)

Read this file and `CONTENT.md` together. This file defines structure, design and quality. `CONTENT.md` holds every word of copy.

## Scope
Build **only** the Calm Alpha organization website (to be served at `calmalpha.in`).
Out of scope (the owner handles these manually): DNS, hosting, domain moves, redirects, moving the personal portfolio to `me.calmalpha.in`, search console, email setup.
Do not touch any existing portfolio code. Create a new self-contained project (e.g. `calm-alpha-site/`) that builds to static files.

## Goal
Calm Alpha is a service provider for software development and AI solutions, founded in 2026 in Mumbai, India. The site must make it look like a real, credible, operating company to a reviewer (for example someone assessing a startup-program application). In under a minute they should be able to answer: what does this company do, who runs it, is it real, how do I contact it. Every page and section exists to answer one of those.

## Rules
1. **Never invent facts.** No fake customers, logos, testimonials, funding, revenue, user counts, awards or team members.
2. **Founder photo and LinkedIn URL:** extract them from the existing portfolio source code (the current personal portfolio that is live at `calmalpha.in`; ask the owner for its path if you cannot find it). Copy the photo into `public/founder.*` (optimize to WebP, max 600px wide) and read the LinkedIn URL from its social links. If either cannot be found, leave the token and list it in `CONTENT_TODO.md`.
3. Use the copy in `CONTENT.md` exactly. Tokens written as `{{CONFIRM: ...}}` are facts the owner must supply. Render them as visible placeholder text in dev, and list each one in `CONTENT_TODO.md` (file, location, what is needed).
4. Add a script `npm run check:content` that fails and lists any unresolved `{{...}}` token. Warn about it in the README.
5. Do not add features beyond this plan (no blog, no login, no CMS, no chat widget).

## Stack
- Vite + React + TypeScript, plain CSS (CSS variables) or Tailwind. Fully static output in `dist/`. No backend.
- React Router for pages. All copy lives in one `src/content.ts` (typed object) so the owner can edit text in one place.
- No analytics or tracking, so no cookie banner is needed.

## Brand and design
- Assets (provided alongside this plan): `logo-mark.svg`, `logo-full.svg`. Copy to `public/`. Generate favicon set, `apple-touch-icon` and a 1200x630 OG image from the mark.
- Colors: Ink `#0B1F2A`, Gold gradient `#FDE047` to `#F59E0B`, Amber text accent `#D97706`, Muted `#5B7280`, Off-white `#F8FAFC`. Font: Inter with system fallback.
- Look: calm, confident, lots of whitespace. Dark ink hero with gold accent; alternating light sections; thin 1px borders; subtle fade-in on scroll only (respect `prefers-reduced-motion`). No stock photos, no emoji icons, no gradients on body text.
- Check contrast: gold on ink is fine; use Amber `#D97706` (not gold) for text on light backgrounds, and verify AA.
- Dark/light: site is light by default with the dark hero and footer; no theme toggle.

## Pages and routes
| Route | Page |
|---|---|
| `/` | Home (single page, sections below) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/responsible-ai` | Responsible AI statement |
| `*` | On-brand 404 with link home |

### Home sections, in order
1. **Header**: logo-full left; nav anchors: Services, Process, Technology, Lab, Team, Contact. Sticky, collapses to a menu on mobile.
2. **Hero** (dark): headline, subhead, two buttons.
3. **Services**: six cards.
4. **Process** ("How we work with you"): four numbered steps.
5. **Technology**: short paragraph plus grouped chips, and a note on AI-assisted engineering with Claude Code.
6. **Principles**: four short items.
7. **From the lab**: in-development projects (see gating rule below).
8. **Team**: founder card.
9. **Company facts**: small definition list.
10. **Contact**: email link and social links.
11. **Footer** (dark): logo-mark, company name, copyright with current year, links to Privacy, Terms, Responsible AI, and contact email.

**Gating rule for "From the lab":** render the section only if at least one project has a resolved (non-token) description. Always show the status badge exactly as written in `CONTENT.md` ("In development"). Never show a demo link unless a URL is provided.

**Omit-if-empty rule:** any Company-facts row whose value is a token (for example legal status) is hidden in production, not shown as a placeholder.

## Quality bar
- Responsive from 320px to 1920px; keyboard accessible; visible focus states; semantic landmarks (`header`, `main`, `footer`, `nav`); alt text on all images; WCAG AA.
- Lighthouse >= 95 in Performance, Accessibility, Best Practices and SEO.
- SEO: unique `<title>` and meta description per route (provided in `CONTENT.md`), canonical `https://calmalpha.in/<route>`, Open Graph and Twitter card tags, `sitemap.xml`, `robots.txt`, and `Organization` JSON-LD (name, url, logo, founder, email, sameAs).
- No broken links, no lorem ipsum, no console errors, no unused template boilerplate.
- Self-host Inter (or use the system stack); no third-party requests at runtime.

## Deliverables
1. Project that runs with `npm run dev` and builds with `npm run build` to `dist/`.
2. `CONTENT_TODO.md` listing every unresolved token.
3. `README.md`: how to run, build, edit copy in `src/content.ts`, and run `check:content`.

## Acceptance checklist
- [ ] Hero tells a stranger what Calm Alpha does
- [ ] Services clearly show Calm Alpha offers software development and AI solutions
- [ ] "From the lab" shows only confirmed projects, labelled In development
- [ ] Founder named with real links
- [ ] Company facts and contact email visible
- [ ] Privacy, Terms, Responsible AI pages exist and are linked in the footer
- [ ] No fabricated claims anywhere
- [ ] Lighthouse >= 95 everywhere; favicon and OG image present
- [ ] `CONTENT_TODO.md` complete; `check:content` reports exactly the open items
