# Nike Shoe Page: 375px Mobile Plan

Status: first-fold order APPROVED. Decided: the 26-size grid continues below the fold with a half-row peek above the sticky bar (gallery is 232px), and the sticky button says "Add to bag" for every size in stock. "Notify me" appears only on sold-out sizes. Open: Safari visible-height test. No code written yet.
Design width: **375px** (iPhone SE/mini class, the smallest common phone). Anything that works here works on wider phones.

## Goal
A runner opens the page and, without pinching and with at most a short scroll, sees the shoe, the price and their size, and can add to bag. This is a mobile-first layout, not the desktop page squeezed down.

## First-fold order (top to bottom)

Fold target: **375 x 667**. Taller phones (812+) just show more of the content below.

| # | Part | Height | Why it sits here |
|---|------|--------|------------------|
| 1 | Top nav bar | 56px | Logo, search, bag, menu. Each icon is a 44x44 tap target. Sticky. |
| 2 | Photo gallery | 232px (375 wide) | The shoe sells itself. Swipe left/right, dot indicator overlaid on the image so it costs no height. |
| 3 | Title + price + rating | 80px | Category (16), shoe name (28), price (24) with star rating and review count on the same row. Rating taps to jump to reviews. |
| 4 | Size selector | 192px | Label row "Select size / Size guide" 32px, then a 4-column grid, 3 rows of 48px buttons with 8px gaps (160px). Shows 12 sizes; the Pegasus has 26 and the grid continues below, see Stock data. |
| 4b | Half-row peek | 32px | 8px gap plus the top 24px of the fourth row of sizes, so the grid visibly continues. Sits just above the sticky bar. |
| 5 | Sticky bar | 72px | Pinned to the bottom, always reachable by thumb. Full-width 48px button with 12px padding. Says "Add to bag" for sizes in stock. |

Total: 56 + 232 + 80 + 192 + 32 + 72 = **664px**, inside the 667 fold with 3px spare. Any added element must remove another. (The gallery was 264px before the peek was added. An earlier note said 236px, which was 1px too tall once the 8px gap is counted.)

## Below the fold (scroll order)
1. **Colorways**: swatch row, 72px. Kept below the fold to protect the size grid. Open question below.
2. **Delivery and returns strip**: 64px, one line each.
3. **Description**: 3 lines collapsed, "Read more".
4. **Tech details**: accordion, 56px collapsed. Cushioning, drop, weight, upper, outsole, use case (road, trail, race).
5. **Reviews**: accordion, summary open: average, star bar breakdown, fit slider (runs small / true to size / large), then 3 reviews and "See all".
6. **You may also like**: horizontal card row, 2.3 cards visible so it reads as scrollable.

Every accordion header is a fixed 56px. Content heights are fixed while collapsed, so nothing jumps while loading.

## Size button rules
- Every button is **at least 48 x 48px**, 8px gap. Meets and exceeds the 44px touch minimum.
- **Sold-out sizes stay the same size.** They are dimmed with a diagonal strike-through, not removed or shrunk. Tapping one shows an inline "Notify me when available" line, so the tap is never wasted.
- Selected state: 2px black border plus a filled check, not colour alone.
- Nothing scrolls sideways, and the grid is never a nested scroll area. It is one block of 26 buttons that scrolls with the page, so there is no pinching or hunting.
- If no size is chosen and the user taps "Add to bag", the grid scrolls into view and shakes, with the message "Select a size".

## Stock data
Real size list: [PEGASUS-STOCK.md](PEGASUS-STOCK.md) (Nike Pegasus 43, Black/White-Volt, $140). 26 sizes (M 3.5 to M 16): 17 in stock, 5 low stock, 4 sold out.

What the data changes in this plan:
- **Button label is two lines**, "M 10.5" over "W 12", at 14px. The full label "M 10.5 / W 12" is too wide for a 79px button on one line. EU size appears in the size guide, not on the button.
- **Sold-out sizes sit in the middle of the grid** (M 10 is between two in-stock sizes), so they keep their position and are not moved to the end.
- **Low stock** (5 or fewer) gets a small "Only N left" line under the grid once that size is selected. Raw counts for in-stock sizes are never shown.
- Grid order follows `display_order`, smallest to largest.

