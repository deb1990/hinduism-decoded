import type { BookDetail } from '../bookDetails';

export const BOOKS_LAW: Record<string, BookDetail> = {
  manusmriti: {
    glance: [
      { label: 'Class', value: 'Smriti, the best-known Dharmashastra, or law book' },
      { label: 'Date', value: 'c. 200 BCE–200 CE' },
      { label: 'Language', value: 'Classical Sanskrit, in verse (shlokas)' },
      { label: 'Size', value: '12 chapters, about 2,700 verses' },
      { label: 'Name', value: 'Manavadharmashastra: the teaching of Manu, the first man' },
      { label: 'Status', value: 'Influential and widely criticised today' },
    ],
    sections: [
      {
        title: 'Structure and contents',
        points: [
          'Chapter 1 gives the creation of the world, from the self-existent lord to the golden egg and Brahma, and tells how Manu received the law.',
          'Chapter 2 gives the sources of dharma (the Veda, the tradition, the conduct of the good and one’s own satisfaction), and the rites of passage and the student’s life.',
          'Chapters 3 to 5 deal with the householder: marriage (with eight forms), the five daily sacrifices, offerings to the ancestors, food rules, purity and the duties of women.',
          'Chapter 6 covers the forest-dweller and the renouncer, and Chapter 7 the duties of the king.',
          'Chapters 8 and 9 set out the law of the courts, with eighteen titles of law, such as debt, deposits, partnership, inheritance, theft, assault and the duties of husband and wife.',
          'Chapter 10 treats the mixed classes and rules for times of distress. Chapter 11 sets out penances, and Chapter 12 the working of karma and the way to liberation.',
        ],
      },
      {
        title: 'Key teachings and ideas',
        points: [
          'Dharma has four sources: the Veda, tradition (smriti), the conduct of good people and the satisfaction of one’s own self.',
          'It lays out the system of four classes (varnas) and their duties, with the Brahmin at the top and the Shudra at the bottom, in great detail.',
          'The four stages of life (ashramas) are treated as a plan for a whole life, from student to renouncer.',
          'Karma and rebirth are used to explain social position: virtue leads to a higher birth, vice to a lower one.',
          'A king’s main duty is to uphold dharma by justice and punishment, which the text calls the rod (danda) that rules over all.',
          'It gives rules on wives, widows and property, which treat women as under the guardianship of their father, husband and son.',
          'It holds that the Brahmin is to be honoured and given a special status, and sets lighter penalties for him than for others in many cases.',
        ],
      },
      {
        title: 'What it says about the gods',
        points: [
          'The Manusmriti is a law book, not a book of myth, but its first chapter has an account of creation by the self-existent lord (Svayambhu).',
          'The creator forms a golden egg (hiranyagarbha), in which he is born as Brahma, the grandfather of all beings.',
          'Brahma then creates ten sages, the Prajapatis, and through them the gods, the demons, men and animals.',
          'Manu himself is the first man, whose descendants are the human race. The law is said to be taught to him by the creator.',
          'It names Vishnu, Shiva and the Goddess seldom, so it reflects an older picture of the gods.',
        ],
      },
      {
        title: 'Famous passages and stories',
        points: [
          '2.6 and 2.12 list the sources of dharma, the passage most quoted on how Hindu law finds its authority.',
          '3.56 reads “where women are honoured, there the gods are pleased”, which is often cited, though the text elsewhere restricts women’s freedom.',
          '5.148 says that a woman must never be independent, and is often cited by critics.',
          '1.31 tells of the origin of the four classes from the mouth, arms, thighs and feet of the creator, following the Purusha Sukta.',
          'The list of eighteen titles of law, in 8.4–7, is the first systematic account of Indian law.',
          'Chapter 12 distinguishes the three qualities (sattva, rajas, tamas) and the births that result, a key text on karma.',
        ],
      },
      {
        title: 'Composition, language and transmission',
        points: [
          'It was probably compiled in the early centuries CE, from older Dharmasutra material, by a learned group and not a single author.',
          'It is in simple verse, which made it easier to learn than the sutras and helped its spread.',
          'Patrick Olivelle’s 2005 critical edition, based on more than fifty manuscripts, is the basis of modern study.',
          'The most famous commentaries are by Medhatithi (9th century), Govindaraja, and Kulluka Bhatta (15th century), whose gloss became the standard.',
          'Its influence spread beyond India: it shaped law in Burma, Thailand, Cambodia and Java, where it was adapted to local use.',
        ],
      },
      {
        title: 'Later influence',
        points: [
          'It was the most prestigious law book for centuries, and later authors such as Yajnavalkya and Narada built on it.',
          'In 1794 Sir William Jones published a translation, Institutes of Hindu Law, and the British treated it as the basis of “Hindu law” in the courts, which gave it a wider role than it had before.',
          'It was criticised by social reformers from the nineteenth century onward. B. R. Ambedkar and his followers publicly burned a copy in 1927 at Mahad, in protest at caste.',
          'Today it is debated: some defend it as a historical text for its time, others as a source of injustice that should be rejected, and scholars stress that it was never the only authority in practice.',
          'Modern Indian law has replaced it, though family law for Hindus still draws on parts of the older tradition.',
        ],
      },
      {
        title: 'Reading it today',
        points: [
          'Patrick Olivelle’s The Law Code of Manu (Oxford World’s Classics, 2004) is the best translation, with a critical introduction.',
          'Wendy Doniger and Brian K. Smith’s The Laws of Manu (Penguin, 1991) is a readable version.',
          'Georg Bühler’s 1886 translation (Sacred Books of the East, vol. 25) is in the public domain.',
          'Read it as a historical document: it shows how a priestly group imagined an ideal order, and how that picture was later used.',
        ],
      },
    ],
    gods: ['brahma', 'hiranyagarbha', 'prajapati', 'marichi', 'atri'],
  },

  ramayana: {
    glance: [
      { label: 'Class', value: 'Itihasa, an epic, and the first poem (adi-kavya)' },
      { label: 'Date', value: 'c. 500 BCE–200 CE for the core; later additions' },
      { label: 'Language', value: 'Classical Sanskrit, in verse (shlokas)' },
      { label: 'Size', value: 'Seven books (kandas), about 24,000 verses' },
      { label: 'Author', value: 'Traditionally the sage Valmiki' },
      { label: 'Hero', value: 'Rama, prince of Ayodhya, with Sita, Lakshmana and Hanuman' },
    ],
    sections: [
      {
        title: 'Structure and contents',
        points: [
          'Bala Kanda (Boyhood): the birth of Rama and his brothers, his training, and his marriage to Sita after he breaks Shiva’s bow.',
          'Ayodhya Kanda: the coronation that is stopped, the exile for fourteen years, and the death of King Dasharatha.',
          'Aranya Kanda (Forest): life in the forest, the encounter with the demoness Shurpanakha, the golden deer and Ravana’s abduction of Sita.',
          'Kishkindha Kanda: the alliance with the monkey kings, the death of Vali, and the search for Sita.',
          'Sundara Kanda: Hanuman’s leap to Lanka, his meeting with Sita, and the burning of the city. It is the most loved part.',
          'Yuddha Kanda (War): the bridge to Lanka, the battle and the death of Ravana, Sita’s fire ordeal and the return to Ayodhya.',
          'Uttara Kanda: Rama’s reign, the exile of Sita, the birth of Lava and Kusha, and Rama’s departure. Bala and Uttara are generally seen as later additions.',
        ],
      },
      {
        title: 'Key teachings and ideas',
        points: [
          'Rama is the model of dharma: the obedient son, the loyal brother, the faithful husband and the just king, who keeps his father’s word at great cost.',
          'Sita is a model of fidelity and endurance, and her story raises sharp questions about a wife’s trials and a king’s duty.',
          'Lakshmana is the model of devoted service, Bharata of selflessness (he refuses the throne), and Hanuman of devotion and strength.',
          'Ravana, a learned and powerful king, is undone by desire and pride, which shows the cost of adharma even in a great man.',
          'The idea of Ramarajya, the rule of Rama, becomes an image of the ideal state: justice, peace and prosperity.',
          'The poem asks hard questions that readers still argue about: Rama’s killing of Vali, his test of Sita, and her exile.',
        ],
      },
      {
        title: 'What it says about the gods',
        points: [
          'In the older core, Rama is a heroic human prince, and other men praise him as equal to the gods in virtue.',
          'The first and last books, added later, present him as an avatar of Vishnu, born to kill Ravana, who could not be killed by gods or demons.',
          'Sita is called a form of Lakshmi in the later books and later tradition.',
          'Hanuman, the son of the wind god Vayu, is a monkey hero of great power and humility.',
          'Brahma gives boons to Ravana, Indra and the gods are threatened by him, and Shiva’s bow is the one that Rama breaks.',
          'Kubera, Ravana’s half-brother, owned Lanka and the flying chariot Pushpaka before Ravana took them.',
        ],
      },
      {
        title: 'Famous passages and stories',
        points: [
          'Valmiki’s first verse (the shloka) is born from his grief at seeing a hunter kill a bird, and is said to be the origin of Sanskrit poetry.',
          'The exile (Ayodhya Kanda) is one of the most moving sections, ending with Bharata taking Rama’s sandals to rule in his name.',
          'Jatayu, the vulture, dies fighting Ravana to save Sita, and Shabari, an old tribal woman, offers Rama berries.',
          'Hanuman’s leap across the sea and his burning of Lanka with his own tail, in the Sundara Kanda.',
          'The Aditya Hridayam, a hymn to the sun, taught by the sage Agastya to Rama before the final battle, is widely recited.',
          'The agni pariksha, Sita’s fire ordeal, and the exile of Sita in the Uttara Kanda, are the most debated episodes.',
        ],
      },
      {
        title: 'Composition, language and transmission',
        points: [
          'It was composed over centuries, from perhaps the fifth century BCE, and reached roughly its present size by about the second century CE.',
          'Two main regional recensions exist, northern and southern, and the manuscripts differ in many verses.',
          'The Baroda Critical Edition (1960–75) is the basis of scholarly work, with a text reconstructed from some two thousand manuscripts.',
          'It is the model of classical Sanskrit court poetry (kavya), and is called the “first poem”, adi-kavya, and Valmiki the first poet.',
        ],
      },
      {
        title: 'Later influence',
        points: [
          'It was retold in every major Indian language: Kamban’s Tamil Ramavataram (12th century), Krittivasa’s Bengali version (15th century) and Tulsidas’s Ramcharitmanas (1574).',
          'Outside India it travelled through Southeast Asia: the Thai Ramakien, the Khmer Reamker, the Javanese Kakawin Ramayana and the Malay Hikayat Seri Rama.',
          'Jain versions, such as Vimalasuri’s Paumachariya, and Buddhist versions, such as the Dasharatha Jataka, give the story with changes.',
          'A. K. Ramanujan’s essay “Three Hundred Ramayanas” shows how many versions there are, and how differently they treat the same events.',
          'The story is performed in the Ramlila plays, shadow theatre, dance and, in the modern period, television and cinema.',
          'Rama and Ayodhya also play a major role in modern public life in India, and scholars separate the many traditions from the political uses of the story.',
        ],
      },
      {
        title: 'Reading it today',
        points: [
          'Robert Goldman and others’ translation for Princeton (1984–2017, seven volumes) is the authoritative scholarly version.',
          'Arshia Sattar’s abridged Valmiki’s Ramayana (Penguin, 1996) is a good entry point.',
          'R. K. Narayan’s short retelling (1972) and Ralph Griffith’s verse translation (1870–74, public domain) are other options.',
          'Start with the Sundara Kanda for the best sustained poetry, then the Ayodhya Kanda for the drama.',
        ],
      },
    ],
    gods: ['rama', 'vishnu', 'brahma', 'vayu', 'kubera', 'narada', 'vishvakarman'],
  },

  mahabharata: {
    glance: [
      { label: 'Class', value: 'Itihasa, an epic: the longest poem in the world' },
      { label: 'Date', value: 'c. 400 BCE–400 CE, grown over centuries' },
      { label: 'Language', value: 'Classical Sanskrit, in verse (shlokas)' },
      { label: 'Size', value: 'About 100,000 verses in 18 books (parvas), plus the Harivamsa' },
      { label: 'Author', value: 'Traditionally Vyasa' },
      { label: 'Core story', value: 'The war at Kurukshetra between the Pandavas and the Kauravas' },
    ],
    sections: [
      {
        title: 'Structure and contents',
        points: [
          'It has eighteen parvas (books). The Adi Parva tells the origins of the Kuru family, the birth of the heroes and the rivalry of the cousins.',
          'The Sabha Parva has the building of the Pandavas’ hall, the dice game and the disrobing of Draupadi. The Vana Parva covers twelve years of exile, with many stories.',
          'The Virata Parva is the thirteenth year in disguise. The Udyoga Parva covers the failed attempts at peace and the preparations for war.',
          'The Bhishma, Drona, Karna and Shalya Parvas tell the eighteen days of the war, with the Bhagavad Gita in the Bhishma Parva.',
          'The Sauptika and Stri Parvas deal with the night massacre and the lament of the women. The Shanti and Anushasana Parvas are long teachings by Bhishma on kingship, law and liberation.',
          'The last parvas include the horse sacrifice, the elders’ retirement, the destruction of the Yadavas and the Pandavas’ final journey to heaven.',
          'The Harivamsa, an appendix, tells the life of Krishna and the Yadavas.',
        ],
      },
      {
        title: 'Key teachings and ideas',
        points: [
          'Dharma is subtle and often in conflict with itself. The epic repeatedly shows good people forced to choose between duties, and does not give easy answers.',
          'The epic claims to contain everything: “what is here may be found elsewhere, but what is not here is nowhere”.',
          'It teaches the paths of action, knowledge and devotion in the Gita, and a long account of rajadharma (the duty of kings) in the Shanti Parva.',
          'War and its cost are a central theme: the winners lose their sons, and Yudhishthira is left in grief and doubt after the victory.',
          'Fate, time and karma are strong forces, and many characters see their actions as shaped by past deeds and by a larger plan.',
          'Women characters, especially Draupadi, Kunti and Gandhari, speak powerfully about justice and the harm done by the men’s game.',
        ],
      },
      {
        title: 'What it says about the gods',
        points: [
          'Krishna is a prince and a friend of the Pandavas who is also revealed as the supreme god, Vishnu in human form, in the Gita and elsewhere.',
          'Shiva is praised at length, and Arjuna gains the Pashupata weapon from him, which marks the rise of Shaiva devotion.',
          'The Goddess is praised in hymns to Durga in the Virata and Bhishma Parvas.',
          'Indra, Surya, Vayu, Dharma (Yama) and the Ashvins are the fathers of the Pandava brothers, by the mothers Kunti and Madri.',
          'Brahma, Vishnu and Shiva appear together, and the Narayaniya section of the Shanti Parva teaches an early form of Vaishnava theology.',
          'Skanda is described as the commander of the gods’ army, and the Matrikas appear around him.',
        ],
      },
      {
        title: 'Famous passages and stories',
        points: [
          'The Bhagavad Gita, in the Bhishma Parva (chapters 25–42), is the best known part, a dialogue between Krishna and Arjuna on the battlefield (see its own section below).',
          'The dice game and the disrobing of Draupadi (Sabha Parva) is the turning point of the epic.',
          'The Yaksha Prashna (Vana Parva), in which Yudhishthira answers a spirit’s riddles, is a famous test of wisdom.',
          'The story of Nala and Damayanti, of Savitri and Satyavan, and of Shakuntala are among the many tales told within the frame.',
          'The death of Abhimanyu in the chakravyuha, the duel of Arjuna and Karna, and the fall of Duryodhana are the high points of the war.',
          'The Vishnu Sahasranama, the thousand names of Vishnu, is in the Anushasana Parva, and the Sanatsujatiya, on death and immortality, is in the Udyoga Parva.',
          'Yudhishthira and the dog at the gates of heaven, in the last parva, is a famous test of compassion.',
        ],
      },
      {
        title: 'The Bhagavad Gita (Bhishma Parva, chapters 25–42)',
        points: [
          'The Gita is the 18-chapter, about 700-verse dialogue between Krishna and Arjuna just before the war begins. Sanjaya reports it to the blind king Dhritarashtra, with divine sight to see the battlefield.',
          'Chapter 1 sets the scene: Arjuna, seeing his kin in the opposing army, drops his bow in despair. Chapter 2 is the core: the self is eternal and cannot be killed, and one must act without attachment to the fruit.',
          'Chapters 3 to 6 develop the path of action, the path of knowledge, renunciation and meditation. Chapters 7 to 12 turn to God, with the cosmic form in chapter 11 and the praise of devotion in chapter 12.',
          'Chapters 13 to 17 teach the field and its knower, the three gunas and the supreme person. Chapter 18 sums up and ends with Arjuna’s decision to act.',
          'Three paths lead to the goal: action (karma yoga), knowledge (jnana yoga) and devotion (bhakti yoga). The Gita harmonises them, and joins the Upanishads, Samkhya, Yoga and Vedic ritual in one teaching.',
          'Krishna presents himself as the supreme being, the source and end of everything, and the basis of Brahman (14.27). Whenever dharma declines, he comes into being (4.7–8).',
          'Famous verses: 2.47 on action without attachment to its fruit, 11.32 where Krishna calls himself time, the destroyer of the worlds, and 18.66, “abandon all duties and take refuge in me alone”.',
          'Its date is inside the epic’s own: it was probably added in the last centuries BCE or the first of the Common Era. It was soon treated as a separate text, and is read and recited on its own.',
          'Shankara, Ramanuja and Madhva each wrote commentaries, finding non-dualism, qualified non-dualism and dualism in it. Tilak, Gandhi, Aurobindo and Vivekananda read it afresh, and Charles Wilkins’s 1785 translation was the first Sanskrit work to be translated into English directly.',
          'Good translations: Barbara Stoler Miller (Bantam, 1986), Eknath Easwaran (Nilgiri, 1985) and Gavin Flood and Charles Martin (Norton, 2012). Read chapters 2, 12 and 11 first.',
        ],
      },
      {
        title: 'Composition, language and transmission',
        points: [
          'It grew by accretion over perhaps eight centuries, from a core story of a war, with philosophy, law and tales added.',
          'It is told in layers of narration: Sauti tells the story to sages at the Naimisha forest, as he heard it recited by Vaishampayana to King Janamejaya.',
          'Tradition says the poet Vyasa dictated it and Ganesha wrote it down, but this story is in later manuscripts only.',
          'The Critical Edition of the Bhandarkar Oriental Research Institute in Pune (1919–66) is the scholarly basis, and it is about the size of ten Iliads and Odysseys combined.',
          'Regional versions differ widely, with distinct tellings in Tamil, Telugu, Bengali, Javanese and other traditions.',
        ],
      },
      {
        title: 'Later influence',
        points: [
          'It is the main source for classical Sanskrit drama and poetry, and for the later Puranas, which borrow its characters and stories.',
          'It shaped the bhakti movements through the Gita and the Krishna stories, and the Vaishnava traditions of the Alvars and the Gaudiya.',
          'It spread across Southeast Asia, where Javanese and Balinese shadow plays still perform its scenes.',
          'Peter Brook’s stage production (1985) and film (1989) made it known in the West, and it is retold in comics, television and novels in India.',
          'It continues to be debated: readers argue over who is right in the war, the treatment of Karna and Ekalavya, and the story’s views on caste and women.',
        ],
      },
      {
        title: 'Reading it today',
        points: [
          'Bibek Debroy’s ten-volume translation (Penguin, 2010–14) is complete and readable.',
          'J. A. B. van Buitenen’s scholarly translation (Chicago, 1973–78) covers the first five books and part of the sixth.',
          'Kisari Mohan Ganguli’s 1883–96 version is in the public domain.',
          'For a short route in, try John Smith’s verse abridgement (Penguin, 2009) or Carole Satyamurti’s verse version (2015).',
        ],
      },
    ],
    gods: ['krishna', 'shiva', 'vishnu', 'brahman', 'durga', 'indra', 'vayu', 'yama', 'kartikeya', 'ganesha', 'parashurama', 'kalki', 'narada', 'chandra'],
  },

  mimamsa: {
    glance: [
      { label: "Class", value: "Darshana sutra: the founding text of the Mimamsa school" },
      { label: "Date", value: "c. 300–100 BCE; the debated range runs to 200 CE" },
      { label: "Language", value: "Sanskrit, in sutra form" },
      { label: "Size", value: "About 2,700 sutras in twelve chapters" },
      { label: "Author", value: "Jaimini, by tradition a pupil of Vyasa" },
      { label: "Place", value: "Northern India, in the Vedic ritual schools" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "Mimamsa means “reflection”. This school is also called Purva Mimamsa, the earlier enquiry, because it studies the ritual part of the Veda, while Vedanta (Uttara Mimamsa) studies the Upanishads.",
          "The twelve chapters cover the sources of dharma, the kinds of Vedic command, the details of sacrifice, the order of rites and who is qualified to perform them.",
          "It is a book of rules for interpreting the Vedic texts, and so is close to a manual of law and method.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "The opening sutra is “athato dharma-jijnasa”: “now, therefore, the enquiry into dharma”.",
          "Dharma is what the Veda commands, and can be known only through the Veda.",
          "The Veda is eternal and has no author, human or divine (apaurusheya). Its words are self-standing and need no guarantor.",
          "Right action, mostly Vedic ritual, produces its result through an unseen force (apurva) and not through a god’s favour.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "This is the most radical view of the orthodox schools: no creator god is needed.",
          "Mimamsa holds that the gods exist only as the beings named in the mantras, and have no form beyond the words that praise them.",
          "The ritual works because it is performed correctly, not because a god is pleased.",
          "Later Mimamsakas such as Kumarila argued against the existence of a creator and are among the clearest atheist voices in the Hindu tradition.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "The opening enquiry into dharma.",
          "The argument for the eternity of the Veda and of the relation between word and meaning.",
          "The rules of interpretation: what counts as a command, and how to settle a conflict between texts.",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "The sutras were probably put together between 300 and 100 BCE, from older teaching.",
          "Shabara’s commentary (about the 1st to 4th century CE) is the oldest on it, and was followed by the sub-commentaries of Kumarila Bhatta and Prabhakara in the 7th century.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "Its rules of interpretation were used by the writers of Hindu law and by Vedanta.",
          "It shaped the doctrine that the Veda is the highest authority, which defined “orthodoxy” in India.",
          "Its debates with Buddhists and Jains over the Veda and God shaped Indian philosophy.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "Ganganatha Jha’s Purva Mimamsa in its Sources (Banaras, 1942) is a classic study.",
          "Francis Clooney’s Thinking Ritually (Vienna, 1990) is a good modern account.",
        ],
      },
    ],
    gods: ["indra", "agni"],
  },
  vaisheshika: {
    glance: [
      { label: "Class", value: "Darshana sutra: the founding text of the Vaisheshika school" },
      { label: "Date", value: "c. 200 BCE–100 CE" },
      { label: "Language", value: "Sanskrit, in sutra form" },
      { label: "Size", value: "About 370 sutras in ten chapters" },
      { label: "Author", value: "Kanada, also called Kashyapa or Uluka, by tradition" },
      { label: "Place", value: "Not known" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "The name comes from vishesha, “particularity”: the school asks what makes each thing what it is.",
          "The ten chapters cover substance, quality, motion, universals, particulars and inherence, the categories into which the world is sorted.",
          "The sutra lists six categories: substance, quality, action, universal, particular and inherence. A seventh, absence, was added later.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "Matter is made of atoms (paramanu) of earth, water, fire and air, which are eternal, and combine to make larger things.",
          "Nine kinds of substance exist: the four atoms, ether, time, space, self and mind.",
          "The aim of the system is to know the real nature of things as a way to liberation.",
          "It is a naturalist account of the world, and is among the earliest atomic theories.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "The sutra itself says little about God.",
          "It says the Veda has authority because it was composed by a trustworthy source, which later writers read as God.",
          "Later Vaisheshika, joined with Nyaya, brought in a creator, Ishvara, who sets the atoms in motion.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "The list of the six categories.",
          "The atomic theory of matter.",
          "The proof of ether (akasha) from sound.",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "The sutra is dated by scholars between about the 2nd century BCE and the 1st century CE.",
          "Prashastapada’s Padarthadharmasangraha (about 6th century CE) is the main early work that built on it.",
          "The school merged with Nyaya, and the two were taught together from about the 10th century.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "It was a main part of Nyaya-Vaisheshika, the leading school of logic and natural philosophy in India.",
          "Its atomic theory is much discussed in the history of science, though it is not experimental.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "Nandalal Sinha’s translation, The Vaisesika Sutras of Kanada (Allahabad, 1911), is old but available.",
          "Karl Potter’s Indian Metaphysics and Epistemology (Princeton, 1977) gives a modern account.",
        ],
      },
    ],
    gods: ["brahman"],
  },
  nyaya: {
    glance: [
      { label: "Class", value: "Darshana sutra: the founding text of the Nyaya school of logic" },
      { label: "Date", value: "c. 200 BCE–200 CE" },
      { label: "Language", value: "Sanskrit, in sutra form" },
      { label: "Size", value: "About 530 sutras in five chapters" },
      { label: "Author", value: "Gautama, also called Akshapada, by tradition" },
      { label: "Place", value: "Not known" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "Nyaya means “rule” or “method”, and the school is the study of reasoning and debate.",
          "The first sutra lists sixteen topics, from the sources of knowledge to the faults of argument and the ways a debate can be lost.",
          "The five chapters cover the sources of knowledge, doubt and debate, the nature of the self and body, and the ways of refuting an opponent.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "There are four sources of valid knowledge (pramana): perception, inference, comparison and testimony.",
          "The five-part syllogism (proposition, reason, example, application and conclusion) is the model for argument.",
          "The self is real and distinct from the body and mind; it knows, feels and wills.",
          "Liberation comes from knowing the truth about these things and ending false belief.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "The sutra has a few lines on God (Ishvara) as the one who gives the fruits of action.",
          "Later Nyaya writers made the proof of God a central subject. Udayana’s Nyayakusumanjali (11th century CE) argues that the world, as an effect, must have an intelligent maker.",
          "This is the clearest case in the Hindu tradition of arguing for God from reason, in a debate against Buddhists and Mimamsakas who denied a creator.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "The first sutra’s list of sixteen topics.",
          "The definition of inference and the five-part argument.",
          "The long debate against the Buddhists on the self.",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "The sutra took its present form between about 200 BCE and 200 CE, with later additions.",
          "Vatsyayana’s commentary (about the 4th to 5th century CE) is the oldest, and Uddyotakara, Vacaspati and Udayana followed.",
          "About the 13th century CE, Gangesha’s Tattvachintamani started the “new logic” (Navya-Nyaya), which became the main school of Indian logic for 500 years.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "Nyaya’s methods of debate shaped all later Indian philosophy, including Buddhism and Jainism.",
          "Navya-Nyaya’s exact technical language was used in law and grammar across India until modern times.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "Mrinalkanti Gangopadhyay’s Nyaya-Sutras (Calcutta, 1982) gives the sutras with commentary.",
          "Jonardon Ganeri’s Philosophy in Classical India (Routledge, 2001) is a good modern introduction.",
        ],
      },
    ],
    gods: ["brahman", "shiva"],
  },
  samkhya: {
    glance: [
      { label: "Class", value: "Karika: the classic text of the Samkhya school" },
      { label: "Date", value: "c. 350–450 CE; the school itself is much older" },
      { label: "Language", value: "Sanskrit, in verse (arya metre)" },
      { label: "Size", value: "72 verses (sometimes counted as 70)" },
      { label: "Author", value: "Ishvarakrishna" },
      { label: "Place", value: "Not known" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "Samkhya is one of the oldest Indian philosophies; its ideas appear in the Upanishads, the Mahabharata and the Gita, but its oldest full text, the Samkhya Karika, is from about 400 CE.",
          "The Karika has 72 verses. The Samkhya Sutra, often cited with it, is a much later work, probably of the 14th century CE.",
          "It lists 25 principles of reality, from nature (prakriti) and the self (purusha) down to the five elements.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "The world has two eternal sources: prakriti, matter, which is active but blind; and purusha, the self, which sees but does not act. There are many selves.",
          "Prakriti has three strands (gunas): sattva (clarity), rajas (energy) and tamas (inertia), whose balance makes everything in the world.",
          "Suffering comes from mistaking the self for matter, and liberation comes from the knowledge that the two are separate.",
          "The image used is that of a blind man and a lame man: matter carries the self, and the self sees for matter.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "Classical Samkhya has no creator god: matter evolves of its own accord, for the sake of the self.",
          "This is called “atheistic” Samkhya, in contrast to the Yoga of Patanjali, which keeps the same scheme and adds Ishvara.",
          "The gods, in this view, are among the beings in the world of matter, not above it.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "The list of 25 principles.",
          "The image of the blind man and the lame one.",
          "The dancer who stops dancing once she has been seen: matter withdraws when the self has understood.",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "Tradition names Kapila as the founder, and the school is much older than the Karika.",
          "Gaudapada’s commentary and the Yuktidipika are the main early commentaries.",
          "The Karika was translated into Chinese in the 6th century by Paramartha, which is the strongest evidence for its date.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "The three gunas and the idea of prakriti are used throughout the Gita, the Puranas, Tantra and Ayurveda.",
          "Its pairing with Yoga is the basis of the practical path of Patanjali.",
          "Its dualism is an important foil for Advaita Vedanta, which argues for one reality.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "Gerald Larson’s Classical Samkhya (Motilal, 1969) is the standard study.",
          "The Karika is short, and a page or two a day with a good commentary is enough to see its structure.",
        ],
      },
    ],
    gods: ["brahman"],
  },
  arthashastra: {
    glance: [
      { label: "Class", value: "Shastra: a treatise on artha, wealth and power" },
      { label: "Date", value: "c. 300 BCE–300 CE; the present text is probably from the first centuries CE" },
      { label: "Language", value: "Classical Sanskrit, in prose with some verse" },
      { label: "Size", value: "15 books, 150 chapters, about 6,000 verses by its own count" },
      { label: "Author", value: "Kautilya, also called Chanakya or Vishnugupta, minister of Chandragupta Maurya, by tradition" },
      { label: "Found", value: "The manuscript was rediscovered in Mysore in 1905 and printed in 1909" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "Book 1 is the training of the king and his ministers; Book 2 is the running of the state, with its officers, mines, trade and revenue.",
          "Book 3 is law, with courts and the law of marriage, debt and inheritance; Book 4 is the suppression of crime.",
          "Book 5 covers the conduct of officials; Book 6 gives the theory of the state, with seven elements: king, ministers, territory, fort, treasury, army and ally.",
          "Books 7 to 14 cover foreign policy, war, secret practices and the work of spies; Book 15 explains how the text is arranged.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "The text defines artha as the livelihood of people and the earth, and as the most important of the three aims of life.",
          "The king’s duty is the welfare of his subjects: “in the happiness of his subjects lies the king’s happiness”.",
          "It teaches realist statecraft: spies, the “circle of states” of neighbours and enemies, and the use of both force and policy.",
          "It treats dharma as a limit on kings; the king should protect each person’s duties, and should not become a tyrant.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "The gods are not the subject; the text uses them in state ritual, oaths and the building of temples.",
          "It advises the king to build temples of the gods in the fortified city and to fix their places: Aparajita, Apratihata, Shiva, Vaishravana (Kubera), Ashvins, Shri (Lakshmi) and Madira.",
          "It also treats religion as an instrument of rule, and recommends that spies pose as holy men.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "The seven elements of the state (saptanga).",
          "The “mandala” theory: the neighbour is the natural enemy, and the neighbour’s neighbour the natural ally.",
          "The rules for the day of the king, divided into eight parts.",
          "The long account of the work of spies and of secret agents.",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "Tradition says Kautilya wrote it for Chandragupta Maurya, around 300 BCE; many scholars think the present text was compiled later, by one or more authors, and is a work of the first to third centuries CE.",
          "It was lost for centuries, and the one manuscript found in 1905 by R. Shamasastry, a librarian in Mysore, was edited and published in 1909.",
          "Patrick Olivelle’s translation (Oxford, 2013) argues the text had a single author and a date nearer to 100 CE.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "It is quoted by later writers on politics and the law, and by Kamandaka’s Nitisara.",
          "In modern India, it is often cited in discussions of strategy and the economy.",
          "It has been compared with Machiavelli’s The Prince, though it is much longer and more detailed.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "R. P. Kangle’s three-volume edition and translation (Bombay, 1960–65) is the scholarly standard.",
          "L. N. Rangarajan’s Penguin version (1992) is the most readable; Olivelle’s translation is the most recent.",
          "Because it is a manual of rule, read it for how India thought about the state, not for its doctrine on the gods.",
        ],
      },
    ],
    gods: ["kubera", "shiva", "lakshmi"],
  },
  kamasutra: {
    glance: [
      { label: "Class", value: "Kamashastra: the treatise on kama, pleasure and love" },
      { label: "Date", value: "c. 200–400 CE; the range is debated" },
      { label: "Language", value: "Classical Sanskrit, in prose and verse" },
      { label: "Size", value: "7 parts, 36 chapters, 64 sections and about 1,250 verses" },
      { label: "Author", value: "Vatsyayana Mallanaga; almost nothing else is known of him" },
      { label: "Place", value: "North India, probably the Gupta world of cities such as Pataliputra" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "Part 1 is general: the three aims of life, the education of a citizen and the 64 arts, such as music, dance, poetry and perfume-making.",
          "Part 2 is on sexual union and is the part most people know; it is only about a quarter of the book.",
          "Part 3 is on winning a wife, Part 4 on a wife’s conduct, and Part 5 on other men’s wives.",
          "Part 6 is on courtesans and Part 7 on ways of improving appearance and attraction.",
          "The text mixes manual, manners and social guide; much of it is about the life of a cultured urban man.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "Kama is one of the three aims of life with dharma and artha, and should be pursued within a life guided by dharma.",
          "The text says that dharma comes first, artha second and kama third, but holds that all three should be balanced.",
          "It treats women as people with their own wishes, and gives them advice on the same footing; its account of what women want is more thoughtful than many later texts.",
          "It teaches that pleasure is a skill to be learned, with training, manners and attention to the other person.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "It is not a religious text, and gives the gods little place.",
          "It gives a myth of its own origin: Prajapati first spoke the three aims; Manu took dharma, Brihaspati took artha, and Nandi, Shiva’s bull, took kama in a thousand chapters.",
          "Shvetaketu, the son of Uddalaka, abridged Nandi’s work to five hundred chapters, and later teachers cut it again, until Vatsyayana composed the present short form.",
          "It mentions public festivals and gatherings as occasions for meeting, and treats the gods as part of the social calendar.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "The list of 64 arts that a cultured person should know.",
          "The description of the daily life of the urban man (nagaraka), his house and his friends.",
          "The advice for courtesans, which has the book’s most practical detail.",
          "Vatsyayana’s closing remark that the text is for the study of the subject and not for indulgence.",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "Vatsyayana says he drew on older authors, such as Babhravya of Panchala and Auddalaki Shvetaketu, whose works are lost.",
          "The oldest commentary is the Jayamangala by Yashodhara, from the 13th century CE.",
          "The text was not much read in the medieval period, and returned to notice with Richard Burton’s 1883 translation.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "It shaped later texts on the subject, such as Koka’s Ratirahasya, and the arts of love in Indian court life.",
          "Temple sculpture of couples, as at Khajuraho, is sometimes linked to this tradition, though the connection is debated.",
          "It is popularly known in the modern world mostly as a book about sex, a reading that cuts most of the text.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "Wendy Doniger and Sudhir Kakar’s translation (Oxford, 2002) and Patrick Olivelle’s (Oxford, 2009) are the best modern English versions.",
          "Read Part 1 first, since it sets out what the book thinks it is doing.",
          "Do not read it as a statement of religious practice; it is a handbook for a social class and age.",
        ],
      },
    ],
    gods: ["kubera", "shiva"],
  },

  shrauta: {
    glance: [
      { label: "Class", value: "Kalpa Sutra: the Vedanga of ritual, public rites" },
      { label: "Date", value: "c. 600–200 BCE" },
      { label: "Language", value: "Late Vedic and early classical Sanskrit, in aphorisms" },
      { label: "Main texts", value: "Apastamba, Baudhayana, Katyayana, Ashvalayana, Latyayana" },
      { label: "Size", value: "Large; Apastamba’s Shrauta Sutra has 24 chapters" },
      { label: "Companions", value: "The Grihya and Dharma Sutras of the same school" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "Each Vedic school had its own Shrauta Sutra, which says how to carry out the rites “heard” (shruta) in the Veda.",
          "They cover the simple fire rites (agnihotra, the new and full moon rites) and the great sacrifices (soma, horse sacrifice, royal consecration).",
          "They list the priests, their duties, the order of acts, the mantras to say and the offerings to make.",
          "The Agnichayana, the building of the fire altar from thousands of bricks in the shape of a bird, is described in detail.",
          "They also say how to repair a rite that has gone wrong.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "A rite must be done exactly, since its effect depends on it being done correctly.",
          "Each Veda has its own priests: the Hotri (Rigveda), Adhvaryu (Yajurveda), Udgatri (Samaveda) and Brahman (Atharvaveda).",
          "The three sacred fires (garhapatya, ahavaniya and dakshinagni) are set up by a householder who wants to perform the rites.",
          "The rites are the duty of a householder who has the means, and are done on behalf of a patron (yajamana).",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "These are rule-books, and say little about the gods themselves.",
          "Agni, the fire, is the carrier of the offering, and Soma, Indra and the other Vedic gods receive the offerings.",
          "Prajapati and Vishnu appear in the rites as the sacrifice itself, following the Brahmanas.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "The soma sacrifice, in its stages of pressing and offering, is the model of the great rites.",
          "The building of the fire altar is the most elaborate rite described.",
          "Baudhayana’s Shrauta Sutra has the Sulba rules on altar geometry, which includes the “Pythagorean” rule.",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "They were composed within each school, and each is named for its teacher.",
          "They stand between the Brahmanas, which explain the rite, and the later law books.",
          "Their style is the model for the grammar of Panini and for the later philosophical sutras.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "A small number of families in Kerala, Andhra and Maharashtra still perform these rites, in the form fixed here.",
          "They gave Mimamsa its subject matter and the rules it uses to explain Vedic commands.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "Frits Staal’s Agni: The Vedic Ritual of the Fire Altar (Berkeley, 1983) records the 1975 performance in Kerala.",
          "Most Shrauta Sutras have no good complete English translation; Caland’s translations of Apastamba and Katyayana are the main ones.",
        ],
      },
    ],
    gods: ["agni", "soma", "prajapati", "indra"],
  },
  grihya: {
    glance: [
      { label: "Class", value: "Kalpa Sutra: household rites" },
      { label: "Date", value: "c. 600–200 BCE" },
      { label: "Language", value: "Late Vedic and early classical Sanskrit, in aphorisms" },
      { label: "Main texts", value: "Ashvalayana, Paraskara, Apastamba, Gobhila, Gautama" },
      { label: "Rites", value: "The samskaras, or life-cycle rites" },
      { label: "Companions", value: "The Shrauta and Dharma Sutras of the same school" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "The Grihya Sutras (“of the house”) set out the domestic rites, done at a single household fire instead of the three sacred fires.",
          "They cover the rites of pregnancy, birth, naming, first feeding, the first haircut and the thread ceremony (upanayana), which begins Vedic study.",
          "They give the rite of marriage, of building a house, and the daily and monthly offerings of a householder.",
          "They end with the rites for the dead (antyeshti) and the offerings to ancestors (shraddha).",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "Life is marked by sacraments (samskaras), each of which makes the person fit for the next stage.",
          "The household fire is the centre of the home, and the daily offerings keep the household in order with gods, ancestors and spirits.",
          "Marriage is a sacrament, made by the seven steps around the fire; the groom says that they walk together as friends.",
          "The thread ceremony makes a boy “twice born” and a student of the Veda.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "The rites offer to Agni, Prajapati, Soma and the Vedic gods, as in the Shrauta Sutras.",
          "They also make offerings to the ancestors, the directions, and to a wide range of spirits (bhutas), showing a world full of powers.",
          "Some Grihya texts mention Rudra, Vishnu and the Goddess, a trace of the changing religion.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "The seven steps (saptapadi) of the wedding, in a form still used.",
          "The thread ceremony’s teaching of the Gayatri mantra.",
          "The rite of the first feeding, naming and the first haircut of a child.",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "Each school of each Veda had its own Grihya Sutra, with Ashvalayana (Rigveda) and Paraskara (White Yajurveda) the most used today.",
          "They were put in writing late, and are quoted by later law books.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "They are the base of the life-cycle rites performed by Hindus today, with local changes.",
          "Hindu weddings, thread ceremonies and funerals still follow their outline.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "Hermann Oldenberg’s Grihya Sutras (Sacred Books of the East, vols. 29 and 30) is the standard older translation.",
          "Pandurang Vaman Kane’s History of Dharmasastra (vol. 2) describes the rites in detail.",
        ],
      },
    ],
    gods: ["agni", "prajapati", "soma"],
  },
  dharmasutras: {
    glance: [
      { label: "Class", value: "Kalpa Sutra: law and conduct" },
      { label: "Date", value: "c. 600–200 BCE" },
      { label: "Language", value: "Late Vedic and early classical Sanskrit, in aphorisms" },
      { label: "Main texts", value: "Apastamba, Gautama, Baudhayana and Vasishtha" },
      { label: "Oldest", value: "Gautama and Apastamba, probably" },
      { label: "Companions", value: "The Shrauta and Grihya Sutras of the same school" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "The Dharma Sutras give rules of conduct: the duties of each class and stage of life, purity, food, inheritance, crime and punishment, and penances.",
          "Gautama’s is the oldest and shortest, with 28 chapters; Apastamba is in two parts of 11 chapters each; Baudhayana and Vasishtha are later.",
          "Each lays out the four stages of life, the duties of the four classes, the king’s duties, the law of debt, marriage and inheritance.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "Dharma means the customary rules of a community of those who know the Veda, drawn from the Veda, from tradition and from the conduct of the learned.",
          "Life has four stages (ashramas): student, householder, forest-dweller and renouncer. Apastamba argues for the householder.",
          "Four classes (varnas) have different duties and standards of purity. The rules often favour Brahmins in penalty and honour.",
          "Penances (prayashchitta) are set for offences, to restore a person to the community.",
          "The king must protect his people and give justice; his taxes and punishments are set out.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "They are law books, and say little about the gods; they assume the Vedic gods and rites.",
          "Offerings to Agni, Prajapati and Soma appear in the rites they require.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "Apastamba’s remark that dharma and adharma do not go about saying “here we are”, so one must judge by what the learned approve.",
          "Gautama’s early rules on law, procedure and the king’s duty.",
          "Apastamba’s rule that a householder may set aside a rule of dharma if it is clearly against what is right.",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "Apastamba and Baudhayana are from the south (Andhra), Gautama is perhaps from the north.",
          "They were composed within Vedic schools, and each is attached to one.",
          "The Manusmriti and later law books are built on them and replace them as the main source.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "They are the base of the Dharmashastra tradition, the learned literature on law and conduct.",
          "Colonial courts drew on this tradition when they set up “Hindu law”.",
          "They stand behind the ideas of the four stages and four classes.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "Patrick Olivelle’s Dharmasutras (Oxford World’s Classics, 1999) translates all four.",
          "Georg Bühler’s older versions in the Sacred Books of the East (vols. 2 and 14) are in the public domain.",
        ],
      },
    ],
    gods: ["agni", "prajapati"],
  },
  'brahma-sutras': {
    glance: [
      { label: "Class", value: "Sutra: the Vedanta school’s founding text" },
      { label: "Date", value: "c. 200 BCE–400 CE; the present form is probably late in that span" },
      { label: "Language", value: "Classical Sanskrit, in aphorisms" },
      { label: "Size", value: "About 555 sutras in four chapters" },
      { label: "Author", value: "Badarayana, traditionally identified with Vyasa" },
      { label: "Also called", value: "Vedanta Sutras or Shariraka Sutras" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "Four chapters: samanvaya (harmony of the texts), avirodha (answers to objections), sadhana (the means) and phala (the fruit).",
          "The first chapter shows that all the Upanishads point to Brahman as the cause of the world.",
          "The second answers the objections of Samkhya, Buddhist, Jain and other schools.",
          "The third and fourth discuss meditation and the self’s journey after death, and end with liberation.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "Brahman is the origin, support and end of the world.",
          "The Upanishads, though they seem to say different things, give one consistent teaching.",
          "The self (atman) and Brahman are related in a way later schools read differently: as one (Shankara), as part and whole (Ramanuja), or as distinct (Madhva).",
          "Knowledge of Brahman, not ritual, is the way to liberation.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "Brahman is the one cause of the world, and the gods of the Vedas are its forms or servants.",
          "Ishvara, as the personal form of Brahman, creates and rules the world in the readings of Ramanuja and others.",
          "It argues against the Samkhya view that matter alone, without a conscious cause, makes the world.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "The opening, “athato brahma-jijnasa”: “now, therefore, the inquiry into Brahman”.",
          "The second sutra, “janmady asya yatah”: Brahman is that from which the birth, support and end of the world come.",
          "The argument that the world comes from a conscious Brahman and not from matter (chapter 2).",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "The sutras are so compressed that they are nearly unintelligible alone, so commentaries were needed.",
          "Shankara (8th century CE), Ramanuja (11th), Madhva (13th), Nimbarka and Vallabha each wrote one, founding different schools of Vedanta.",
          "The text was probably put together over centuries, in dialogue with Buddhists and Jains.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "With the Upanishads and the Gita, it is one of the three “sources” (prasthana-traya) of Vedanta, so all later Vedanta begins with commentary on it.",
          "Much of the history of Hindu philosophy is a history of readings of this one text.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "George Thibaut’s translation with Shankara’s commentary is in the public domain (Sacred Books of the East, vols. 34 and 38).",
          "Swami Gambhirananda’s Brahma-Sutra-Bhashya of Shankara (Advaita Ashrama) is widely available.",
        ],
      },
    ],
    gods: ["brahman"],
  },
  'yoga-sutras': {
    glance: [
      { label: "Class", value: "Sutra: the founding text of classical Yoga" },
      { label: "Date", value: "c. 200–400 CE; some scholars place it earlier, about 200 BCE" },
      { label: "Language", value: "Classical Sanskrit, in aphorisms" },
      { label: "Size", value: "196 sutras in four chapters (padas)" },
      { label: "Author", value: "Patanjali, whose identity is uncertain" },
      { label: "Commentary", value: "Vyasa’s Bhashya (about the 5th century CE)" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "Chapter 1, Samadhi Pada, defines yoga and describes concentration and the kinds of absorption.",
          "Chapter 2, Sadhana Pada, gives the practice: the afflictions (kleshas) and the first five of the eight limbs.",
          "Chapter 3, Vibhuti Pada, covers the last three limbs and the powers that come from them.",
          "Chapter 4, Kaivalya Pada, covers liberation, the isolation of the seer from nature.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "Yoga is the stilling of the movements of the mind (chitta-vritti-nirodha), so that the seer rests in its own nature (1.2–3).",
          "The eight limbs are restraints (yama), observances (niyama), posture (asana), breath control (pranayama), withdrawal of the senses (pratyahara), concentration (dharana), meditation (dhyana) and absorption (samadhi).",
          "The five afflictions are ignorance, ego, attachment, aversion and fear of death.",
          "It uses the Samkhya scheme of matter and many selves, and adds a discipline and God.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "Ishvara is a special self, untouched by suffering, action and its results, and the teacher of the first teachers (1.23–26).",
          "His sign is the syllable Om, and meditating on him is one way to samadhi.",
          "This is a small part of the text; the system is mostly about the mind, and does not need God.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "“yogash chitta-vritti-nirodhah” (1.2), the definition of yoga in four words.",
          "The list of the eight limbs (2.29).",
          "The list of the obstacles and the afflictions (kleshas).",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "Patanjali is traditionally the same as the grammarian of that name, but most scholars doubt this.",
          "Vyasa’s Bhashya is the main early commentary and may be as old as the sutras.",
          "The text was put in its present form by about 400 CE.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "It became the base of modern yoga after Vivekananda and later teachers, though modern posture yoga has little basis in the text, which mentions asana only briefly.",
          "It is read worldwide, and is among the most translated Hindu texts.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "Edwin Bryant’s The Yoga Sutras of Patanjali (North Point Press, 2009) has the text with the classical commentaries.",
          "Swami Satchidananda’s The Yoga Sutras of Patanjali (Integral Yoga) is a popular edition.",
        ],
      },
    ],
    gods: [],
  },
  ashtadhyayi: {
    glance: [
      { label: "Class", value: "Vedanga: grammar (vyakarana)" },
      { label: "Date", value: "c. 500–300 BCE; traditionally the 4th century BCE" },
      { label: "Language", value: "Sanskrit, in sutra form" },
      { label: "Size", value: "About 4,000 rules in eight chapters" },
      { label: "Author", value: "Panini, traditionally from Shalatura in the north-west" },
      { label: "Place", value: "North-west India" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "The name means “eight chapters”. Each has four sections, giving the 32 sections of the work.",
          "It begins with a list of sounds arranged in fourteen lines, the Maheshvara Sutras, said to come from the drum of Shiva.",
          "It gives rules to build every correct Sanskrit word from roots and endings, covering sound change, compounds, case and verb endings.",
          "It uses a technical language of its own, with markers and short labels, so that very short rules can do much.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "The language is a closed system: a few rules and a list of roots make the whole of it.",
          "Rules are ordered, with exceptions and general rules, and the system avoids repeating itself.",
          "It treats the language of the Vedas as an older form, and gives special rules for it.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "It is a technical work and has no theology.",
          "The Maheshvara Sutras, the opening list of sounds, are said in tradition to have come from Shiva’s drum, which is an early mention of this connection.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "The first rule, “vriddhir adaic”.",
          "The Maheshvara Sutras, with the legend of Shiva’s drum.",
          "The idea of a “zero” element in the grammar (lopa), which scholars compare with a zero in mathematics.",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "Katyayana added corrections (vartikas) in the 3rd century BCE and Patanjali the grammarian explained and defended it in the Mahabhashya (about the 2nd century BCE).",
          "The three together, “the three sages” (munitraya), are the authorities of Sanskrit grammar.",
          "It was passed on orally, and has been kept with great accuracy.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "It fixed classical Sanskrit, so that texts of all later Hindu traditions can be read with the same grammar.",
          "It has been called one of the great intellectual works of the ancient world, and modern linguists and computer scientists have studied it.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "Sumitra Katre’s Astadhyayi of Panini (Texas, 1987) and Rama Nath Sharma’s six-volume edition (Munshiram Manoharlal) are the main translations.",
          "George Cardona’s Panini: A Survey of Research (1976) is a standard guide.",
        ],
      },
    ],
    gods: ["shiva"],
  },
  chandahsutra: {
    glance: [
      { label: "Class", value: "Vedanga: metre (chandas)" },
      { label: "Date", value: "c. 300–200 BCE; some place it later" },
      { label: "Language", value: "Sanskrit, in sutra form" },
      { label: "Size", value: "About 8 chapters" },
      { label: "Author", value: "Pingala, traditionally a younger brother of Panini" },
      { label: "Place", value: "Not known" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "It gives the rules of Vedic metre (such as the Gayatri, Anushtubh and Trishtubh) and of the later classical metres.",
          "It uses short and long syllables, and groups them into feet and lines.",
          "It includes a method for listing all the possible patterns of a given length.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "Metre is one of the limbs of the Veda, needed to recite a hymn correctly.",
          "Each Vedic metre has a set count of syllables, and gods and metres are paired in tradition: Agni with the Gayatri, Indra with the Trishtubh.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "It is technical, and has no theology.",
          "It matters because the Vedic hymns to the gods are bound to their metres.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "The method for counting patterns, which is related to the binary system and to what is now called Pascal’s triangle.",
          "The list of the seven main Vedic metres.",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "The text is traditionally by Pingala, and was explained by Halayudha (10th century CE) in a commentary.",
          "It is a late Vedanga, and shows signs of later additions.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "Its rules were used for all classical Sanskrit poetry.",
          "Its counting method is cited in the history of mathematics.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "Few English translations exist; Kedarnath’s Chhandahshastra of Pingala (Bombay, 1938) gives the text with commentary.",
          "Histories of Indian mathematics, such as those by Bibhutibhushan Datta, discuss the counting method.",
        ],
      },
    ],
    gods: ["agni", "indra"],
  },
  nirukta: {
    glance: [
      { label: "Class", value: "Vedanga: etymology (nirukta)" },
      { label: "Date", value: "c. 600–400 BCE" },
      { label: "Language", value: "Late Vedic Sanskrit, in prose" },
      { label: "Size", value: "12 chapters, with 2 added" },
      { label: "Author", value: "Yaska" },
      { label: "Based on", value: "The Nighantu, a list of Vedic words" },
    ],
    sections: [
      {
        title: "Structure and contents",
        points: [
          "It is a commentary on the Nighantu, a list of difficult words in the Vedas arranged in groups.",
          "Its first chapters set out its method; the later ones go through the words and verses.",
          "The last chapters cover the gods of the Vedas, arranged by realm.",
        ],
      },
      {
        title: "Key teachings and ideas",
        points: [
          "Words can be explained from their roots; this method shows what a word means and so what a hymn says.",
          "Yaska quotes earlier scholars who disagreed about how to read the Veda, which shows there was already a long tradition of debate.",
          "He holds that the mantras have meaning, against those who say they are only sounds.",
        ],
      },
      {
        title: "What it says about the gods",
        points: [
          "Yaska divides the gods into three realms: Agni of earth, Vayu or Indra of the air, and Surya of the sky.",
          "He records that some read the gods as one divine power with many names, which later grows into the Upanishadic and Puranic views.",
          "He also records the dispute over whether a Vedic god is a person or a natural force, which shaped later ideas.",
        ],
      },
      {
        title: "Famous passages and stories",
        points: [
          "The statement that the three realms each have a chief god.",
          "The discussion of whether the gods have a human form.",
          "The famous statement that a pillar (sthanu) that does not see the meaning of a word only carries the load.",
        ],
      },
      {
        title: "Composition, language and transmission",
        points: [
          "Yaska is placed before Panini, who knows of him.",
          "Durga’s commentary (about the 12th century CE) is the main later one.",
          "Lakshman Sarup’s edition and English translation (Oxford, 1920–27) is the standard.",
        ],
      },
      {
        title: "Later influence",
        points: [
          "It is the starting point for Indian ideas about the meaning of words and the reading of the Veda.",
          "Its view of the gods in three realms shaped later Vedic scholarship.",
        ],
      },
      {
        title: "Reading it today",
        points: [
          "Lakshman Sarup’s The Nighantu and the Nirukta (Delhi, 1967 reprint) is the English translation.",
        ],
      },
    ],
    gods: ["agni", "vayu", "indra", "surya"],
  },
};
