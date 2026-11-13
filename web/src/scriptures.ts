// Scriptures in approximate order of composition.
// Dates are scholarly ranges (negative = BCE) and are debated; most texts grew over centuries.
// Content is from memory and still needs checking against sources.

export type KindId = 'veda' | 'upanishad' | 'sutra' | 'epic' | 'purana' | 'agama' | 'bhakti';
export type GodRole = 'early' | 'absolute' | 'classical' | 'devotion' | 'little';

export interface Scripture {
  id: string;
  name: string;
  kind: KindId;
  start: number; // negative = BCE
  end: number;
  dates: string;
  summary: string;
  provides: string;
  godsRole: GodRole;
  gods: string;
  contents: string[];
}

export const KINDS: { id: KindId; label: string }[] = [
  { id: 'veda', label: 'Vedas' },
  { id: 'upanishad', label: 'Upanishads' },
  { id: 'sutra', label: 'Sutras & law' },
  { id: 'epic', label: 'Epics' },
  { id: 'purana', label: 'Puranas' },
  { id: 'agama', label: 'Agamas & Tantras' },
  { id: 'bhakti', label: 'Devotional' },
];

// How a text treats the gods, used for the colour badge.
export const GOD_ROLES: Record<GodRole, string> = {
  early: 'Early gods',
  absolute: 'The ultimate reality',
  classical: 'Classical gods',
  devotion: 'One supreme god',
  little: 'Little on gods',
};

