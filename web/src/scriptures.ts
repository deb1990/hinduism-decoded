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
    id: 'brahmanas', name: 'Brahmanas', kind: 'veda', start: -900, end: -600, dates: 'c. 900–600 BCE',
    summary: 'Prose commentaries explaining the meaning of Vedic rituals and the myths behind them.',
    provides: 'Detailed ritual theory, myths explaining rites, and the shift toward interpreting sacrifice symbolically.',
    godsRole: 'early',
    gods: 'Prajapati, the creator, rises in importance and ritual itself is treated as almost more powerful than the gods.',
    contents: ['Shatapatha Brahmana', 'Aitareya Brahmana', 'Manu and the fish'],
  },
  {
    id: 'aranyakas', name: 'Aranyakas', kind: 'veda', start: -800, end: -500, dates: 'c. 800–500 BCE',
    summary: '“Forest books” on the inner meaning of the rites, bridging the Brahmanas and the Upanishads.',
    provides: 'The move from performing the rite to understanding it, with meditation on the sacrifice.',
    godsRole: 'early',
    gods: 'Treats the rite as a meditation on the cosmos and the self, in which the gods are seen within.',
    contents: ['Aitareya Aranyaka', 'Taittiriya Aranyaka', 'Brihadaranyaka'],
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
    id: 'shrauta', name: 'Shrauta Sutras', kind: 'sutra', start: -600, end: -200, dates: 'c. 600–200 BCE',
    summary: 'Rule-books for the great public rites, giving the exact order of each act.',
    provides: 'The step-by-step procedure of the soma sacrifice, the fire rites and the building of the fire altar.',
    godsRole: 'little',
    gods: 'Practical rule-books; they assume the Vedic gods and say how to make offerings to them.',
    contents: ['Soma sacrifice', 'New and full moon rites', 'Fire altar (Agnichayana)'],
  },
  {
    id: 'grihya', name: 'Grihya Sutras', kind: 'sutra', start: -600, end: -200, dates: 'c. 600–200 BCE',
    summary: 'Rule-books for household rites around the home fire, from birth to death.',
    provides: 'The life-cycle rites (samskaras): birth, naming, thread ceremony, marriage and funeral.',
    godsRole: 'little',
    gods: 'Practical rule-books; offerings go to Agni, Prajapati, Soma and the house spirits.',
    contents: ['Upanayana (thread ceremony)', 'Marriage rite', 'Funeral rites'],
  },
  {
    id: 'dharmasutras', name: 'Dharma Sutras', kind: 'sutra', start: -600, end: -200, dates: 'c. 600–200 BCE',
    summary: 'The oldest Indian law books, in short rules on duty, class, life stages, purity and punishment.',
    provides: 'Early statements of dharma, the four life stages and the duties of kings, and the base of later law.',
    godsRole: 'little',
    gods: 'Practical law books; they assume the Vedic gods and say little about them.',
    contents: ['Apastamba', 'Gautama', 'Baudhayana', 'Vasishtha'],
  },
  {
    id: 'nirukta', name: 'Nirukta (Yaska)', kind: 'sutra', start: -600, end: -400, dates: 'c. 600–400 BCE',
    summary: 'Yaska’s work on the origins and meanings of difficult Vedic words.',
    provides: 'The oldest surviving work of etymology, with a list of Vedic gods by realm.',
    godsRole: 'early',
    gods: 'Lists the Vedic gods in three realms, earth, air and sky, and records views on whether the gods are persons or natural forces.',
    contents: ['Etymology', 'Three realms of gods', 'Earlier scholars’ views'],
  },
  {
    id: 'ashtadhyayi', name: 'Ashtadhyayi (Panini)', kind: 'sutra', start: -500, end: -300, dates: 'c. 500–300 BCE',
    summary: 'Panini’s grammar of Sanskrit in about 4,000 compact rules.',
    provides: 'A closed system of rules that builds every correct Sanskrit word, and that fixed classical Sanskrit.',
    godsRole: 'little',
    gods: 'A grammar with no theology; it matters because it fixed the language of the hymns and texts that name the gods.',
    contents: ['About 4,000 rules', 'Eight chapters', 'Shiva Sutras of sounds'],
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
    provides: 'Stories, ethics and philosophy; includes the Bhagavad Gita, with its three paths of action, knowledge and devotion, and the Shanti Parva on law and governance.',
    godsRole: 'classical',
    gods: 'Brahma appears as the creator and giver of boons. Krishna is shown as an avatar of Vishnu, and Shiva is also praised, as are Durga (in hymns to her) and Parvati, Shiva’s consort. The epic helps fix the idea of divine incarnation, and in the Bhagavad Gita Krishna presents himself as the supreme being, making devotion to one god central.',
    contents: ['Pandavas and Kauravas', 'Krishna', 'Bhagavad Gita (Bhishma Parva)', 'Nala and Savitri tales'],
  },
  {
    id: 'chandahsutra', name: 'Chandahsutra (Pingala)', kind: 'sutra', start: -300, end: -200, dates: 'c. 300–200 BCE',
    summary: 'Pingala’s treatise on metre, which sets out the rhythms of Vedic and classical verse.',
    provides: 'A system of the metres of Sanskrit verse, with a method that counts every possible pattern.',
    godsRole: 'little',
    gods: 'A technical work on metre with no theology; it describes the rhythms in which the hymns and epics are composed.',
    contents: ['Vedic metres', 'Classical metres', 'Method of counting patterns'],
  },
  {
    id: 'mimamsa', name: 'Mimamsa Sutra (Jaimini)', kind: 'sutra', start: -300, end: -100, dates: 'c. 300–100 BCE',
    summary: 'The founding text of the school that reads the Veda as a set of commands for ritual.',
    provides: 'Rules for interpreting the Veda, and the claim that the Veda is eternal and has no author.',
    godsRole: 'little',
    gods: 'Needs no creator god: the gods are the beings named in the mantras, and ritual works by itself.',
    contents: ['Dharma as the command of the Veda', 'Rules of interpretation', 'Apurva, the unseen result of ritual'],
  },
  {
    id: 'arthashastra', name: 'Arthashastra', kind: 'sutra', start: -300, end: 300, dates: 'c. 300 BCE–300 CE',
    summary: 'Kautilya’s treatise on statecraft, law, spies, taxes, war and the economy.',
    provides: 'The classic Indian text on artha, wealth and power, and on how a king should rule.',
    godsRole: 'little',
    gods: 'A practical manual with little on the gods; it names deities in oaths, temples and royal rites, and treats religion as a tool of state.',
    contents: ['Duties of the king', 'Law and courts', 'Spies and diplomacy', 'War'],
  },
  {
    id: 'vaisheshika', name: 'Vaisheshika Sutra (Kanada)', kind: 'sutra', start: -200, end: 100, dates: 'c. 200 BCE–100 CE',
    summary: 'The founding text of the school that sorts the world into categories and holds that matter is made of atoms.',
    provides: 'An early atomic theory, and a list of six categories of what exists.',
    godsRole: 'little',
    gods: 'Says little on God in the sutra; later writers added a creator who sets the atoms in motion.',
    contents: ['Six categories', 'Atoms', 'Nine substances'],
  },
  {
    id: 'nyaya', name: 'Nyaya Sutra (Gautama)', kind: 'sutra', start: -200, end: 200, dates: 'c. 200 BCE–200 CE',
    summary: 'The founding text of the school of logic and debate.',
    provides: 'The four sources of knowledge, the five-part argument, and rules for debate.',
    godsRole: 'little',
    gods: 'A few lines on God as giver of the fruits of action; later Nyaya made the proof of God a central subject.',
    contents: ['Sources of knowledge', 'The five-part argument', 'Sixteen topics'],
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
    id: 'brahma-sutras', name: 'Brahma Sutras (Badarayana)', kind: 'sutra', start: -200, end: 400, dates: 'c. 200 BCE–400 CE',
    summary: 'Short aphorisms that sum up the Upanishads and argue that they teach one doctrine: Brahman as the source of the world.',
    provides: 'The base text of Vedanta, which Shankara, Ramanuja, Madhva and others each explained in their own way.',
    godsRole: 'absolute',
    gods: 'Treats Brahman as the one cause of the world, and reads the gods as its forms or servants.',
    contents: ['Four chapters', 'About 555 sutras', 'Shankara’s commentary'],
  },
  {
    id: 'yoga-sutras', name: 'Yoga Sutras (Patanjali)', kind: 'sutra', start: 200, end: 400, dates: 'c. 200–400 CE (debated)',
    summary: '196 short aphorisms that define yoga as the stilling of the mind and give its eight limbs.',
    provides: 'The eight limbs of yoga, and the classic account of the mind and how to still it.',
    godsRole: 'little',
    gods: 'Names Ishvara, a special being untouched by suffering whom one can meditate on, but stays practical.',
    contents: ['Samadhi pada', 'Sadhana pada', 'Vibhuti pada', 'Kaivalya pada'],
  },
  {
    id: 'kamasutra', name: 'Kamasutra', kind: 'sutra', start: 200, end: 400, dates: 'c. 200–400 CE',
    summary: 'Vatsyayana’s treatise on kama, the aim of pleasure and love, covering courtship, marriage, household life and the arts of a cultured person.',
    provides: 'The classic Indian text on kama, one of the three aims of life beside dharma and artha.',
    godsRole: 'little',
    gods: 'No theology. It places kama within dharma and gives a mythic origin: Prajapati, then Nandi, Shvetaketu and Babhravya passed the teaching down.',
    contents: ['General principles', 'Sexual union', 'Courtship and marriage', 'Courtesans', 'The arts'],
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
    id: 'samkhya', name: 'Samkhya Karika (Ishvarakrishna)', kind: 'sutra', start: 350, end: 450, dates: 'c. 350–450 CE',
    summary: 'The classic text of the school that splits the world into matter and many selves.',
    provides: 'A count of 25 principles, the three strands (gunas), and the path to liberation by knowing self from matter.',
    godsRole: 'little',
    gods: 'Has no creator god: matter develops of its own accord for the sake of the self.',
    contents: ['25 principles', 'Prakriti and purusha', 'The three gunas'],
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
    id: 'shiva-sutras', name: 'Shiva Sutras', kind: 'agama', start: 800, end: 900, dates: 'c. 800–900 CE',
    summary: 'The root text of Kashmir Shaivism, said to have been revealed to the sage Vasugupta.',
    provides: 'A short text in 77 sutras on consciousness as Shiva, and the path to recognising it.',
    godsRole: 'absolute',
    gods: 'Treats Shiva as the one consciousness behind everything; the self is Shiva, forgotten and then recognised.',
    contents: ['77 sutras in three parts', 'Spanda Karika', 'Pratyabhijna (“recognition”)'],
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
    id: 'narada-bhakti', name: 'Narada Bhakti Sutra', kind: 'bhakti', start: 900, end: 1200, dates: 'c. 900–1200 CE (debated)',
    summary: '84 aphorisms on devotion to God, attributed to the sage Narada.',
    provides: 'A definition of bhakti as supreme love for God, ranked above action and knowledge.',
    godsRole: 'devotion',
    gods: 'Makes one personal God the object of love; a short theory of the devotion that the Gita and the Bhagavata teach.',
    contents: ['84 sutras', 'Forms of devotion', 'The gopis'],
  },
  {
    id: 'shandilya-bhakti', name: 'Shandilya Bhakti Sutra', kind: 'bhakti', start: 900, end: 1200, dates: 'c. 900–1200 CE (debated)',
    summary: 'About 100 aphorisms on devotion, attributed to the sage Shandilya, arguing for bhakti over knowledge.',
    provides: 'A definition of bhakti as supreme attachment to God, and an argument that it brings liberation.',
    godsRole: 'devotion',
    gods: 'Argues that devotion to a personal God, not knowledge, is the way to liberation.',
    contents: ['About 100 sutras', 'Bhakti and knowledge', 'Forms of devotion'],
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
