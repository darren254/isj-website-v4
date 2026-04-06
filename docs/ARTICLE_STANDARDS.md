# ISJ Article Standards
## Applies to: all Insights and News articles using ArticleLayout

This is the single source of truth for writing, structuring, and publishing any ISJ article. Read it top to bottom before starting. It covers the full workflow: brief → research → write → props → SEO → quality check → commit.

---

## 1. Before You Start

### Get the brief
Check `docs/PAGE_MESSAGING.md` for the article brief. If no brief exists, write one and add it before proceeding. The brief must include:
- The one job this article does
- Primary SEO keyword
- Target reader and their intent
- Tone notes specific to this piece

### Confirm the keyword
Pull the primary keyword from the brief. Check `docs/keyword-research.md` to confirm it is the right tier:
- Jakarta Life articles → Tier 3 keywords
- Education articles → education/pedagogy queries, not location queries

### Choose the layout: full-bleed hero or text header

**Style A — Full-bleed hero** (`heroImage` prop set): Use when a strong, relevant photo exists that meets the minimum size spec below.

**Style B — Text header** (`heroImage` prop omitted): Use when no suitable image exists. Clean title over cream background.

### Pick the hero image (Style A only)
Real photo. No AI-generated images. Relevant to the article subject, not generic. Do not reuse an image already used on another article.

**Minimum image spec for full-bleed hero use:** 1400px wide, 200KB or more after compression. Images smaller than this will look blurry at full viewport width. If the only available image is undersized, use Style B instead or source a better image.

### Assign the author
Follow the rules in `docs/staff-team-2026.md`:
- Teacher is quoted in the article → that teacher is the author
- All other articles → alternate Eileen Fisher / Engelina Sutantio
- Darren Brown is not used as an article author

Rotation state: `moving-to-jakarta-checklist` (April 2026) is Eileen Fisher. Next article is Engelina Sutantio.

---

## 2. ArticleLayout Props — Required Every Time

```astro
<ArticleLayout
  title=""              <!-- 50–60 chars, includes primary keyword -->
  description=""        <!-- 70–160 chars, reads naturally, not keyword-stuffed -->
  canonicalUrl=""       <!-- /insights/[slug] or /news/[slug] -->
  category=""           <!-- "Jakarta Life" | "Education" | "School News" -->
  categoryHref=""       <!-- /insights or /news -->
  heroImage=""          <!-- /images/insights/[file] or /images/news/[file] -->
  heroAlt=""            <!-- descriptive, includes location/context -->
  author=""             <!-- from authorship rules above -->
  publishedDate=""      <!-- "6 April 2026" format -->
  summary=""            <!-- 1–3 sentences. Renders as TL;DR. Write this last. -->
>
```

Every prop is required. No exceptions. The build will not fail if props are missing, but the article will render incorrectly.

---

## 3. How to Write the TL;DR (`summary` prop)

The `summary` prop renders as a boxed bullet list: cream-dark background, gold left border, gold dot markers, navy text. It is the first thing a reader sees after the headline. Do not add a separate TL;DR block anywhere in the article body.

**Format:** Pipe-delimited string. Each segment separated by ` | ` becomes one bullet point.

```
summary="First key point | Second key point | Third key point"
```

**Write it last** — after the article is complete.

Rules:
- 3–5 bullets. Each is one complete, useful sentence.
- Each bullet stands alone — a reader who only reads the TL;DR should leave knowing the key facts.
- Specific and honest. State the actual conclusion, not a teaser.
- No "Read on to find out...". No superlatives. No vague reassurance.
- No em dashes. The no-em-dash rule applies inside bullets too. Use a full stop and a new sentence.

**Good:**
```
summary="Start the visa process 3 months before arrival. Work KITAS takes 6-10 weeks and school places depend on it | Secure a school place before you arrive. Housing should follow school choice, not the other way around | Household goods must arrive within 90 days and must have been owned for 12 months or more | Register your KITAS with civil authorities within 14 days of arrival"
```

