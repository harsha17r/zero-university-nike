# Evidence from the live page

Live page: https://zero-university-nike.vercel.app

Everything here was taken on 22 Nov 2026 from the latest version: Geist font, light mode only, a disabled grey "Add to bag" with "Launching 10 Dec" in the price row, and "Road running shoe" under the name.

## Speed score

Lighthouse, three runs on the live Vercel page, with the Slow 4G mobile settings in `lighthouse.config.json` (375 x 812 at 3x, 150 ms round trip, 1638.4 Kbps, 4x CPU slowdown).

| Run | Performance score | Layout shift | First paint | Largest paint |
|---|---|---|---|---|
| 1 | 100 | 0 | 828 ms | 828 ms |
| 2 | 100 | 0 | 783 ms | 1533 ms |
| 3 | 100 | 0.00003 | 761 ms | 1777 ms |

Full Lighthouse report for run 2: `lighthouse-live-report.html` (open it in a browser) and `lighthouse-live-report.json`.

Against `speed-budget.json`: score needs 90 or more (100), smallest size button 44px or more (48px), and the size grid must not move. The grid did not move in any run. One thing to know: run 3 recorded a tiny shift of 0.00003 on the "Launching 10 Dec" label in the price row, when the Geist font finished loading. It is not the size grid, and it did not happen in runs 1 and 2. Full numbers: `speed-score.json`.

## Phone screenshots with a size tapped

Taken on the live page at 375 x 812 (phone-size browser window), after tapping M 5 / W 6.5, a low-stock size.

- `phone-size-tapped.jpg`: top of the page. The tapped size has the dark ring, sold-out sizes are struck through, and "Add to bag" is grey because the shoe launches on 10 December.
- `phone-size-tapped-grid.jpg`: scrolled down. All 26 sizes are visible, the 9 sold-out sizes are struck through, and the page says "Only 4 left in M 5 / W 6.5."

## How many size rows show above the sticky bar

Measured in a phone-size Chrome window, not on a real iPhone:

- 375 x 812: 4 full rows (12 sizes).
- 375 x 667: about 1 full row and most of a second. The bar starts at 587px.

## Not verified

- A real small iPhone in Safari. Safari's address bar and toolbar take height, so fewer rows will show there. The iOS Simulator could not be used because this Mac has no full Xcode install.
- The screenshots come from a phone-size browser window on a computer, not a real phone.
- Lighthouse simulates Slow 4G by calculation. A trace with the network really slowed has not been run.
- The "Add to bag" state after 10 December cannot be shown before that date.
