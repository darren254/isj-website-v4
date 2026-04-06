# ISJ — Resource Index

Point any AI session here first. Lists every resource available and when to use it.

---

## Core

| File | What it is |
|------|-----------|
| `PLAN.md` | Master project plan. Build status, pre-launch checklist, content roadmap, decisions log, open questions, change log. Read for project context. |
| `docs/DECISIONS.md` | 18 settled decisions. Check before proposing any technical or design change. |
| `docs/AUTOMATIONS.md` | All active automations — what they do, schedules, feed URLs, sheet ID, how to pause or update. Check before adding new automations. |
| `docs/BUSINESS_CONTEXT.md` | School facts, fees, competitor comparison, differentiators, staff profile rules, brand colours. Read before any copy or page work. |

---

## Content & Articles

| File | What it is |
|------|-----------|
| `docs/ARTICLE_STANDARDS.md` | Single source of truth for writing any Insights or News article. Full workflow: brief → keyword → write → props → SEO → quality check → commit. Read before starting any article. |
| `docs/keyword-research.md` | **Required before any article or SEO task.** Tier 1–5 keyword targets with search volumes and competitive analysis. Use to confirm the right keyword before writing. |
| `docs/PAGE_MESSAGING.md` | Briefs for all 34 pages — the one job, key messages, tone notes, and SEO keywords per page. Read before building or editing any page. |
| `docs/parent-quotes-2025.md` | 22 parent quotes from 2025 survey. Source material for testimonials. |
| `docs/school-messaging-research.md` | Competitor and market messaging analysis. Background reference. |

---

## Design & Build

| File | What it is |
|------|-----------|
| `docs/DESIGN_PROCESS.md` | Page design workflow: content brief → layout brief → build. No page gets built without going through this. |
| `docs/SITE_ARCHITECTURE.xlsx` | 34 pages fully specced — URLs, keywords, meta descriptions, internal links, content briefs. Source of truth for page architecture. |
| `docs/URL_REDIRECT_MAP.xlsx` | 111 redirect rules from Squarespace → v4. Reference before changing any URL. |
| `docs/SENIOR_CAMPUS_BRIEF.md` | Execution plan for the Senior Campus launch — press release, layout brief, image inventory. Read for any Senior Campus work. |

---

## Scripts & Automations

| File | What it is |
|------|-----------|
| `scripts/press-monitor/rss-to-sheet.js` | Pipedream workflow code: RSS feeds (Google Alerts + Talkwalker) → Google Sheet. Fires on every new mention. Edit here, paste into Pipedream. |
| `scripts/press-monitor/monthly-digest.js` | Pipedream workflow code: monthly email digest to darren@schoolstrust.co.uk with sheet link and approval status. Runs 1st of month 08:00 WIB. |
| `scripts/press-monitor/README.md` | **Read before touching any press monitoring workflow.** Full Pipedream setup steps, feed URLs, env vars, how to pause/duplicate. |

---

## Image Library

| Resource | What it is |
|----------|-----------|
| `darren254/tst-image-library` (GitHub repo) | All school images — ISJ, BS Portugal (`pt--`), BS Lithuania (`lt--`). ~285 files. Optimised: max 2000px, JPEG 85, PNG for transparency. This is the single source of truth for all school photography. |
| `/staff/image-library` (site page) | **Currently a placeholder.** A browsable gallery UI was built in a previous session but never committed — it needs to be rebuilt and committed permanently. When built, it should live here, served from raw GitHub URLs pointing at tst-image-library. |
| `/brand` (site page) | Brand assets — logos, colours, typography, houses, Lions sports badge. Separate from the image library. |

---

## Staff & People

| File | What it is |
|------|-----------|
| `docs/staff-team-2026.md` | Current staff team. Authorship rotation rules (Eileen Fisher / Engelina Sutantio) and staff profile restrictions. Read before assigning article authors. |
| `docs/staff_profiles.md` | Eileen Fisher and Emma Webb profiles. Source material. |
