# Senior Campus — Execution Plan

## Source Material
- **Press release:** provided by Darren (full text in this doc below)
- **Renders:** 8 architectural sketches (B&W line drawings + 3 colour-accented versions)
- **Timeline:** NOT for publication — Darren does not want parents referencing specific dates. Use "2028" only.
- **Terminology:** Current campus = "Junior Campus". New campus = "Senior Campus". Previous term "Secondary Campus" / "New Secondary Campus" must be replaced everywhere.

## Design Documentation (MUST follow)
- `docs/DESIGN_PROCESS.md` — 5-step process, layout brief required before code
- `docs/DECISIONS.md` — Aman aesthetic, no "we/our", Cormorant Garamond + DM Sans, gold #FFC43D, hairline dividers, whisper-link CTAs
- `docs/PAGE_MESSAGING.md` — tone and messaging per page
- `docs/BUSINESS_CONTEXT.md` — school facts
- Brand voice: confident, specific, measured, unhurried. No marketing buzzwords. "Growth is managed, not pursued for its own sake."

## Copy Rules (from DECISIONS.md + DESIGN_PROCESS.md)
- No em dashes
- No "we" or "our" — third person only (ISJ, the school)
- No negative framing
- No competitor references
- One vivid detail beats three bullet points
- Show, don't list
- Sparse copy — photography/renders do the heavy lifting

## Image Assets
8 renders provided:
1. `isj-secondary-flw-v2.jpg` — B&W aerial perspective (full campus, football pitch, buildings, trees)
2. `isj-secondary-flw-v2-img1-colour-2.jpg` — Same aerial with orange/blue colour accents on façade
3. `isj-secondary-flw-v2-img2-3.jpg` — B&W overhead plan view (site layout, pitch, drop-off)
4. `isj-secondary-flw-v2-img3-4.jpg` — B&W perspective from street level (full campus from corner)
5. `isj-secondary-flw-v2-img4-5.jpg` — B&W courtyard view (classroom block, courtyard, tree)
6. `isj-secondary-flw-v2-img5-6.jpg` — Colour perspective (sports hall façade with orange/blue panels, courtyard)
7. `isj-secondary-flw-v2-img6-colour-7.jpg` — Colour close-up (sports hall with orange/blue, tree, courtyard)
8. `isj-secondary-flw-v2-img6-8.jpg` — B&W close-up (sports hall entrance, classroom block beyond)

Best hero candidates: #1 (B&W aerial) or #2 (colour aerial) — widest composition, most dramatic.
Best gallery candidates: #3 (plan view), #4 (street perspective), #5 (courtyard), #5/#6 (colour detail).

---

## Task List

### Task 1: Add renders to repo
- Copy all 8 images to `public/images/senior-campus/`
- Optimise (resize to max 1800px wide, convert to JPG, quality 82)
- Name clearly: `aerial-bw.jpg`, `aerial-colour.jpg`, `plan-view.jpg`, `street-perspective.jpg`, `courtyard-bw.jpg`, `courtyard-colour.jpg`, `sports-hall-colour.jpg`, `sports-hall-bw.jpg`

### Task 2: Write PAGE_MESSAGING.md brief for Senior Campus page
Before any code, add a proper brief to `docs/PAGE_MESSAGING.md`:

```
### Senior Campus `/senior-campus`
**Job:** Show prospective families what ISJ is building. Architectural sketches + key facts from press release.
**SEO:** new international school campus Jakarta, British school senior campus Jakarta
**Core message:** A purpose-built senior campus opens in 2028. 300 metres from the junior campus. Science labs, technology labs, art and music studios, a theatre, a library, and a football pitch.
**Supporting:** First cohort (current Year 7s) will go all the way to A-Levels. Schools Trust track record. Eileen + Darren quotes.
**Tone:** Confident, measured, forward-looking. Match the careers page "Growth" section tone. Not breathless — factual and specific.
**Do not include:** Specific construction timeline, dates beyond "2028", unconfirmed details.
```

### Task 3: Write layout brief for Senior Campus page
Following DESIGN_PROCESS.md Step 2:

1. **Page type:** Image-led editorial (like campus page)
2. **Column structure:** Hero + narrow column for text, wide for render gallery
3. **Number of section types:** 2 — SectionIntro (text) and asymmetric image/text splits (like campus page facility sections)
4. **Visual rhythm:** Hero render → intro text → render + facilities description → render + "complete pathway" → quotes → StatBar
5. **Components used:**
   - `Hero` — colour aerial render as full-bleed hero
   - `SectionIntro` — introduction text (press release opening, adapted to ISJ voice)
   - Asymmetric image/text splits (3:2 grid, same pattern as campus page) — 2-3 sections showing different renders with facility descriptions
   - `Testimonial` — Eileen Fisher quote from press release
   - `StatBar` — 2028 · 300m · 3 stats from press release
6. **What Aman would do:** A single stunning render as a full-bleed hero, then sparse text in a narrow column with two more renders at generous scale. No bullet lists. Let the architecture speak.

