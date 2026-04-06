/**
 * ISJ Press Monitor — Monthly Digest Email
 * -----------------------------------------
 * Pipedream workflow: Schedule trigger (1st of every month, 08:00 WIB / 01:00 UTC) → this script
 *
 * What it does:
 *   1. Reads the Google Sheet
 *   2. Counts new items added since last month (Date Found in current month)
 *   3. Lists items approved (YES) but not yet published (Added to Site is blank)
 *   4. Sends a digest email to darren@schoolstrust.co.uk with the sheet link prominent at top
 *
 * Environment variables required:
 *   SHEET_ID        — 1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA
 *   SHEET_TAB       — Pending Review
 *   TO_EMAIL        — darren@schoolstrust.co.uk
 *   SHEET_URL       — https://docs.google.com/spreadsheets/d/1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA/edit
 */

import { axios } from "@pipedream/platform";

export default defineComponent({
  props: {
    google_sheets: {
      type: "app",
      app: "google_sheets",
    },
    gmail: {
      type: "app",
      app: "gmail",
    },
  },

  async run({ steps, $ }) {
    const sheetId  = process.env.SHEET_ID  || "1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA";
    const sheetTab = process.env.SHEET_TAB || "Pending Review";
    const toEmail  = process.env.TO_EMAIL  || "darren@schoolstrust.co.uk";
    const sheetUrl = process.env.SHEET_URL || "https://docs.google.com/spreadsheets/d/1EUzk6O10-LRiNnHg-8Xr4uG1fR5aEY89Pj6JF924XQA/edit";

    // ── 1. Read all rows ─────────────────────────────────────────────────────
    const response = await axios($, {
      method: "GET",
      url: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(sheetTab)}!A:H`,
      headers: {
        Authorization: `Bearer ${this.google_sheets.$auth.oauth_access_token}`,
      },
    });

    const allRows = response.values || [];
    if (allRows.length <= 1) {
      // Only headers or empty — still send a "nothing found" digest
      console.log("Sheet is empty.");
    }

    const headers = allRows[0] || [];
    const dataRows = allRows.slice(1).map(row => ({
      date:      row[0] || "",
      pub:       row[1] || "",
      headline:  row[2] || "",
      url:       row[3] || "",
      da:        row[4] || "",
      section:   row[5] || "",
      approve:   (row[6] || "").trim().toUpperCase(),
      addedSite: (row[7] || "").trim(),
    }));

    // ── 2. Categorise rows ───────────────────────────────────────────────────
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear  = now.getFullYear();

    // Items found this month (approximate — matches month/year in date string)
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const currentMonthLabel = `${monthNames[thisMonth]} ${thisYear}`;

    const newThisMonth = dataRows.filter(r =>
      r.date.includes(monthNames[thisMonth]) && r.date.includes(String(thisYear))
    );

    // Approved but not yet published
    const approvedPending = dataRows.filter(r =>
      r.approve === "YES" && r.addedSite === ""
    );

    // All unapproved (not yet reviewed)
    const awaitingReview = dataRows.filter(r =>
      r.approve !== "YES" && r.addedSite === ""
    );

    // ── 3. Build email ───────────────────────────────────────────────────────
    const monthLabel = now.toLocaleString("en-GB", { month: "long", year: "numeric" });

    function rowToHtml(r) {
      return `
        <tr>
          <td style="padding:6px 10px;border-bottom:1px solid #eee;">${r.date}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #eee;">${r.pub}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #eee;"><a href="${r.url}" style="color:#1a5276;">${r.headline}</a></td>
          <td style="padding:6px 10px;border-bottom:1px solid #eee;">${r.da}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #eee;">${r.section}</td>
        </tr>`;
    }

    function tableWrap(rows, emptyMsg) {
      if (!rows.length) return `<p style="color:#666;font-style:italic;">${emptyMsg}</p>`;
      return `
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <thead>
            <tr style="background:#f5f5f5;">
              <th style="padding:6px 10px;text-align:left;">Date</th>
              <th style="padding:6px 10px;text-align:left;">Publication</th>
              <th style="padding:6px 10px;text-align:left;">Headline</th>
              <th style="padding:6px 10px;text-align:left;">Est. DA</th>
              <th style="padding:6px 10px;text-align:left;">Section</th>
            </tr>
          </thead>
          <tbody>${rows.map(rowToHtml).join("")}</tbody>
        </table>`;
    }

    const html = `
<!DOCTYPE html>
<html>
<body style="font-family:Georgia,serif;max-width:700px;margin:0 auto;padding:20px;color:#222;">

  <h2 style="margin-bottom:4px;">ISJ Press Briefing — ${monthLabel}</h2>
  <p style="margin-top:0;color:#666;font-size:14px;">Monthly coverage digest for The Independent School of Jakarta</p>

  <div style="background:#f0f4f8;border-left:4px solid #1a5276;padding:14px 18px;margin:20px 0;border-radius:2px;">
    <strong>👉 Review and approve items in the Google Sheet:</strong><br/>
    <a href="${sheetUrl}" style="color:#1a5276;font-size:15px;">${sheetUrl}</a>
  </div>

  <hr style="border:none;border-top:1px solid #ddd;margin:24px 0;"/>

  <h3 style="color:#1a5276;">New this month (${newThisMonth.length})</h3>
  ${tableWrap(newThisMonth, "No new coverage found this month.")}

  <h3 style="color:#c0392b;margin-top:32px;">Approved — awaiting publish (${approvedPending.length})</h3>
  ${tableWrap(approvedPending, "No approved items waiting to be published.")}

  <h3 style="color:#888;margin-top:32px;">All awaiting your review (${awaitingReview.length})</h3>
  ${tableWrap(awaitingReview, "Nothing awaiting review — inbox is clear.")}

  <hr style="border:none;border-top:1px solid #ddd;margin:32px 0;"/>
  <p style="font-size:12px;color:#999;">
    Automated digest from ISJ press monitoring.<br/>
    To approve an item: open the sheet and type <strong>YES</strong> in the Approve column.<br/>
    Approved items are committed to the site on the next monthly run.
  </p>

</body>
</html>`;

    // ── 4. Send email ────────────────────────────────────────────────────────
    const subject = `ISJ Press Briefing — ${monthLabel}`;

    await axios($, {
      method: "POST",
      url: "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
      headers: {
        Authorization: `Bearer ${this.gmail.$auth.oauth_access_token}`,
        "Content-Type": "application/json",
      },
      data: {
        raw: Buffer.from(
          `To: ${toEmail}\r\n` +
          `Subject: ${subject}\r\n` +
          `MIME-Version: 1.0\r\n` +
          `Content-Type: text/html; charset=utf-8\r\n\r\n` +
          html
        ).toString("base64url"),
      },
    });

    console.log(`Digest sent to ${toEmail}`);
    $.export("status", "sent");
    $.export("subject", subject);
    $.export("newCount", newThisMonth.length);
    $.export("approvedPending", approvedPending.length);
    $.export("awaitingReview", awaitingReview.length);
  },
});
