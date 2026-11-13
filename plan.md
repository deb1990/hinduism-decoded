# Hinduism One-Stop Platform: Research and Plan

2026-11-13

## Vision and problem

The goal is one trustworthy place where anyone can understand Hinduism as it actually exists: a family of traditions with shared roots, not a single church or book.

The fragmentation is real and has four sources:

- **No central authority.** There is no single founder, creed, scripture or clergy, so no one "official" answer exists.
- **Many layers of text.** Shruti (Vedas, Upanishads) and smriti (epics, Puranas, Dharmashastras) were composed over roughly 3,000 years in different languages.
- **Regional and sectarian variation.** A Bengali Shakta, a Tamil Shaiva and a Gujarati Vaishnava can differ in deity, ritual, calendar and language.
- **Scattered, uneven online content.** Sources range from scholarly to devotional to polemical, with little context or citation.

The platform's job is to give a clear overview first, then let people go deep into any one tradition on its own terms.

**Core question:** for each god, which book defined them, and in what order. The site answers this directly with a gods-by-book view (`web/src/gods.ts`), next to the scriptures and eras timelines.

## Audience

The first audience is anyone who wants to understand the religion: curious beginners, young Hindus who were never taught the whole picture, and non-Hindu students. They ask orientation questions before devotional ones.

- **"How did this develop?"** Answered by the timeline, the first feature.
- **"What do Hindus believe?"** Answered by a concepts glossary (dharma, karma, moksha, atman, Brahman) that shows where traditions agree and differ.
- **"Which text or school is this from?"** Answered by the map of traditions and the texts library.

Practice tools (panchang, mantras, puja guides) come later and serve a second audience of practising Hindus.

## Timeline of Hinduism

Dates are approximate and debated by scholars; eras are not to scale. Early dates and era summaries are from memory and not yet verified against sources.

| Period | Era | Key points |
| --- | --- | --- |
| c. 3300–1300 BCE | Indus Valley civilization | Planned cities such as Harappa and Mohenjo-daro; the script is undeciphered. Whether it holds early Hindu features (seals, ritual bathing) is debated. |
| c. 1500–1000 BCE | Early Vedic period | The Rigveda is composed orally in early Sanskrit; fire ritual (yajna) is central. Indra, Agni and Varuna dominate; Rudra and Vishnu are minor figures. |
| c. 1000–500 BCE | Later Vedic period | Other Vedas, the Brahmanas and the early Upanishads take shape. Ritual gives way to inquiry: karma, rebirth, atman and Brahman. |
| c. 500 BCE–200 CE | Epics and rival paths | Buddhism and Jainism emerge; the Mahabharata (with the Gita) and Ramayana grow. Dharma Sutras, Manusmriti and early darshanas systematise law and thought. |
| c. 320–550 CE | Gupta classical age | Stone temples and image worship spread; the Puranas are compiled. Vishnu, Shiva and the Goddess emerge as the main devotional centres. |
| c. 600–1200 CE | Bhakti and philosophy in the south | Tamil Alvars (Vishnu) and Nayanars (Shiva) sing devotion; Tantra grows. Adi Shankara (Advaita, c. 8th century), then Ramanuja; great temples rise. |
| c. 1200–1750 CE | Sultanates, Mughals and bhakti movements | Kabir, Mirabai, Tulsidas and Chaitanya spread devotion in local languages. Vijayanagara patronises temples and Sanskrit learning in the south. |
| c. 1800–1947 CE | Colonial encounter and reform | The word Hinduism comes into common use; scholars edit and print the texts. Brahmo Samaj, Arya Samaj and Vivekananda reinterpret the tradition. |
| 1947 to today | Independence, diaspora and global reach | Temples, yoga and festivals spread worldwide; teachers and texts move online. Debates continue over caste, reform, identity and who speaks for Hinduism. |

The timeline shows layers that built on each other rather than replaced each other, which is why later traditions can cite the Vedas while differing sharply in practice. Early dates, especially for the Vedas and epics, rest on linguistic and archaeological inference, so each entry in the product should carry a confidence note.

