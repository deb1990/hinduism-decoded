// Gods charts. One chart per layer of thought: gods are linked only where that layer's own texts link them,
// and a new chart starts when the concept changes. Content is from memory and still needs checking against sources.

import type { StageId } from './gods';

export interface Member {
  label: string;
  stage?: StageId; // defaults to the node's stage
  god?: string; // id of the card to link to
}

export interface GNode {
  id: string;
  level: number;
  label: string;
  sub?: string;
  stage: StageId;
  god?: string;
  members?: Member[]; // makes this a group box of chips
  cols?: number;
  chipW?: number;
  joinNext?: boolean; // sits close to the next node (a consort link joins them)
}

export interface GEdge {
  from: string;
  to: string;
  kind: 'child' | 'link';
}

export interface ChartDef {
  id: string;
  tab: string;
  title: string;
  period: string;
  concept: string;
  nodes: GNode[];
  edges: GEdge[];
}

export const CHARTS: ChartDef[] = [
  {
    id: 'vedic',
    tab: 'Vedic pantheon',
    title: 'Vedic gods: a loose set with several creation accounts',
    period: 'Rigveda to Brahmanas, c. 1500–600 BCE',
    concept:
      'No Trimurti, no Brahma, no single great Goddess. The Rigveda has competing accounts of creation, and it links gods only in a few places, such as the gods born from Purusha, Aditi’s sons and Ushas as the daughter of heaven. Where the texts link gods, the chart links them; the rest stand alone.',
    nodes: [
      { id: 'purusha', level: 0, label: 'Purusha', sub: 'cosmic being, RV 10.90', stage: 'veda', god: 'purusha' },
      { id: 'hiranya', level: 0, label: 'Hiranyagarbha', sub: 'golden womb, RV 10.121', stage: 'veda', god: 'hiranyagarbha' },
      { id: 'vishva', level: 0, label: 'Vishvakarman', sub: 'the all-maker, RV 10.81', stage: 'veda', god: 'vishvakarman' },
      { id: 'praja', level: 0, label: 'Prajapati', sub: 'Brahmanas: lord of creation', stage: 'later', god: 'prajapati' },
      { id: 'dyaus', level: 0, label: 'Dyaus', sub: 'sky father, with Earth', stage: 'veda', god: 'dyaus' },

      {
        id: 'born', level: 1, label: 'Born from Purusha', sub: 'mouth, breath, eye and mind', stage: 'veda', cols: 3, chipW: 76,
        members: [
          { label: 'Indra', god: 'indra' }, { label: 'Agni', god: 'agni' }, { label: 'Vayu', god: 'vayu' },
          { label: 'Surya', god: 'surya' }, { label: 'Chandra', god: 'chandra' },
        ],
      },
      { id: 'aditi', level: 1, label: 'Aditi', sub: 'mother of the Adityas', stage: 'veda', god: 'aditi' },
      { id: 'rudra', level: 1, label: 'Rudra', sub: 'father of the Maruts', stage: 'veda', god: 'shiva' },
      { id: 'ushas', level: 1, label: 'Ushas', sub: 'the dawn', stage: 'veda', god: 'ushas' },
      {
        id: 'also', level: 1, label: 'Stand-alone gods', sub: 'no family in the text', stage: 'veda', cols: 1, chipW: 90,
        members: [{ label: 'Soma', god: 'soma' }, { label: 'Vishnu', god: 'vishnu' }, { label: 'Sarasvati', god: 'sarasvati' }],
      },

      {
        id: 'adityas', level: 2, label: 'Adityas', stage: 'veda', cols: 1, chipW: 100,
        members: [{ label: 'Mitra', god: 'mitra' }, { label: 'Varuna', god: 'varuna' }, { label: 'Aryaman', god: 'aryaman' }],
      },
      { id: 'maruts', level: 2, label: 'Maruts', sub: 'storm gods', stage: 'veda', god: 'maruts' },
    ],
    edges: [
      { from: 'purusha', to: 'born', kind: 'child' },
      { from: 'dyaus', to: 'ushas', kind: 'child' },
      { from: 'aditi', to: 'adityas', kind: 'child' },
      { from: 'rudra', to: 'maruts', kind: 'child' },
    ],
  },
  {
    id: 'upanishads',
    tab: 'Upanishads',
    title: 'Upanishads: the many gods become one reality',
    period: 'c. 800–200 BCE',
    concept:
      'The concept changes. The question is no longer which god, but what is the one reality behind all of them. Brahman, impersonal, is the source of the many. One text, the Shvetashvatara, instead names Rudra as the one God.',
    nodes: [
      { id: 'brahman', level: 0, label: 'Brahman = Atman', sub: 'the one, impersonal reality', stage: 'upanishad', god: 'brahman' },
      { id: 'rudra2', level: 0, label: 'Rudra (Shiva)', sub: 'the one God, Shvetashvatara', stage: 'upanishad', god: 'shiva' },
      {
        id: 'thirty3', level: 1, label: 'The 33 gods', sub: 'counted in Brihadaranyaka 3.9', stage: 'veda', cols: 3, chipW: 96,
        members: [
          { label: '8 Vasus', god: 'thirty3' }, { label: '11 Rudras', god: 'thirty3' }, { label: '12 Adityas', god: 'thirty3' },
          { label: 'Indra', god: 'indra' }, { label: 'Prajapati', god: 'prajapati' },
        ],
      },
    ],
    edges: [{ from: 'brahman', to: 'thirty3', kind: 'child' }],
  },
  {
    id: 'puranic',
    tab: 'Puranic family',
    title: 'Puranas: the gods as a divine family',
    period: 'c. 300–1000 CE',
    concept:
      'The Puranas arrange the gods as a family under the Trimurti, with consorts, avatars and sons. The Vedic gods are demoted to guardians of the directions. This is the common Smarta and Vaishnava frame; Shaiva and Shakta texts rank the gods differently.',
    nodes: [
      { id: 'brahman3', level: 0, label: 'Brahman', sub: 'the ultimate reality', stage: 'upanishad', god: 'brahman' },

      { id: 'brahma', level: 1, label: 'Brahma', sub: 'creator', stage: 'purana', god: 'brahma', joinNext: true },
      { id: 'sarasvati', level: 1, label: 'Sarasvati', sub: 'learning', stage: 'veda', god: 'sarasvati' },
      { id: 'vishnu', level: 1, label: 'Vishnu', sub: 'preserver', stage: 'epic', god: 'vishnu', joinNext: true },
      { id: 'lakshmi', level: 1, label: 'Lakshmi', sub: 'fortune', stage: 'purana', god: 'lakshmi' },
      { id: 'shiva', level: 1, label: 'Shiva', sub: 'destroyer', stage: 'purana', god: 'shiva', joinNext: true },
      { id: 'parvati', level: 1, label: 'Parvati', sub: 'form of Devi', stage: 'purana', god: 'durga' },

      {
        id: 'minds', level: 2, label: 'Mind-born sons of Brahma', stage: 'purana', cols: 2, chipW: 84,
        members: [{ label: 'Marichi', god: 'marichi' }, { label: 'Atri', god: 'atri' }, { label: 'Daksha', god: 'daksha' }, { label: 'Narada', god: 'narada' }, { label: 'Sanatkumara', god: 'sanatkumara' }],
      },
      {
        id: 'avatars', level: 2, label: 'Ten avatars of Vishnu', sub: 'the list varies', stage: 'purana', cols: 2, chipW: 92,
        members: [
          { label: 'Matsya', god: 'matsya' }, { label: 'Kurma', god: 'kurma' }, { label: 'Varaha', god: 'varaha' }, { label: 'Narasimha', god: 'narasimha' }, { label: 'Vamana', god: 'vamana' },
          { label: 'Parashurama', god: 'parashurama' }, { label: 'Rama', stage: 'epic', god: 'rama' }, { label: 'Krishna', stage: 'epic', god: 'krishna' },
          { label: 'Buddha', god: 'buddha' }, { label: 'Kalki', god: 'kalki' },
        ],
      },
      {
        id: 'sons', level: 2, label: 'Sons of Shiva', stage: 'purana', cols: 1, chipW: 100,
        members: [{ label: 'Ganesha', god: 'ganesha' }, { label: 'Kartikeya', stage: 'epic', god: 'kartikeya' }],
      },
      {
        id: 'guardians', level: 2, label: 'Direction guardians', sub: 'Vedic gods in a lesser role', stage: 'veda', cols: 2, chipW: 84,
        members: [
          { label: 'Indra', god: 'indra' }, { label: 'Agni', god: 'agni' }, { label: 'Yama', god: 'yama' }, { label: 'Nirrti', god: 'nirrti' },
          { label: 'Varuna', god: 'varuna' }, { label: 'Vayu', god: 'vayu' }, { label: 'Kubera', stage: 'epic', god: 'kubera' }, { label: 'Ishana', stage: 'purana', god: 'ishana' },
        ],
      },
    ],
    edges: [
      { from: 'brahman3', to: 'brahma', kind: 'child' },
      { from: 'brahman3', to: 'vishnu', kind: 'child' },
      { from: 'brahman3', to: 'shiva', kind: 'child' },
      { from: 'brahma', to: 'sarasvati', kind: 'link' },
      { from: 'vishnu', to: 'lakshmi', kind: 'link' },
      { from: 'shiva', to: 'parvati', kind: 'link' },
      { from: 'brahma', to: 'minds', kind: 'child' },
      { from: 'vishnu', to: 'avatars', kind: 'child' },
      { from: 'shiva', to: 'sons', kind: 'child' },
    ],
  },
  {
    id: 'shakta',
    tab: 'Shakta view',
    title: 'Markandeya Purana: the Goddess as the supreme power',
    period: 'c. 500–600 CE',
    concept:
      'Another change of concept: the Goddess is the ultimate reality and the gods act through her. Tradition reads her three great deeds as three forms. The Seven Mothers are the powers of the male gods who come to her aid.',
    nodes: [
      { id: 'devi', level: 0, label: 'Devi (Mahadevi)', sub: 'also Durga, Kali, Parvati', stage: 'purana', god: 'durga' },
      { id: 'mahakali', level: 1, label: 'Mahakali', sub: 'Madhu and Kaitabha', stage: 'purana', god: 'mahakali' },
      { id: 'mahalakshmi', level: 1, label: 'Mahalakshmi', sub: 'Mahishasura', stage: 'purana', god: 'mahalakshmi' },
      { id: 'mahasarasvati', level: 1, label: 'Mahasarasvati', sub: 'Shumbha and Nishumbha', stage: 'purana', god: 'mahasarasvati' },
      {
        id: 'mothers', level: 1, label: 'The Seven Mothers', sub: 'powers of the gods', stage: 'purana', cols: 1, chipW: 150,
        members: [
          { label: 'Brahmani · Brahma', god: 'saptamatrika' }, { label: 'Maheshvari · Shiva', god: 'saptamatrika' }, { label: 'Kaumari · Kartikeya', god: 'saptamatrika' }, { label: 'Vaishnavi · Vishnu', god: 'saptamatrika' },
          { label: 'Varahi · Varaha', god: 'saptamatrika' }, { label: 'Narasimhi · Narasimha', god: 'saptamatrika' }, { label: 'Aindri · Indra', god: 'saptamatrika' },
        ],
      },
    ],
    edges: [
      { from: 'devi', to: 'mahakali', kind: 'child' },
      { from: 'devi', to: 'mahalakshmi', kind: 'child' },
      { from: 'devi', to: 'mahasarasvati', kind: 'child' },
      { from: 'devi', to: 'mothers', kind: 'child' },
    ],
  },
];
