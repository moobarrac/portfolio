# Portfolio

Personal portfolio site for Mubarak Abdulwahab. Single-page app, no router.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- react-hook-form + Formspark (contact form)
- Deployed on Vercel

## Commands

```sh
npm install       # requires Node 24+ (see .nvmrc)
npm run dev       # dev server on http://localhost:3000
npm run build     # tsc + vite build → dist/
npm run preview   # serve the built dist/
npm run lint      # eslint (see note below)
```

## Project layout

- `src/App.tsx` — flat composition of section components.
- `src/sections/` — one component per page section.
- `src/data/` — content (projects, work history, education, skills, links).
- `src/components/` — shared UI primitives.
- `src/types/Section.ts` — `Section` enum whose values are the anchor IDs used
  for in-page navigation.

To add or edit content (e.g. a new project, an updated job), change the
relevant file in `src/data/` — not the section components.

## Notes

- `npm run lint` currently fails because ESLint 9 expects a flat config
  (`eslint.config.js`); the project still has the legacy `.eslintrc.cjs`. Fix
  by migrating to the new config format.
- See `CLAUDE.md` for the working preferences, design direction, and review
  workflow that guide changes to this repo.
