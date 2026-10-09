# Calm Alpha — Content Checklist & Unresolved Tokens (`CONTENT_TODO.md`)

This file tracks all draft copy tokens (`{{CONFIRM: ...}}`) that require verification or input from the business owner before production launch.

Run the automated verification script at any time:
```bash
npm run check:content
```
This script will exit with an error code and list any remaining unresolved tokens until every item below is fulfilled.

---

## 1. Resolved Tokens (Extracted Automatically)

The following tokens were extracted from existing portfolio source code according to **Rule 2** in `PLAN.md`:

| Item | Status | Resolved Value | Source Location |
| :--- | :--- | :--- | :--- |
| **Founder LinkedIn URL** | ✅ Resolved | `https://linkedin.com/in/vinitkarkera` | Extracted from `portfolio-new` source |
| **Founder Photo** | ✅ Resolved | `/founder.webp` (WebP, 600px wide, ~30KB) | Generated from `portfolio-new/public/vinit-portrait.jpg` |

---

## 2. Open Tokens (Action Required)

The following 4 items in `src/content.ts` are currently awaiting confirmation:

### 1. OpsPilot — One-Line Description
- **File:** [`src/content.ts`](file:///Users/vinitkarkera/Documents/projects/calmalpha/src/content.ts)
- **Token:** `{{CONFIRM: one-line description}}`
- **Location:** `content.home.lab.projects[0].description` (Repo: `https://github.com/VNT1998/opspilot-ai`)
- **What is needed:** A single concise sentence summarizing OpsPilot.
- **Suggested value from repository:**  
  `Enterprise-grade document and operational workflow agent platform for accounts payable and invoice automation.`
- **Gating Rule Impact:** Under PLAN.md gating rules, this project card is hidden in production until this token is replaced with a confirmed description.

### 2. Nuvorix — One-Line Description
- **File:** [`src/content.ts`](file:///Users/vinitkarkera/Documents/projects/calmalpha/src/content.ts)
- **Token:** `{{CONFIRM: one-line description}}`
- **Location:** `content.home.lab.projects[1].description` (Repo: `https://github.com/VNT1998/nuvorix`)
- **What is needed:** A single concise sentence summarizing Nuvorix.
- **Suggested value from repository:**  
  `Self-service production platform for building, evaluating, deploying, and operating ML and LLM workloads.`
- **Gating Rule Impact:** Hidden in production until confirmed.

### 3. BetterLife — One-Line Description
- **File:** [`src/content.ts`](file:///Users/vinitkarkera/Documents/projects/calmalpha/src/content.ts)
- **Token:** `{{CONFIRM: one-line description}}`
- **Location:** `content.home.lab.projects[2].description` (Repo: `https://github.com/VNT1998/better-life`)
- **What is needed:** A single concise sentence summarizing BetterLife.
- **Suggested value from repository:**  
  `Clinical evidence intelligence and laboratory blood report analysis platform with interactive follow-up Q&A.`
- **Gating Rule Impact:** Hidden in production until confirmed.

### 4. Legal Status
- **File:** [`src/content.ts`](file:///Users/vinitkarkera/Documents/projects/calmalpha/src/content.ts)
- **Token:** `{{CONFIRM: add once registered}}`
- **Location:** `content.home.companyFacts.facts[4].value`
- **What is needed:** Official registered entity designation (e.g. `Sole Proprietorship`, `Private Limited`, `LLP`, or registration number) once formalized.
- **Omit-If-Empty Rule Impact:** Per PLAN.md, this row is completely omitted from the Company facts table in production until registered and populated.

---

## How to Resolve

1. Open [`src/content.ts`](file:///Users/vinitkarkera/Documents/projects/calmalpha/src/content.ts).
2. Replace the `{{CONFIRM: ...}}` string with the confirmed copy.
3. Run `npm run check:content` to verify that 0 unresolved tokens remain.
