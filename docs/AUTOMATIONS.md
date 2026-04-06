# ISJ Website — Scheduled Automations

Active automated tasks running against the ISJ website and its data. Check this file before adding new automations to avoid duplicates.

---

## 1. ISJ Press Coverage Monitor

**Status:** Active  
**Cron ID:** `0bf480a4`  
**Schedule:** 1st of every month (runs ~02:00 UTC)  
**First run:** 1 May 2026  

**What it does:**
1. Searches the web for new ISJ press coverage (`"Independent School of Jakarta" -site:isj.id`)
2. Filters for quality publications (DA 30+, no social media, no EIN Presswire direct)
3. Writes candidates to Google Sheet (see below) with publication, headline, URL, DA estimate, suggested section
4. Checks the sheet for rows where `Approve? (YES/NO)` = YES and `Added to Site` is blank
5. Commits approved rows to `/src/pages/insights/isj-in-the-news.astro` and pushes to GitHub
6. Emails a digest to darren@schoolstrust.co.uk summarising new finds and anything published

**Approval flow:**
- Open the Google Sheet
- Type `YES` in the `Approve?` column for any item you want added to the site
- It will be committed on the next monthly run

**Google Sheet:**  
[ISJ Press Coverage — Monthly Digest](https://docs.google.com/spreadsheets/d/1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA/edit)  
Spreadsheet ID: `1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA`  
Sheet tab: `Pending Review`  

**Target page:** `/insights/isj-in-the-news`  
**GitHub repo:** `darren254/isj-website-v4`  

**To cancel:** Ask Computer to delete cron job `0bf480a4`.

---
