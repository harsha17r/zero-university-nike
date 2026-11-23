# Evidence from the live page

Live page: https://zero-university-nike.vercel.app

## What is in this folder

| File | What it proves |
|---|---|
| `lighthouse/2026-11-23/run1.html` to `run3.html` | The newest Lighthouse reports for the live page, taken on 23 Nov 2026 on the latest page: scores 99, 99, 100, layout shift 0 in all three. Open them in a browser. The `.json` files next to them are the same reports as raw data. |
| `lighthouse/2026-11-23/run1-slide.jpg` | The top of the run 1 report (score 99, layout shift 0, load frames). This is the image on slide 6 of the deck. |
| `lighthouse/lighthouse-live-report.html` | The full Lighthouse report for the live page (run 1). Open it in a browser: score 100, layout shift 0. |
| `lighthouse/lighthouse-live-report.json` | The same report as raw data. |
| `lighthouse/speed-score.json` | All five runs in one place, checked against `speed-budget.json`. This is the proof the size grid stays still: layout shift is exactly 0 in every run. |
| `screenshots/phone-size-tapped.jpg` | Top of the page on a phone-size screen, with a low-stock size tapped. |
| `screenshots/phone-size-tapped-grid.jpg` | All 26 sizes, the 9 sold-out ones struck through, and "Only 4 left in M 5 / W 6.5." |
| `screenshots/size-guide-drawer.jpg` | The size guide drawer open, with the left-aligned Men's US / Women's US / EU table. |
| `screenshots/deck-first-screen.jpg` | The first screen of the page, as used on slide 5 of the deck. |
| `screenshots/deck-size-grid.jpg` | The size grid with a size tapped and the black Add to Bag bar, as used on slide 5 of the deck. |

There is no separate DevTools trace file. The size grid check was done with Lighthouse (see "Not verified" below).

## Speed score, 23 Nov 2026 (latest page)

Lighthouse 13.6.0, three runs on the live Vercel page, with the same settings in `lighthouse.config.json`.

| Run | Performance score | Layout shift | First paint | Largest paint |
|---|---|---|---|---|
| 1 | 99 | 0 | 796 ms | 1973 ms |
| 2 | 99 | 0 | 780 ms | 1980 ms |
| 3 | 100 | 0 | 771 ms | 1857 ms |

Reports: `lighthouse/2026-11-23/`.

## Speed score, 22 Nov 2026 (before the photo carousel)

Lighthouse, five runs on the live Vercel page, with the Slow 4G mobile settings in `lighthouse.config.json` at the top of the repo (375 x 812 at 3x, 150 ms round trip, 1638.4 Kbps, 4x CPU slowdown).

| Run | Performance score | Layout shift | First paint | Largest paint |
|---|---|---|---|---|
| 1 | 100 | 0 | 803 ms | 1548 ms |
| 2 | 100 | 0 | 782 ms | 1832 ms |
| 3 | 100 | 0 | 850 ms | 1900 ms |
| 4 | 100 | 0 | 846 ms | 846 ms |
| 5 | 100 | 0 | 860 ms | 860 ms |

Full Lighthouse report for run 1: `lighthouse/lighthouse-live-report.html` (open it in a browser) and `lighthouse/lighthouse-live-report.json`.

Against `speed-budget.json`: score needs 90 or more (100 in every run), smallest size button 44px or more (48px), and the size grid must not move. Nothing shifted in any run: the layout shift is exactly 0. Full numbers: `lighthouse/speed-score.json`.

History: an earlier set of three runs, before a font fix, had one run with a tiny shift (0.00003) of the "Launching 10 Dec" label when the Geist font finished loading late. The fix was to load Geist with `display: "optional"`, so the font never swaps in late. Five of five runs since are clean. That is good evidence, not proof, because the shift only showed up in one of three runs before.

When each piece was taken (all on 22 Nov 2026): the Lighthouse runs at about 17:15, before the Nike photo carousel and the later polish were added. The two `phone-size-tapped` screenshots at about 21:03, with the photo carousel but before the Swoosh, the black Add to Bag bar and the size guide drawer. The two `deck-` screenshots at about 21:23 and the size guide drawer at about 22:09, on the latest page. The 23 Nov runs above were taken on the latest page.

## Phone screenshots with a size tapped

Taken on the live page at 375 x 812 (phone-size browser window), after tapping M 5 / W 6.5, a low-stock size.

- `screenshots/phone-size-tapped.jpg`: top of the page. The tapped size has the dark ring, sold-out sizes are struck through, and "Add to bag" is grey because the shoe launches on 10 December.
- `screenshots/phone-size-tapped-grid.jpg`: scrolled down. All 26 sizes are visible, the 9 sold-out sizes are struck through, and the page says "Only 4 left in M 5 / W 6.5."

## How many size rows show above the sticky bar

Measured in a phone-size Chrome window, not on a real iPhone:

- 375 x 812: 4 full rows (12 sizes).
- 375 x 667: about 1 full row and most of a second. The bar starts at 587px.

## Not verified

- A real small iPhone in Safari. Safari's address bar and toolbar take height, so fewer rows will show there. The iOS Simulator could not be used because this Mac has no full Xcode install.
- The screenshots come from a phone-size browser window on a computer, not a real phone.
- Lighthouse simulates Slow 4G by calculation. A trace with the network really slowed has not been run.
- The "Add to bag" state after 10 December cannot be shown before that date.
