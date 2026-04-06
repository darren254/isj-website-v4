# ISJ Press Monitor — Pipedream Setup

Two Pipedream workflows. Both live in this folder. Edit the code here and sync to Pipedream — never edit directly in Pipedream UI or changes will be lost.

---

## Workflow 1: RSS → Sheet (`rss-to-sheet.js`)

**What it does:** Fires on every new Google Alerts (or Talkwalker) RSS item. Filters junk, deduplicates, appends a row to the Google Sheet for your review.

### Steps to set up in Pipedream

1. Create a new workflow at [pipedream.com](https://pipedream.com)
2. **Trigger:** RSS by Pipedream → "New Item in Feed"
   - Feed URL 1 (Google Alerts): `https://www.google.com/alerts/feeds/07706856412210087267/9780274638633399387`
   - Feed URL 2 (Talkwalker): `https://alerts.talkwalker.com/alerts/rss/OPBCI5UQ3FZZB3KO7OUH7LAPOCBZGXY6IM2FKBURYTKFECKCTATLUBJ2VMPYSIQASGJEYZZQPDJZ4FILXIK6MF42HFLTYX2V2A4AOEVQMURARUEFPCRXUK7AK4BPJFYB`
   - Set up one workflow per feed URL (duplicate after creating the first)
3. **Step 1 (Node.js):** Paste contents of `rss-to-sheet.js`
4. **Connect accounts:** Google Sheets (your account)
5. **Environment variables** (Pipedream Settings → Environment Variables):
   ```
   SHEET_ID   = 1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA
   SHEET_TAB  = Pending Review
   ```
6. Deploy and test with a sample RSS item

**To pause:** Toggle the workflow off in Pipedream UI — no code changes needed.  
**To duplicate for Talkwalker:** Click "Duplicate workflow" in Pipedream, change the feed URL. Done.

---

## Workflow 2: Monthly Digest (`monthly-digest.js`)

**What it does:** Runs on the 1st of every month at 08:00 WIB (01:00 UTC). Reads the sheet, sends you an email with the sheet link prominent at the top, categorised into: new this month / approved but not published / awaiting review.

### Steps to set up in Pipedream

1. Create a new workflow
2. **Trigger:** Schedule → Custom cron: `0 1 1 * *` (01:00 UTC = 08:00 WIB, 1st of month)
3. **Step 1 (Node.js):** Paste contents of `monthly-digest.js`
4. **Connect accounts:** Google Sheets + Gmail (both with your Google account)
5. **Environment variables:**
   ```
   SHEET_ID   = 1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA
   SHEET_TAB  = Pending Review
   TO_EMAIL   = darren@schoolstrust.co.uk
   SHEET_URL  = https://docs.google.com/spreadsheets/d/1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA/edit
   ```
6. Deploy — test by running manually first (click "Run now")

**To change the schedule:** Edit the cron expression in the trigger — no code changes needed.  
**To send an ad-hoc digest:** Click "Run now" in Pipedream.

---

## The approval flow

1. Coverage lands in the Google Sheet automatically
2. You open the sheet (link is in every digest email), type `YES` in column G
3. *(Future — publish workflow TBD)*: approved items get committed to `isj-in-the-news.astro`

## Sheet

[ISJ Press Coverage — Pending Review](https://docs.google.com/spreadsheets/d/1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA/edit)

Columns: `Date Found | Publication | Headline | URL | Est. DA | Section | Approve? | Added to Site`

---

## Feed URLs

| Source | RSS URL |
|--------|---------|
| Google Alerts | `https://www.google.com/alerts/feeds/07706856412210087267/9780274638633399387` |
| Talkwalker | `https://alerts.talkwalker.com/alerts/rss/OPBCI5UQ3FZZB3KO7OUH7LAPOCBZGXY6IM2FKBURYTKFECKCTATLUBJ2VMPYSIQASGJEYZZQPDJZ4FILXIK6MF42HFLTYX2V2A4AOEVQMURARUEFPCRXUK7AK4BPJFYB` |

---

## Updating the logic

Edit the `.js` files here and commit to `darren254/isj-website-v4`. If Pipedream is set to sync from GitHub, it pulls automatically. Otherwise, paste the updated code into the relevant Pipedream step.