## Map of traditions

Hinduism is best presented as overlapping families, each explained in its own terms. The table is a starting taxonomy; boundaries are fuzzy and scholars disagree on the details.

| Family | Central focus | Notable schools or movements | Strong regions |
| --- | --- | --- | --- |
| Vaishnavism | Vishnu and avatars (Rama, Krishna) | Sri Vaishnavism, Gaudiya, Pushtimarg, Swaminarayan | South India, Bengal, Gujarat, Braj |
| Shaivism | Shiva | Shaiva Siddhanta, Kashmir Shaivism, Lingayatism, Nath | Tamil Nadu, Kashmir, Karnataka |
| Shaktism | The Goddess (Devi) | Sri Vidya, Tantric Shakta, Kali and Durga worship | Bengal, Assam, Kerala |
| Smartism | Five deities (pancharatna) with Advaita leaning | Adi Shankara's tradition and its mathas | Pan-Indian, strong in South India |
| Vedic and Vedantic schools | Philosophy and exegesis | Six darshanas: Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta | Pan-Indian |
| Reform movements | Modern reinterpretation | Brahmo Samaj, Arya Samaj, Ramakrishna Mission | Bengal, Punjab, pan-Indian |
| Folk and local | Village and regional deities, saints | Bhakti saints, tribal and local cults | Everywhere |

Each family gets its own page with scriptures, deities, practices, history and a short "how it differs from others" note.

## Content pillars

Five pillars hold the content, and each links back to the timeline and the map of traditions.

1. **Timeline and history.** Eras, events, people and how ideas changed.
2. **Texts library.** Shruti and smriti, with the original, transliteration, translation and a plain-language summary. Start with the Gita, a few principal Upanishads and short summaries of the epics.
3. **Concepts glossary.** Dharma, karma, samsara, moksha, the gunas, the four purusharthas and the ashramas, each showing how traditions interpret them.
4. **Practices and festivals.** Puja, sandhya, samskaras (life-cycle rites), yoga paths, and the major festivals by region.
5. **Places.** Tirthas, the Char Dham, Jyotirlingas, Shakti Peethas and major temples, on a map.

## Product scope

The MVP is a single interactive timeline explorer. It proves the content approach and neutral tone before anything larger is built.

| Phase | What ships | Why this order |
| --- | --- | --- |
| 1. MVP | Interactive timeline: eras, key texts, ideas, figures, each with sources | Answers the orientation question first; small, checkable content set |
| 2 | Map of traditions and concepts glossary, linked to the timeline | Shows the unity and the variety together |
| 3 | Texts library with side-by-side translation | Heaviest on licensing and editing |
| 4 | Practice tools: panchang, festivals, mantras with audio | Serves practising users; needs regional calendars |
| 5 | Places map, community, events | Needs partners and moderation |

Phase 1 features: scrollable era view, filter by tradition or theme, a source and confidence note on every entry, and a "scholarly view vs traditional view" toggle where they differ.

## Sources and licensing

These are candidate sources from memory, not yet opened or verified. Each needs a licence check before use.

- **Scholarly overviews:** Oxford, Cambridge and Britannica-style reference works for era dates and consensus views; licensed, so cite and summarise rather than copy.
- **Primary texts:** public-domain translations (for example, older Max Muller and Ralph Griffith translations) and Sanskrit corpora such as GRETIL and Sacred-Texts; modern translations usually need permission.
- **Open data:** Wikidata and Wikipedia for people, places and dates (Creative Commons), as a starting point only.
- **Traditional authorities:** mathas, ashrams and sampradaya publications for each tradition's self-description, flagged as such.
- **Calendars:** established panchang algorithms (Drik-style calculations) for phase 4.

Next step: open each source, confirm its licence, and record it in a source register.

## Risks and principles

*Not yet written.*

## Roadmap and open questions

*Not yet written.*
