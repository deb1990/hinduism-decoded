// Long-form text for each god's page. Content is from memory and has not been checked against sources.
import { STORIES_VEDIC } from './stories/vedic';
import { STORIES_CREATORS } from './stories/creators';
import { STORIES_CLASSICAL } from './stories/classical';
import { STORIES_REST } from './stories/rest';

export interface GodStory {
  lead: string; // one sentence under the name
  paragraphs: string[]; // who the god is
  legend: { title: string; text: string }; // one well-known story
  symbols: string; // how the god is pictured
  worship: string; // festivals, temples and practice
  views: string; // how traditions differ, and what scholars say
}

export const STORIES: Record<string, GodStory> = {
  ...STORIES_VEDIC,
  ...STORIES_CREATORS,
  ...STORIES_CLASSICAL,
  ...STORIES_REST,
};
