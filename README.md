# Calm Alpha — Organization Website

Official website for **Calm Alpha**, a software development and AI solutions studio founded in 2026 in Mumbai, India.

Built with **React 18 + TypeScript + Vite**, styled with **Tailwind CSS**, and optimized for deployment to **Netlify** at [calmalpha.in](https://calmalpha.in).

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```
*(If you encounter local npm permission warnings regarding root-owned cache folders, use `npm --cache /tmp/.npm-cache install` or use `pnpm install`.)*

### 2. Start Development Server
```bash
npm run dev
```
Starts Vite dev server at `http://localhost:5173`. In development mode:
- All sections and preview placeholders for draft tokens are visible.
- Hot module replacement (HMR) is active.

### 3. Production Build
```bash
npm run build
```
Typechecks TypeScript with `tsc`, compiles static assets with `vite build`, and prerenders per-route SEO meta tags into `dist/`. The output in `dist/` is 100% static and zero-dependency.

### 4. Preview Production Build
```bash
npm run preview
```
Previews the built static assets in `dist/` locally.

---

## 📝 Editing Copy & Managing Content

**All site copy is centralized in a single typed file:**
> [`src/content.ts`](file:///Users/vinitkarkera/Documents/projects/calmalpha/src/content.ts)

To modify text, service offerings, team bios, tech stack items, principles, or legal terms, edit the corresponding keys in `src/content.ts`.

### Content Tokens & Launch Gate (`check:content`)

> [!WARNING]
> The site uses `{{CONFIRM: ...}}` tokens for facts that must be supplied or verified by the founder before launch.
> The automated check script **fails with exit code 1** if any unresolved token remains.

To run the audit:
```bash
npm run check:content
```

See [`CONTENT_TODO.md`](file:///Users/vinitkarkera/Documents/projects/calmalpha/CONTENT_TODO.md) for the active list of tokens, what is needed for each, and their gating behaviors:
- **From the Lab Gating Rule:** In production, any project card with an unresolved description token is hidden. If all project descriptions are unresolved, the entire "From the lab" section is hidden automatically.
- **Company Facts Omit-If-Empty Rule:** In production, any row whose value is an unresolved token (such as legal entity registration status) is omitted from the table until confirmed.

---

## 🚀 Deploying to Netlify

This project is configured out of the box for Netlify deployment via [`netlify.toml`](file:///Users/vinitkarkera/Documents/projects/calmalpha/netlify.toml) and [`public/_redirects`](file:///Users/vinitkarkera/Documents/projects/calmalpha/public/_redirects).

### Option A: Netlify Git Continuous Deployment (Recommended)
1. Push this repository to GitHub / GitLab (e.g. `https://github.com/VNT1998/calmalpha`).
2. Log into [app.netlify.com](https://app.netlify.com) and click **"Add new site" > "Import an existing project"**.
3. Select your repository. Netlify will automatically detect [`netlify.toml`](file:///Users/vinitkarkera/Documents/projects/calmalpha/netlify.toml):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy calmalpha**.
5. In **Domain management**, add your custom domain `calmalpha.in` (and `www.calmalpha.in`).

### Option B: Netlify CLI Manual Deploy
1. Install or authenticate Netlify CLI:
   ```bash
   npx netlify-cli login
   ```
2. Build the production bundle:
   ```bash
   npm run build
   ```
3. Deploy directly to production:
   ```bash
   npx netlify-cli deploy --prod --dir=dist
   ```

---

## 🎨 Design & Brand Specs

- **Colors:**
  - Ink: `#0B1F2A` (Hero, Footer, dark accents)
  - Gold Gradient: `#FDE047` to `#F59E0B`
  - Amber Text Accent: `#D97706` (High contrast WCAG AA on light backgrounds)
  - Muted Text: `#5B7280`
  - Off-white Background: `#F8FAFC`
- **Typography:** Self-hosted Inter font (`@fontsource/inter`) with system fallback. Zero third-party runtime requests.
- **Brand Assets:**
  - `logo-mark.svg` & `logo-full.svg`
  - WebP optimized founder photo (600px width, ~30KB)
  - Favicon set (`favicon.ico`, `favicon.svg`, `favicon-32x32.png`, `apple-touch-icon.png`)
  - 1200x630 Open Graph card (`og-image.png`)

---

## 🛡️ Security & Performance

- **Zero runtime trackers or cookies:** No cookie banner needed.
- **Strict Netlify headers:**
  - Content Security Policy (CSP)
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - 1-year immutable caching on static hashed bundles (`/assets/*`).
- **Structured Data:** Full `Organization` JSON-LD schema injected automatically.
