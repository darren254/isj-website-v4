# ISJ Website v4 — Master Plan

Last updated: 2 April 2026

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
| 6 | Arrange a Tour | `/admissions/arrange-a-tour` | Form uses mailto fallback until Cloudflare Workers |
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

### Phase 2 — Depth Pages (P2) ✅ MOSTLY DONE

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
| 30 | Expat Guide | `/insights/expat-guide-jakarta` | NOT STARTED — cornerstone SEO content |
| 31 | Commute Times | `/insights/commute-times-pondok-indah` | NOT STARTED |

### Phase 3 — Nice to Have (P3)

| # | Page | URL | Status |
|---|------|-----|--------|
| 32 | Careers | `/careers` | Page exists |
| 33 | Calendar | `/school-life/calendar` | Page exists — needs CMS integration |
| 34 | Virtual Tour | `/admissions/virtual-tour` | Page exists — embed existing tour |

---

## Pre-Launch Tasks

### Infrastructure

- [ ] **Automate build-deploy pipeline** — every rebuild currently requires manual sed fixes for GitHub Pages paths (images, favicon, CSS filenames with `@`). Create a proper post-build script or switch to Astro's `base` path handling.
- [ ] **Move to Cloudflare Pages** — currently on GitHub Pages. Cloudflare gives Workers, preview deploys, `_redirects` file support.
- [ ] **Cloudflare proxy switch** — currently DNS-only (grey cloud) for GitHub Pages SSL. Moving to Cloudflare Pages requires proxied (orange cloud).
- [ ] **Form handling** — tour + contact forms are mailto fallback. Plan: Resend + Cloudflare Workers.
- [ ] **URL redirects** — implement 45 redirects from `URL_REDIRECT_MAP.xlsx`. On Cloudflare Pages this is a `_redirects` file.
- [ ] **Mailchimp domain authentication** — set up DKIM/SPF DNS records in Cloudflare for international-school-jakarta.id.
- [ ] **Analytics** — Google Analytics 4 + Google Search Console. Set up before launch.
- [ ] **Cookie consent** — required for analytics. Simple banner, links to cookie policy.

### SEO & Quality

- [ ] **Internal linking pass** — systematic pass against SITE_ARCHITECTURE.xlsx. Includes in-content links (Pre-Prep → Prep School, Fees → Scholarships), "What Comes Next" sections, CTA buttons → Arrange a Tour.
- [ ] **Breadcrumb component** — add to all sub-pages (not homepage).
- [ ] **Schema.org markup** — Homepage has EducationalOrganization. Still needed: FAQPage on FAQs, BreadcrumbList on all pages, Article on Insights posts, Event on Calendar.
- [ ] **Sitemap review** — Astro generates automatically. Verify all pages included, URLs correct.
- [ ] **Meta tags review** — verify every page has correct title, description, OG tags, canonical per SITE_ARCHITECTURE.xlsx.
- [ ] **Homepage meta title** — consider Downside's approach: target "British International School Jakarta" directly.
- [ ] **Canonical URLs** — verify policy pages using `/policies/[slug]` are indexed correctly.
- [ ] **Image optimisation** — current JPGs are unoptimised (some 600KB+). Use Astro's built-in image optimisation or process before deploy.
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

## Post-Launch

- [ ] **Sanity CMS** — news, insights, fees, testimonials managed by school staff. Webhook triggers rebuild. Significant piece of work, scope separately.
- [ ] **Bahasa Indonesia** — fast-follow after English launch (Decision #6).
- [ ] **Image refresh** — more photography as school grows, especially Senior School.
- [ ] **A/B testing** — CTA copy, hero images, form placement.

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
