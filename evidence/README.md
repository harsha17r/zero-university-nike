# Evidence from the live page

Live page: https://zero-university-nike.vercel.app

## Speed score (22 Nov 2026, after the spacing change)

Lighthouse, three runs on the live Vercel page, with the Slow 4G mobile settings in `lighthouse.config.json` (375 x 812 at 3x, 150 ms round trip, 1638.4 Kbps, 4x CPU slowdown).

| Run | Performance score | Layout shift | First paint | Largest paint |
|---|---|---|---|---|
| 1 | 100 | 0 | 836 ms | 836 ms |
| 2 | 100 | 0 | 781 ms | 1891 ms |
| 3 | 100 | 0 | 778 ms | 1888 ms |

Full Lighthouse report for run 2 on the live page (score 100, layout shift 0): `lighthouse-live-report.html` (open it in a browser) and `lighthouse-live-report.json`.

Against `speed-budget.json`: score needs 90 or more (100), grid movement 0 (layout shift 0 in all runs), smallest size button 44px or more (48px). All pass. Full numbers: `speed-score.json`.

## Phone screenshots with a size tapped

Taken on the live page at 375 x 812 (phone-size browser window), after tapping M 5 / W 6.5, a low-stock size, with the more spacious layout.

- `phone-size-tapped.jpg`: top of the page. The tapped size has the dark ring, and sold-out sizes (M 4.5, M 6, M 9, M 10, M 11.5) are struck through.
- `phone-size-tapped-grid.jpg`: scrolled down. All 26 sizes are visible, the 9 sold-out sizes are struck through, and the page says "Only 4 left in M 5 / W 6.5."

## Not verified

- The screenshots come from a phone-size browser window on a computer, not a real phone.
- Lighthouse simulates Slow 4G by calculation. A trace with the network really slowed has not been run.
