# ISJ Website — Page Design Process

Every page must go through this process before code is written. No exceptions.

---

## Step 1: Content Brief

Read `PAGE_MESSAGING.md` for the page. Confirm:
- What is the one job of this page?
- What are the 2-3 key messages?
- What tone? (warm, factual, ambitious, etc.)
- What SEO keywords?

If the page is not in PAGE_MESSAGING.md, write the brief first and get sign-off.

## Step 2: Layout Brief (NEW — mandatory)

Before any code, write a short layout brief answering:

1. **Page type:** What is this page most like? (editorial profile, information page, conversion page, listing page)
2. **Column structure:** Single narrow column? One asymmetric split? Hero + narrow column?
3. **Number of section types:** Maximum 2 distinct layout patterns per page. Name them.
4. **Visual rhythm:** What alternates? (e.g. "text section, divider, text section, divider" or "hero, then narrow column throughout")
5. **Components used:** List the specific components. Justify each one. If it is not earning its place, cut it.
6. **What Aman would do:** One sentence describing how Aman would present this content. Use this as the quality bar.

Get sign-off on the layout brief before building.

## Step 3: Build

- Build the page following the layout brief exactly
- Use `max-w-[content-narrow]` as the default column width for body content
- Only use `max-w-[content-wide]` when the page genuinely needs it (e.g. image grids, data tables)
- Hairline dividers (`border-t border-charcoal/10`) to separate sections, not background colour changes
- Data tables and key-value pairs: constrain width with `max-w-sm` or `max-w-lg`. Do not let them stretch to full content-narrow width
- Whisper-link CTAs, not filled buttons (footer handles the main conversion CTA)

## Step 4: Visual QA

- Screenshot at 1280px desktop and 375px mobile via Playwright
- Check: Does this look like one page or a component demo?
- Check: Would Aman produce this? If not, what needs to change?
- Check: Text overflow, spacing, alignment, hierarchy

## Step 5: Deploy

- Build, push dist to gh-pages, push source to main
- Update PLAN.md status

---

## Design Rules (from Decisions + Darren feedback)

### Layout
- Default to single narrow column (`content-narrow`) for editorial pages
- Maximum 2 layout patterns per page
- No component buffet: every element must earn its place
- No full-bleed image breaks mid-page unless the page is specifically image-led (e.g. Campus)
- No in-page CTA blocks: the footer CTA handles conversion on sub-pages
- Hairline dividers between sections, not background colour changes

### Typography
- Cormorant Garamond for headings (light weight)
- DM Sans for body
- Gold labels (`label-gold`) for category markers
- Hierarchy through size, not through switching layout patterns

### Tone
- Aman is the primary design reference (luxury hospitality, not school websites)
- Generous whitespace is a feature, not empty space to fill
- Photography does the heavy lifting — text stays out of the way
- Sparse copy. One vivid detail beats three bullet points.

### Copy Rules
- No em dashes
- No "we" or "our" when ISJ is referring to itself in marketing copy — use third person (ISJ, the school). Direct quotes from named individuals may use first person naturally.
- No negative framing
- No mention of exam boards
- No competitor references
- Numbers: say "15" not "maximum 15"
- Do not state fees on pages other than the fees page

### Components
Only use these when they genuinely serve the page:

| Component | Use when | Do not use when |
|-----------|----------|-----------------|
| Hero | Page needs a strong visual opening | Every page by default |
| SectionIntro | Centred opening statement | Page already has a heading in the narrow column |
| StatBar | 3-4 impressive numbers to land | Stats feel forced or duplicated in body text |
| Testimonial | A quote genuinely adds credibility | Padding between sections |
| ImageBlock | Page is image-led (Campus, School Life) | Breaking up text flow for visual variety |
| Accordion | Genuinely repetitive Q&A content (FAQs) | Making long pages feel shorter |
| CTABlock | Never on sub-pages | — |
| EditorialCard | Hub/listing pages only | — |

---

## Article Standards (Insights + News)

**Read `docs/ARTICLE_STANDARDS.md` before writing any article.** It is the single reference for design, copy, SEO, and structure. Do not rely on memory.

Every article using `ArticleLayout` must have:

- **`summary` prop** — 1-3 sentences. This renders automatically as the **TL;DR** block below the title, labelled in gold. It is the reader's first touchpoint after the headline. Make it specific and honest, not a teaser.
- **`heroImage`** — relevant, real photo. No AI-generated images.
- **`author`** — follow authorship rules in `docs/staff-team-2026.md`
- **`publishedDate`** — set correctly
- **`category` + `categoryHref`** — Education/Jakarta Life + /insights, or School News + /news

The TL;DR is built into `ArticleLayout.astro`. It renders automatically from the `summary` prop. Do not add a separate TL;DR block in the article body.

---

## Reference Files

- `docs/PAGE_MESSAGING.md` — content briefs per page
- `docs/BUSINESS_CONTEXT.md` — school facts, fees, competitors
- `docs/DECISIONS.md` — 17 settled design decisions
- `docs/parent-quotes-2025.md` — 22 testimonials
- `docs/staff-team-2026.md` — teaching team + authorship rules
- `PLAN.md` — build order and status
