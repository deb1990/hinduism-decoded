// Cards for every god and figure that appears in the charts but not in the main list.
// Content is from memory and still needs checking against sources. Dates are approximate and debated.

import type { God } from './gods';

export const MORE_GODS: God[] = [
  // ---------- Vedic gods ----------
  {
    id: 'mitra', name: 'Mitra', group: 'vedic',
    summary: 'God of friendship and agreements, usually paired with Varuna.',
    definedIn: 'Rigveda',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'Praised with Varuna as Mitra-Varuna, upholders of order, contracts and friendship; counted among the Adityas.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'mention', note: 'Remains one of the twelve Adityas, a minor solar figure.' },
    ],
  },
  {
    id: 'aryaman', name: 'Aryaman', group: 'vedic',
    summary: 'An Aditya of hospitality and social bonds, later chief of the ancestors.',
    definedIn: 'Rigveda',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'An Aditya linked to hospitality, marriage customs and the bonds that hold society together.' },
      { stage: 'epic', book: 'Bhagavad Gita', dates: 'c. 200 BCE–200 CE', weight: 'mention', note: 'Krishna says that among the ancestors (pitris) he is Aryaman, who is their chief.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'mention', note: 'Listed among the twelve Adityas.' },
    ],
  },
  {
    id: 'vayu', name: 'Vayu (Vata)', group: 'vedic',
    summary: 'The wind god, swift and powerful, father of heroes in the epics.',
    definedIn: 'Rigveda',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'Wind as Vayu and Vata, driving a chariot and first to taste the soma; in the Purusha hymn he is born from Purusha’s breath.' },
      { stage: 'epic', book: 'Mahabharata, Ramayana', dates: 'c. 500 BCE–400 CE', weight: 'major', note: 'Father of Hanuman in the Ramayana and of Bhima in the Mahabharata.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'mention', note: 'Guardian of the north-west; the Vayu Purana is named after him.' },
    ],
  },
  {
    id: 'maruts', name: 'The Maruts', group: 'vedic',
    summary: 'A band of storm gods who ride with Indra.',
    definedIn: 'Rigveda',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'Young, singing storm gods with lightning, the sons of Rudra and Prishni and companions of Indra.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'major', note: 'A story has Indra cut a child of Diti into forty-nine parts, who become the Maruts and join the gods.' },
    ],
  },
  {
    id: 'soma', name: 'Soma', group: 'vedic',
    summary: 'The sacred drink of the ritual and the god it embodies, later the moon.',
    definedIn: 'Rigveda (Book 9)',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'Book 9, over a hundred hymns, praises Soma as plant, pressed juice and god. The plant’s identity is lost and debated.' },
      { stage: 'later', book: 'Samaveda, Brahmanas', dates: 'c. 1100–600 BCE', weight: 'major', note: 'The Samaveda chants are sung over the soma pressing; Soma is also identified with the moon.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'mention', note: 'Merges with Chandra, the moon god, and the name becomes a title of the moon.' },
    ],
  },
  {
    id: 'chandra', name: 'Chandra (the Moon)', group: 'vedic',
    summary: 'The moon god, ancestor of the lunar dynasty.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1200–1000 BCE', weight: 'mention', note: 'In the Purusha hymn the moon is born from Purusha’s mind.' },
      { stage: 'later', book: 'Brahmanas', dates: 'c. 900–600 BCE', weight: 'mention', note: 'The moon is identified with Soma.' },
      { stage: 'epic', book: 'Mahabharata', dates: 'c. 400 BCE–400 CE', weight: 'major', note: 'The lunar dynasty, to which the Kauravas and Pandavas belong, is traced to Chandra.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'Becomes a full god: married to Daksha’s twenty-seven daughters, with a story to explain the moon’s waxing and waning.' },
    ],
  },
  {
    id: 'dyaus', name: 'Dyaus (Dyaus Pita)', group: 'vedic',
    summary: 'The sky father, who with Earth is a parent of the gods.',
    definedIn: 'Rigveda',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'Heaven as father, paired with Prithvi (Earth); Ushas is called the daughter of heaven. The name matches Greek Zeus and Roman Jupiter, a sign of an older shared inheritance.' },
      { stage: 'epic', book: 'Mahabharata', dates: 'c. 400 BCE–400 CE', weight: 'mention', note: 'Dyaus is one of the eight Vasus, who is born as Bhishma.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'mention', note: 'Remains only as a name among the eight Vasus; the sky father has no cult.' },
    ],
  },
  {
    id: 'aditi', name: 'Aditi', group: 'goddess',
    summary: 'The boundless mother of the gods.',
    definedIn: 'Rigveda',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'Mother of the Adityas and an image of boundlessness: a hymn calls her sky, atmosphere, mother, father and son.' },
      { stage: 'epic', book: 'Epics', dates: 'c. 500 BCE–400 CE', weight: 'mention', note: 'Wife of the sage Kashyapa and mother of the gods.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'major', note: 'Mother of the twelve Adityas; Vishnu is born to her as Vamana.' },
    ],
  },
  {
    id: 'ushas', name: 'Ushas', group: 'goddess',
    summary: 'The dawn, the most celebrated goddess of the Rigveda.',
    definedIn: 'Rigveda',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'About twenty hymns to Dawn, a young woman who brings light and renews life each day; sister of Night.' },
      { stage: 'later', book: 'Brahmanas', dates: 'c. 900–600 BCE', weight: 'mention', note: 'Dawn stays a mark of the ritual day but receives little devotion.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'mention', note: 'The goddess fades; Usha is also the name of a princess in the story of Aniruddha.' },
    ],
  },

  // ---------- Early creators ----------
  {
    id: 'purusha', name: 'Purusha', group: 'creator',
    summary: 'The cosmic being whose sacrifice forms the world and the gods.',
    definedIn: 'Rigveda 10.90 (Purusha Sukta)',
    steps: [
      { stage: 'veda', book: 'Rigveda (Purusha Sukta)', dates: 'c. 1200–1000 BCE', weight: 'defines', note: 'A thousand-headed being is sacrificed; Indra, Agni, Vayu, Surya and the moon, the Vedas and the four varnas come from his body.' },
      { stage: 'upanishad', book: 'Upanishads', dates: 'c. 800–200 BCE', weight: 'major', note: 'The person within, or the inner self, is called Purusha and is identified with the ultimate.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'major', note: 'Identified with Vishnu as Narayana; the Purusha Sukta is recited in Vishnu’s worship.' },
    ],
  },
  {
    id: 'hiranyagarbha', name: 'Hiranyagarbha', group: 'creator',
    summary: 'The golden germ from which the world begins.',
    definedIn: 'Rigveda 10.121',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1200–1000 BCE', weight: 'defines', note: 'A hymn tells of the golden germ, born first as lord of all beings, and asks of each verse: to which god shall we give our offering?' },
      { stage: 'later', book: 'Yajurveda, Brahmanas', dates: 'c. 1100–600 BCE', weight: 'major', note: 'Identified with Prajapati, the creator.' },
      { stage: 'epic', book: 'Manusmriti', dates: 'c. 200 BCE–200 CE', weight: 'major', note: 'The self-born creator forms a golden cosmic egg from which Brahma is born.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'Hiranyagarbha becomes a name of Brahma, born from the golden egg.' },
    ],
  },
  {
    id: 'vishvakarman', name: 'Vishvakarman', group: 'creator',
    summary: 'The all-maker, later the divine architect and craftsman.',
    definedIn: 'Rigveda 10.81–82, then Puranas',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1200–1000 BCE', weight: 'defines', note: 'Two hymns to the all-seeing maker who fashions heaven and earth.' },
      { stage: 'epic', book: 'Ramayana, Mahabharata', dates: 'c. 500 BCE–400 CE', weight: 'major', note: 'The divine architect; in the Ramayana the monkey builder Nala is his son.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'major', note: 'Craftsman of the gods, who makes their cities and weapons and is the patron of craftspeople.' },
    ],
  },
  {
    id: 'prajapati', name: 'Prajapati', group: 'creator',
    summary: 'Lord of creatures: the creator before Brahma.',
    definedIn: 'Yajurveda and Brahmanas',
    steps: [
      { stage: 'veda', book: 'Rigveda (late hymns)', dates: 'c. 1200–1000 BCE', weight: 'mention', note: 'Appears as a title of a creator, as in the Hiranyagarbha hymn.' },
      { stage: 'later', book: 'Yajurveda, Brahmanas', dates: 'c. 1100–600 BCE', weight: 'defines', note: 'The creator of gods and beings, identified with the sacrifice and the year.' },
      { stage: 'upanishad', book: 'Chandogya Upanishad', dates: 'c. 800–600 BCE', weight: 'mention', note: 'Teaches the self to Indra and Virochana.' },
      { stage: 'epic', book: 'Manusmriti, Mahabharata', dates: 'c. 200 BCE–400 CE', weight: 'major', note: 'Prajapati becomes the title of the creator’s sons, the ten ancestors of beings.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'major', note: 'The role of creator passes to Brahma, and the Prajapatis are his mind-born sons.' },
    ],
  },
  {
    id: 'thirty3', name: 'The thirty-three gods', group: 'vedic',
    summary: 'A traditional count of the gods, which the Upanishads reduce to one.',
    definedIn: 'Brihadaranyaka Upanishad 3.9',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'mention', note: 'Speaks of thirty-three gods.' },
      { stage: 'upanishad', book: 'Brihadaranyaka Upanishad', dates: 'c. 800–600 BCE', weight: 'defines', note: 'Yajnavalkya lists them: eight Vasus, eleven Rudras, twelve Adityas, Indra and Prajapati, and reduces the many to one: Brahman.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'mention', note: 'The count lives on; the popular “thirty-three crore gods” comes from reading koti as “crore” instead of “kind”.' },
    ],
  },

  // ---------- Sages and sons of Brahma ----------
  {
    id: 'marichi', name: 'Marichi', group: 'sage',
    summary: 'A mind-born son of Brahma and grandfather of the gods.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'epic', book: 'Mahabharata, Manusmriti', dates: 'c. 200 BCE–400 CE', weight: 'mention', note: 'Named among the great sages and ancestors of beings.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'One of Brahma’s mind-born sons and father of the sage Kashyapa, who fathers gods and demons.' },
    ],
  },
  {
    id: 'atri', name: 'Atri', group: 'sage',
    summary: 'An ancient seer, credited with hymns of the Rigveda.',
    definedIn: 'Rigveda, then Puranas',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'major', note: 'Book 5 is attributed to the family of Atri.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'A mind-born son of Brahma and father of Chandra, Dattatreya and Durvasa.' },
    ],
  },
  {
    id: 'daksha', name: 'Daksha', group: 'sage',
    summary: 'A Prajapati whose daughters marry the gods.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'mention', note: 'Appears in a creation hymn linked with Aditi.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'Father of Sati, Shiva’s first wife, and of the moon’s twenty-seven wives; his sacrifice, which Shiva disrupts, is a famous story.' },
    ],
  },
  {
    id: 'narada', name: 'Narada', group: 'sage',
    summary: 'The wandering divine sage who carries news among gods and humans.',
    definedIn: 'Epics and Puranas',
    steps: [
      { stage: 'upanishad', book: 'Chandogya Upanishad', dates: 'c. 800–600 BCE', weight: 'mention', note: 'Appears as a learned student who is taught by Sanatkumara.' },
      { stage: 'epic', book: 'Mahabharata, Ramayana', dates: 'c. 500 BCE–400 CE', weight: 'major', note: 'Tells Valmiki the outline of Rama’s story and counsels kings in the Mahabharata.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'A devotee of Vishnu, a mind-born son of Brahma and a teacher of devotion, with a Purana named after him.' },
    ],
  },
  {
    id: 'sanatkumara', name: 'Sanatkumara', group: 'sage',
    summary: 'An eternal youth and teacher of knowledge.',
    definedIn: 'Chandogya Upanishad and Puranas',
    steps: [
      { stage: 'upanishad', book: 'Chandogya Upanishad', dates: 'c. 800–600 BCE', weight: 'defines', note: 'In chapter 7 he teaches Narada that the infinite is true happiness.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'major', note: 'One of the four Kumaras, Brahma’s mind-born sons who stay eternal children.' },
    ],
  },

  // ---------- Avatars of Vishnu ----------
  {
    id: 'matsya', name: 'Matsya (the Fish)', group: 'avatar',
    summary: 'The first avatar, who saves Manu from the flood.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'later', book: 'Shatapatha Brahmana', dates: 'c. 900–600 BCE', weight: 'major', note: 'A fish warns the first man, Manu, of a flood and tows his boat. The fish is not yet Vishnu.' },
      { stage: 'epic', book: 'Mahabharata', dates: 'c. 400 BCE–400 CE', weight: 'major', note: 'Tells the flood story, with the fish revealed as Brahma.' },
      { stage: 'purana', book: 'Matsya Purana and others', dates: 'c. 250–1000 CE', weight: 'defines', note: 'The fish becomes Vishnu’s first avatar.' },
    ],
  },
  {
    id: 'kurma', name: 'Kurma (the Tortoise)', group: 'avatar',
    summary: 'The tortoise who carries the mountain at the churning of the ocean.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'later', book: 'Shatapatha Brahmana', dates: 'c. 900–600 BCE', weight: 'mention', note: 'Prajapati takes the form of a tortoise to create beings.' },
      { stage: 'epic', book: 'Mahabharata', dates: 'c. 400 BCE–400 CE', weight: 'major', note: 'In the churning of the ocean a tortoise supports the mountain.' },
      { stage: 'purana', book: 'Kurma Purana and others', dates: 'c. 300–1000 CE', weight: 'defines', note: 'The tortoise is named as Vishnu’s second avatar.' },
    ],
  },
  {
    id: 'varaha', name: 'Varaha (the Boar)', group: 'avatar',
    summary: 'The boar who lifts the earth from the cosmic waters.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'later', book: 'Taittiriya Samhita, Shatapatha Brahmana', dates: 'c. 1000–600 BCE', weight: 'mention', note: 'A boar lifts the earth from the waters; the boar is Prajapati.' },
      { stage: 'epic', book: 'Mahabharata, Gupta sculpture', dates: 'c. 400 BCE–500 CE', weight: 'major', note: 'Shown as Vishnu’s boar form; the great Udayagiri relief (c. 400 CE) shows him raising the earth goddess.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'The boar rescues the earth from the demon Hiranyaksha and is counted as the third avatar.' },
    ],
  },
  {
    id: 'narasimha', name: 'Narasimha (the Man-Lion)', group: 'avatar',
    summary: 'The half-man, half-lion who destroys a demon king.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'epic', book: 'Mahabharata', dates: 'c. 400 BCE–400 CE', weight: 'mention', note: 'Mentions Vishnu’s man-lion form killing the demon Hiranyakashipu.' },
      { stage: 'purana', book: 'Vishnu and Bhagavata Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'The full story of the devotee Prahlada and of Vishnu emerging from a pillar at dusk, neither man nor beast.' },
    ],
  },
  {
    id: 'vamana', name: 'Vamana (the Dwarf)', group: 'avatar',
    summary: 'The dwarf who crosses the universe in three steps.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'mention', note: 'Vishnu is known for his three strides across the world, the seed of the later story.' },
      { stage: 'later', book: 'Shatapatha Brahmana', dates: 'c. 900–600 BCE', weight: 'major', note: 'Vishnu takes the form of a dwarf to win the world back for the gods in three steps.' },
      { stage: 'epic', book: 'Ramayana', dates: 'c. 500 BCE–200 CE', weight: 'major', note: 'Tells the story of the dwarf and the demon king Bali.' },
      { stage: 'purana', book: 'Bhagavata and Vishnu Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'The dwarf is named as an avatar and the story is told in full; he is born to Aditi.' },
    ],
  },
  {
    id: 'parashurama', name: 'Parashurama', group: 'avatar',
    summary: 'The axe-wielding Brahmin warrior.',
    definedIn: 'Mahabharata and Puranas',
    steps: [
      { stage: 'epic', book: 'Mahabharata, Ramayana', dates: 'c. 500 BCE–400 CE', weight: 'defines', note: 'A Brahmin warrior who rids the earth of arrogant Kshatriya kings and teaches Bhishma, Drona and Karna; in the Ramayana he meets Rama.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'major', note: 'Counted as the sixth avatar of Vishnu.' },
    ],
  },
  {
    id: 'buddha', name: 'Buddha (as avatar)', group: 'avatar',
    summary: 'The Buddha, added to the list of Vishnu’s avatars.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'purana', book: 'Puranas', dates: 'c. 500–1000 CE', weight: 'defines', note: 'Some Puranas name the Buddha as an avatar who leads demons astray; scholars read this as a way to absorb Buddhism.' },
      { stage: 'bhakti', book: 'Gita Govinda', dates: 'c. 1100–1200 CE', weight: 'major', note: 'Jayadeva’s poem hymns the ten avatars, including the Buddha; some lists put Balarama in his place.' },
    ],
  },
  {
    id: 'kalki', name: 'Kalki', group: 'avatar',
    summary: 'The future avatar who ends the present age.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'epic', book: 'Mahabharata', dates: 'c. 400 BCE–400 CE', weight: 'major', note: 'Foretells a Brahmin warrior, Kalki Vishnuyashas, who will restore order at the end of the age of decline.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'The tenth avatar, who will come on a white horse at the end of the Kali Yuga.' },
    ],
  },

  // ---------- Direction guardians ----------
  {
    id: 'yama', name: 'Yama', group: 'guardian',
    summary: 'The first mortal to die and king of the dead.',
    definedIn: 'Rigveda, then Puranas',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'defines', note: 'The first human to die, who finds the path for others and rules the realm of the fathers; his dogs guard the way.' },
      { stage: 'upanishad', book: 'Katha Upanishad', dates: 'c. 400–200 BCE', weight: 'major', note: 'Yama teaches the boy Nachiketa about death and the self.' },
      { stage: 'epic', book: 'Mahabharata', dates: 'c. 400 BCE–400 CE', weight: 'major', note: 'Father of Yudhishthira (Dharmaraja); the story of Savitri wins her husband back from him.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'Judge of the dead, with Chitragupta as record-keeper, and guardian of the south.' },
    ],
  },
  {
    id: 'nirrti', name: 'Nirrti', group: 'guardian',
    summary: 'A goddess of decay who becomes the guardian of the south-west.',
    definedIn: 'Puranas',
    steps: [
      { stage: 'veda', book: 'Rigveda', dates: 'c. 1500–1000 BCE', weight: 'mention', note: 'A figure of decay and dissolution, from whom prayers ask protection.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'defines', note: 'Becomes Nairrita, guardian of the south-west.' },
    ],
  },
  {
    id: 'kubera', name: 'Kubera', group: 'guardian',
    summary: 'Lord of wealth and of the Yakshas.',
    definedIn: 'Epics',
    steps: [
      { stage: 'later', book: 'Atharvaveda, Brahmanas', dates: 'c. 1000–600 BCE', weight: 'mention', note: 'Appears as a lord of spirits.' },
      { stage: 'epic', book: 'Ramayana, Mahabharata', dates: 'c. 500 BCE–400 CE', weight: 'defines', note: 'God of wealth and king of the Yakshas; half-brother of Ravana, whose Lanka and flying chariot he once held.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'major', note: 'Treasurer of the gods and guardian of the north.' },
    ],
  },
  {
    id: 'ishana', name: 'Ishana', group: 'guardian',
    summary: 'A title of Rudra, later the guardian of the north-east and a face of Shiva.',
    definedIn: 'Puranas and Agamas',
    steps: [
      { stage: 'later', book: 'Yajurveda', dates: 'c. 1100–800 BCE', weight: 'mention', note: 'Ishana, “the ruler”, is used as a name for Rudra.' },
      { stage: 'purana', book: 'Puranas', dates: 'c. 300–1000 CE', weight: 'major', note: 'Guardian of the north-east.' },
      { stage: 'bhakti', book: 'Shaiva Agamas', dates: 'c. 600–1200 CE', weight: 'defines', note: 'One of the five faces of Shiva, the topmost face.' },
    ],
  },

  // ---------- Goddesses of the Devi Mahatmya ----------
  {
    id: 'mahakali', name: 'Mahakali', group: 'goddess',
    summary: 'The Goddess as the power of night, who wakes Vishnu to slay two demons.',
    definedIn: 'Devi Mahatmya (traditional reading)',
    steps: [
      { stage: 'purana', book: 'Devi Mahatmya', dates: 'c. 500–600 CE', weight: 'defines', note: 'In the first episode the Goddess, as Vishnu’s sleep, leaves him so he can kill Madhu and Kaitabha; tradition names this form Mahakali.' },
      { stage: 'bhakti', book: 'Shakta Tantras', dates: 'c. 600–1200 CE', weight: 'major', note: 'Kali grows into a fierce, central form of the Goddess, worshipped in Bengal and elsewhere.' },
    ],
  },
  {
    id: 'mahalakshmi', name: 'Mahalakshmi', group: 'goddess',
    summary: 'The Goddess as slayer of the buffalo demon.',
    definedIn: 'Devi Mahatmya (traditional reading)',
    steps: [
      { stage: 'purana', book: 'Devi Mahatmya', dates: 'c. 500–600 CE', weight: 'defines', note: 'In the middle episode the gods’ combined energy forms the Goddess, who defeats Mahishasura; tradition names this form Mahalakshmi.' },
      { stage: 'bhakti', book: 'Rahasyas', dates: 'c. 700–1000 CE', weight: 'major', note: 'Appendices to the text name Mahalakshmi as the primary form of the three.' },
    ],
  },
  {
    id: 'mahasarasvati', name: 'Mahasarasvati', group: 'goddess',
    summary: 'The Goddess as slayer of two demon brothers.',
    definedIn: 'Devi Mahatmya (traditional reading)',
    steps: [
      { stage: 'purana', book: 'Devi Mahatmya', dates: 'c. 500–600 CE', weight: 'defines', note: 'In the last episode the Goddess, who comes from Parvati’s body, defeats Shumbha and Nishumbha; tradition names this form Mahasarasvati.' },
    ],
  },
  {
    id: 'saptamatrika', name: 'The Seven Mothers (Saptamatrika)', group: 'goddess',
    summary: 'The powers of the male gods, who fight beside the Goddess.',
    definedIn: 'Devi Mahatmya',
    steps: [
      { stage: 'epic', book: 'Mahabharata and early reliefs', dates: 'c. 100–400 CE', weight: 'mention', note: 'Groups of mothers appear around the war god Skanda; carved panels of the Seven Mothers date from the Kushan period (c. 2nd century CE).' },
      { stage: 'purana', book: 'Devi Mahatmya', dates: 'c. 500–600 CE', weight: 'defines', note: 'The powers of Brahma, Shiva, Kartikeya, Vishnu, Varaha, Narasimha and Indra take form as Brahmani, Maheshvari, Kaumari, Vaishnavi, Varahi, Narasimhi and Aindri.' },
      { stage: 'bhakti', book: 'Tantras', dates: 'c. 600–1200 CE', weight: 'major', note: 'The mothers are worshipped as a group in Tantric tradition.' },
    ],
  },
];
