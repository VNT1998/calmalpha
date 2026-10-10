# Calm Alpha — Content Checklist & Unresolved Tokens (`CONTENT_TODO.md`)

This file tracks all draft copy tokens (`{{CONFIRM: ...}}`) that require verification or input from the business owner before production launch.

Run the automated verification script at any time:
```bash
npm run check:content
```

---

## 1. Resolved Tokens

The following tokens have been resolved with verifiable facts from the project's source code and active GitHub repositories:

| Item | Status | Resolved Value | Source Location |
| :--- | :--- | :--- | :--- |
| **Founder LinkedIn URL** | ✅ Resolved | `https://linkedin.com/in/vinitkarkera` | Extracted from personal portfolio |
| **Founder Photo** | ✅ Resolved | `/founder.webp` (WebP, 600px wide, ~30KB) | Generated from `vinit-portrait.jpg` |
| **OpsPilot Description** | ✅ Resolved | `Enterprise document and operational workflow agent platform for accounts payable and invoice automation...` | Extracted from `VNT1998/opspilot-ai` README |
| **Nuvorix Description** | ✅ Resolved | `Self-service production platform for building, evaluating, deploying, and operating ML and LLM workloads.` | Extracted from `VNT1998/nuvorix` README |
| **BetterLife Description** | ✅ Resolved | `Clinical evidence intelligence and laboratory blood report analysis platform with interactive follow-up Q&A.` | Extracted from `VNT1998/better-life` README |

---

## 2. Open Tokens (Action Required)

Only **1 item** in `src/content.ts` remains pending:

### 1. Legal Status
- **File:** [`src/content.ts`](file:///Users/vinitkarkera/Documents/projects/calmalpha/src/content.ts)
- **Token:** `{{CONFIRM: add once registered}}`
- **Location:** `content.home.companyFacts.facts[4].value`
- **What is needed:** Official registered entity designation (e.g. `Sole Proprietorship`, `Private Limited`, `LLP`, or registration number) once formal registration is complete.
- **Omit-If-Empty Rule Impact:** Per `PLAN.md`, this row is automatically omitted from the Company facts registry table in production builds, ensuring zero broken placeholders or unverified claims are visible to public visitors.

---

## How to Resolve

1. Open [`src/content.ts`](file:///Users/vinitkarkera/Documents/projects/calmalpha/src/content.ts).
2. Replace `'{{CONFIRM: add once registered}}'` with the registered entity type (e.g. `'Private Limited'` or `'LLP'`).
3. Run `npm run check:content` to verify that 0 unresolved tokens remain.
