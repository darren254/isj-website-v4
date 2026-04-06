# ISJ Website — Scheduled Automations

All active automations. Check this file before adding new ones. **All logic lives in `scripts/press-monitor/` — edit there, not in Pipedream directly.**

---

## Press Monitoring System

### Architecture overview

```
Google Alerts RSS  ──┐
                      ├──▶  Pipedream (Workflow 1 × 2)  ──▶  Google Sheet  ──▶  You approve
Talkwalker RSS    ──┘                                                              │
                                                                                   ▼
                      Pipedream (Workflow 2, monthly)  ──▶  Digest email  ──────────
```

### Workflow 1a — Google Alerts → Sheet

**File:** `scripts/press-monitor/rss-to-sheet.js`  
**Pipedream trigger:** RSS → New Item in Feed  
**Feed URL:** `https://www.google.com/alerts/feeds/07706856412210087267/9780274638633399387`  
**Schedule:** Event-driven (fires on every new alert, any time)  
**What it does:** Filters junk, deduplicates, appends a row to the Google Sheet  
**To pause:** Toggle workflow off in Pipedream UI  

### Workflow 1b — Talkwalker → Sheet

**File:** `scripts/press-monitor/rss-to-sheet.js` (same script, different feed)  
**Pipedream trigger:** RSS → New Item in Feed  
**Feed URL:** `https://alerts.talkwalker.com/alerts/rss/OPBCI5UQ3FZZB3KO7OUH7LAPOCBZGXY6IM2FKBURYTKFECKCTATLUBJ2VMPYSIQASGJEYZZQPDJZ4FILXIK6MF42HFLTYX2V2A4AOEVQMURARUEFPCRXUK7AK4BPJFYB`  
**Schedule:** Event-driven  
**To pause:** Toggle workflow off in Pipedream UI  

### Workflow 2 — Monthly Digest Email

**File:** `scripts/press-monitor/monthly-digest.js`  
**Pipedream trigger:** Schedule → cron `0 1 1 * *` (08:00 WIB, 1st of every month)  
**What it does:** Reads the sheet, emails darren@schoolstrust.co.uk a summary with the sheet link at the top  
**To run ad-hoc:** Click "Run now" in Pipedream  
**To change schedule:** Edit the cron expression in the Pipedream trigger  

### Google Sheet

[ISJ Press Coverage — Pending Review](https://docs.google.com/spreadsheets/d/1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA/edit)  
Spreadsheet ID: `1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA`  
Sheet tab: `Pending Review`  
Columns: `Date Found | Publication | Headline | URL | Est. DA | Section | Approve? (YES/NO) | Added to Site`

### Approval flow

1. Coverage arrives automatically in the sheet
2. Open the sheet (link is in every digest email)
3. Type `YES` in column G for anything worth publishing
4. Approved items get committed to `/src/pages/insights/isj-in-the-news.astro` on the next monthly run

### Setup instructions

See `scripts/press-monitor/README.md` for full Pipedream setup steps.

---
