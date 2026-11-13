import { MORE_GODS } from './godsMore';

// For each god: where they appear and which book defines them, in order of composition.
// Content is from memory and still needs checking against sources. Dating is approximate and debated.

export type StageId = 'veda' | 'later' | 'upanishad' | 'epic' | 'purana' | 'bhakti';
export type Weight = 'mention' | 'major' | 'defines';
export type GodGroup = 'vedic' | 'creator' | 'great' | 'avatar' | 'goddess' | 'family' | 'sage' | 'guardian' | 'absolute';

export const STAGES: { id: StageId; label: string; sub: string }[] = [
  { id: 'veda', label: 'Rigveda', sub: 'c. 1500–1000 BCE' },
  { id: 'later', label: 'Later Vedas, Brahmanas', sub: 'c. 1100–600 BCE' },
  { id: 'upanishad', label: 'Upanishads, Vedanta', sub: 'c. 800 BCE–' },
  { id: 'epic', label: 'Epics, Gita', sub: 'c. 400 BCE–400 CE' },
  { id: 'purana', label: 'Puranas', sub: 'c. 300–1000 CE' },
  { id: 'bhakti', label: 'Agamas, Tantras, bhakti', sub: 'c. 600 CE on' },
];

export const GROUPS: { id: GodGroup; label: string }[] = [
  { id: 'vedic', label: 'Vedic gods' },
  { id: 'creator', label: 'Creators' },
  { id: 'great', label: 'Great gods' },
  { id: 'avatar', label: 'Avatars' },
  { id: 'goddess', label: 'Goddesses' },
  { id: 'family', label: 'Shiva’s family' },
  { id: 'sage', label: 'Sages, sons of Brahma' },
  { id: 'guardian', label: 'Direction guardians' },
  { id: 'absolute', label: 'The ultimate' },
];

export const WEIGHT_LABEL: Record<Weight, string> = {
  mention: 'Appears',
  major: 'Major role',
  defines: 'Defines',
};

export interface Step {
  stage: StageId;
  book: string;
  dates: string; // approximate, scholarly range
  note: string;
  weight: Weight;
}

export interface God {
  id: string;
  name: string;
  group: GodGroup;
  summary: string;
  definedIn: string;
  steps: Step[];
}

