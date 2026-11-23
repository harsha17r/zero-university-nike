**Live page: https://zero-university-nike.vercel.app**

**Slide deck: https://zero-university-nike.vercel.app/presentation**

# Zero University: Nike Pegasus 43 mobile page

A mobile-first product page for the Nike Pegasus 43 at 375px wide, with a 26-size grid. Design prototype, not a store.

- `PLAN.md`: the page plan (fold order, fixed heights, rules, decisions).
- `PEGASUS-STOCK.md`: the 8 December 2026 size and stock list the grid is built from.
- `BUILD-PROMPT.md`: the prompt for building the page with Claude Code.
- `PLAN-PROMPT.md`: the prompt for writing the plan.
- `TRACE-PROMPT.md`: the prompt for the slow-phone speed check, plus `speed-budget.json` and `lighthouse.config.json`.
- `DEPLOY-PROMPT.md`: the prompt for putting the page live on Vercel, with the speed score and screenshots.
- `PHOTOS-PROMPT.md`: the prompt for the Nike photos, the photo carousel and the new title block.
- `SLIDES-PROMPT.md`: the prompt for the slide deck. The deck is `public/presentation.html`, served at /presentation.
- `evidence/`: the full Lighthouse report for the live page (`lighthouse-live-report.html`), the speed score summary, and the phone screenshots with a size tapped. Notes are in `evidence/README.md`.
- `data/stock-2026-12-08.json`: the 8 December 2026 stock list the page reads.
- `RULE.md`: the repo rules. Every stage's prompt is saved here as its own file.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000 and view it at 375px wide (browser dev tools, phone size).

Built with Next.js (App Router), React and TypeScript. The photos are the Nike Pegasus 42 (IB1873-105) from nike.com, in a Blossom Carousel.
