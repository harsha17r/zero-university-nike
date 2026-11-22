# Nike Pegasus 43: Size and Stock List

Source: stock feed pasted by the project owner on 2026-11-17. This is the data the size selector is built from.

## Shared fields (identical on all 26 rows)
| Field | Value |
|---|---|
| style_code | HV7521-001 |
| product_name | Nike Pegasus 43 |
| colorway | Black/White-Volt |
| price | 140.00 (USD) |
| launch_date | 2026-12-10 |

SKU on each row = `HV7521-001-` + the 3-digit suffix below.

## Sizes (in display_order)
`status` values: `in_stock`, `low_stock` (5 or fewer), `sold_out` (quantity 0, `in_stock: false`).

| Order | SKU suffix | size_label | US men | US women | EU | Qty | Status |
|---|---|---|---|---|---|---|---|
| 1 | 035 | M 3.5 / W 5 | 3.5 | 5.0 | 35.5 | 0 | sold_out |
| 2 | 040 | M 4 / W 5.5 | 4.0 | 5.5 | 36 | 4 | low_stock |
| 3 | 045 | M 4.5 / W 6 | 4.5 | 6.0 | 36.5 | 18 | in_stock |
| 4 | 050 | M 5 / W 6.5 | 5.0 | 6.5 | 37.5 | 26 | in_stock |
| 5 | 055 | M 5.5 / W 7 | 5.5 | 7.0 | 38 | 34 | in_stock |
| 6 | 060 | M 6 / W 7.5 | 6.0 | 7.5 | 38.5 | 47 | in_stock |
| 7 | 065 | M 6.5 / W 8 | 6.5 | 8.0 | 39 | 63 | in_stock |
| 8 | 070 | M 7 / W 8.5 | 7.0 | 8.5 | 40 | 88 | in_stock |
| 9 | 075 | M 7.5 / W 9 | 7.5 | 9.0 | 40.5 | 112 | in_stock |
| 10 | 080 | M 8 / W 9.5 | 8.0 | 9.5 | 41 | 164 | in_stock |
| 11 | 085 | M 8.5 / W 10 | 8.5 | 10.0 | 42 | 198 | in_stock |
| 12 | 090 | M 9 / W 10.5 | 9.0 | 10.5 | 42.5 | 3 | low_stock |
| 13 | 095 | M 9.5 / W 11 | 9.5 | 11.0 | 43 | 2 | low_stock |
| 14 | 100 | M 10 / W 11.5 | 10.0 | 11.5 | 44 | 0 | sold_out |
| 15 | 105 | M 10.5 / W 12 | 10.5 | 12.0 | 44.5 | 212 | in_stock |
| 16 | 110 | M 11 / W 12.5 | 11.0 | 12.5 | 45 | 5 | low_stock |
| 17 | 115 | M 11.5 / W 13 | 11.5 | 13.0 | 45.5 | 176 | in_stock |
| 18 | 120 | M 12 / W 13.5 | 12.0 | 13.5 | 46 | 138 | in_stock |
| 19 | 125 | M 12.5 / W 14 | 12.5 | 14.0 | 47 | 84 | in_stock |
| 20 | 130 | M 13 / W 14.5 | 13.0 | 14.5 | 47.5 | 71 | in_stock |
| 21 | 135 | M 13.5 / W 15 | 13.5 | 15.0 | 48 | 36 | in_stock |
| 22 | 140 | M 14 / W 15.5 | 14.0 | 15.5 | 48.5 | 29 | in_stock |
| 23 | 145 | M 14.5 / W 16 | 14.5 | 16.0 | 49 | 14 | in_stock |
| 24 | 150 | M 15 / W 16.5 | 15.0 | 16.5 | 49.5 | 1 | low_stock |
| 25 | 155 | M 15.5 / W 17 | 15.5 | 17.0 | 50 | 0 | sold_out |
| 26 | 160 | M 16 / W 17.5 | 16.0 | 17.5 | 50.5 | 0 | sold_out |

## Totals
- 26 sizes: 17 in stock, 5 low stock, 4 sold out. 22 can be bought.
- Sold out: M 3.5, M 10, M 15.5, M 16.
- Low stock: M 4 (4 left), M 9 (3), M 9.5 (2), M 11 (5), M 15 (1).

## Notes for the build
- `display_order` is the sort order. Do not re-sort by quantity.
- Never show raw quantities for in-stock sizes. Show "Only N left" only when a low-stock size is selected.
- The M 10 sold-out size sits between in-stock sizes (M 9.5 and M 10.5), so sold-out buttons must keep their grid position.
- `launch_date` is 2026-12-10, which is after today (2026-11-17). See the open decision in PLAN.md.
