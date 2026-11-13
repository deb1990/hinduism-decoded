# Hinduism Decoded

Hinduism is often described as the world's oldest living religion, and it is one of the most misunderstood. It has no single founder, book or church, so it looks fragmented. This project is an attempt to connect the dots.

**Core question:** for each god, which book defined them, and in what order?

Live site: https://deb1990.github.io/hinduism-decoded/

## What is on the site

- **The gods.** Gods charts (one per layer of thought: Vedic, Upanishadic, Puranic, Shakta), a matrix of where each god appears, and a card for each of 50 gods and figures, with the books in order and their dates.
- **The scriptures.** A timeline of the main texts, drawn to scale, with what each one provides and what it says about the gods.
- **Eras of history.** The eras of Hinduism from the Indus Valley to today, with key texts, ideas and people.

## Content status

This is a first draft. The content was written from memory and **has not been checked against sources**. Dates are approximate scholarly ranges and many are debated. Treat every card as a claim to verify, not as a reference. Corrections are welcome as issues or pull requests.

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
| `web/src/gods.ts`, `web/src/godsMore.ts` | God cards: books, dates and notes, in order |
| `web/src/charts.ts` | The four gods charts |
| `web/src/scriptures.ts` | The scriptures timeline |
| `web/src/data.ts` | The eras timeline |
| `plan.md` | Project plan and principles |

## Principles

- Present each tradition on its own terms, and do not flatten the variety.
- Link gods only where a layer's own texts link them; start a new chart when the concept changes.
- Show scholarly dating, and say where traditional views differ.

## Deploy

Pushes to `main` build and publish the site to GitHub Pages through `.github/workflows/deploy.yml`. In the repo settings, Pages must use **GitHub Actions** as its source.
