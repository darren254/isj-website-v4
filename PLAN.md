# ISJ Website v4 — Build Plan

Last updated: 29 March 2026

## What We Have

### Pages Built (4)
- [x] Homepage (`/`)
- [x] Why ISJ (`/about/why-isj`)
- [x] Pre-Prep (`/academics/pre-prep`)
- [x] Brand assets page (`/brand`) — internal reference

### Components Built (10)
AccreditationBar, CTABlock, EditorialCard, Footer, Header, Hero, ImageBlock, SectionIntro, StatBar, Testimonial

### Design System
- Tailwind v4 with @theme tokens (navy, gold, cream, charcoal)
- Cormorant Garamond headings + DM Sans body
- Aman-style: cream background, generous whitespace, editorial feel
- Dark charcoal footer (#1E1D1B) with gold CTA
- Gold lion in header, gold stats, gold CTA in footer
- Logo marquee with partner logos
- Parallax on full-bleed images, slow zoom on campus aerial
- Count-up animation on stat bars
- Scroll-reveal on all sections

### Documentation
- `docs/BUSINESS_CONTEXT.md` — school facts, fees, competitors, differentiators
- `docs/DECISIONS.md` — 15 settled decisions
- `docs/SITE_ARCHITECTURE.xlsx` — 34 pages fully specced (URLs, keywords, meta, internal links, content briefs)
- `docs/URL_REDIRECT_MAP.xlsx` — 45 Squarespace redirects
- `docs/keyword-research.md` — Tier 1-5 keyword targets with competitive analysis
- `docs/parent-quotes-2025.md` — 22 parent quotes for testimonials
- `docs/staff_profiles.md` — Eileen Fisher + Emma Webb profiles
- `STRATEGY.md` — overall site strategy

### Images (16 school photos + brand assets)
campus-aerial, eileen-fisher, father-daughter, football-pitch, happy-children-outdoor, house-sports, playground, pre-prep, prep-engineering, primary-classroom, pupils-prep, senior-school, swimming-pool, teacher-pupils, woolverstone-hall, isj-logo. Plus 9 partner logos and full brand pack (lion, horizontal, square in gold/blue/white at 400/800/1600px).

---

## Build Order

### Phase 1 — Core Pages (P1)
The pages that need to exist before launch. Ordered by conversion impact.

| # | Page | URL | Status | Notes |
|---|------|-----|--------|-------|
| 1 | Homepage | `/` | DONE | |
| 2 | Why ISJ | `/about/why-isj` | DONE | |
| 3 | Pre-Prep | `/academics/pre-prep` | DONE | |
| 4 | Prep School | `/academics/prep-school` | TODO | |
| 5 | Senior School | `/academics/senior-school` | TODO | Biggest SEO opportunity |
| 6 | Arrange a Tour | `/admissions/arrange-a-tour` | DONE | Primary conversion page — form uses mailto fallback until Cloudflare Workers |
| 7 | Fees | `/admissions/fees` | DONE | High-intent page |
| 8 | How to Apply | `/admissions/how-to-apply` | DONE | |
| 9 | Age Guide | `/admissions/age-guide` | DONE | |
| 10 | Contact | `/contact` | DONE | Needs form + map |
| 11 | FAQs | `/faqs` | DONE | Accordion component, FAQPage schema |
| 12 | Campus & Facilities | `/school-life/campus` | DONE | Image-heavy |
| 13 | Insights Hub | `/insights` | TODO | Blog listing layout |
| 14 | News Hub | `/news` | TODO | News listing layout |
| 15 | School Policies | `/policies` | TODO | Index page |
| 16 | Privacy Policy | `/privacy` | TODO | Legal |
| 17 | Terms of Service | `/terms` | TODO | Legal |
| 18 | Cookie Policy | `/cookies` | TODO | Legal |
| 19 | Scholarships & Bursaries | `/admissions/scholarships` | TODO | |
| 20 | Admissions T&Cs | `/admissions/terms-and-conditions` | TODO | |

### Phase 2 — Depth Pages (P2)
Add depth and SEO coverage after core is solid.

| # | Page | URL | Notes |
|---|------|-----|-------|
| 21 | Our Head (Eileen Fisher) | `/about/our-head` | |
| 22 | The Schools Trust | `/about/the-schools-trust` | |
| 23 | GCSEs | `/academics/senior-school/gcses` | |
| 24 | A-Levels | `/academics/senior-school/a-levels` | |
| 25 | Curriculum | `/academics/curriculum` | |
| 26 | Results & Outcomes | `/academics/results` | |
| 27 | Sport | `/school-life/sport` | |
| 28 | Arts & Music | `/school-life/arts-music` | |
| 29 | Character & Values | `/school-life/character` | |
| 30 | Expat Guide | `/insights/expat-guide-jakarta` | Cornerstone SEO content |
| 31 | Commute Times | `/insights/commute-times-pondok-indah` | |

### Phase 3 — Nice to Have (P3)
| # | Page | URL | Notes |
|---|------|-----|-------|
| 32 | Careers | `/careers` | |
| 33 | Calendar | `/school-life/calendar` | Needs CMS integration |
| 34 | Virtual Tour | `/admissions/virtual-tour` | Embed existing tour |

---

## Technical Tasks (Do Alongside Page Builds)

### Before Next Deploy
- [ ] **Automate the build-deploy pipeline.** Every rebuild currently requires manual sed fixes for GitHub Pages paths (images, favicon, CSS filenames with `@`). Create a proper post-build script or switch to Astro's `base` path handling with relative image paths in components.

### After Phase 1 Pages Complete
- [ ] **Internal linking pass.** The site architecture defines every page's inbound and outbound links. Once all P1 pages exist, do a systematic pass to ensure every link specified in SITE_ARCHITECTURE.xlsx is implemented. This includes:
  - Footer links (already done — point to correct slugs)
  - Nav menu links (already done — point to correct slugs)
  - In-content links (e.g. Pre-Prep links to Prep School, Fees links to Scholarships)
  - "What Comes Next" sections linking to the next stage
  - CTA buttons linking to Arrange a Tour
- [ ] **Breadcrumb component.** Add breadcrumbs to all sub-pages (not homepage). Helps SEO and navigation.
- [ ] **Schema.org markup.** Homepage has EducationalOrganization. Add:
  - FAQPage schema on FAQs
  - BreadcrumbList on all pages
  - Article schema on Insights posts
  - Event schema on Calendar events
- [ ] **Sitemap review.** Astro generates sitemap automatically. Verify all pages are included and URLs are correct.

### Before Launch
- [ ] **URL redirects.** Implement the 45 redirects from URL_REDIRECT_MAP.xlsx. On Cloudflare Pages this is a `_redirects` file.
- [ ] **Forms.** Arrange a Tour and Contact pages need working forms. Decision #4 says Resend via Cloudflare Workers.
- [ ] **WhatsApp floating button.** Site-wide. Links to admissions WhatsApp.
- [ ] **Image optimisation.** Current images are unoptimised JPGs (some 600KB+). Use Astro's built-in image optimisation or process before deploy.
- [ ] **Performance audit.** Lighthouse, CWV. Target 90+ on all metrics.
- [ ] **Meta tags review.** Verify every page has correct title, description, OG tags, canonical URL per SITE_ARCHITECTURE.xlsx.
- [ ] **Accessibility audit.** Colour contrast, alt text, keyboard navigation, ARIA labels.
- [ ] **Analytics.** Google Analytics 4 + Google Search Console. Set up before launch.
- [ ] **Cookie consent.** Required for analytics. Simple banner, links to cookie policy.
- [ ] **DNS + domain.** Point isj.id to Cloudflare Pages. SSL included.
- [ ] **Sanity CMS integration.** Decision #3. News, insights, fees, testimonials managed by school staff. This is a significant piece of work — scope separately.

### Image Library
- [ ] **Cloud-hosted image library.** Currently 477 images across ISJ, BS Portugal, and BS Lithuania in a GitHub repo (darren254/tst-image-library). Need a cloud solution where the team can browse, add, and delete images through a shared link. Requirements:
  - Visual grid/gallery view with thumbnails
  - Add/delete via the web (no Git knowledge needed)
  - Accessible via a link in the site footer (staff-only section or `/brand` page)
  - Serves images directly as URLs the site can reference
  - Candidate: Cloudflare R2 with a simple gallery frontend, or Sanity media library (if CMS is integrated first)
- [ ] **For now:** Clone tst-image-library repo locally to browse in Finder. Push changes back via Git.

### Ongoing (Post-Launch)
- [ ] **Content: Insights articles.** Expat guide, commute times, GCSE guide, A-Level guide. Each targets specific keyword clusters.
- [ ] **Content: News posts.** School events, achievements, announcements.
- [ ] **Bahasa Indonesia.** Decision #6 says fast-follow after English launch.
- [ ] **Image refresh.** Request more photography as the school grows (especially Senior School once students are there).
- [ ] **A/B testing.** CTA copy, hero images, form placement.

---

## Copy Rules (From Darren's Feedback)

- Lead with the child's experience, not the institution's credentials
- No em dashes
- No negative framing ("Not X. Not Y." / "No X.")
- Don't say "small class sizes" — talk about the benefits (personal attention, the Head knows your child)
- Don't claim "only school in Jakarta" for A-Levels — others may offer them
- Don't put Insights/blog articles on the homepage — parents care less than we think
- Keep testimonials on cream background — no coloured blocks breaking the surface
- Be specific and concrete, not generic and institutional
- "ISJ" not "The ISJ" in copy
- Numbers: say "15" not "maximum 15" (we may occasionally go to 21-22)
- schoolstrust.co.uk not theschoolstrust.com

---

## Open Questions

1. **Hero video.** Darren mentioned having one ready. When provided, replace homepage hero image with autoplay video + image fallback.
2. **Senior School photography.** Current images show primary-age children. Will need Senior School specific photos as the programme grows.
3. **Sanity CMS scope.** When do we integrate? Before launch or after static launch?
4. **Cloudflare Pages setup.** When do we move from GitHub Pages to Cloudflare?
5. **Form provider.** Resend confirmed, but Cloudflare Workers setup needed. Alternative: simple Formspree/Netlify Forms for launch, migrate later?
