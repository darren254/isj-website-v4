# ISJ Charts and Data Visualisation

Read this file before building any chart, graph, or data visualisation on the ISJ site.

---

## Principles

Charts on the ISJ site follow the same Aman Resorts aesthetic as everything else. The question is always: what would Aman do if they had to present data?

- **Minimum visual weight.** Thin bars, no borders, no gridlines, no axes, no chart chrome.
- **Typography does the work.** The numbers and labels are the visualisation. The bars are secondary.
- **Generous breathing room.** More whitespace between groups than you think you need.
- **One accent colour.** Navy (`--navy: #1C2B4A`) for the primary data series. Everything else recedes.
- **No chart libraries.** Pure HTML/CSS. No Chart.js, no D3, no matplotlib, no SVG generation. The site's Tailwind classes and CSS custom properties handle everything.
- **No Python-generated images.** Charts are native HTML elements, not static PNGs. They render with the site's actual fonts, colours, and spacing.

---

## Colour Palette

| Role | Colour | Usage |
|------|--------|-------|
| Primary data (ISJ) | `bg-navy` / `#1C2B4A` | The bar that matters. Bold, dominant. |
| Secondary benchmark | `bg-charcoal-muted/45` / `#A09E96` at 45% opacity | Recedes behind primary. |
| Tertiary / norm | `bg-[#E0DDD6]` (stone) | Almost invisible. Just enough to show the baseline. |
| Labels (primary) | `text-navy font-medium` | For ISJ values. |
| Labels (secondary) | `text-charcoal-muted` | For benchmark/norm values. Faded. |
| Label descriptors | `opacity-60` or `opacity-70` | The word after the number (e.g. "Norm", "ISJ"). Subordinate to the number. |

---

## Bar Chart Pattern

### Structure

```
Subject group
├── Subject name (text-sm, text-navy)
├── Bar row 1: [thin bar] [value] [label]
├── Bar row 2: [thin bar] [value] [label]
└── Bar row 3: [thin bar] [value] [label]
```

### HTML Pattern

```html
<div class="gl-subject">
  <p class="text-[length:var(--text-sm)] text-navy mb-2.5">Subject Name</p>
  <div class="flex items-center gap-2.5 mb-1 h-3.5">
    <div class="gl-bar bg-[#E0DDD6]" style="width:0%" data-target="36.5%"></div>
    <span class="text-[length:var(--text-xs)] tabular-nums text-charcoal-muted whitespace-nowrap">
      104.6 <span class="opacity-60">Norm</span>
    </span>
  </div>
  <div class="flex items-center gap-2.5 mb-1 h-3.5">
    <div class="gl-bar bg-charcoal-muted/45" style="width:0%" data-target="56.25%"></div>
    <span class="text-[length:var(--text-xs)] tabular-nums text-charcoal-muted whitespace-nowrap">
      112.5 <span class="opacity-60">UK Selective</span>
    </span>
  </div>
  <div class="flex items-center gap-2.5 h-3.5">
    <div class="gl-bar bg-navy" style="width:0%" data-target="80%"></div>
    <span class="text-[length:var(--text-xs)] tabular-nums text-navy font-medium whitespace-nowrap">
      122 <span class="opacity-70">ISJ</span>
    </span>
  </div>
</div>
```

### CSS

```css
.gl-bar {
  height: 6px;
  transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Animation (scroll-triggered)

```js
(function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var bars = entry.target.querySelectorAll('.gl-bar');
        bars.forEach(function(bar, i) {
          setTimeout(function() {
            bar.style.width = bar.dataset.target;
          }, i * 80);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.gl-subject').forEach(function(group) {
    observer.observe(group);
  });
})();
```

Bars start at `width: 0%` and animate to `data-target` when scrolled into view. Each bar within a group staggers by 80ms.

---

## Label Format

Always: **value first, label second.** The number is the focal point.

```
122 ISJ
112.5 UK Selective
104.6 Norm
```

Not:
```
ISJ: 122
UK Selective: 112.5
Norm: 104.6
```

The label after the number is faded (`opacity-60` for benchmarks, `opacity-70` for ISJ).

---

## Bar Width Calculation

Map the data range to percentage widths. Choose a sensible floor and ceiling.

For GL Assessment data (scores range 90-130):
```
width% = ((score - 90) / 40) * 100
```

So a score of 100 = 25%, a score of 120 = 75%, a score of 130 = 100%.

---

## Container

Charts sit inside `max-w-[var(--content-narrow)]` like all other content. No special wide layout. Grouped subjects are spaced with `space-y-8`.

---

## What NOT to Do

- No chart libraries (Chart.js, D3, Recharts, matplotlib)
- No Python-generated static images
- No gridlines, axes, borders, or chart chrome
- No legends (labels are inline)
- No tooltips or hover states on bars
- No vertical bar charts (horizontal only)
- No background colour bands or shading
- No rounded corners on bars
- No drop shadows
- No gradients
