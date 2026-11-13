// Where each era was centred. Shaded areas and positions are approximate, drawn from general knowledge and
// not from surveyed boundaries; the region outlines are rough and are meant to orient the reader.

export interface MapSite { name: string; lon: number; lat: number }
export interface MapRegion { name: string; points: [number, number][]; label: [number, number] } // [lon, lat]

export interface EraMapDef {
  view: 'sa' | 'world';
  crop: [number, number, number, number]; // lonMin, lonMax, latMin, latMax
  rivers: string[];
  sarasvati?: boolean;
  regions: MapRegion[];
  sites: MapSite[];
}

// The Ghaggar-Hakra line that many scholars identify with the Rigvedic Sarasvati (debated).
export const SARASVATI: [number, number][] = [
  [77.1, 30.7], [76.4, 30.0], [75.0, 29.8], [74.3, 29.5], [72.9, 29.2], [71.4, 28.8], [70.0, 27.5], [68.8, 26.2], [68.5, 24.6],
];
export const SARASVATI_NAME = 'Sarasvati (Ghaggar-Hakra, debated)';

// Every South Asia map uses the same full frame, so the maps can be compared at a glance.
const FULL: [number, number, number, number] = [60, 96, 5, 38];

export const ERA_MAPS: Record<string, EraMapDef> = {
  indus: {
    view: 'sa', crop: FULL, rivers: ['Indus', 'Sutlej', 'Chenab'], sarasvati: true,
    regions: [{
      name: 'Harappan civilization', label: [70.2, 31.3],
      points: [[61.7, 25.2], [66.5, 24.9], [68.6, 23.4], [70.2, 22.6], [72.2, 21.1], [73.1, 21.6], [73.4, 23.5], [75.0, 25.5], [77.8, 29.0], [77.2, 31.0], [75.0, 32.8], [72.0, 32.6], [70.4, 32.8], [68.0, 31.6], [66.4, 29.6], [65.5, 27.4], [62.6, 26.2]],
    }],
    sites: [
      { name: 'Harappa', lon: 72.86, lat: 30.63 }, { name: 'Mohenjo-daro', lon: 68.14, lat: 27.33 },
      { name: 'Dholavira', lon: 70.21, lat: 23.89 }, { name: 'Lothal', lon: 72.25, lat: 22.52 },
      { name: 'Rakhigarhi', lon: 76.11, lat: 29.28 }, { name: 'Kalibangan', lon: 74.13, lat: 29.47 },
      { name: 'Shortugai', lon: 69.4, lat: 37.6 },
    ],
  },
  'early-vedic': {
    view: 'sa', crop: FULL, rivers: ['Indus', 'Sutlej', 'Chenab', 'Yamuna'], sarasvati: true,
    regions: [{
      name: 'Land of the seven rivers', label: [72.2, 33.4],
      points: [[67.5, 34.8], [72.5, 35.3], [75.5, 34.2], [77.2, 31.2], [76.8, 28.8], [74.5, 27.3], [71.0, 27.3], [69.5, 29.5], [69.0, 31.8]],
    }],
    sites: [],
  },
  'later-vedic': {
    view: 'sa', crop: FULL, rivers: ['Ganges', 'Yamuna', 'Indus'],
    regions: [
      { name: 'Kuru-Panchala', label: [78.6, 27.6], points: [[75.8, 30.5], [78.5, 30.8], [80.5, 29.5], [82.0, 27.5], [82.0, 25.8], [79.0, 25.2], [77.0, 26.8], [76.0, 28.5]] },
      { name: 'Videha', label: [85.4, 27.45], points: [[84.0, 27.0], [86.5, 27.0], [86.8, 25.8], [84.5, 25.7]] },
    ],
    sites: [
      { name: 'Kurukshetra', lon: 76.84, lat: 29.97 }, { name: 'Hastinapura', lon: 78.02, lat: 29.17 },
      { name: 'Ahichchhatra', lon: 79.12, lat: 28.37 }, { name: 'Mithila', lon: 85.93, lat: 26.73 },
      { name: 'Kashi (Varanasi)', lon: 83.01, lat: 25.32 },
    ],
  },
  epics: {
    view: 'sa', crop: FULL, rivers: ['Ganges', 'Yamuna', 'Indus', 'Narmada'],
    regions: [{
      name: 'Gangetic kingdoms', label: [80.4, 26.7],
      points: [[74.0, 31.0], [80.0, 30.5], [84.0, 27.5], [88.0, 26.5], [88.0, 24.5], [84.5, 23.5], [80.0, 24.0], [76.5, 24.5], [74.5, 27.0]],
    }],
    sites: [
      { name: 'Ayodhya', lon: 82.2, lat: 26.8 }, { name: 'Kashi (Varanasi)', lon: 83.01, lat: 25.32 },
      { name: 'Lumbini', lon: 83.28, lat: 27.47 }, { name: 'Bodh Gaya', lon: 84.99, lat: 24.7 },
      { name: 'Rajagriha', lon: 85.42, lat: 25.03 }, { name: 'Mathura', lon: 77.67, lat: 27.49 },
      { name: 'Indraprastha (Delhi)', lon: 77.21, lat: 28.61 }, { name: 'Lanka (Sri Lanka)', lon: 80.7, lat: 7.6 },
    ],
  },
  gupta: {
    view: 'sa', crop: FULL, rivers: ['Ganges', 'Yamuna', 'Narmada'],
    regions: [{
      name: 'Gupta empire', label: [81.4, 28.7],
      points: [[70.0, 21.5], [72.5, 24.5], [73.5, 27.0], [74.5, 30.5], [78.5, 31.2], [81.5, 29.5], [84.5, 27.7], [89.0, 26.5], [90.5, 24.5], [88.0, 21.8], [86.0, 21.0], [82.5, 23.0], [80.0, 22.0], [78.5, 23.5], [75.0, 22.0], [72.0, 21.0]],
    }],
    sites: [
      { name: 'Pataliputra', lon: 85.14, lat: 25.61 }, { name: 'Ujjain', lon: 75.78, lat: 23.18 },
      { name: 'Mathura', lon: 77.67, lat: 27.49 }, { name: 'Sarnath', lon: 83.02, lat: 25.38 },
      { name: 'Udayagiri', lon: 77.78, lat: 23.57 }, { name: 'Deogarh', lon: 78.24, lat: 24.53 },
      { name: 'Nalanda', lon: 85.44, lat: 25.14 },
    ],
  },
  'bhakti-south': {
    view: 'sa', crop: FULL, rivers: ['Krishna'],
    regions: [{
      name: 'Tamil country', label: [78.4, 9.6],
      points: [[76.2, 8.2], [77.5, 8.1], [80.2, 10.0], [80.3, 13.5], [79.5, 13.8], [78.0, 12.8], [76.5, 12.0], [76.0, 10.5]],
    }],
    sites: [
      { name: 'Chidambaram', lon: 79.69, lat: 11.4 }, { name: 'Kanchipuram', lon: 79.7, lat: 12.83 },
      { name: 'Madurai', lon: 78.12, lat: 9.92 }, { name: 'Srirangam', lon: 78.69, lat: 10.86 },
      { name: 'Thanjavur', lon: 79.14, lat: 10.79 }, { name: 'Mamallapuram', lon: 80.19, lat: 12.62 },
      { name: 'Kalady', lon: 76.44, lat: 10.17 }, { name: 'Sringeri', lon: 75.26, lat: 13.42 },
    ],
  },
  medieval: {
    view: 'sa', crop: FULL, rivers: ['Ganges', 'Yamuna', 'Krishna'],
    regions: [{
      name: 'Vijayanagara', label: [76.6, 13.3],
      points: [[74.5, 15.0], [78.0, 16.5], [79.5, 14.5], [77.5, 12.0], [75.5, 12.5]],
    }],
    sites: [
      { name: 'Hampi', lon: 76.46, lat: 15.33 }, { name: 'Vrindavan', lon: 77.7, lat: 27.58 },
      { name: 'Kashi (Varanasi)', lon: 83.01, lat: 25.32 }, { name: 'Nabadwip', lon: 88.37, lat: 23.41 },
      { name: 'Pandharpur', lon: 75.33, lat: 17.68 }, { name: 'Puri', lon: 85.83, lat: 19.81 },
      { name: 'Chittor', lon: 74.63, lat: 24.88 },
    ],
  },
  colonial: {
    view: 'sa', crop: FULL, rivers: ['Ganges', 'Indus', 'Brahmaputra'],
    regions: [],
    sites: [
      { name: 'Calcutta', lon: 88.36, lat: 22.57 }, { name: 'Bombay', lon: 72.83, lat: 18.97 },
      { name: 'Madras', lon: 80.27, lat: 13.08 }, { name: 'Delhi', lon: 77.21, lat: 28.61 },
      { name: 'Lahore', lon: 74.34, lat: 31.55 },
    ],
  },
  modern: {
    view: 'world', crop: [-175, 180, -50, 72], rivers: [],
    regions: [],
    sites: [
      { name: 'India', lon: 79, lat: 22 }, { name: 'United Kingdom', lon: -1.5, lat: 52.5 },
      { name: 'United States', lon: -97, lat: 38 }, { name: 'Canada', lon: -100, lat: 55 },
      { name: 'Trinidad', lon: -61.3, lat: 10.5 }, { name: 'Guyana', lon: -58.9, lat: 4.9 },
      { name: 'Mauritius', lon: 57.5, lat: -20.2 }, { name: 'South Africa', lon: 25, lat: -29 },
      { name: 'Fiji', lon: 178, lat: -17.7 }, { name: 'Malaysia', lon: 102, lat: 3.8 },
      { name: 'Indonesia (Bali)', lon: 115.2, lat: -8.4 }, { name: 'Gulf states', lon: 52, lat: 25 },
      { name: 'Australia', lon: 134, lat: -25 },
    ],
  },
};