### DECIDED: 26 sizes do not fit the 192px size block, so the grid continues below the fold
The fold plan assumed up to 12 sizes (3 rows). With 26 sizes in 4 columns the grid is 7 rows, 384px, so it cannot all sit in the fold. At 375x667 the fold shows sizes M 3.5 to M 9 (3 rows). M 9.5 to M 16, including the common M 10 to M 11 range, are below it.

Decision (Open decisions 5): the "Popular sizes" row was rejected because we have no sales data. Keep the 4x3 block in the fold and let the grid run on below it as normal page scroll, with a visible half-row at the fold edge so it reads as continuing. The sticky Add to bag bar stays on screen the whole time, so the shopper never loses the button while scrolling to their size.

## Photo box (keeps the sizes still when the photo loads late)
- The gallery is a fixed box, 375 x 232, reserved before any image arrives. It uses `aspect-ratio: 375 / 232` with a width and height set on the image, so the browser holds the space.
- The box has a flat light-grey background that matches the photo background. A late photo fades in with opacity only. It never changes the box size, so nothing below it moves.
- Photos use `object-fit: contain` with a little padding, so the toe and heel are never cropped.
- The first photo is preloaded with high fetch priority. Later photos load lazily, but their slides are the same fixed box.
- The dots sit over the image (absolute), so they cost no height.
- Everything under the photo has a fixed height too (80px title block, 32px size header, 48px buttons), so the size grid never shifts.
- The size grid renders all 26 buttons from the stock list at once. If stock is slow, buttons show a neutral state, not a missing state.

## Sold-out sizes
- **They stay in place and never drop out.** M 3.5, M 10, M 15.5 and M 16 keep their `display_order` position. M 10 sits between two in-stock sizes, and moving it would break the runner's habit of finding her size by position. It would also shift the grid every time stock refreshes.
- Same 48px height, same radius, same fill family as the other buttons. They are made quieter, not given a different style.
- Look: text at about 40% opacity, a thin diagonal strike-through, no selected ring. The strike-through means sold out is not shown by colour alone.
- They use `aria-disabled`, not `disabled`, so they can still be tapped. A tap shows "Notify me when M 10 is back" under the grid and does not select the size.
- Low-stock sizes look like normal buttons until selected.

## Layout rules (apply everywhere)
- 16px side gutters, so content width is 343px.
- Body text 16px minimum (prevents iOS zoom-on-focus). Price and name are the largest type on the page.
- One column only. No hover-only features.
- Images: fixed aspect box reserved up front, lazy-load everything below the fold, first image preloaded.
- Respect the bottom safe area (home indicator) on the sticky bar.

## Out of scope
Checkout, account sign-in, wishlist, and desktop layout.

## Open decisions (your final call)
1. **Colorways in the fold?** Current plan keeps them below to protect the size grid. Alternative: show colors as gallery thumbnails.
2. **Fold height.** Plan assumes 667. If analytics show most traffic on 812+ phones, the gallery can grow to about 400px.
3. **Size grid columns.** 4 columns x 3 rows is chosen. 3 columns would give wider buttons but a fourth row (+56px), which breaks the fold.
4. **Sticky bar always, or only after scrolling past the sizes?** Plan says always.
5. **26 sizes vs the fold. DECIDED: the grid continues below the fold with a half-row peek.** The sticky bar covers the bottom 72px, so the gallery shrinks from 264px to 232px to make room for the peek. Rejected: shrinking the gallery to about 130px so 5 rows fit (hurts the photos), and a "Popular sizes" row (needs sales data we do not have).
6. **Sticky button label. DECIDED (changed 17 Nov 2026): "Add to bag" for every size in stock. "Notify me" only appears for a sold-out size.** Reason: showing "Notify me" next to sizes that are in stock was confusing. The stock feed lists a `launch_date` of 2026-12-10, which is still ahead. The built page ignores it for now. If the shoe really can't be bought before launch, the label rule needs to come back.
7. **OPEN: Safari visible-height test.** The 667px fold is the phone's full height. On a small iPhone in Safari the toolbars take space, and the visible area is probably around 550px. This is not measured. Test on a real device or the iOS Simulator before building, then redo the height budget if needed.

## Next step
Approve or adjust the order above, then build the static 375px layout with these fixed heights first, before any real content or interaction.
