# Daniël van Ginneken Portfolio

Premium bilingual portfolio built with Next.js 15, TypeScript, Tailwind CSS, and a content-driven App Router structure.

## Positioning

The site presents Daniël as a **software developer with infrastructure roots**:

- software development first
- infrastructure and systems knowledge as supporting depth
- honest early-career positioning
- built for internships now and long-term brand growth later

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- `next-themes` for light/dark mode
- static local content files for bilingual copy and project data

## Route Structure

- `/` redirects to `/nl`
- `/nl`
- `/nl/about`
- `/nl/projects`
- `/nl/journey`
- `/nl/resume`
- `/nl/contact`
- `/en`
- `/en/about`
- `/en/projects`
- `/en/journey`
- `/en/resume`
- `/en/contact`

## Content Structure

- `content/site/en.ts`
- `content/site/nl.ts`
- `content/projects.ts`
- `content/journey.ts`
- `content/socials.ts`

## UI Structure

- `components/site/*` contains the shared site system
- `components/ui/button.tsx` contains the reusable button primitive
- `components/providers/theme-provider.tsx` contains theme wiring

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Notes

- The resume download currently points to `public/resume/daniel-van-ginneken-resume.pdf`.
- That PDF is a temporary placeholder and should be replaced with the final resume before launch.
