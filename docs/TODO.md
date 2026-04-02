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
- [ ] **Authenticate domain with Mailchimp** — set up DKIM/SPF DNS records in Cloudflare for international-school-jakarta.id so emails send from the authenticated domain
- [ ] **Cloudflare proxy decision** — currently DNS-only (grey cloud) for GitHub Pages SSL. If moving to Cloudflare Pages or adding Workers, will need to switch to proxied (orange cloud).

## Content

- [x] ~~Behaviour Expectations page~~ — not needed. The Behaviour Policy covers this. No duplication.
- [x] ~~Fees page current schedule~~ — not needed this year (already term 3). Update with new fees for next academic year.

## Content Roadmap (inspired by Downside audit)

Downside ranks page 1 for "independent school UK" with 1,083 indexed pages. ISJ has 79. The gap is content volume and publishing frequency. See `/home/user/workspace/downside-audit.md` for the full analysis.

### Phase 1: Low-hanging fruit

- [ ] **Weekly news/event articles** — every school event, trip, concert, sports day, assembly becomes a page. 200+ words with photos. Target: 1 per week minimum. Each is a unique indexed URL building topical authority.
- [ ] **Targeted landing pages** (Downside military-families model):
  - [ ] `/expat-families/` — relocating expat families, visa info, settling in, ISJ support
  - [ ] University preparation page — UCAS, Common App, QTAC, direct applications
  - [ ] Boarding pathways — expand from existing news article to standalone page
- [ ] **Flat URL structure for news** — consider whether news articles should be at root level (`/prize-day-2025/`) vs nested (`/news/prize-day-2025/`). Downside puts everything at root for PageRank distribution.

### Phase 2: Content engine (ongoing)

- [ ] **Publishing cadence: 2-3 new pages per month minimum**
- [ ] **Expand Jakarta life content** — more articles like the existing 5 (cost of living, healthcare, things to do, expat contacts, commute). Ideas:
  - Best neighbourhoods for expat families
  - Weekend trips from Jakarta with kids
  - Navigating the Indonesian school system as an expat
  - International school fees comparison guide (without naming competitors directly)
  - Moving to Jakarta checklist
- [ ] **Student/parent voice content** — testimonials, day-in-the-life features, parent Q&As. Each as its own page.
- [ ] **Seasonal content** — term dates announcements, end-of-term round-ups, results day coverage (when GCSEs/A-Levels start)

### Phase 3: Structural page expansion

- [ ] **Individual activity pages** — swimming programme, football, athletics, house system, each as its own page (Downside has 15+ individual sport pages)
- [ ] **Parent resources section** — school uniform guide, daily routines, lunch info, term dates detail. Functional pages parents actually use.
- [ ] **Alumni/destinations section** — as Senior School grows, university destinations and alumni stories. Each destination or story as its own page.
- [ ] **Subject pages for Senior School** — individual pages for each GCSE and A-Level subject offered

### Content quality rules

- Each new page: 300+ words minimum until base is larger
- Every page needs: title tag, meta description, canonical, OG tags, internal links to 2-3 related pages
- Photos on every news/event page
- No thin pages just for volume

## Newsletter Content Mining (177 newsletters, Sept 2021 - March 2026)

All newsletter text and images accessible via Mailchimp API. Content stored at `/home/user/workspace/newsletter-content/`.

Terminology mapping: 2s = Pre-Nursery, 3s = Nursery, 4s = Reception, 5s = Year 1, 6s = Year 2, 7s = Year 3, 8s = Year 4. Always use current terminology (Pre-Nursery, Nursery, Reception, Year 1, etc.) in any repurposed content.

### 1. News/event archive pages
- [ ] **Plan before executing** - catalogue all major events across 177 newsletters (International Week, Harvest Festival, Sports Day, World Book Day, British Science Week, Michaelmas Fair, etc.)
- [ ] Decide which events become standalone website pages
- [ ] Decide format, template, level of detail
- [ ] Build pages one at a time

### 3. Year group page enrichment
- [ ] **Build a content library** - extract the best "News from the [year group]" sections across all 177 newsletters
- [ ] Organise by year group and topic (science, art, English, maths, PE, trips, etc.)
- [ ] Review and select content to enrich Pre-Prep and Prep School pages with real classroom examples

### 4. Parent testimonial mining
- [ ] **Extract parent quotes and feedback** from Academic Director messages and any other sources
- [ ] Add to parent quotes resource for use across the site

### 5. Curriculum in action evidence
- [ ] **Plan a "curriculum in practice" content approach** - how to show real weekly examples of teaching
- [ ] Could be a section within year group pages, or standalone Insights articles
- [ ] Needs careful planning before execution

### 7. Staff voice and personality
- [ ] **Plan approach** - extract teacher-written sections that show personality and teaching style
- [ ] Determine how to use on site (quotes on Our People page? Within year group pages?)
- [ ] Must respect Jakarta security rules (no images, careful with full names)

### 8. Longitudinal storytelling
- [ ] **Track school growth across 4 years** through newsletters - pupil numbers, new programmes, new staff, new year groups, new facilities
- [ ] Build a "The ISJ Story" or timeline page showing genuine development

### 9. SEO long-tail content
- [ ] **Identify unique activities and topics** from newsletters that could become pages
- [ ] International week country studies, specific art/science projects, cultural activities
- [ ] Each targets long-tail search queries no competitor has

### 12. Email-to-blog pipeline (going forward)
- [ ] **Set up a process** where each weekly newsletter's best content also becomes a website page
- [ ] The school already produces this content weekly - just needs dual publishing

## SEO / Technical

- [ ] **Canonical URLs** — policy pages use `/policies/[slug]` canonicals. Verify these are being indexed correctly after deploy.
- [ ] **Internal linking** — add links from relevant pages (e.g. admissions pages) to the policies index.
- [ ] **Homepage meta title** — consider Downside's approach: "An Independent School Near Bath" directly targets the generic query. ISJ equivalent could incorporate "British International School Jakarta" or similar.
