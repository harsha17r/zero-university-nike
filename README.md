**Live page: https://zero-university-nike.vercel.app**

**Slide deck: https://zero-university-nike.vercel.app/presentation**

# Zero University: Nike Pegasus 43 mobile page

A mobile-first product page for the Nike Pegasus 43 at 375px wide, with a 26-size grid. Design prototype, not a store.

## Where to find what

In the order of the talk.

| Part of the talk | Where it is |
|---|---|
| 1. The problem | On a slow phone, the photo, font and price load late and push the size buttons down, so shoppers tap the wrong size. Slide deck, first slides. |
| 2. The plan | [`docs/PLAN.md`](docs/PLAN.md): fold order, fixed heights, rules and decisions. Size and stock list: [`docs/PEGASUS-STOCK.md`](docs/PEGASUS-STOCK.md). |
| 3. The phone build | The live page at phone width. Screenshots in [`evidence/screenshots/`](evidence/screenshots/). The code is in `app/`, `components/` and `lib/`. |
| 4. The size grid stays still | [`evidence/lighthouse/speed-score.json`](evidence/lighthouse/speed-score.json): layout shift is exactly 0 in all five runs. The limits it is checked against: [`speed-budget.json`](speed-budget.json). |
| 5. The live page and Lighthouse report | Live page link at the top. Full report: [`evidence/lighthouse/lighthouse-live-report.html`](evidence/lighthouse/lighthouse-live-report.html) (download and open in a browser). Score 100 in all five runs. Settings: [`lighthouse.config.json`](lighthouse.config.json). |
| 6. The slide deck | Deck link at the top. The file is [`public/presentation.html`](public/presentation.html). |

What each evidence file proves, and what was not verified: [`evidence/README.md`](evidence/README.md).

## Folders

- `docs/`: the written plan and the size and stock list.
- `evidence/lighthouse/`: Lighthouse reports and the five-run score summary.
- `evidence/screenshots/`: phone screenshots of the page and the size guide.
- `app/`, `components/`, `lib/`, `data/`, `public/`: the page itself. `data/stock-2026-12-08.json` is the stock list the page reads.
- `RULE.md`: the repo rules.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000 and view it at 375px wide (browser dev tools, phone size).

Built with Next.js (App Router), React and TypeScript. The photos are the Nike Pegasus 42 (IB1873-105) from nike.com, in a Blossom Carousel.