**Bad:**
```
summary="Discover everything you need to know about moving to Jakarta as an expat family."
```

---

## 4. How to Open

The opening paragraph establishes stakes without throat-clearing. No scene-setting that adds no information.

Rules:
- First sentence establishes the real-world stakes or the concrete situation.
- Primary keyword appears naturally in the first paragraph — not forced into the first sentence.
- No rhetorical questions.
- No opening statistic unless it is surprising and directly relevant.
- No "If you're an expat family thinking about..."

**Good** (from best-neighbourhoods-jakarta.astro):
> Jakarta is a city of 30 million people across a metropolitan area the size of greater London. Choosing a neighbourhood is one of the most consequential decisions a relocating family makes. Get it right and daily life is manageable. Get it wrong and school runs become two-hour ordeals, weekends feel unreachable, and the city grinds you down.

What makes it work: concrete stakes immediately, useful scale comparison, keyword lands naturally, no marketing tone.

---

## 5. Structure

```
Hero image
↓
TL;DR (automatic from summary prop)
↓
Meta bar (author, date, share)
↓
Opening paragraph — stakes + primary keyword
↓
H2 sections (4–8 for long-form, 2–4 for shorter pieces)
↓
Natural internal link to related ISJ content near the end
↓
[Footer CTA handles conversion — no in-page CTA blocks]
```

### H2 headings
- Descriptive, not clever. "Pondok Indah" beats "The Green Heart of South Jakarta."
- Primary keyword or close variant in at least one H2.
- 2–4 words for place/neighbourhood articles. Full question format acceptable for education articles.
- No H3s unless a section is genuinely complex enough to need sub-sections. Most articles do not need them.

### Body paragraphs
- 3–5 sentences. No one-liners. No walls of text.
- Each paragraph makes one point. The next paragraph develops or contrasts it. Do not restate.
- One verifiable specific detail per section beats three general statements.
- Acknowledge trade-offs where they exist. Readers trust copy that names the catch. Copy that only presents the positive reads as marketing.

**Bad:** "Pondok Indah is a popular choice for families because of its amenities and pleasant atmosphere."

**Good:** "Pondok Indah Mall is a full-service lifestyle destination. There is a golf course, a water park, an international hospital, and enough cafes, restaurants, and supermarkets that families can meet most daily needs without going far."

---

## 6. SEO — Written In, Not Bolted On

### Keyword placement
- **Title:** include it naturally. If the title sounds awkward with the keyword, rewrite the title.
- **First paragraph:** use it in a sentence that would have been written that way regardless.
- **H2:** use the keyword or a close semantic variant in one section heading — the section that most directly addresses the query.
- **Body:** synonyms and related terms (e.g. "South Jakarta," "expat neighbourhood") help without stuffing. Do not assign a keyword to each paragraph.

### Meta description
- Write it as a sentence a human would read, not a keyword list.
- State what the article covers and the key conclusion or value.
- 70–160 characters — count before committing.
- Must not duplicate the title.

### Internal link
- One natural internal link near the end of the article, to a related ISJ page.
- Must read as a useful next step, not a navigation prompt.
- **Good:** "Families weighing the South Jakarta corridor often start with the commute — the [ISJ commute times tool](/tools/commute-times) maps journey times from the main expat neighbourhoods."
- **Bad:** "Click here to learn more about ISJ."

---

## 7. Voice

One register throughout: knowledgeable local friend. Not a school brochure. Not a lifestyle magazine.

- Direct over diplomatic
- Specific over general
- Earned confidence, not performed enthusiasm
- No adjective-stacking ("fantastic, world-class, inspiring")

The test: would a well-informed person in Jakarta say this sentence in conversation? If not, rewrite it.

---

## 8. Copy Rules

