// Timeline content. Dates are approximate and debated; summaries are from memory
// and still need checking against sources (see ../plan.md, "Sources and licensing").
export type Confidence = 'High' | 'Medium' | 'Low';

export interface Era {
  id: string;
  short: string;
  dates: string;
  name: string;
  summary: string;
  texts: string[];
  ideas: string[];
  figures: string[];
  confidence: { level: Confidence; note: string };
}

export const ERAS: Era[] = [
  {
    id: "indus",
    short: "Indus Valley",
    dates: "c. 3300–1300 BCE",
    name: "Indus Valley civilization",
    summary:
      "Planned cities such as Harappa and Mohenjo-daro flourished along the Indus and nearby rivers. The script is undeciphered, so we know the people through archaeology, not their own words.",
    texts: ["None readable (script undeciphered)"],
    ideas: ["Whether seals and ritual bathing show early Hindu features is debated"],
    figures: ["No named individuals known"],
    confidence: { level: "Low", note: "Archaeology is solid; links to later Hinduism are inference and contested." },
  },
  {
    id: "early-vedic",
    short: "Early Vedic",
    dates: "c. 1500–1000 BCE",
    name: "Early Vedic period",
    summary:
      "The Rigveda is composed and passed on orally in early Sanskrit. Worship centres on fire ritual (yajna) and nature deities such as Indra, Agni and Varuna, while Rudra and Vishnu are minor figures.",
    texts: ["Rigveda"],
    ideas: ["Yajna (fire ritual)", "Rita (cosmic order)", "Hymns to Indra, Agni, Varuna"],
    figures: ["Rishis (seers) credited with hymns"],
    confidence: { level: "Medium", note: "Dating rests on linguistic evidence; scholars give a range of centuries." },
  },
  {
    id: "later-vedic",
    short: "Later Vedic",
    dates: "c. 1000–500 BCE",
    name: "Later Vedic period",
    summary:
      "The other Vedas, the Brahmanas and the earliest Upanishads take shape. Attention moves from performing ritual to asking what the self and ultimate reality are.",
    texts: ["Yajurveda, Samaveda, Atharvaveda", "Brahmanas", "Early Upanishads (e.g. Brihadaranyaka, Chandogya)"],
    ideas: ["Karma and rebirth", "Atman (self) and Brahman (ultimate reality)", "Moksha (liberation)"],
    figures: ["Yajnavalkya", "Uddalaka Aruni"],
    confidence: { level: "Medium", note: "Relative order of texts is better known than absolute dates." },
  },
  {
    id: "epics",
    short: "Epics",
    dates: "c. 500 BCE–200 CE",
    name: "Epics and rival paths",
    summary:
      "Buddhism and Jainism emerge and challenge Vedic authority. The Mahabharata (containing the Bhagavad Gita) and the Ramayana grow over centuries, while law and philosophy are systematised.",
    texts: ["Mahabharata and Bhagavad Gita", "Ramayana", "Dharma Sutras, Manusmriti", "Early darshana sutras"],
    ideas: ["Dharma as duty", "Bhakti (devotion) in the Gita", "Four purusharthas", "Six darshanas begin"],
    figures: ["Vyasa (traditional compiler)", "Valmiki (traditional author)", "Patanjali (traditionally)"],
    confidence: { level: "Low", note: "Epics grew over centuries; authorship is traditional, not historical." },
  },
  {
    id: "gupta",
    short: "Gupta",
    dates: "c. 320–550 CE",
    name: "Gupta classical age",
    summary:
      "Stone temples and image worship spread across the subcontinent, and the Puranas are compiled. Vishnu, Shiva and the Goddess (Devi, worshipped as Durga and others) emerge as the main centres of devotion.",
    texts: ["Early Puranas", "Kalidasa's works (literary)", "Later darshana commentaries"],
    ideas: ["Image worship (murti puja)", "Avatars of Vishnu", "Devotion to Shiva and the Goddess"],
    figures: ["Kalidasa", "Gupta patron-kings"],
    confidence: { level: "High", note: "Inscriptions and surviving temples give firm dates for this era." },
  },
  {
    id: "bhakti-south",
    short: "Bhakti south",
    dates: "c. 600–1200 CE",
    name: "Bhakti and philosophy in the south",
    summary:
      "Tamil saints sing devotion in the local language, and Tantra grows. Great philosophers build the Vedanta schools, and monumental temples rise.",
    texts: ["Tevaram (Nayanars)", "Divya Prabandham (Alvars)", "Shankara's commentaries", "Tantras"],
    ideas: ["Advaita (non-dualism)", "Vishishtadvaita (qualified non-dualism)", "Devotion in regional languages"],
    figures: ["Alvars and Nayanars", "Adi Shankara (c. 8th century)", "Ramanuja"],
    confidence: { level: "Medium", note: "Shankara's exact dates are debated; the century range is widely accepted." },
  },
  {
    id: "medieval",
    short: "Medieval",
    dates: "c. 1200–1750 CE",
    name: "Sultanates, Mughals and bhakti movements",
    summary:
      "Under changing rulers, devotional poet-saints carry bhakti across the north in local languages. In the south, Vijayanagara patronises temples and Sanskrit learning.",
    texts: ["Ramcharitmanas", "Poems of Kabir and Mirabai", "Gaudiya Vaishnava writings"],
    ideas: ["Personal devotion over ritual rank", "Vernacular scripture", "Sant and Vaishnava traditions"],
    figures: ["Kabir", "Mirabai", "Tulsidas", "Chaitanya"],
    confidence: { level: "High", note: "Well documented through texts, inscriptions and court records." },
  },
  {
    id: "colonial",
    short: "Colonial",
    dates: "c. 1800–1947 CE",
    name: "Colonial encounter and reform",
    summary:
      "The word Hinduism comes into common use. Scholars edit and print the texts, and reformers reinterpret tradition in response to colonial rule and Christian missions.",
    texts: ["Printed editions of Vedas and epics", "Sacred Books of the East", "Vivekananda's lectures"],
    ideas: ["Social reform", "Neo-Vedanta", "Hinduism as a single religion"],
    figures: ["Ram Mohan Roy", "Dayananda Saraswati", "Ramakrishna", "Vivekananda"],
    confidence: { level: "High", note: "Rich written record, though historians debate how much the label was invented." },
  },
  {
    id: "modern",
    short: "Today",
    dates: "1947 to today",
    name: "Independence, diaspora and global reach",
    summary:
      "Temples, yoga and festivals spread worldwide, and teachers and texts move online. Debates continue over caste, reform, identity and who speaks for Hinduism.",
    texts: ["Digital libraries of the texts", "Modern translations and commentaries"],
    ideas: ["Diaspora communities", "Global yoga and meditation", "Debates on caste and identity"],
    figures: ["Many teachers, scholars and movements"],
    confidence: { level: "High", note: "Contemporary; interpretations are contested rather than uncertain." },
  },
];
