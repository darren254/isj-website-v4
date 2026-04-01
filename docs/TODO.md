# ISJ Website — Outstanding Work

Running list of tasks, ideas, and open questions. Updated each session.

---

## Policies

- [ ] **Supervision of Pupils Policy** — document not yet provided. Add to public policies when received.
- [ ] **Staff-only policies behind Cloudflare Access** — 12 internal policies need `/staff/policies` section protected by email-based auth. Cloudflare Access free tier (50 users) or paid if needed.
  - Staff Code of Conduct
  - Safer Recruitment Policy
  - Whistleblowing Policy
  - Teaching & Learning Policy
  - Curriculum Policy
  - Assessment, Recording & Reporting Policy
  - More Able / Gifted & Talented Policy
  - Homework & Marking Policy
  - Staff Appraisal & Development Policy
  - Risk Management & Business Continuity Plan
  - Policy Management & Review Schedule
  - Parent Communication & Engagement Policy
- [ ] **Fees policy question** — the fees page has detailed payment terms (late fees, notice periods, refunds, sibling discounts). Not referenced as a "policy" anywhere. An inspector might ask "where's your fees policy?" Consider whether to add a Fees & Payment Policy entry on the policies index that links to `/admissions/fees`.
- [ ] **Admissions Policy as standalone** — currently using Admissions T&Cs as proxy. May want a formal admissions policy document for the staff set.
- [ ] **EAL and Attendance policies missing metadata** — no author/reviewed/next review info in their source documents. Get from Eileen.
- [ ] **Policy review dates** — several policies show review dates in 2024. These are now publicly visible. Flag to Eileen for governance housekeeping.
- [ ] **"School office" in preamble** — consider adding a contact email or link to the contact page so people can actually request additional policies.
- [ ] **Schema markup on policy pages** — could add Article or WebPage schema with dateModified matching review dates. Low priority.

## Staff Portal (future)

- [ ] **Cloudflare Access setup** — protect `/staff/*` path with email-based one-time PIN auth
- [ ] **Staff policy pages** — build the 12 internal policy pages at `/staff/policies/`
- [ ] **Move `/admin/library/` behind auth** — image gallery currently public
- [ ] **Staff brand assets** — downloadable logos, fonts, templates behind login
- [ ] **Other staff tools** — TBD based on need

## Site Infrastructure

- [ ] **Form handling** — contact + tour forms currently mailto: fallback. Plan: Resend + Cloudflare Workers for proper submission handling before launch.
- [ ] **DNS fully on Cloudflare** — DONE (April 2026). Nameservers active, SSL working.
- [ ] **Cloudflare proxy decision** — currently DNS-only (grey cloud) for GitHub Pages SSL. If moving to Cloudflare Pages or adding Workers, will need to switch to proxied (orange cloud).

## Content

- [x] ~~Behaviour Expectations page~~ — not needed. The Behaviour Policy covers this. No duplication.
- [x] ~~Fees page current schedule~~ — not needed this year (already term 3). Update with new fees for next academic year.

## SEO / Technical

- [ ] **Canonical URLs** — policy pages use `/policies/[slug]` canonicals. Verify these are being indexed correctly after deploy.
- [ ] **Internal linking** — add links from relevant pages (e.g. admissions pages) to the policies index.
