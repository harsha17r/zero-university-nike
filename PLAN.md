# Nike Shoe Page: 375px Mobile Plan

Status: first-fold order APPROVED. Decided: the 26-size grid continues below the fold and the first screen is no longer squeezed into 667px: generous spacing (24px around the title, 32px under the photo, 16px between size rows) and a 220px photo, and the page uses the launch date from the stock feed: before 10 December 2026 the sticky button says "Add to bag" but is disabled (grey) and the line under the price says "Launching December 10"; from that date the button works and that line says "No ratings yet". The photo box is a carousel of the 8 Nike Pegasus 42 photos from nike.com, with a thin bar on top (22 Nov 2026). Sold-out sizes are disabled and can't be tapped. Open: Safari visible-height test. Built in Next.js, see Tech stack.
Design width: **375px** (iPhone SE/mini class, the smallest common phone). Anything that works here works on wider phones.

## Goal
A runner opens the page and, without pinching and with at most a short scroll, sees the shoe, the price and their size, and can add to bag. This is a mobile-first layout, not the desktop page squeezed down.

## Tech stack
- Next.js 16 (App Router) with React 19 and TypeScript. Plain CSS in `app/globals.css`, no UI library.
- One font, Geist, loaded with `next/font` with `display: "optional"`, so the font never swaps in late and text cannot shift. Light mode only (no dark mode).
- Size and stock data lives in `lib/sizes.ts` and mirrors PEGASUS-STOCK.md. The photos are `public/pegasus/1.jpg` to `8.jpg` (Nike Pegasus 42, IB1873-105, from nike.com), shown by `components/Gallery.tsx` with Blossom Carousel (`@blossom-carousel/react`).
- Run locally with `npm install` then `npm run dev`, and open http://localhost:3000. Check the page at 375px wide.
- Components: `ShoeApp` (state), `Nav`, `SizeGrid`, `SizeGuide`.

## First-fold order (top to bottom)

Fold target: **375 x 667**. Taller phones (812+) just show more of the content below.

| # | Part | Height | Why it sits here |
|---|------|--------|------------------|
| 1 | Top nav bar | 56px | Back arrow, search, bag, menu. No brand logo. Each icon is a 44x44 tap target. Sticky. |
| 2 | Title block | 152px | Shoe name (24px medium, 28 line), grey category line "Road running shoe" (12px regular, 16 line), 12px, price (16px medium, 24 line), 8px, then "Launching December 10" (before launch) or "No ratings yet" (after launch) on its own line under the price (16 line), and 24px above and below. The price shows once, here, above the photo. The colorway is not shown on the page. Changed 22 Nov 2026 (was 132px, with the launch date to the right of the price). |
| 3 | Photo carousel | 220px (375 wide) | 8 photos you can swipe, in a fixed box so nothing jumps when they load. A thin bar of 8 segments sits on top of the photo's bottom edge (no extra height); each segment is a 24px-tall button that jumps to its photo. |
| 4 | Size selector | 76px + grid | 32px of air under the photo, a 32px label row "Select size / Size guide", 12px, then a 3-column grid: rows of 48px buttons, 16px between rows and 12px between columns (all 9 rows: 560px). The Pegasus has 26 sizes, so the grid continues below the first screen, see Stock data. |
| 5 | Sticky bar | 80px | Pinned to the bottom, always reachable by thumb. Full-width 48px button with 16px padding above and below. It always says "Add to bag". Before the launch date (10 December 2026, from the stock feed) it is disabled and grey; from that date it works. |

Total above the grid: 56 + 152 + 220 + 76 = **504px** (was 484px before the title block grew on 22 Nov 2026). On a 375 x 667 phone that leaves room for one full row of sizes and most of a second above the sticky bar (which starts at 587px); on a 375 x 812 phone, about four rows. This is a change from the earlier plan, which squeezed the first screen into 664px. The owner chose generous spacing over fitting the fold (22 Nov 2026). Every part still has a fixed height, so nothing moves while the page loads. (History: the photo was 264px, 232px, 220px, 196px, then 220px again.)

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
- **Sold-out sizes stay the same size.** They are dimmed, with a line through the text, not removed or shrunk. They are disabled, so tapping one does nothing.
- Selected state: a 2px ring and a heavier label (weight 600), not colour alone.
- Nothing scrolls sideways, and the grid is never a nested scroll area. It is one block of 26 buttons that scrolls with the page, so there is no pinching or hunting.
- If no size is chosen and the user taps "Add to bag", the grid scrolls into view and shakes, with the message "Select a size".

## Stock data
Real size list: [PEGASUS-STOCK.md](PEGASUS-STOCK.md) (Nike Pegasus 43, Black/White-Volt, $140). 26 sizes (M 3.5 to M 16), from the 8 December 2026 list: 10 in stock, 7 low stock, 9 sold out.

What the data changes in this plan:
- **Button label is one line**, "M 10.5 / W 12", with the men's and women's size in the same size (14px) and weight, like Nike's app and website. The widest label is about 96px and fits in a 109px button. EU size appears in the size guide, not on the button.
- **Sold-out sizes sit in the middle of the grid** (M 10 is between two in-stock sizes), so they keep their position and are not moved to the end.
- **Low stock** (5 or fewer) gets a small "Only N left" line under the grid once that size is selected. Raw counts for in-stock sizes are never shown.
- Grid order follows `display_order`, smallest to largest.