- No em dashes — use commas or full stops
- ISJ does not refer to itself as "we" or "our" in body copy — use "ISJ", "the school", "pupils"
- Direct quotes from named individuals keep first person naturally
- No exclamation marks in body paragraphs
- No blockquotes — not part of the design system
- No Testimonial components inside articles
- No bullet-point TL;DRs — the `summary` prop handles this automatically
- No exam board names (Edexcel, AQA, Cambridge, etc.)
- Do not state ISJ fees — link to the fees page if fee context is needed
- Competitor schools: can be named when factually relevant, do not evaluate or compare them negatively
- Sparse copy — one vivid detail beats three bullet points

### Patterns to eliminate (common in AI drafts)

| Pattern | Example | Fix |
|---|---|---|
| Adjective stacking | "a vibrant, dynamic, world-class city" | Pick one or drop all |
| Empty opener | "Jakarta is a city like no other" | State a fact instead |
| Filler transition | "It is also worth noting that..." | Delete, start the point |
| Marketing superlative | "ISJ's exceptional, award-winning faculty" | State the specific thing |
| Teaser summary | "Read on to discover everything you need to know" | State the answer |
| False balance | "While some prefer X, others prefer Y" (without resolution) | Say which and why |
| Hedged claim | "Jakarta can sometimes be challenging to navigate" | "Jakarta traffic is the defining constraint of daily life" |
| We/our for ISJ | "We offer a broad curriculum" | "ISJ offers a broad curriculum" |

---

## 9. Design Rules

- Single narrow column (`content-narrow`) throughout body
- No in-page CTA blocks — the footer handles conversion
- No full-bleed image breaks unless the article is specifically image-led
- Charts/data images: `<img class="img-wide" loading="lazy" />` — renders centred, wider than column
- Inline photos: `<img class="img-wide" loading="lazy" />` — same treatment
- No background colour changes between sections
- No left-border quote styling (not in the design system)
- Hairline dividers only if genuinely needed

---

## 10. Jakarta Life Articles — Additional Rules

These articles are not about ISJ. They are about Jakarta. ISJ appears once, naturally.

- ISJ mention: one contextual reference per article. The mention that a knowledgeable local would make when describing the area — not a plug.
- Correct: naming ISJ as one of several schools in a neighbourhood when schools are the relevant topic.
- Incorrect: ending sections with references to ISJ's curriculum or values.
- Competitor schools: can be named as factual geographical anchors. Do not evaluate them.
- Tone: knowledgeable local friend, not school brochure.

---

## 11. Target Length

| Article type | Target |
|---|---|
| Jakarta Life — neighbourhood or area guide | 700–1,100 words |
| Jakarta Life — practical (healthcare, cost of living) | 800–1,200 words |
| Education — curriculum or pedagogy | 600–900 words |
| News article | 300–500 words |

Long is not better. If the article is done at 700 words, publish at 700. Do not pad.

---

## 12. Quality Check — Run Before Every Commit

### Writing
- [ ] `summary` prop written after the article, not before — specific and honest, not a teaser
- [ ] Opening paragraph: real stakes in the first two sentences, no throat-clearing
- [ ] Every H2 is descriptive enough to navigate by without reading the body
- [ ] Each paragraph makes one point
- [ ] At least one verifiable specific detail per section
- [ ] Trade-offs or caveats present where they exist in reality
- [ ] No adjective stacking, empty openers, filler transitions, hedged claims

### SEO
- [ ] Primary keyword in title, first paragraph, and one H2 — all placed naturally
- [ ] Title 50–60 characters
- [ ] Meta description 70–160 characters, reads as a sentence
- [ ] At least one internal link to a related ISJ page, reads as a useful next step

### Technical
- [ ] All ArticleLayout props present and correctly filled
- [ ] Hero image is real, relevant, not AI-generated, not reused from another article
- [ ] Author assigned correctly per staff-team-2026.md rules
- [ ] No em dashes, no "we/our", no blockquotes, no Testimonial components, no CTA blocks
- [ ] No exam board names, no fees stated
- [ ] Build passes: `npx astro build`
- [ ] PAGE_MESSAGING.md brief status updated to DONE
