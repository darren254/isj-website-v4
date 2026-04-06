# ISJ Website v4 — Master Plan

Last updated: 4 April 2026

---

## What We Have

### Pages Built (79 .astro files)
All Phase 1 and Phase 2 pages complete. Phase 3 pages built but not prioritised.
- 20 Insights articles
- 10 News articles
- 14 Policy pages
- Brand guide (staff-facing)

### Components (13)
Accordion, AccreditationBar, CTABlock, CookieConsent, EditorialCard, Footer, Header, Hero, ImageBlock, SectionIntro, StatBar, Testimonial, WhatsAppButton

### Design System
- Tailwind v4 with @theme tokens (navy, gold, cream, charcoal)
- Cormorant Garamond headings + DM Sans body
- Aman-style: cream background, generous whitespace, editorial feel
- Warm stone footer (#E8E4DD) with navy text (Decision #16)
- Gold lion in header, gold stats
- CTA buttons #283F6F (lightened per designer feedback), hover darkens to original navy
- Logo marquee with partner logos
- Parallax on full-bleed images, slow zoom on campus aerial
- Count-up animation on stat bars
- Scroll-reveal on all sections
- WhatsApp floating button (bottom-right, site-wide)

### Images
- 56 school photos in `/public/images/`
- 32 brand assets in `/public/images/brand/`
- 18 logos in `/public/images/logos/`
- 10 news images in `/public/images/news/`
- 18 insights images in `/public/images/insights/`
- 477 images in external repo (darren254/tst-image-library) across ISJ, BS Portugal, BS Lithuania

### Documentation (`/docs/`)
- `BUSINESS_CONTEXT.md` — school facts, fees, competitors, differentiators
- `DECISIONS.md` — 18 settled decisions
- `DESIGN_PROCESS.md` — design evolution notes
- `PAGE_MESSAGING.md` — messaging guide for all 34 pages
- `SITE_ARCHITECTURE.xlsx` — 34 pages fully specced (URLs, keywords, meta, internal links, content briefs)
- `URL_REDIRECT_MAP.xlsx` — 45 Squarespace redirects
- `keyword-research.md` — Tier 1-5 keyword targets with competitive analysis
- `parent-quotes-2025.md` — 22 parent quotes for testimonials
- `school-messaging-research.md` — competitor and market messaging analysis
- `staff-team-2026.md` — current staff team
- `staff_profiles.md` — Eileen Fisher + Emma Webb profiles

### Newsletter Archive
177 newsletters (Sept 2021 – March 2026) mined from Mailchimp. Content stored at `/home/user/workspace/newsletter-content/`.

Terminology mapping: 2s = Pre-Nursery, 3s = Nursery, 4s = Reception, 5s = Year 1, 6s = Year 2, 7s = Year 3, 8s = Year 4. Always use current terminology in repurposed content.

---

## Build Order

### Phase 1 — Core Pages (P1) ✅ ALL DONE

| # | Page | URL | Notes |
|---|------|-----|-------|
| 1 | Homepage | `/` | |
| 2 | Why ISJ | `/about/why-isj` | |
| 3 | Pre-Prep | `/academics/pre-prep` | |
| 4 | Prep School | `/academics/prep-school` | |
| 5 | Senior School | `/academics/senior-school` | Biggest SEO opportunity |
| 6 | Arrange a Tour | `/admissions/arrange-a-tour` | Rebuilt 4 April 2026 — form above fold, trust checklist, social proof adjacent to form. mailto fallback until Cloudflare Workers |
| 7 | Fees | `/admissions/fees` | |
| 8 | How to Apply | `/admissions/how-to-apply` | |
| 9 | Age Guide | `/admissions/age-guide` | |
| 10 | Contact | `/contact` | Needs form + map |
| 11 | FAQs | `/faqs` | Accordion component, FAQPage schema |
| 12 | Campus & Facilities | `/school-life/campus` | |
| 13 | Insights Hub | `/insights` | Blog listing layout |
| 14 | News Hub | `/news` | News listing layout |
| 15 | School Policies | `/policies` | Index page |
| 16 | Privacy Policy | `/privacy` | |
| 17 | Terms of Service | `/terms` | |
| 18 | Cookie Policy | `/cookies` | |
| 19 | Scholarships & Bursaries | `/admissions/scholarships` | |
| 20 | Admissions T&Cs | `/admissions/terms-and-conditions` | |

### Phase 2 — Depth Pages (P2) ✅ ALL DONE

| # | Page | URL | Status |
|---|------|-----|--------|
| 21 | Our Head (Eileen Fisher) | `/about/our-head` | DONE |
| 22 | The Schools Trust | `/about/the-schools-trust` | DONE |
| 23 | GCSEs | `/academics/senior-school/gcses` | DONE |
| 24 | A-Levels | `/academics/senior-school/a-levels` | DONE |
| 25 | Curriculum | `/academics/curriculum` | DONE |
| 26 | Results & Outcomes | `/academics/results` | DONE |
| 27 | Sport | `/school-life/sport` | DONE |
| 28 | Arts & Music | `/school-life/arts-music` | DONE |
| 29 | Character & Values | `/school-life/character` | DONE |
| 30 | Expat Guide | `/insights/best-international-schools-jakarta` | DONE — cornerstone 98KB guide with Mapbox map, school comparison table, neighbourhood breakdown. Squarespace redirect in place. |
| 31 | Commute Times | `/insights/jakarta-school-commute-times` | DONE — real commute data from 4 schools to key destinations. Also `/insights/jakarta-commute` covers neighbourhood angle. |

### Phase 3 — Nice to Have (P3)

| # | Page | URL | Status |
|---|------|-----|--------|
| 32 | Careers | `/careers` | Page exists |
| 33 | Calendar | `/school-life/calendar` | Page exists — needs CMS integration |
| 34 | Virtual Tour | `/admissions/virtual-tour` | Page exists — embed existing tour |

---

## Pre-Launch Tasks

### Infrastructure

- [x] **Automate build-deploy pipeline** — Cloudflare Pages auto-builds on push. GitHub Actions workflow and `asset()` helper removed. Done 3 April 2026.
- [x] **Move to Cloudflare Pages** — project `isj-website-v4.pages.dev`. Custom domain `international-school-jakarta.id` active. `www` initialising. Done 3 April 2026.
- [x] **Cloudflare proxy switch** — Cloudflare Pages handles SSL and proxying automatically. Done 3 April 2026.
- [ ] **Domain decision** — host on isj.id (existing authority, brand consistency, staff email). Use international-school-jakarta.id as 301 redirect to isj.id. Transfer isj.id registration from OnlyDomains to Namecheap, DNS to Cloudflare. Update siteUrl + schema refs (5-min find-and-replace). Decision noted 4 April 2026.
- [x] **Form handling** — mailto fallback is fine for now. Calendly embed will replace once Tiffany provides tour slot details. No interim form solution needed.
- [ ] **Tour booking system** — add Calendly embed on `/admissions/arrange-a-tour` once Tiffany provides slot details and requirements.
- [x] **URL redirects** — 111 redirect rules in `public/_redirects`. Full audit against Squarespace sitemap + Search Console. All targets verified. Done 3 April 2026.
- [ ] **Mailchimp domain authentication** — set up DKIM/SPF DNS records in Cloudflare for international-school-jakarta.id. Needs Mailchimp dashboard access to get records.
- [x] **Analytics** — GA4 gtag snippet added to BaseLayout (measurement ID `G-TDE52R9LB1`), gated behind cookie consent. Property ID 475879616. Google Search Console connected. Done 3 April 2026.
- [x] **Cookie consent** — banner built and working. Fires GA4 on accept, suppresses on decline. Done 3 April 2026.

### SEO & Quality

- [x] **Internal linking pass** — 13 in-content links added per SITE_ARCHITECTURE.xlsx audit. GCSEs/A-Levels cross-linked from Curriculum and Results, Terms & Conditions linked from How to Apply, legal pages fully cross-linked. All planned links covered by nav/footer + in-content links. Done 4 April 2026.
- [x] **Breadcrumb component** — REMOVED. BreadcrumbList schema.org structured data already on all sub-pages (SEO value captured). Visible UI breadcrumbs dropped to preserve clean Aman-style layout.
- [x] **Schema.org markup** — EducationalOrganization (all pages via BaseLayout), BreadcrumbList (all sub-pages), FAQPage (FAQs), Article (all insights + news via ArticleLayout). Domain refs fixed to international-school-jakarta.id. Trust URL fixed to schoolstrust.co.uk. Done 4 April 2026.
- [ ] **Sitemap review** — Astro generates automatically. Verify all pages included, URLs correct.
- [x] **Meta tags review** — all 79 pages audited. Titles ≤60 chars, descriptions 70–160 chars, canonicalUrl on every page, OG tags handled by BaseLayout. 34 files updated. Done 4 April 2026.
- [x] **Homepage meta title** — already targets "British International School Jakarta" and "International School Jakarta". Current title: `ISJ | British International School Jakarta | Ages 2–18`. Done.
- [x] **Canonical URLs** — all 14 policy pages confirmed with correct canonicalUrl. Done.
- [x] **Image optimisation** — 35 images compressed (3.8MB total savings). early-years-play.png converted to JPG (665KB → 108KB). Done 4 April 2026.
- [ ] **Performance audit** — Lighthouse, CWV. Target 90+ on all metrics.
- [ ] **Accessibility audit** — colour contrast, alt text, keyboard navigation, ARIA labels.

---

## Policies

- [ ] **Supervision of Pupils Policy** — document not yet provided. Add to public policies when received.
- [ ] **Staff-only policies behind Cloudflare Access** — 12 internal policies need `/staff/policies` section protected by email-based auth. Cloudflare Access free tier (50 users) or paid.
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
- [ ] **Fees policy question** — fees page has detailed payment terms. Inspector might ask "where's your fees policy?" Consider adding a Fees & Payment Policy entry on the policies index linking to `/admissions/fees`.
- [ ] **Admissions Policy as standalone** — currently using Admissions T&Cs as proxy. May want a formal document for the staff set.
- [ ] **EAL and Attendance policies missing metadata** — no author/reviewed/next review. Get from Eileen.
- [ ] **Policy review dates** — several show review dates in 2024. Now publicly visible. Flag to Eileen.
- [ ] **Policy preamble contact** — add a contact email or link to the contact page so people can request additional policies.

---

## Staff Portal (future)

- [ ] **Cloudflare Access setup** — protect `/staff/*` with email-based one-time PIN auth
- [ ] **Staff policy pages** — build 12 internal policy pages at `/staff/policies/`
- [ ] **Move image gallery behind auth** — currently public
- [ ] **Staff brand assets** — downloadable logos, fonts, templates behind login

---

## Content Roadmap

Downside ranks page 1 for "independent school UK" with 1,083 indexed pages. ISJ has 79. The gap is content volume and publishing frequency.

### Content Phase 1: Low-hanging fruit

- [ ] **Weekly news/event articles** — every school event, trip, concert, sports day becomes a page. 200+ words with photos. Target: 1/week minimum.
- [ ] **Targeted landing pages:**
  - [ ] `/expat-families/` — relocating expats, visa info, settling in, ISJ support
  - [ ] University preparation page — UCAS, Common App, QTAC
  - [ ] Boarding pathways — expand from existing news article to standalone page
- [ ] **URL structure decision** — flat (`/prize-day-2025/`) vs nested (`/news/prize-day-2025/`). Downside uses flat for PageRank distribution.

### Content Phase 2: Content engine (ongoing)

- [ ] **Publishing cadence: 2-3 new pages per month minimum**
- [ ] **Expand Jakarta life content:**
  - Best neighbourhoods for expat families
  - Weekend trips from Jakarta with kids
  - Navigating the Indonesian school system as an expat
  - International school fees comparison guide (without naming competitors)
  - Moving to Jakarta checklist
- [ ] **Student/parent voice content** — testimonials, day-in-the-life features, parent Q&As. Each as its own page.
- [ ] **Seasonal content** — term dates, end-of-term round-ups, results day coverage

### Content Phase 2b: Explore Jakarta Hub

Modelled on Harrow Hong Kong's `/his/explore-hong-kong/` section — a dedicated content hub at `/explore-jakarta/` targeting expat families researching Jakarta before or after arrival. Each article is a standalone page optimised for long-tail SEO, funnelling readers toward admissions/tour booking.

**URL structure:** `/explore-jakarta/[slug]`

**Hub page:** `/explore-jakarta/` — editorial listing page (same pattern as `/insights/`)

**Planned articles:**

| # | Article | Slug | Target query |
|---|---------|------|--------------|
| 1 | Best Neighbourhoods for Expat Families in Jakarta | `best-neighbourhoods-expat-families` | expat neighbourhoods jakarta |
| 2 | ~~Things to Do with Kids in Jakarta~~ | — | DONE — `/insights/things-to-do-kids-jakarta` |
| 3 | Things to Do in South Jakarta with Kids | `things-to-do-south-jakarta-kids` | things to do south jakarta kids |
| 4 | Weekend Trips from Jakarta with Kids | `weekend-trips-from-jakarta` | weekend trips jakarta family |
| 5 | Moving to Jakarta: A Checklist for Expat Families | `moving-to-jakarta-checklist` | moving to jakarta expat |
| 6 | Navigating the Indonesian School System as an Expat | `indonesian-school-system-expats` | indonesian school system expat |
| 7 | International School Fees in Jakarta: What to Expect | `international-school-fees-jakarta` | international school fees jakarta |
| 8 | Where Do Expats in Jakarta Go at Weekends? | `where-expats-go-weekends` | expat weekends jakarta |
| 9 | Quality of Life in Jakarta for Expat Families | `quality-of-life-jakarta` | quality of life jakarta expat |
| 10 | Adapting to Life in Jakarta: Tips for New Arrivals | `adapting-to-life-jakarta` | adapting life jakarta expat |
| 11 | ~~Commute Times to Pondok Indah~~ | — | DONE — `/insights/jakarta-school-commute-times` |
| 12 | Best Restaurants and Cafes Near Pondok Indah | `restaurants-cafes-pondok-indah` | restaurants near pondok indah |
| 13 | ~~Healthcare in Jakarta~~ | — | DONE — `/insights/healthcare-expats-jakarta` |
| 14 | Helpers, Drivers and Household Staff in Jakarta | `helpers-drivers-household-staff` | helper jakarta expat |
| 15 | Jakarta vs Singapore vs Bangkok for Expat Families | `jakarta-vs-singapore-vs-bangkok` | jakarta vs singapore expat families |

**Notes:**
- Articles 1-5 overlap with existing Squarespace insights that have real traffic. Migrate and improve those first, redirect old URLs.
- Article 11 replaces the planned standalone `/insights/commute-times-pondok-indah` — lives in Explore Jakarta instead.
- Keep ISJ mentions light and natural — one contextual mention per article plus a standard CTA at the bottom. This is content marketing, not advertorial.
- Same design treatment as Insights articles (hero image, editorial layout, related articles sidebar or footer).
- Publish cadence: 2-3 per month until the hub has 10+ articles, then 1/month maintenance.
- Reference: Harrow HK's approach at `harrowhongkong.hk/his/explore-hong-kong/` — lifestyle content targeting expat families searching for Hong Kong relocation info, funnelling toward the school.

### Content Phase 3: Structural expansion

- [ ] **Individual activity pages** — swimming, football, athletics, house system (Downside has 15+ individual sport pages)
- [ ] **Parent resources section** — uniform guide, daily routines, lunch info, term dates detail
- [ ] **Alumni/destinations section** — as Senior School grows
- [ ] **Subject pages for Senior School** — individual pages for each GCSE/A-Level subject

### Content quality rules

- 300+ words minimum per page
- Every page: title tag, meta description, canonical, OG tags, internal links to 2-3 related pages
- Photos on every news/event page
- No thin pages just for volume

---

## Newsletter Content Mining

9 workstreams from 177 newsletters. All require planning before execution.

1. **News/event archive** — catalogue major events, decide which become pages, decide format/template, build one at a time
2. **Year group enrichment** — extract best "News from the [year group]" sections, organise by topic, use to enrich Pre-Prep and Prep pages
3. **Parent testimonial mining** — extract quotes from Academic Director messages and other sources
4. **Curriculum in action** — plan approach for showing real weekly teaching examples
5. **Staff voice** — extract teacher-written sections showing personality. Respect Jakarta security rules (no images, careful with full names)
6. **Longitudinal storytelling** — track school growth across 4 years for a timeline/"ISJ Story" page
7. **SEO long-tail content** — identify unique activities/topics that could become pages targeting queries no competitor has
8. **Email-to-blog pipeline** — set up dual publishing so each weekly newsletter's best content also becomes a website page

---

## Image Library

- [ ] **Cloud-hosted solution** — currently 477 images in GitHub repo (darren254/tst-image-library). Need a visual gallery where staff can browse, add, delete via web. Candidate: Cloudflare R2 with gallery frontend, or Sanity media library.

---

## Connectors & Integrations

### Connected (via Perplexity Computer)
- **Gmail + Calendar** — email and calendar access
- **Google Drive** — file export
- **Google Sheets** — read/write spreadsheets
- **Google Analytics (GA4)** — run reports, create events/properties
- **GitHub** — full CLI access to repos
- **Mailchimp** — campaigns, lists, subscribers, tags
- **FireCrawl** — structured web data extraction

### Recently connected
- **Google Search Console** — indexing status, search performance, keyword data. Connected 2 April 2026.
- **Cloudflare** — DNS records, cache, SSL, zones, KV storage. Connected 2 April 2026.
- **Google Business Profile** — reviews, posts, replies. Connected 2 April 2026. Needs account/location IDs to query.
- **Squarespace** — commerce API only. Content audit done via sitemap + Search Console (2 April 2026).

### Future (connect when ready to implement)
- [ ] **Sanity** — CMS integration for news, insights, fees, testimonials
- [ ] **Resend** — transactional email for tour/contact forms via Cloudflare Workers
- [ ] **WhatsApp Business** — automate admissions enquiry responses beyond the floating button
- [ ] **Ahrefs or DataForSEO** — keyword rank tracking, backlink monitoring, feeds content roadmap decisions

---

## Squarespace Content Audit

Audit completed 2 April 2026. Search Console data (Jan–Apr 2026) cross-referenced against v4 pages. 18 pages with active traffic have no v4 equivalent (812 clicks, 86.6K impressions at risk).

### High-traffic insights to migrate

These pages are doing real SEO work on isj.id and need v4 equivalents or proper redirects before launch.

| Squarespace URL | Clicks (90d) | Impressions | Action |
|---|---:|---:|---|
| `/insights/expats-guide-to-international-schools-in-jakarta` | 269 | 39,703 | Migrate — cornerstone content |
| `/insights/things-to-do-with-kids-in-jakarta-2026` | 156 | 6,432 | Migrate |
| `/insights/ultimate-guide-to-jakartas-neighbourhoods-and-international-schools` | 70 | 10,514 | Migrate |
| `/insights/35-things-to-do-with-kids-in-south-jakarta` | 62 | 3,732 | Migrate |
| `/insights/jakartas-premier-international-schools` | 38 | 2,873 | Migrate |

- [ ] **Full 301 redirect audit** — cross-check every Squarespace sitemap URL and every URL with Search Console traffic against the redirect map. The current `URL_REDIRECT_MAP.xlsx` has 45 entries but the Squarespace sitemap has 80+ URLs and Search Console shows traffic to pages not in the sitemap (e.g. `/insights/35-things-to-do-with-kids-in-south-jakarta`, `/relocating-to-jakarta-with-children`, `/gl-assessments-explained`). No page with traffic should 404 after launch.

### Unique content pages — all redirected

All 10 unique Squarespace pages have 301 redirects to equivalent v4 content. No pages will 404.

- [x] `/jakarta-international-schools-comparison-tool` → `best-international-schools-jakarta` (has comparison table)
- [x] `/the-school-charter` → `/about/why-isj`
- [x] `/stayandplay` → `/admissions/arrange-a-tour`
- [x] `/in-the-news` → `/news`
- [x] `/relocating-to-jakarta-with-children` → `best-international-schools-jakarta`
- [x] `/gl-assessments-explained` → `/faqs`
- [x] `/commute-times` → covered by `jakarta-school-commute-times` + `jakarta-commute`
- [x] `/leading-british-school-jakarta` → `/about/why-isj`
- [x] `/curriculum-guide-teaching-learning` → `/academics/curriculum`
- [x] `/curriculum-guide-introduction` → `/academics/curriculum`

### Squarespace insights — status

All 8 Squarespace insight articles have 301 redirects in place. 2 redirect to equivalent v4 content, 6 redirect to `/insights` hub (low/zero traffic, not worth dedicated pages now). Content engine work for later if page count matters.

- [x] `choir-and-music-programme` → redirects to `singing-across-curriculum` (direct match)
- [x] `jakartas-leading-british-school` → redirects to `best-international-schools-jakarta` (absorbed)
- [x] All 6 insight articles rebuilt as v4 pages. Redirects updated. Done 6 April 2026.

### Squarespace news — status

All 8 Squarespace news articles redirect to `/news` hub. All zero traffic. Rebuild as part of content engine when publishing cadence ramps up.

- [x] All 8 news articles migrated. Content, images, and redirects updated. Done 6 April 2026.

---

## Post-Launch

- [ ] **Sanity CMS** — news, insights, fees, testimonials managed by school staff. Webhook triggers rebuild. Significant piece of work, scope separately.
- [ ] **Image refresh** — more photography as school grows, especially Senior School.
- [ ] **A/B testing** — CTA copy, hero images, form placement.

---

## Language Pages

Squarespace has 9 language-specific landing pages targeting parents searching in their native language. The Bahasa Indonesia page alone has 81 clicks and 15.7K impressions in 90 days. Decision #6 says Bahasa is a fast-follow after English launch, but these pages show there's demand across multiple languages.

### Existing Squarespace language pages (with Search Console data where available)

| Language | Squarespace URL | Clicks (90d) | Impressions |
|---|---|---:|---:|
| Bahasa Indonesia | `/bahasa-indonesia` | 81 | 15,657 |
| Japanese | `/japanese` | 37 | 823 |
| Chinese | `/chinese` | 31 | 1,370 |
| Korean | `/korean` | 19 | 1,061 |
| French | `/french` | 5 | 375 |
| Italian | `/italian` | — | — |
| Spanish | `/spanish` | — | — |
| German | `/german` | — | — |
| Dutch | `/dutch` | — | — |

### Plan

- [ ] **Bahasa Indonesia** — priority. Fast-follow after English launch (Decision #6). Full site translation or key pages (homepage, admissions, fees, tour).
- [ ] **Japanese, Chinese, Korean** — the data shows real search demand. These don't need full translations, just targeted landing pages explaining ISJ in each language with a CTA to book a tour. Replicate the Squarespace approach but with v4 design.
- [ ] **European languages (French, Italian, Spanish, German, Dutch)** — lower priority. Minimal traffic. Consider adding only if there's a meaningful parent community for each.
- [ ] **301 redirects** — all 9 Squarespace language URLs must redirect to their v4 equivalents (or a holding page) to preserve any SEO equity.

---

## Copy Rules

- Lead with the child's experience, not the institution's credentials
- No em dashes
- No negative framing ("Not X. Not Y." / "No X.")
- Don't say "small class sizes" — talk about benefits (personal attention, the Head knows your child)
- Don't claim "only school in Jakarta" for A-Levels — others may offer them
- Don't put Insights/blog articles on the homepage
- Keep testimonials on cream background — no coloured blocks breaking the surface
- Be specific and concrete, not generic and institutional
- "ISJ" not "The ISJ"
- Numbers: say "15" not "maximum 15" (may occasionally go to 21-22)
- schoolstrust.co.uk not theschoolstrust.com
- No "we" or "our" pronouns — use "ISJ", "the school", or third-person (Decision #17)

---

## Open Questions

1. **Hero video** — Darren mentioned having one ready. Replace homepage hero image with autoplay video + image fallback when provided.
2. **Senior School photography** — current images skew primary-age. Need Senior School photos as programme grows.
3. **Sanity CMS timing** — before launch or after static launch?
4. **Form provider for launch** — Resend + Cloudflare Workers is the plan. Alternative: Formspree/Netlify Forms as interim?

---

## Change Log

### 5 April 2026 (session 4)
- Built `/senior-campus` dedicated page with architectural renders (hero, 2 asymmetric sections, full-bleed image break, testimonials, StatBar). Follows campus page patterns.
- Published `/news/senior-campus-announcement` news article with adapted press release, inline renders, Eileen + Darren quotes.
- Terminology swap: "Secondary Campus" / "New Secondary Campus" replaced with "Senior Campus" across campus page, senior school page, and careers page. "Junior Campus" introduced where both campuses are referenced.
- Added Senior Campus section to homepage (asymmetric render + 2 sentences between Life at ISJ and second testimonial).
- Added 3 Senior Campus FAQ entries (when, where, will my child move).
- Added senior campus link to admissions how-to-apply entry points section.
- Updated PAGE_MESSAGING.md with Senior Campus and news article briefs.
- Created docs/SENIOR_CAMPUS_BRIEF.md execution plan with press release, layout brief, and image inventory.
- 8 architectural renders optimised and added to `public/images/senior-campus/`.

### 4 April 2026 (session 3)
- Replaced 6 Jakarta-life article hero images with relevant photos pulled from the original Squarespace articles: things-to-do → SuperPark playground, jakarta-commute → Pondok Indah aerial, cost-of-living → Jakarta CBD dusk, expat-contacts → Kemang street scene, healthcare → Jakarta skyline daytime, commute-times → ISJ football kids. All images optimised to JPG, under 400KB each.
- Insights article layout fixes:
  - `/insights/best-international-schools-jakarta` — moved interactive Mapbox location map from line 648 to directly below intro section, so map is visible without deep scrolling.
  - `/insights/expat-contact-list-jakarta` — trimmed real estate agents from 4 to 3 (removed Jakarta Luxury Homes), kept Savills, Colliers, Knight Frank. Added `rel="nofollow"` to all three agent website links.
  - Audited all 6 Jakarta-life insight articles for duplicate hero images (pondok-indah.webp was used 4×). Assigned unique images: cost-of-living → happy-children-outdoor.jpg, expat-contacts → outdoor-cooking-activity.jpg, healthcare → swimming-pool.jpg, things-to-do → playground.jpg, jakarta-commute → secondary-students-laptop.jpg, commute-times → boys-football-laughing.jpg.

### 4 April 2026 (session 2)
- Rebuilt `/admissions/arrange-a-tour` — form moved above fold (was buried below ~4vh of content), trust signals converted to scannable checklist, parent testimonial placed adjacent to form, "Age" changed to "Date of Birth", "Preferred Date" field added, duplicate content removed, practical details condensed to 3-column grid. Redundant inline WhatsApp CTA removed (floating button is site-wide). Committed `8f0429e`.
- Summary email sent to Darren with CRO/copywriter/CMO rationale.

### 4 April 2026 (session 1)
- Fixed early-years-play.png → .jpg reference, deleted old PNG, committed image compression + schema fixes (43 files).
- Internal linking pass: 13 in-content links added across 9 pages per SITE_ARCHITECTURE.xlsx audit.
- Meta tags audit: trimmed 4 titles, 18 descriptions, expanded 2, added canonical to brand.astro (34 files).
- Domain decision recorded: host on isj.id, 301 from international-school-jakarta.id. Transfer isj.id from OnlyDomains → Namecheap, DNS → Cloudflare.
- Registrar note: move domains from OnlyDomains to Namecheap + Cloudflare DNS.
- GA4 measurement ID confirmed: `G-TDE52R9LB1` (placeholder was in code from previous session, now replaced).
