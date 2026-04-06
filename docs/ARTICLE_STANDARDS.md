# ISJ Article Standards
## Applies to: all Insights and News articles using ArticleLayout

Read this file before writing any article. It is the single source of truth.

---

## 1. Before Writing — Required Steps

1. Check `docs/PAGE_MESSAGING.md` for the article brief. If no brief exists, write one and add it before proceeding.
2. Confirm the primary SEO keyword from the brief.
3. Pick the hero image — real photo, no AI-generated images.
4. Confirm the author using `docs/staff-team-2026.md` authorship rules:
   - Article compares other schools → Darren Brown
   - Teacher quote in article → that teacher is the author
   - Otherwise → alternate Eileen Fisher / Darren Brown

---

## 2. ArticleLayout Props — Required Every Time

```astro
<ArticleLayout
  title=""              <!-- includes primary keyword -->
  description=""        <!-- 70–160 chars, for meta/OG, reads naturally -->
  canonicalUrl=""       <!-- /insights/[slug] or /news/[slug] -->
  category=""           <!-- "Jakarta Life" | "Education" | "School News" -->
  categoryHref=""       <!-- /insights or /news -->
  heroImage=""          <!-- /images/insights/[file] or /images/news/[file] -->
  heroAlt=""            <!-- descriptive, includes location/context -->
  author=""             <!-- from staff-team-2026.md rules above -->
  publishedDate=""      <!-- "6 April 2026" format -->
  summary=""            <!-- 1–3 sentences. Renders as TL;DR. Specific, not a teaser. -->
>
```

---

## 3. SEO Rules

- **Primary keyword** in: title, first paragraph, at least one H2
- **Title length:** 50–60 characters
- **Meta description:** 70–160 characters, reads naturally, not keyword-stuffed
- **Internal links:** at least one link to a related ISJ page within the article body
- **No keyword stuffing** — use the keyword naturally, not repeatedly
- **Jakarta Life articles:** target Tier 3 keywords from `docs/keyword-research.md`
- **Education articles:** target education/pedagogy queries, not location queries

---

## 4. Copy Rules

- No em dashes — use commas or full stops
- ISJ does not refer to itself as "we" or "our" in body copy — use "ISJ", "the school", "pupils"
- Direct quotes from named individuals keep first person naturally
- No exclamation marks in body paragraphs
- No blockquotes — not part of the design system
- No Testimonial components inside articles
- No bullet-point TL;DRs — the `summary` prop handles this automatically
- Sparse copy — one vivid detail beats three bullet points
- No exam board names (Edexcel, AQA, Cambridge, etc.)
- Do not state ISJ fees anywhere except the fees page
- Competitor schools: can be named when factually relevant, do not evaluate or compare them negatively

---

## 5. Structure

```
Hero image
↓
TL;DR (automatic from summary prop)
↓
Meta bar (author, date, share)
↓
Opening paragraph — hook + primary keyword
↓
H2 sections (4–8 sections for long-form, 2–4 for shorter pieces)
↓
Natural internal link to related ISJ content near the end
↓
[Footer CTA handles conversion — no in-page CTA blocks]
```

---

## 6. Design Rules

- Single narrow column (`content-narrow`) throughout body
- No in-page CTA blocks — footer handles conversion
- No full-bleed image breaks unless the article is specifically image-led
- Charts/data images: `<img class="img-wide" loading="lazy" />` — renders centred, wider than column
- Inline photos: `<img class="img-wide" loading="lazy" />` — same treatment
- No background colour changes between sections
- No left-border quote styling (not in the design system)
- Hairline dividers only if genuinely needed

---

## 7. Quality Check Before Committing

- [ ] `summary` prop is 1–3 sentences, specific and honest
- [ ] Primary keyword in title, first paragraph, one H2
- [ ] Meta description 70–160 chars
- [ ] Hero image is real, relevant, not AI-generated
- [ ] Author assigned correctly
- [ ] At least one internal link to a related ISJ page
- [ ] No em dashes
- [ ] No "we/our" for ISJ self-reference in body copy
- [ ] No blockquotes, no Testimonial components, no CTA blocks
- [ ] No exam board names, no fees stated
- [ ] Build passes (`npx astro build`)
- [ ] PAGE_MESSAGING.md brief status updated to DONE

---

## 8. Jakarta Life Articles — Additional Rules

- ISJ mention: one natural, contextual reference per article. Never forced.
- Competitor schools: can be named as factual geographical anchors. Do not evaluate.
- Tone: knowledgeable local friend, not school brochure
- Do not make the article about ISJ — it is about Jakarta
- Reference: `docs/PAGE_MESSAGING.md` Jakarta Life section for individual article briefs
