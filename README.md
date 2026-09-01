# Trial Balance Grid — React demo

A plain React + TypeScript + Vite implementation of the Figma **Trial
Balance Table** design
([source file](https://www.figma.com/design/YCIOOyXcatc7zjImBIegHP/Trial-Balance-Table)),
with an interactive single-page demo deployed to GitHub Pages —
no Storybook, just the components and a demo app.

## What's here

Four components — **Toolbar**, **Header Cell**, **Row**, **Cell** — built as
one consistent set (`src/components/trial-balance-grid/`) and composed into
a responsive **Trial Balance grid** mock reference-app screen. The demo page
(`src/demo/`) showcases every variant of each component, plus the full
composed grid with viewport presets (1280 / 744 / 390) and a manually
resizable frame to see the responsive collapse live.

### Responsive behavior

`TrialBalanceGrid` composes everything into a "Ledger" app screen and
reproduces the following collapse order as width shrinks:

1. **>= 900px (desktop)** — all columns inline, no scrolling.
2. **640–899px (tablet)** — Account Name (+ leading status + trailing
   action) freezes to the left/right edges; Debit / Credit / Notes / Ref #
   scroll horizontally beneath it. Notes hides first once the band gets
   tight (< 700px).
3. **< 640px (mobile)** — the grid becomes a stacked card list.

Layout is measured from the component's own rendered width via
`ResizeObserver` (`useContainerWidth.ts`), so it reacts identically whether
you resize the browser window or the demo page's resizable frame.

## Design tokens

All colors, typography, density spacing and elevation are Material 3
component tokens (`md.comp.data-table.*`) extracted from the Figma file's
Design Tokens page, defined as CSS custom properties in
`src/components/trial-balance-grid/tokens.css`.

## Getting started

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the app
and publishes `dist/` to GitHub Pages via GitHub Actions. Requires
Settings → Pages → Source set to **GitHub Actions**.

## Structure

```
src/components/trial-balance-grid/
  tokens.css                 design tokens (colors, type, density, elevation)
  types.ts                   shared Component Properties contract
  icons/Icons.tsx             inline icon set (instance-swap slot defaults)
  Cell.tsx / HeaderCell.tsx / Row.tsx / Toolbar.tsx
  TrialBalanceGrid.tsx        the composed, responsive mock reference screen
  MobileAccountCard.tsx       card layout used below the mobile breakpoint
  useContainerWidth.ts        ResizeObserver hook driving the responsive layout
  data.ts                     sample account data
  index.ts                    public barrel export
src/demo/
  Swatch.tsx                  labeled tile used by every demo section
  sections/                   one demo section per component + the composed grid
```
