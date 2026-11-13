# Hinduism Decoded

Hinduism is often described as the world's oldest living religion, and it is one of the most misunderstood. It has no single founder, book or church, so it looks fragmented. This project is an attempt to connect the dots.

**Core question:** for each god, which book defined them, and in what order?

Live site: https://deb1990.github.io/hinduism-decoded/

## What is on the site

Four pages, each with a full-screen intro over parallax artwork (mandalas drawn in code):

- **Gods** (home). A scroll story in four chapters: Vedic, Upanishadic, Puranic and Shakta. Each has its own gods chart and a tile for every god in it, 50 in all.
- **A page for each god** (`#/god/indra`). Full screen, with its own symbolic artwork as the background, a long explanation, a well-known story, symbols, worship, how traditions differ, and the books that define the god in order with their dates.
- **Books.** The main scriptures on one to-scale timeline, with what each provides and what it says about the gods.
- **Eras.** The eras of Hinduism from the Indus Valley to today, with key texts, ideas and people.
- **Atlas.** A matrix of every god against every book group.

Pages use hash routes (`#/books`, `#/eras`, `#/atlas`), so the site works on any static host.

## Content status

This is a first draft. The content was written from memory and **has not been checked against sources**. Dates are approximate scholarly ranges and many are debated. Treat every page as a claim to verify, not as a reference. Corrections are welcome as issues or pull requests.

## Run it

The site is a static React + TypeScript app built with Vite, in `web/`.

```sh
cd web
npm install
npm run dev        # develop at http://localhost:5173
npm run typecheck  # TypeScript check
npm run build      # static site in web/dist
```

## Where the content lives

| File | Contents |
| --- | --- |
| `web/src/gods.ts`, `web/src/godsMore.ts` | Each god: books, dates and notes, in order |
| `web/src/stories.ts`, `web/src/stories/` | The long text on each god's page |
| `web/src/godArt.ts`, `web/src/components/GodArt.tsx` | Which artwork and colour each god gets, and the 34 motifs |
| `web/src/charts.ts` | The four gods charts |
| `web/src/scriptures.ts` | The scriptures timeline |
| `web/src/data.ts` | The eras timeline |
| `web/src/story.ts` | The four chapters of the Gods page |
| `web/src/components/Art.tsx` | The parallax mandala artwork |
| `web/src/route.ts`, `web/src/pages/` | Hash routing and the four pages |
| `plan.md` | Project plan and principles |

## Principles

- Present each tradition on its own terms, and do not flatten the variety.
- Link gods only where a layer's own texts link them; start a new chart when the concept changes.
- Show scholarly dating, and say where traditional views differ.

## Deploy

Pushes to `main` build and publish the site to GitHub Pages through `.github/workflows/deploy.yml`. In the repo settings, Pages must use **GitHub Actions** as its source.