### DECIDED: 26 sizes do not fit the first screen, so the grid continues below it
The fold plan has room for 3 rows. With 26 sizes in 3 columns the grid is 9 rows, 496px, so it cannot all sit in the fold. At 375x667 the fold shows sizes M 3.5 to M 7 (3 rows, 9 sizes). M 7.5 to M 16, including the common M 10 to M 11 range, are below it.

Decision (Open decisions 5): the "Popular sizes" row was rejected because we have no sales data. Keep the 3x3 block in the fold and let the grid run on below it as normal page scroll, (there is no peek of the fourth row any more, after the spacing was opened up). The sticky Add to bag bar stays on screen the whole time, so the shopper never loses the button while scrolling to their size.

## Photo box (keeps the sizes still when the photo loads late)
- The gallery is a fixed box, 375 x 220, reserved before any image arrives. It uses `aspect-ratio: 375 / 220` with a width and height set on the image, so the browser holds the space.
- The box has a flat light-grey background that matches the photo background. A late photo never changes the box size, so nothing below it moves.
- The Nike photos are square, so each one fills the box (`object-fit: cover`) with its own crop position that keeps the whole shoe in view. The top-down photo of both shoes uses `contain`, so no shoe is cut off.
- The first photo is preloaded with high fetch priority. Later photos load lazily, but their slides are the same fixed box.
- The carousel bar sits over the image (absolute), so it costs no height. The carousel is Blossom Carousel: native scroll-snap, and on touch phones it loads no extra script.
- Everything under the photo has a fixed height too (152px title block, 32px + 32px + 12px size header area, 48px buttons), so the size grid never shifts.
- The size grid renders all 26 buttons from the stock list at once. If stock is slow, buttons show a neutral state, not a missing state.

## Sold-out sizes
- **They stay in place and never drop out.** M 3.5, M 10, M 15.5 and M 16 keep their `display_order` position. M 10 sits between two in-stock sizes, and moving it would break the runner's habit of finding her size by position. It would also shift the grid every time stock refreshes.
- Same 48px height, same radius, same fill family as the other buttons. They are made quieter, not given a different style.
- Look: text at about 40% opacity, a thin line through the text only (not across the button), no selected ring. The strike-through means sold out is not shown by colour alone.
- DECIDED (changed 22 Nov 2026): they use the real `disabled` attribute, so they can't be tapped or reached with the keyboard. Nothing happens on a tap: no selection and no message. Screen readers hear "sold out" from the button's label. The earlier "Notify me" line under the grid was removed.
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
3. **Size grid columns. DECIDED (changed 22 Nov 2026): 3 columns, one-line label.** A two-line label made the women's size small and muted, which looked wrong. Nike shows "M 6 / W 7.5" on one line at one size. That label needs about 96px, so 3 columns (109px each) fit it and 4 columns (80px) do not. The cost: the first screen shows 9 sizes instead of 12, and the full grid is 496px instead of 384px.
4. **Sticky bar always, or only after scrolling past the sizes?** Plan says always.
5. **26 sizes vs the fold. DECIDED: the grid continues below the fold.** The sticky bar covers the bottom 72px. The half-row peek was dropped, and the first screen no longer has to fit 667px (22 Nov 2026): spacing is generous, so the first screen shows about one and a half rows. Rejected: shrinking the gallery to about 130px so 5 rows fit (hurts the photos), and a "Popular sizes" row (needs sales data we do not have).
6. **Sticky button and launch date. DECIDED (22 Nov 2026): the page uses `launch_date` from the stock feed (2026-12-10).** Before that date the sticky button still says "Add to bag" (as the plan always did) but is disabled and grey, and the price row says "Launching 10 Dec" with a small calendar icon, so the date is said once, in the price row. From midnight on 10 December (the viewer's local time) the button works and the price row says "No ratings yet". There is no "Notify me" anywhere: it was confusing next to sizes in stock, so the pre-launch state is a plain disabled button. Sizes can still be looked at and selected before launch. Changed from the earlier rule ("Add to bag" for every size in stock). Wording (22 Nov 2026): the owner first chose "Launching 10 December" on the button, then switched to a disabled "Add to bag" with "Launching 10 Dec" in the price row, because the plan always said "Add to bag". Grey line under the name: "Road running shoe", the category line from the first plan (22 Nov 2026). The colorway ("Black/White-Volt", in the stock list) is no longer shown: the owner's build prompt does not mention it, and the first plan had colorways as a swatch row below the first screen, which was never built. Colour dots were rejected earlier because three dots look like a colour picker, and there is only one colorway, so there is nothing to choose.
7. **OPEN: Safari visible-height test.** The 667px fold is the phone's full height. On a small iPhone in Safari the toolbars take space, and the visible area is probably around 550px. This is not measured. Test on a real device or the iOS Simulator before building, then redo the height budget if needed.

## Next step
Approve or adjust the order above, then build the static 375px layout with these fixed heights first, before any real content or interaction.
