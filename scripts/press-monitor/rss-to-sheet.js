/**
 * ISJ Press Monitor — RSS Ingestion
 * ------------------------------------
 * Pipedream workflow: RSS trigger → this script
 *
 * Trigger: "RSS by Pipedream" — New Item in Feed
 *   Feed URL 1: https://www.google.com/alerts/feeds/07706856412210087267/9780274638633399387
 *   Feed URL 2: (add Talkwalker RSS URL here when ready)
 *
 * What it does:
 *   1. Receives a new RSS item from Google Alerts or Talkwalker
 *   2. Filters out junk (ISJ's own site, directories, wire services)
 *   3. Checks the sheet to avoid duplicates (same URL already present)
 *   4. Appends a new row to the Google Sheet for review
 *
 * Environment variables required (set in Pipedream workflow settings):
 *   SHEET_ID        — 1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA
 *   SHEET_TAB       — Pending Review
 *   GOOGLE_TOKEN    — OAuth token (injected automatically by Pipedream Google Sheets account)
 *
 * To update this logic: edit this file in GitHub, Pipedream pulls the latest on each run
 * (configure Pipedream step to sync from GitHub repo darren254/isj-website-v4)
 */

import { axios } from "@pipedream/platform";

// ─── Blocklist ────────────────────────────────────────────────────────────────
// URLs containing any of these strings are dropped silently
const BLOCKED_DOMAINS = [
  "isj.id",
  "international-school-jakarta.id",
  "einpresswire.com",
  "prnewswire.com",
  "businesswire.com",
  "prweb.com",
  "newswire.com",
  "schoolsguide",
  "international-schools-guide",
  "expatfinder.com",
  "expatarrivals.com",
  "whichschooladvisor.com",
  "bestschoolsasia.com",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function extractDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function estimateDA(domain) {
  // Rough DA tiers based on known publication types
  // Pipedream has no Moz access by default — this is a heuristic
  const highDA = ["reuters.com", "bbc.com", "theguardian.com", "ft.com", "bloomberg.com",
    "thejakartapost.com", "kompas.com", "tempo.co", "detik.com", "cnnindonesia.com",
    "straitstimes.com", "scmp.com", "bangkokpost.com"];
  const medDA = ["jakartaexpat.biz", "now-jakarta.com", "indonesiaexpat.id",
    "bali-expat.com", "theexpat.com", "asiaone.com"];
  if (highDA.some(d => domain.includes(d))) return "70+";
  if (medDA.some(d => domain.includes(d))) return "40–60";
  return "Unknown — check manually";
}

function suggestSection(title, url) {
  const text = (title + " " + url).toLowerCase();
  if (text.includes("award") || text.includes("rank") || text.includes("top school")) return "Awards & Recognition";
  if (text.includes("campus") || text.includes("open") || text.includes("launch") || text.includes("expand")) return "School News";
  if (text.includes("expat") || text.includes("family") || text.includes("moving")) return "Expat Coverage";
  if (text.includes("curriculum") || text.includes("gcse") || text.includes("a-level") || text.includes("education")) return "Education Coverage";
  return "General Mention";
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default defineComponent({
  props: {
    google_sheets: {
      type: "app",
      app: "google_sheets",
    },
  },

  async run({ steps, $ }) {
    // Pipedream RSS trigger passes the item as steps.trigger.event
    const item = steps.trigger.event;

    const title = item.title || "(no title)";
    const url   = item.link  || item.url || "";
    const pubDate = item.pubDate || item.published || new Date().toISOString();

    // ── 1. Filter junk ──────────────────────────────────────────────────────
    const lowerUrl = url.toLowerCase();
    const isBlocked = BLOCKED_DOMAINS.some(blocked => lowerUrl.includes(blocked));
    if (isBlocked) {
      console.log(`Blocked: ${url}`);
      $.export("status", "blocked");
      return;
    }

    // ── 2. Check for duplicates ──────────────────────────────────────────────
    const sheetId  = process.env.SHEET_ID  || "1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA";
    const sheetTab = process.env.SHEET_TAB || "Pending Review";

    const existing = await axios($, {
      method: "GET",
      url: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(sheetTab)}!D:D`,
      headers: {
        Authorization: `Bearer ${this.google_sheets.$auth.oauth_access_token}`,
      },
    });

    const existingUrls = (existing.values || []).flat().map(u => u.toLowerCase());
    if (existingUrls.includes(url.toLowerCase())) {
      console.log(`Duplicate: ${url}`);
      $.export("status", "duplicate");
      return;
    }

    // ── 3. Build row ─────────────────────────────────────────────────────────
    const domain  = extractDomain(url);
    const dateStr = new Date(pubDate).toLocaleDateString("en-GB", {
      day: "2-digit", month: "short", year: "numeric"
    });

    const row = [
      dateStr,                        // A: Date Found
      domain,                         // B: Publication
      title,                          // C: Headline
      url,                            // D: URL
      estimateDA(domain),             // E: Est. DA
      suggestSection(title, url),     // F: Section
      "",                             // G: Approve? (YES/NO) — left blank for Darren
      "",                             // H: Added to Site — filled by publish workflow
    ];

    // ── 4. Append to sheet ───────────────────────────────────────────────────
    await axios($, {
      method: "POST",
      url: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(sheetTab)}!A:H:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      headers: {
        Authorization: `Bearer ${this.google_sheets.$auth.oauth_access_token}`,
        "Content-Type": "application/json",
      },
      data: {
        values: [row],
      },
    });

    console.log(`Added: ${title} — ${url}`);
    $.export("status", "added");
    $.export("headline", title);
    $.export("url", url);
  },
});