export const SCRIPTURES: Scripture[] = [
  {
    id: 'rigveda', name: 'Rigveda', kind: 'veda', start: -1500, end: -1000, dates: 'c. 1500–1000 BCE',
    summary: 'The oldest Hindu text: about a thousand hymns in early Sanskrit, composed and passed on orally.',
    provides: 'Hymns for ritual, praise of deities, early cosmology, including the Purusha Sukta and the hymn of creation.',
    godsRole: 'early',
    gods: 'First records the deities: Indra, Agni, Soma, Varuna, Mitra, Ushas. Rudra and Vishnu appear but are minor, and late hymns name creator figures (Hiranyagarbha, Vishvakarman, Purusha). It has goddesses (Ushas, Aditi, Sarasvati, Vac), but not Shiva by name or the single great Goddess (Devi: Durga, Kali, Parvati) of later tradition.',
    contents: ['Hymns to Indra and Agni', 'Purusha Sukta', 'Nasadiya Sukta'],
  },
  {
    id: 'samaveda', name: 'Samaveda', kind: 'veda', start: -1100, end: -800, dates: 'c. 1100–800 BCE',
    summary: 'Hymns, mostly drawn from the Rigveda, set to melodies for chanting.',
    provides: 'The musical form of Vedic ritual; the root of Indian chant traditions.',
    godsRole: 'early',
    gods: 'Repeats the Rigvedic deities, especially Agni, Indra and Soma, with no new divine figures.',
    contents: ['Chant melodies', 'Soma ritual verses'],
  },
  {
    id: 'yajurveda', name: 'Yajurveda', kind: 'veda', start: -1100, end: -800, dates: 'c. 1100–800 BCE',
    summary: 'Prose and verse formulas spoken by the priest during sacrifice.',
    provides: 'The working manual of ritual: what to say and do at each step of the yajna.',
    godsRole: 'early',
    gods: 'Keeps Vedic deities. The Shatarudriya hymn gives Rudra a larger place, an early step toward Shiva.',
    contents: ['Ritual formulas', 'Shatarudriya'],
  },
  {
    id: 'atharvaveda', name: 'Atharvaveda', kind: 'veda', start: -1000, end: -800, dates: 'c. 1000–800 BCE',
    summary: 'Spells, healing charms and philosophical hymns for everyday life.',
    provides: 'Household rites, medicine, protection, and early speculative hymns about the cosmos.',
    godsRole: 'early',
    gods: 'Vedic deities plus powers and spirits of daily life; some hymns begin to name a single underlying principle.',
    contents: ['Healing charms', 'Cosmic hymns'],
  },
  {
    id: 'brahmanas', name: 'Brahmanas and Aranyakas', kind: 'veda', start: -900, end: -600, dates: 'c. 900–600 BCE',
    summary: 'Prose commentaries explaining the meaning of Vedic rituals, plus forest texts for inner meaning.',
    provides: 'Detailed ritual theory, myths explaining rites, and the shift toward interpreting sacrifice symbolically.',
    godsRole: 'early',
    gods: 'Prajapati, the creator (Hiranyagarbha and Vishvakarman of the late Rigveda are earlier creator figures), rises in importance and ritual itself is treated as almost more powerful than the gods.',
    contents: ['Shatapatha Brahmana', 'Aitareya Aranyaka'],
  },
  {
    id: 'upanishads', name: 'Principal Upanishads', kind: 'upanishad', start: -800, end: -200, dates: 'c. 800–200 BCE',
    summary: 'Philosophical dialogues on the self and ultimate reality, ending the Vedic corpus (Vedanta).',
    provides: 'The core ideas of later Hinduism: Brahman, atman, karma, rebirth and moksha.',
    godsRole: 'absolute',
    gods: 'Moves from many gods to one ultimate reality, Brahman. The Shvetashvatara Upanishad is an early text that names Rudra (Shiva) as supreme.',
    contents: ['Brihadaranyaka, Chandogya', 'Katha, Mundaka, Mandukya', 'Shvetashvatara'],
  },
  {
    id: 'sutras', name: 'Shrauta, Grihya and Dharma Sutras', kind: 'sutra', start: -600, end: -200, dates: 'c. 600–200 BCE',
    summary: 'Short rule-books on public ritual, household rites and duty.',
    provides: 'Early statements of dharma, life stages and the life-cycle rites (samskaras).',
    godsRole: 'little',
    gods: 'Practical rule-books; they assume the Vedic deities and add little about the gods themselves.',
    contents: ['Apastamba', 'Gautama', 'Baudhayana'],
  },
  {
    id: 'ramayana', name: 'Ramayana', kind: 'epic', start: -500, end: 200, dates: 'c. 500 BCE–200 CE (core)',
    summary: 'The story of Prince Rama, his exile, and the abduction of Sita, traditionally attributed to Valmiki.',
    provides: 'An ideal of duty, kingship and family; a model for later retellings across South and Southeast Asia.',
    godsRole: 'classical',
    gods: 'Rama is a heroic king in the oldest parts. The opening and closing books, added later, present him as an avatar of Vishnu.',
    contents: ['Rama, Sita, Lakshmana', 'Hanuman', 'Ravana'],
  },
  {
    id: 'mahabharata', name: 'Mahabharata', kind: 'epic', start: -400, end: 400, dates: 'c. 400 BCE–400 CE',
    summary: 'A vast epic of the Kuru war, with teachings on duty and law woven through it.',
    provides: 'Stories, ethics and philosophy; includes the Bhagavad Gita and the Shanti Parva on law and governance.',
    godsRole: 'classical',
    gods: 'Brahma appears as the creator and giver of boons. Krishna is shown as an avatar of Vishnu, and Shiva is also praised, as are Durga (in hymns to her) and Parvati, Shiva’s consort. The epic helps fix the idea of divine incarnation.',
    contents: ['Pandavas and Kauravas', 'Krishna', 'Nala and Savitri tales'],
  },
  {
    id: 'gita', name: 'Bhagavad Gita', kind: 'epic', start: -200, end: 200, dates: 'c. 200 BCE–200 CE',
    summary: 'Krishna’s dialogue with Arjuna before battle, inside the Mahabharata.',
    provides: 'Three paths to liberation: action (karma), knowledge (jnana) and devotion (bhakti).',
    godsRole: 'devotion',
    gods: 'Presents Krishna as the supreme being in personal form, giving devotion to one god a central place.',
    contents: ['Karma yoga', 'Jnana yoga', 'Bhakti yoga'],
  },
  {
    id: 'manusmriti', name: 'Manusmriti (Manavadharmashastra)', kind: 'sutra', start: -200, end: 200, dates: 'c. 200 BCE–200 CE',
    summary: 'The best known law-book, in verse, covering duty, social order and conduct.',
    provides: 'Rules for the four varnas, the four life stages, marriage, inheritance and penance; hugely influential and widely criticised today.',
    godsRole: 'little',
    gods: 'Mostly law, not theology; opens with a creation account but does not define the gods.',
    contents: ['Varna and ashrama', 'Rules of conduct', 'Kingship and justice'],
  },
  {
    id: 'darshanas', name: 'Brahma Sutras and Yoga Sutras', kind: 'sutra', start: -200, end: 400, dates: 'c. 200 BCE–400 CE',
    summary: 'Compact texts that systematise Vedanta (Brahma Sutras) and yoga practice (Yoga Sutras).',
    provides: 'The base for later commentaries by Shankara, Ramanuja and others; Patanjali’s eight limbs of yoga.',
    godsRole: 'absolute',
    gods: 'Brahma Sutras treat Brahman as the source of all; the Yoga Sutras mention a special being, Ishvara, but stay practical.',
    contents: ['Brahma Sutras', 'Yoga Sutras', 'Nyaya, Samkhya, Mimamsa sutras'],
  },
  {
    id: 'puranas', name: 'Early Puranas', kind: 'purana', start: 300, end: 900, dates: 'c. 300–900 CE (and later)',
    summary: 'Encyclopaedic texts of myth, genealogy, rites, pilgrimage and cosmology; there are 18 major ones.',
    provides: 'Stories of creation, the ages (yugas), the avatars of Vishnu, temple worship and festivals.',
    godsRole: 'classical',
    gods: 'The main source of the gods as most Hindus know them: Vishnu with his avatars, Shiva, and the Goddess (Devi, as Durga, Kali, Parvati, Lakshmi); the trio of Brahma (creator, born from Vishnu’s lotus in Vaishnava accounts), Vishnu and Shiva; family stories of Ganesha and Kartikeya.',
    contents: ['Vishnu, Shiva, Vayu Puranas', 'Markandeya Purana (with the Devi Mahatmya)', 'Vishnu’s ten avatars'],
  },
  {
    id: 'markandeya', name: 'Markandeya Purana', kind: 'purana', start: 300, end: 600, dates: 'c. 300–600 CE (with the Devi Mahatmya)',
    summary: 'One of the oldest Puranas, told by the sage Markandeya, with tales, teachings on dharma and a long account of the age of the Manus.',
    provides: 'Stories of Harishchandra, Madalasa and Dattatreya, teachings on dharma and yoga, an early map of India, and the Devi Mahatmya, the first text to make the Goddess supreme.',
    godsRole: 'classical',
    gods: 'Not tied to one god. It gives the Vedic gods Indra, Agni and Surya a large place, and tells of Brahma, Vishnu and Shiva as forms of one power. Its chapters 81–93, the Devi Mahatmya, make the Goddess the ultimate reality behind all the gods, a key step in defining Shaktism.',
    contents: ['The birds’ answers on the Mahabharata', 'Harishchandra', 'Madalasa and Alarka', 'Dattatreya', 'Surya', 'Devi Mahatmya (chapters 81–93)', 'Durga and Mahishasura', 'Devi Suktam'],
  },
  {
    id: 'agamas', name: 'Agamas and Tantras', kind: 'agama', start: 600, end: 1200, dates: 'c. 600–1200 CE',
    summary: 'Texts of the Shaiva, Vaishnava and Shakta traditions on temple ritual and meditation.',
    provides: 'Rules for building temples, installing images and daily worship; esoteric practice (Tantra).',
    godsRole: 'devotion',
    gods: 'Each tradition’s own texts set out its supreme deity (Shiva, Vishnu or Shakti) and how to worship it.',
    contents: ['Shaiva Agamas', 'Pancharatra (Vaishnava)', 'Shakta Tantras'],
  },
  {
    id: 'tamil-bhakti', name: 'Tamil devotional hymns', kind: 'bhakti', start: 600, end: 900, dates: 'c. 600–900 CE',
    summary: 'Hymns of the Nayanars to Shiva (Tevaram) and the Alvars to Vishnu (Divya Prabandham).',
    provides: 'Devotion in a regional language; the start of the great bhakti movement.',
    godsRole: 'devotion',
    gods: 'Personal devotion to Shiva or Vishnu as a loving, near god, outside Sanskrit priestly tradition.',
    contents: ['Tevaram', 'Divya Prabandham'],
  },
  {
    id: 'bhagavata', name: 'Bhagavata Purana', kind: 'purana', start: 800, end: 1000, dates: 'c. 800–1000 CE (debated)',
    summary: 'A Purana centred on Vishnu’s avatars, above all the stories of Krishna’s childhood.',
    provides: 'The main source for Krishna bhakti, shaping Gaudiya, Pushtimarg and many other devotional movements.',
    godsRole: 'devotion',
    gods: 'Makes Krishna the full form of the divine and loving devotion the highest path.',
    contents: ['Krishna’s childhood', 'Prahlada, Dhruva', 'Ten avatars'],
  },
  {
    id: 'ramcharitmanas', name: 'Ramcharitmanas', kind: 'bhakti', start: 1574, end: 1576, dates: '1574 CE',
    summary: 'Tulsidas’s retelling of the Ramayana in Awadhi, a language of the people.',
    provides: 'Brought Rama’s story and devotion to millions in the north; recited and staged each year.',
    godsRole: 'devotion',
    gods: 'Presents Rama as God, the supreme Vishnu, and makes devotion to him the central message.',
    contents: ['Rama bhakti', 'Hanuman', 'Awadhi verse'],
  },
];
