# Rules for this repo

These rules are checked by the Zero University reviewers.

## 1. Every stage's prompt is saved, privately

Whenever the project owner gives a prompt for a stage, save it in this folder as its own file, named `<STAGE>-PROMPT.md` (for example `BUILD-PROMPT.md`). Do this for each and every stage, so the owner can read the prompt and check what was built against it.

Each prompt file has:

- the owner's prompt for the stage, in the owner's own words, word for word
- any lines that were added or changed later, clearly marked, so nobody mistakes them for the owner's words
- the key rules and decisions from that stage
- what was checked, and what was not verified

## 2. Prompt files stay private

Prompt files are listed in `.gitignore` (`*-PROMPT.md`). Never commit or push them to GitHub, and never force-add them. Save or update the prompt file at the same time as the work for that stage, but only the work gets committed and pushed. A private copy is also kept in `../nike-prompts-private/`.

## 3. Be honest about what is whose

Do not present a rewrite as the owner's wording. If a prompt was written after the work, say so in the file.

## 4. Keep the speed limits fixed

`speed-budget.json` has exactly three keys: `performance_score_min`, `size_grid_shift_px_max` and `size_button_min_px`. Values may be stricter than the profile requires, never looser. Do not add or remove keys.

## Prompt files so far (on this Mac only, not on GitHub)

| Stage | File |
|---|---|
| Write the phone page plan | `PLAN-PROMPT.md` |
| Build the shoe page in Next.js | `BUILD-PROMPT.md` |
| Keep the size grid still on a slow phone | `TRACE-PROMPT.md` |
| Put the page live on Vercel | `DEPLOY-PROMPT.md` |
| Turn the page into a slide deck | `SLIDES-PROMPT.md` |
| Nike photos, photo carousel, new title block | `PHOTOS-PROMPT.md` |
| Size guide icon, looping glass dots, bigger photo, Nike-style button | `POLISH-PROMPT.md` |
| Size guide as a Vaul drawer, left-aligned table | `SIZEGUIDE-PROMPT.md` |
| Tidy the repo for the live talk | `TIDY-PROMPT.md` |
| Fewer words on slide 2 | `SLIDE2-PROMPT.md` |
| Lighthouse proof on slide 6 | `SLIDE6-PROMPT.md` |
| Cover title leads with the score | `COVER-PROMPT.md` |