### Task 4: Build `/senior-campus` page
- Route: `src/pages/senior-campus.astro`
- Follow layout brief exactly
- Use press release as source copy, adapt to ISJ voice (third person, no "we", specific, measured)
- Content structure:
  1. **Hero:** Colour aerial render (`aerial-colour.jpg`), standard aspect
  2. **SectionIntro:** "The Senior Campus" / Label: "Opening 2028". Adapted press release opening — purpose-built, Pondok Indah, 300m from junior campus.
  3. **Render + text split:** Street perspective render + facilities list (science labs, tech labs, art studios, music studios, theatre, library, football pitch). Not a bullet list — one flowing sentence per the copy rules.
  4. **Render + text split (reversed):** Courtyard render + "complete pathway" messaging (current Year 7s = first A-Level cohort, continuous journey age 2-18)
  5. **Testimonial:** Eileen Fisher quote from press release
  6. **StatBar:** `2028` Opening Year · `300m` From Junior Campus · `2–18` Ages on One Campus
  7. Footer CTA handles conversion (no in-page CTA block per design rules)
- Meta: title "Senior Campus | The Independent School of Jakarta", description from press release

### Task 5: Write and publish news article
- Route: `src/pages/news/senior-campus-announcement.astro`
- Uses existing `InsightLayout.astro` or news article layout (check which template news articles use)
- Content: Adapted press release — same ISJ voice, third person, no "we"
- Hero image: B&W aerial render
- Include both quotes (Eileen + Darren)
- Include 2-3 inline renders as editorial images
- Link to `/senior-campus` dedicated page

### Task 6: Terminology swap — "Secondary Campus" → "Senior Campus"
Find-and-replace across the codebase. 3 files need updating:
1. `src/pages/school-life/campus.astro` — "New Secondary Campus" → "The Senior Campus", link to `/senior-campus`
2. `src/pages/academics/senior-school.astro` — "A New Secondary Campus in 2028" → "The Senior Campus", update body text, link to `/senior-campus`
3. `src/pages/careers.astro` — "secondary campus" → "senior campus"
Also introduce "Junior Campus" where both campuses are referenced together.

### Task 7: Homepage addition
Add ONE section to the homepage — a single `SectionIntro` or a small asymmetric image/text block between the "Life at ISJ" section and the second testimonial. One render image + 2 sentences + link to `/senior-campus`. Minimal, not a banner.

### Task 8: Admissions + FAQ updates
- `src/pages/admissions/how-to-apply.astro` or senior school page: 1-2 sentences noting the senior campus, linking to `/senior-campus`
- `src/pages/faqs.astro`: Add 2-3 FAQ entries:
  - "When does the senior campus open?" → 2028
  - "Where is the senior campus?" → 300 metres from the junior campus in Pondok Indah
  - "Will my child move campuses?" → Senior School students (Year 7+) will move to the senior campus

### Task 9: Build, verify, commit, push
- `nvm use 22 && npx astro build`
- Screenshot key pages via Playwright (senior campus page desktop + mobile, homepage addition, news article)
- Visual QA per DESIGN_PROCESS.md Step 4
- Git commit with descriptive message
- Push to main
- Update PLAN.md

---

## Press Release (source copy)

The Independent School of Jakarta to Open Senior Campus

Jakarta, Indonesia - The Independent School of Jakarta (ISJ), part of The Schools Trust, will open a purpose-built senior campus in Pondok Indah, South Jakarta, in 2028.

The new campus sits just 300 metres from ISJ's existing junior campus. This will create a gold standard British international school in South Jakarta offering the English National Curriculum from age 2 through to A-Levels.

A campus built around pupils

The senior campus will house the full range of facilities required of an international standard senior school, such as science laboratories, technology labs, dedicated art and music studios, a theatre, a secondary library, and a football pitch. Every space has been designed to support the breadth of the English National Curriculum at GCSE and A-Level - from the sciences and technology through to the creative and performing arts.

A complete pathway to British qualifications in Jakarta

Current Year 7 pupils at the junior campus will be the first cohort to progress through to A-Levels at the school. For the first time, ISJ families will have a continuous educational journey - from Early Years through to university entrance.

The Schools Trust

ISJ is part of The Schools Trust, which has established 16 British international schools across 11 countries since 2004. Trust schools are ranked 1st and 2nd for A-Level and GCSE results across more than 200 British schools internationally, with 94% of students outperforming the UK national average. Graduates have gone on to Cambridge, Oxford, Imperial, UCL, Edinburgh, St Andrews, Durham, the University of Melbourne, Harvard, Georgetown, and the University of Toronto, among others.

Positioning ISJ among Jakarta's leading international schools

ISJ's expansion brings together three things rarely found in one place in Jakarta: the academic rigour of a top-ranked British education group, international standard facilities, and a prime Pondok Indah location. The addition of GCSEs and A-Levels positions ISJ firmly among the city's leading international schools.

Eileen Fisher, Head of ISJ, said: "Our Year 7s have been with us since they were five. It will be a wonderful feeling to see them grow and graduate with A-levels."

Darren Brown, Trustee of The Schools Trust, said: "After a couple of detours, I'm really proud of what the ISJ community has built. A new campus and a complete pathway through to A-Levels - it's an exciting moment for the school."

---

## Timeline (INTERNAL ONLY — NOT FOR PUBLICATION)
Target opening: June 1, 2028. No specific milestones to be published. Use "2028" only on the website.
