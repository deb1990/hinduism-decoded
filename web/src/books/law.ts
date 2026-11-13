import type { BookDetail } from '../bookDetails';

export const BOOKS_LAW: Record<string, BookDetail> = {
  sutras: {
    glance: [
      { label: 'Class', value: 'Smriti, the Kalpa Sutras: rules for rite and daily life' },
      { label: 'Date', value: 'c. 600–200 BCE' },
      { label: 'Language', value: 'Late Vedic and early classical Sanskrit, in terse aphorisms (sutras)' },
      { label: 'Three kinds', value: 'Shrauta (public rites), Grihya (household rites), Dharma (law and conduct)' },
      { label: 'Main authors', value: 'Apastamba, Baudhayana, Gautama, Vasishtha, among others' },
      { label: 'Place', value: 'One of the six Vedangas, the limbs of the Veda' },
    ],
    sections: [
      {
        title: 'Structure and contents',
        points: [
          'The Kalpa Sutras are the Vedic school’s “rule books”. Each school (shakha) had its own set, in three parts: Shrauta, Grihya and Dharma.',
          'The Shrauta Sutras give the exact order of the great public rites, such as the soma sacrifice, the new and full moon rites and the building of the fire altar.',
          'The Grihya Sutras cover the domestic rites around a single household fire: birth, naming, first feeding, the thread ceremony (upanayana), marriage, house-building and funeral.',
          'The Dharma Sutras give rules of conduct: the duties of each class and stage of life, purity, food, inheritance, crime and punishment, and penances.',
          'The Sulba Sutras, “rules of the cord”, are a related set on measuring and building altars. They contain the first Indian geometry.',
          'The style is extremely compressed, so that a rule can be memorised and recited. Commentaries are needed to understand them.',
        ],
      },
      {
        title: 'Key teachings and ideas',
        points: [
          'Dharma, in these texts, means the customary rules of a community of those who know the Veda, drawn from the Veda, from tradition (smriti) and from the conduct of the learned.',
          'Life is divided into four stages (ashramas): student, householder, forest-dweller and renouncer. Apastamba argues for the householder as the main one.',
          'Four classes (varnas) have different duties and different standards of purity. The rules often favour Brahmins in matters of penalty and honour.',
          'The rites of passage (samskaras) mark each stage of life, and are still the basis for Hindu life-cycle rites.',
          'Rules for purity cover food, contact, water and the touch of the dead, which later became the basis for ideas about caste.',
          'Penances (prayashchitta) are set for each offence, from mild fasts to severe ones, to restore a person to the community.',
          'Royal duties include protecting the people and administering justice, taxes and punishment, an early statement of Indian ideas of kingship.',
        ],
      },
      {
        title: 'What it says about the gods',
        points: [
          'These are practical rule books, and they say little about the gods themselves. They assume the Vedic gods and the Vedic rites.',
          'The domestic rites make offerings to a wide range of deities, with Agni, Prajapati, Soma and the house spirits among them.',
          'The Grihya rites include offerings to the ancestors, to the directions, and to the spirits (bhutas), a view of the world full of powers.',
          'Some Grihya texts mention gods of a later type, such as Rudra, Vishnu and the Goddess, a trace of the changing religion.',
        ],
      },
      {
        title: 'Famous passages and stories',
        points: [
          'Apastamba’s Dharmasutra is known for its moral tone: it says that dharma and adharma do not go about saying “here we are”, and one must judge by what the learned approve.',
          'Baudhayana’s Sulba Sutra states what is now called the Pythagorean theorem, in the rule that the diagonal of a rectangle makes an area equal to both sides.',
          'The Grihya rules for the thread ceremony (upanayana), which initiate a boy into study of the Veda, are the earliest full account of the rite.',
          'The wedding rite, with its seven steps around the fire, is described in the Grihya Sutras, in the form still used.',
          'The Gautama Dharmasutra gives early rules on law, procedure and the king’s duty.',
        ],
      },
      {
        title: 'Composition, language and transmission',
        points: [
          'They were composed within the Vedic schools, each by a teacher whose name the school bears, and each is attached to a Veda.',
          'They come from many regions: Apastamba is from the south (Andhra), Baudhayana is also southern, Gautama is perhaps from the north.',
          'Their style is the model for the grammar of Panini and for the later philosophical sutras, which also use a compact form.',
          'Later law books, including the Manusmriti, are built on them and replace them as the main sources.',
        ],
      },
      {
        title: 'Later influence',
        points: [
          'They are the base of the Dharmashastra tradition, the learned literature on law and conduct that runs through the whole later history.',
          'They stand behind the Hindu life-cycle rites still performed today, and the ideas of the four stages and four classes.',
          'The Sulba geometry is one of the first mathematical texts of India.',
          'Colonial courts, in the eighteenth and nineteenth centuries, drew on this tradition when they set up “Hindu law”.',
        ],
      },
      {
        title: 'Reading it today',
        points: [
          'Patrick Olivelle’s Dharmasutras (Oxford World’s Classics, 1999) translates Apastamba, Gautama, Baudhayana and Vasishtha.',
          'Georg Bühler’s older versions in the Sacred Books of the East (vols. 2 and 14) are in the public domain.',
          'For rites, Oldenberg’s Grihya Sutras (Sacred Books of the East, vols. 29 and 30) is the standard older translation.',
        ],
      },
    ],
    gods: ['agni', 'prajapati', 'soma'],
  },

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

  darshanas: {
    glance: [
      { label: 'Class', value: 'Smriti and philosophy: the foundational sutras of the six schools' },
      { label: 'Date', value: 'c. 200 BCE–400 CE' },
      { label: 'Language', value: 'Classical Sanskrit, in terse aphorisms (sutras)' },
      { label: 'The six', value: 'Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa and Vedanta' },
      { label: 'Key authors', value: 'Gautama, Kanada, Kapila, Patanjali, Jaimini, Badarayana' },
      { label: 'Covers here', value: 'Mainly the Brahma Sutras and the Yoga Sutras' },
    ],
    sections: [
      {
        title: 'Structure and contents',
        points: [
          'Six darshanas, “viewpoints”, are traditionally grouped in pairs: Nyaya with Vaisheshika, Samkhya with Yoga, and Mimamsa with Vedanta.',
          'Nyaya Sutras (Gautama) set out logic and the means of knowledge (perception, inference, comparison and testimony). Vaisheshika Sutras (Kanada) set out categories of being and an atomic theory.',
          'Samkhya, in the Samkhya Karika of Ishvarakrishna (about the fourth century CE), gives a dualism of Purusha (consciousness) and Prakriti (nature). Yoga adds a discipline and a God (Ishvara).',
          'The Yoga Sutras of Patanjali have 196 sutras in four chapters (padas): on concentration (samadhi), on practice (sadhana), on powers (vibhuti) and on liberation (kaivalya).',
          'The Purva Mimamsa Sutras of Jaimini examine the Vedic commands and the interpretation of ritual. The Brahma Sutras of Badarayana, about 555 sutras in four chapters, summarise the Upanishads.',
          'The four chapters of the Brahma Sutras deal with harmony of the texts (samanvaya), answers to objections (avirodha), the means (sadhana) and the fruit (phala).',
        ],
      },
      {
        title: 'Key teachings and ideas',
        points: [
          'Yoga Sutras: yoga is the stilling of the movements of the mind (chitta-vritti-nirodha), so that the seer rests in its own nature.',
          'The eight limbs of yoga are restraints (yama), observances (niyama), posture (asana), breath control (pranayama), withdrawal of the senses (pratyahara), concentration (dharana), meditation (dhyana) and absorption (samadhi).',
          'Samkhya counts twenty-five principles, from Purusha and Prakriti down to the elements, and teaches release by discriminating the self from nature.',
          'Nyaya establishes rules of debate and inference, and argues for the existence of a creator God (Ishvara) in later works.',
          'Mimamsa holds that the Veda is eternal and authorless, that its core is the commands for ritual, and that dharma is known only from them.',
          'The Brahma Sutras hold that Brahman is the origin, support and end of the world, and attempt to show the Upanishads teach one consistent doctrine.',
        ],
      },
      {
        title: 'What it says about the gods',
        points: [
          'The Brahma Sutras treat Brahman as the one cause of the world, and read the gods of the Vedas as its forms or servants.',
          'The Yoga Sutras name Ishvara, a special being untouched by suffering, whom one can meditate on, and whose sign is Om.',
          'Classical Samkhya has no creator god and is called atheistic, while Mimamsa gives the gods little role beyond being the recipients of the offering.',
          'Nyaya and Vaisheshika later argue for God as the maker of the world by the pattern of an effect needing a cause.',
        ],
      },
      {
        title: 'Famous passages and stories',
        points: [
          'The opening of the Brahma Sutras, “athato brahma-jijnasa” (now, therefore, the inquiry into Brahman), is one of the most quoted lines in Indian philosophy.',
          'The second Yoga Sutra, “yogash chitta-vritti-nirodhah”, defines yoga in four words.',
          'The Yoga Sutras’ list of obstacles and the idea of the “afflictions” (kleshas), from ignorance to fear of death, are widely taught.',
          'Jaimini’s opening, “athato dharma-jijnasa”, parallels the Brahma Sutras’ opening and begins the inquiry into dharma.',
          'The Nyaya account of the five-membered argument is the earliest form of a formal syllogism in India.',
        ],
      },
      {
        title: 'Composition, language and transmission',
        points: [
          'The sutras are so compressed that they are nearly unintelligible alone, and commentaries (bhashyas) were composed to explain them.',
          'The Brahma Sutras were explained by Shankara, Ramanuja, Madhva, Nimbarka and Vallabha, each reaching a different school of Vedanta.',
          'The Yoga Sutras were explained in the Vyasa Bhashya (about the fifth century), which is the main early commentary.',
          'Patanjali the author of the Yoga Sutras is traditionally the same as the grammarian of the same name, but scholars doubt this.',
          'The Samkhya Karika is in verse and was widely read, and was translated into Chinese in the sixth century.',
        ],
      },
      {
        title: 'Later influence',
        points: [
          'The Brahma Sutras, Upanishads and Gita form the “three sources” (prasthana-traya) of Vedanta, so all later Vedanta begins with commentary on them.',
          'The Yoga Sutras became the basis of modern yoga after Vivekananda and later teachers, though modern posture yoga has little basis in the text.',
          'Samkhya ideas, such as the three qualities (gunas), pervade the Gita, the Puranas and Ayurveda.',
          'Nyaya’s logic shaped debate in Hindu, Buddhist and Jain philosophy, and survives in the modern Navya-Nyaya of Bengal.',
        ],
      },
      {
        title: 'Reading it today',
        points: [
          'Edwin Bryant’s The Yoga Sutras of Patanjali (North Point Press, 2009) has the text with the classical commentaries.',
          'George Thibaut’s translation of the Brahma Sutras with Shankara’s commentary is in the public domain (Sacred Books of the East, vols. 34 and 38).',
          'Surendranath Dasgupta’s A History of Indian Philosophy (Cambridge, 1922–55) is a classic survey of all six schools.',
        ],
      },
    ],
    gods: ['brahman'],
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
          'The Bhagavad Gita, in the Bhishma Parva (chapters 25–42), is the best known part, a dialogue between Krishna and Arjuna on the battlefield.',
          'The dice game and the disrobing of Draupadi (Sabha Parva) is the turning point of the epic.',
          'The Yaksha Prashna (Vana Parva), in which Yudhishthira answers a spirit’s riddles, is a famous test of wisdom.',
          'The story of Nala and Damayanti, of Savitri and Satyavan, and of Shakuntala are among the many tales told within the frame.',
          'The death of Abhimanyu in the chakravyuha, the duel of Arjuna and Karna, and the fall of Duryodhana are the high points of the war.',
          'The Vishnu Sahasranama, the thousand names of Vishnu, is in the Anushasana Parva, and the Sanatsujatiya, on death and immortality, is in the Udyoga Parva.',
          'Yudhishthira and the dog at the gates of heaven, in the last parva, is a famous test of compassion.',
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
    gods: ['krishna', 'shiva', 'vishnu', 'durga', 'indra', 'vayu', 'yama', 'kartikeya', 'ganesha', 'parashurama', 'kalki', 'narada', 'chandra'],
  },

  gita: {
    glance: [
      { label: 'Class', value: 'Smriti, part of the Mahabharata (Bhishma Parva, chapters 25–42)' },
      { label: 'Date', value: 'c. 200 BCE–200 CE' },
      { label: 'Language', value: 'Classical Sanskrit, in verse' },
      { label: 'Size', value: '18 chapters, about 700 verses' },
      { label: 'Speakers', value: 'Krishna to Arjuna, reported by Sanjaya to the blind king Dhritarashtra' },
      { label: 'Status', value: 'One of the “three sources” of Vedanta, and the best loved Hindu text' },
    ],
    sections: [
      {
        title: 'Structure and contents',
        points: [
          'Chapter 1 sets the scene: the armies face each other at Kurukshetra and Arjuna, seeing his kin on the other side, drops his bow in despair.',
          'Chapter 2, “Sankhya Yoga”, is the core: the self is eternal and not slain, and one must act without attachment to the fruit.',
          'Chapters 3 to 6 develop the path of action (karma yoga), the path of knowledge (jnana), renunciation of action, and meditation.',
          'Chapters 7 to 12 turn to God: Krishna reveals himself as the source of all, shows his cosmic form in chapter 11, and praises devotion (bhakti) in chapter 12.',
          'Chapters 13 to 17 teach the field and its knower, the three qualities (gunas), the supreme person (chapter 15) and the divine and demonic natures.',
          'Chapter 18 summarises and ends with Krishna’s final command, and Arjuna’s decision to act.',
        ],
      },
      {
        title: 'Key teachings and ideas',
        points: [
          'The self (atman) is eternal, unborn and indestructible. The body dies, but the self is not killed (2.20), so grief for the dead is misplaced.',
          'Act according to your duty (svadharma) without desire for the reward: “you have a right to the action alone, never to its fruits” (2.47).',
          'Three paths lead to the goal: action (karma yoga), knowledge (jnana yoga) and devotion (bhakti yoga), and the Gita harmonises them.',
          'The three gunas, sattva, rajas and tamas, shape all nature and all minds, and one must rise above them.',
          'Equanimity is the mark of the wise: the same in pleasure and pain, success and failure (2.38, 2.48).',
          'God is the source and goal of all, and he who sees God in all beings and all beings in God is the true yogi (6.29–30).',
          'The last verses (18.66) ask Arjuna to give up all duties and surrender to Krishna alone, which devotional traditions treat as the highest teaching.',
        ],
      },
      {
        title: 'What it says about the gods',
        points: [
          'Krishna presents himself as the supreme being, the source and end of everything. In chapter 10 he says that among the gods he is Vishnu, among the Rudras Shankara, and among the Vedas the Samaveda.',
          'In chapter 11 he shows his universal form (vishvarupa), with endless mouths, eyes and arms, in which the armies are seen rushing into his mouths.',
          'It identifies the Vedic gods as lower forms of worship: those who worship other gods with faith worship Krishna, even if not rightly (9.23).',
          'It joins the impersonal Brahman of the Upanishads with the personal God: Krishna says he is the basis of Brahman (14.27).',
          'It speaks of avatars: whenever dharma declines, he comes into being (4.7–8).',
        ],
      },
      {
        title: 'Famous passages and stories',
        points: [
          '2.47: “karmanye vadhikaraste ma phaleshu kadachana”, the best known verse on action without attachment to its fruit.',
          '4.7–8: “whenever dharma declines”, the classic statement of the avatar doctrine.',
          '11.32: Krishna, in his cosmic form, calls himself time, the destroyer of the worlds. Robert Oppenheimer recalled this verse after the first atomic test.',
          '15.1–4: the picture of the world as an upside-down banyan tree, with roots above and branches below.',
          '18.66: “abandon all duties and take refuge in me alone”, the verse that devotional readers take as the climax.',
        ],
      },
      {
        title: 'Composition, language and transmission',
        points: [
          'It sits inside the Mahabharata, but it was soon treated as a separate text, and is read, recited and commented on on its own.',
          'It is among the few Hindu texts with a wide agreement on its text: the 700 verses in the standard form.',
          'It uses the language of the Upanishads, the Samkhya and Yoga schools, and the Vedic ritual, and joins them in one teaching, which scholars see as a deliberate synthesis.',
          'Sanjaya narrates it to Dhritarashtra through a gift of divine sight, which lets him see the war from afar.',
        ],
      },
      {
        title: 'Later influence',
        points: [
          'Shankara, Ramanuja and Madhva all wrote commentaries, finding in it support for non-dualism, qualified non-dualism and dualism respectively.',
          'The Jnaneshwari, a thirteenth-century Marathi commentary by Jnaneshwar, brought it to ordinary people.',
          'Modern readers include Tilak (Gita Rahasya), Gandhi (who called it his “spiritual dictionary” and read it as a call to non-attachment), Aurobindo and Vivekananda.',
          'Charles Wilkins’s 1785 translation was the first Sanskrit work translated into English directly, and it reached Emerson and Thoreau.',
          'It is the most translated Hindu text, and the basis of the ISKCON movement’s teaching, with a famous commentary by A. C. Bhaktivedanta Swami Prabhupada.',
          'Whether it justifies war, or teaches nonviolence, is a long debate: Gandhi read it as an allegory of inner struggle.',
        ],
      },
      {
        title: 'Reading it today',
        points: [
          'Barbara Stoler Miller’s verse translation (Bantam, 1986) is celebrated for its poetry.',
          'Eknath Easwaran’s version (Nilgiri Press, 1985) is clear, with a commentary for general readers.',
          'Winthrop Sargeant’s edition (SUNY, 1979) gives the Sanskrit, a word-by-word gloss and a translation, useful for study.',
          'Gavin Flood and Charles Martin’s version (Norton, 2012) is a recent, readable translation.',
          'Read the second and twelfth chapters first, then the eleventh, and go back to the rest.',
        ],
      },
    ],
    gods: ['krishna', 'vishnu', 'brahman', 'indra', 'aryaman'],
  },
};
