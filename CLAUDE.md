@AGENTS.md

# Forefront Trades Co. — working rules

## 1. Always pull `main` first

At the start of **every** working session in this project, before reading or editing any code:

```bash
git checkout main
git pull origin main
```

- If the working tree has uncommitted changes, do not discard them. Stop and ask before pulling (stash only with permission).
- If the pull reports conflicts, stop and report them; never resolve by overwriting someone else's work.
- Restart the dev server after pulling (`npm run dev`). A stale server can serve old Tailwind CSS and make new sections look broken.

## 2. Commits and pushes

- Only commit or push when explicitly asked.
- Always commit and push as the **access-sikadigital** GitHub account (already set in this repo's local git config):
  - `user.name` = `access-sikadigital`
  - `user.email` = `318683867+access-sikadigital@users.noreply.github.com`
  - remote: `https://access-sikadigital@github.com/access-sikadigital/Forefront-Trades-Co.git`
- Verify with `git config --local user.name` before every commit. Never change the global git identity.

## 3. Project conventions (short)

- Brand: official logo artwork only (`src/components/ui/Logo.tsx`, `Logomark.tsx`). Never redraw or retype the logo.
- Copy lives in `src/content/home.ts`; every claim must have a source. `TODO(client)` marks unconfirmed facts.
- Photos: use `<Photo>`, and run `npm run images:manifest` after adding images to `public/images`.
- Before handing work back: `npx tsc --noEmit`, `npx eslint src`, and check at 320px and desktop widths.
- See `README.md` for structure and the motion system.
