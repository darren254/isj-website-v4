# ISJ Website v4 — Master Plan

Last updated: 6 April 2026

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

## Todo

### Pre-Launch
- [ ] **Tour booking / Calendly** — add Calendly embed on `/admissions/arrange-a-tour` once Tiffany provides slot details
- [ ] **Mailchimp DKIM/SPF** — set up DNS records in Cloudflare to lower spam risk
- [ ] **Manually edit website backend/functions** — any server-side or function config changes needed before launch
- [ ] **Image library** — solution for storing, deleting, browsing and categorising school images (auto-categorisation). Candidates: Cloudflare R2 + gallery frontend, Sanity media library

### Pre-Launch QA
- [ ] **Sitemap review** — verify Astro auto-generated sitemap has all pages and correct URLs
- [ ] **301 redirect audit** — cross-check all old Squarespace URLs against redirect map; no traffic page should 404
- [ ] **Performance audit** — Lighthouse / Core Web Vitals, target 90+ on all metrics
- [ ] **Accessibility audit** — colour contrast, alt text, keyboard navigation, ARIA labels
- [ ] **SEO audit** — meta tags, canonicals, internal links, structured data

### Launch
- [ ] **Go live on isj.id**

### Post-Launch
- [ ] **Bahasa Indonesia and other languages** — priority language first, then Japanese/Chinese/Korean landing pages
- [ ] **Move domains from OnlyDomains to Namecheap** — transfer isj.id; DNS to Cloudflare; update siteUrl and schema refs


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

### 6 April 2026 (session 5)
- Built 12 new policy pages: staff-code-of-conduct, safer-recruitment, whistleblowing, teaching-and-learning, parent-communication, policy-management, risk-management, staff-appraisal, marking-and-feedback, more-able, assessment-and-reporting, curriculum. All use PolicyLayout with full metadata and table of contents.
- Added supervision-of-pupils to public policies index (page was already built, just missing from index).
- Updated policies.astro index: added supervision-of-pupils to Safeguarding and Welfare; added 5 new academic policies to Academic group; added two new groups — Staff and Employment (4 policies), Operations and Governance (3 policies). Updated intro paragraph (removed "available on request" language — all policies now public).
- Filled admissions/terms-and-conditions.astro with real content (11 sections from Squarespace T&Cs). No fee numbers on this page — references /admissions/fees.
- Built admissions/behaviour-expectations.astro — two sections (pupils and parents/guardians), uses BaseLayout, links back to admissions.
- Decision: no login wall needed. All policies are public. Image bank is public (SEO benefit). Cloudflare Access shelved.

### 6 April 2026 (session 5 continued — compliance)
- All policy metadata dates updated to April 2026 across all 17 policy pages (2021/2022/2023/2025 → April 2026). Next review dates set to April 2027.
- Built 5 new compliance policy pages: admissions, equal-opportunities, remote-learning, accessibility (+ admissions already counted above).
- Behaviour Policy renamed to "Behaviour Policy (incl. Anti-Bullying)" on index and policyName prop — anti-bullying is covered within that policy, no standalone page needed.
- Updated policies index: contact line added (admissions@isj.id); Admissions Policy added to Admissions and Operations; Equal Opportunities, Remote Learning, Accessibility added to Operations and Governance.
- Compliance gaps closed: admissions policy, equal opportunities, remote learning, accessibility statement, contact info on index.
- Remaining compliance gaps for Eileen to note: full accessibility audit pending (pre-launch QA task).