const BASE_GODS: God[] = [
  {
    id: 'indra', name: 'Indra', group: 'vedic',
    summary: 'King of the gods in the earliest texts, later a lesser figure.',
    definedIn: 'Rigveda',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'The most praised god, with roughly a quarter of the hymns; wins the world by slaying the serpent Vritra.' },
      { stage: 'epic', book: 'Mahabharata, Ramayana', dates: 'c. 500 BCE–400 CE', weight: 'mention', note: 'Still king of heaven, but heroes and Krishna overshadow him.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'mention', note: 'Ruler of the lesser gods; stories often show him humbled by Vishnu, Shiva or Krishna.' },
    ],
  },
  {
    id: 'agni', name: 'Agni', group: 'vedic',
    summary: 'The sacrificial fire and the messenger between humans and gods.',
    definedIn: 'Rigveda',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'Fire as a god and carrier of offerings; the very first hymn is to Agni.' },
      { stage: 'later', book: 'Brahmanas', dates: 'c. 900–600 BCE', weight: 'major', note: 'The ritual fire stands at the centre of every rite.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'mention', note: 'Becomes a guardian of one direction (south-east).' },
    ],
  },
  {
    id: 'varuna', name: 'Varuna', group: 'vedic',
    summary: 'Guardian of cosmic order and oaths, later lord of the waters.',
    definedIn: 'Rigveda',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'Upholds rita (cosmic order) and watches over oaths.' },
      { stage: 'epic', book: 'Epics', dates: 'c. 500 BCE–400 CE', weight: 'mention', note: 'Fades into lord of the waters.' },
    ],
  },
  {
    id: 'surya', name: 'Surya and Savitr', group: 'vedic',
    summary: 'The sun god, addressed in the Gayatri mantra.',
    definedIn: 'Rigveda',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'The sun as Surya, and Savitr, to whom the Gayatri mantra is addressed.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'major', note: 'Gains his own stories and worship; the sun becomes one of the five deities of Smarta worship.' },
    ],
  },
  {
    id: 'brahma', name: 'Brahma', group: 'creator',
    summary: 'The creator god of the Trimurti, who takes over the creator’s role from Prajapati.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'upanishad', book: 'Upanishads', dates: 'c. 800–200 BCE', weight: 'mention', note: 'Appears as the first-born teacher in some, for example at the start of the Mundaka.' },
      { stage: 'epic', book: 'Mahabharata, Ramayana', dates: 'c. 500 BCE–400 CE', weight: 'major', note: 'The creator and father of gods and demons, who grants boons to both.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'Fixed as the creator in the Trimurti; the Vaishnava account has him born from a lotus on Vishnu’s navel.' },
    ],
  },
  {
    id: 'shiva', name: 'Shiva (from Rudra)', group: 'great',
    summary: 'Grows from a fierce storm god into one of the supreme gods.',
    definedIn: 'Puranas and Shaiva Agamas',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'mention', note: 'Rudra, a fierce storm god, with only a few hymns; the name Shiva as a god does not yet appear.' },
      { stage: 'later', book: 'Yajurveda', dates: 'c. 1100–800 BCE', weight: 'major', note: 'The Shatarudriya hymn praises Rudra at length and uses epithets later tied to Shiva.' },
      { stage: 'upanishad', book: 'Shvetashvatara Upanishad', dates: 'c. 400–200 BCE', weight: 'major', note: 'Presents Rudra (Shiva) as the one supreme God.' },
      { stage: 'epic', book: 'Mahabharata', dates: 'c. 400 BCE–400 CE', weight: 'major', note: 'Praised as a great god, and the Pashupata idea of devotion takes shape.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'The linga, Parvati and his family, and his role as destroyer in the Trimurti, as in the Shiva and Linga Puranas.' },
      { stage: 'bhakti', book: 'Shaiva Agamas, Tevaram', dates: 'c. 600–1200 CE', weight: 'major', note: 'Agamas set temple ritual and doctrine; Tamil Nayanars sing his praise.' },
    ],
  },
  {
    id: 'vishnu', name: 'Vishnu', group: 'great',
    summary: 'From a minor Vedic god to the preserver and the god behind the avatars.',
    definedIn: 'Epics and Puranas',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'mention', note: 'A minor god known for his three strides across the world.' },
      { stage: 'later', book: 'Brahmanas', dates: 'c. 900–600 BCE', weight: 'major', note: 'Identified with the sacrifice itself.' },
      { stage: 'epic', book: 'Mahabharata, Ramayana', dates: 'c. 500 BCE–400 CE', weight: 'defines', note: 'Rises to supreme god; Rama and Krishna are shown as his avatars.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'The ten avatars and his cosmic role are set out, as in the Vishnu and Bhagavata Puranas.' },
      { stage: 'bhakti', book: 'Pancharatra, Divya Prabandham', dates: 'c. 400–900 CE', weight: 'major', note: 'Temple worship and the Alvars’ hymns spread Vaishnava devotion.' },
    ],
  },
  {
    id: 'krishna', name: 'Krishna', group: 'avatar',
    summary: 'A hero and teacher who becomes the supreme god of devotion.',
    definedIn: 'Mahabharata, Gita and Bhagavata Purana',
    steps: [
      { stage: 'epic', book: 'Mahabharata, Gita', dates: 'c. 400 BCE–400 CE', weight: 'defines', note: 'Shown as Vishnu’s avatar; in the Gita he presents himself as the supreme being.' },
      { stage: 'purana', book: 'Bhagavata Purana', dates: 'c. 800–1000 CE', weight: 'defines', note: 'Tells his childhood and makes loving devotion the highest path.' },
      { stage: 'bhakti', book: 'Gaudiya and Pushtimarg texts', dates: 'c. 1500–1600 CE', weight: 'major', note: 'Later devotional movements centre on Krishna as the supreme god.' },
    ],
  },
  {
    id: 'rama', name: 'Rama', group: 'avatar',
    summary: 'An ideal king in the oldest telling, later God.',
    definedIn: 'Ramayana, then Puranas and Ramcharitmanas',
    steps: [
      { stage: 'epic', book: 'Ramayana', dates: 'c. 500 BCE–200 CE', weight: 'defines', note: 'An ideal king in the oldest parts; the first and last books, added later, call him Vishnu’s avatar.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'major', note: 'Counted among the ten avatars of Vishnu.' },
      { stage: 'bhakti', book: 'Ramcharitmanas', dates: '1574 CE', weight: 'defines', note: 'Tulsidas (1574) presents Rama as God and devotion to him as the central path.' },
    ],
  },
  {
    id: 'durga', name: 'Devi (Durga, Kali, Parvati)', group: 'goddess',
    summary: 'The great Goddess, worshipped in many forms; supreme in the Shakta tradition.',
    definedIn: 'Devi Mahatmya (Markandeya Purana)',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'mention', note: 'No single great Goddess; the hymn of Vac (10.125) is later read as a Goddess hymn.' },
      { stage: 'epic', book: 'Mahabharata', dates: 'c. 400 BCE–400 CE', weight: 'mention', note: 'Includes hymns to Durga, and Parvati appears as Shiva’s consort.' },
      { stage: 'purana', book: 'Devi Mahatmya', dates: 'c. 500–600 CE', weight: 'defines', note: 'Makes Devi the supreme power and the slayer of the buffalo demon Mahishasura (c. 500–600 CE).' },
      { stage: 'bhakti', book: 'Shakta Tantras', dates: 'c. 600–1200 CE', weight: 'major', note: 'Develop Kali, Tara and Sri Vidya as forms of the Goddess.' },
    ],
  },
  {
    id: 'lakshmi', name: 'Lakshmi', group: 'goddess',
    summary: 'Goddess of wealth and fortune, consort of Vishnu.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'veda', book: 'Shri Sukta (Rigveda appendix)', dates: 'c. 1000–500 BCE', weight: 'mention', note: 'A late appendix to the Rigveda praises Shri, who is later identified with Lakshmi.' },
      { stage: 'epic', book: 'Epics', dates: 'c. 500 BCE–400 CE', weight: 'mention', note: 'Appears as Vishnu’s consort.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'The churning of the ocean story and her role as goddess of wealth and Vishnu’s consort.' },
    ],
  },
  {
    id: 'sarasvati', name: 'Sarasvati', group: 'goddess',
    summary: 'A river goddess who becomes the goddess of speech and learning.',
    definedIn: 'Rigveda, then Puranas',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'A sacred river and a goddess of inspiration.' },
      { stage: 'later', book: 'Brahmanas', dates: 'c. 900–600 BCE', weight: 'mention', note: 'Identified with Vac, speech.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'major', note: 'Goddess of learning and consort of Brahma.' },
    ],
  },
  {
    id: 'ganesha', name: 'Ganesha', group: 'family',
    summary: 'The elephant-headed remover of obstacles, a latecomer among the major gods.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'epic', book: 'Mahabharata (later parts)', dates: 'c. 400 CE or later', weight: 'mention', note: 'Appears as the scribe who writes the epic down, in a later addition.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'Takes his classical form: elephant-headed son of Shiva and Parvati, lord of beginnings.' },
      { stage: 'bhakti', book: 'Ganapatya texts', dates: 'c. 1100–1500 CE', weight: 'major', note: 'Wide worship, and a tradition that makes him supreme.' },
    ],
  },
  {
    id: 'kartikeya', name: 'Kartikeya (Skanda, Murugan)', group: 'family',
    summary: 'The war god, a son of Shiva, who is Murugan in the Tamil south.',
    definedIn: 'Mahabharata and Puranas',
    steps: [
      { stage: 'epic', book: 'Mahabharata', dates: 'c. 400 BCE–400 CE', weight: 'major', note: 'Skanda is the war god and commander of the gods.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'Becomes a son of Shiva and Parvati, as in the Skanda Purana.' },
      { stage: 'bhakti', book: 'Tamil devotional literature', dates: 'c. 200–900 CE', weight: 'major', note: 'Worshipped as Murugan, a central god of the Tamil south.' },
    ],
  },
  {
    id: 'brahman', name: 'Brahman (the ultimate reality)', group: 'absolute',
    summary: 'Not a god but the one reality behind all gods, defined in the Upanishads.',
    definedIn: 'Upanishads',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'mention', note: 'The word means the sacred power of the hymn.' },
      { stage: 'later', book: 'Brahmanas', dates: 'c. 900–600 BCE', weight: 'major', note: 'Treated as the power in ritual speech.' },
      { stage: 'upanishad', book: 'Upanishads, Brahma Sutras', dates: 'c. 800 BCE–400 CE', weight: 'defines', note: 'Becomes the ultimate, impersonal reality; the self (atman) is Brahman.' },
      { stage: 'epic', book: 'Bhagavad Gita', dates: 'c. 200 BCE–200 CE', weight: 'major', note: 'Joins Brahman with a personal God, Krishna.' },
    ],
  },
];

// All gods, ordered by the book group where each first appears (ties keep authored order).
const firstStage = (g: God) => Math.min(...g.steps.map((x) => STAGES.findIndex((st) => st.id === x.stage)));
export const GODS: God[] = [...BASE_GODS, ...MORE_GODS].sort((a, b) => firstStage(a) - firstStage(b));
