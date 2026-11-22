# Rules for this repo

These rules are checked by the Zero University reviewers.

## 1. Every stage's prompt goes in the repo

Whenever the project owner gives a prompt for a stage, save it in this repo as its own file, named `<STAGE>-PROMPT.md` (for example `BUILD-PROMPT.md`). Do this for each and every stage, so a reviewer can read the prompt and check what was built against it.

Each prompt file has:

- the owner's prompt for the stage, in the owner's own words, word for word
- any lines that were added or changed later, clearly marked, so nobody mistakes them for the owner's words
- the key rules and decisions from that stage
- what was checked, and what was not verified

## 2. Save the prompt with the work

Save or update the prompt file in the same commit as the work for that stage, and push both to GitHub together.

## 3. Be honest about what is whose

Do not present a rewrite as the owner's wording. If a prompt was written after the work, say so in the file.

## 4. Keep the speed limits fixed

`speed-budget.json` has exactly three keys: `performance_score_min`, `size_grid_shift_px_max` and `size_button_min_px`. Values may be stricter than the profile requires, never looser. Do not add or remove keys.

## Prompt files so far

| Stage | File |
|---|---|
| Write the phone page plan | `PLAN-PROMPT.md` |
| Build the shoe page in Next.js | `BUILD-PROMPT.md` |
| Keep the size grid still on a slow phone | `TRACE-PROMPT.md` |
| Put the page live on Vercel | `DEPLOY-PROMPT.md` |
