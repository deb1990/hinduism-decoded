# Hinduism Decoded

Hinduism is often described as the world's oldest living religion, and it is one of the most misunderstood. It has no single founder, book or church, so it looks fragmented. This project is an attempt to connect the dots.

**Core question:** for each god, which book defined them, and in what order?

Live site: https://deb1990.github.io/hinduism-decoded/

## What is on the site

Three kinds of page, each with a full-screen intro over parallax artwork:

- **Gods** (home). A scroll story in four chapters: Vedic, Upanishadic, Puranic and Shakta. Each has its own gods chart and a tile for every god in it, 50 in all. The page ends with the atlas, a matrix of every god against every book group.
- **A page for each god** (`#/god/indra`). Full screen, with its own symbolic artwork as the background, a long explanation, a well-known story, symbols, worship, how traditions differ, and the books that define the god in order with their dates.
- **Books.** The main scriptures on one to-scale timeline, with what each provides and what it says about the gods.
- **A page for each book** (`#/book/rigveda`). Full screen, with a long point-by-point explanation: facts at a glance, structure and contents, key teachings, what it says about the gods, famous passages, composition and transmission, later influence, and how to read it today.
- **Eras.** The eras of Hinduism from the Indus Valley to today, with key texts, ideas and people, and a map for each era (the Indus Valley to the Tamil south, ending with a world map of the diaspora). The maps are drawn as vectors from public-domain Natural Earth data; the shaded regions and site positions are approximate.

The site is available in English, Hindi and Bengali (the globe button in the lower right corner). The interface, labels, god names and summaries, book summaries, era text and chart labels are translated; the long god and book pages are still English only. The translations were written by an AI model and have not been reviewed by a native speaker or a scholar.

Pages use hash routes (`#/books`, `#/eras`, `#/god/<id>`), so the site works on any static host.

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
| `web/src/i18n/` | The language system: English strings, and the Hindi (`hi.ts`) and Bengali (`bn.ts`) translations |
| `web/src/stories.ts`, `web/src/stories/` | The long text on each god's page |
| `web/src/bookDetails.ts`, `web/src/books/` | The long point-by-point text on each book's page |
| `web/src/eraMaps.ts`, `web/src/geo/`, `web/scripts/build-maps.mjs` | The era maps: regions and sites, projections, and the generated coastline and river data |
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
