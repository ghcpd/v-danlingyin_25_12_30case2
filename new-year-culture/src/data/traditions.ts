import { Tradition } from '../types';

export const traditions: Tradition[] = [
  {
    id: 'trad-1',
    title: 'Midnight Fireworks',
    country: 'Australia',
    region: 'Oceania',
    description: 'Sydney\'s iconic Harbor Bridge becomes the backdrop for one of the world\'s most spectacular fireworks displays, drawing millions of viewers worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400',
    featured: true,
  },
  {
    id: 'trad-2',
    title: 'Eating 12 Grapes',
    country: 'Spain',
    region: 'Europe',
    description: 'At midnight, Spaniards eat 12 grapes, one for each stroke of the clock, to bring good luck for each month of the coming year.',
    imageUrl: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400',
    featured: true,
  },
  {
    id: 'trad-3',
    title: 'First Sunrise (Hatsuhinode)',
    country: 'Japan',
    region: 'Asia',
    description: 'Japanese people gather at mountaintops, beaches, and special viewing spots to witness the first sunrise of the new year, believed to bring good fortune.',
    imageUrl: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400',
    featured: true,
  },
  {
    id: 'trad-4',
    title: 'Ball Drop at Times Square',
    country: 'United States',
    region: 'Americas',
    description: 'Since 1907, a giant illuminated ball descends 70 feet in Times Square, New York City, as millions count down to midnight.',
    imageUrl: 'https://images.unsplash.com/photo-1546271876-af6caec5fae5?w=400',
    featured: true,
  },
  {
    id: 'trad-5',
    title: 'Throwing Furniture',
    country: 'Italy',
    region: 'Europe',
    description: 'In some Italian regions, people throw old items out of their windows to symbolize letting go of the past and embracing the new year.',
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400',
    featured: false,
  },
  {
    id: 'trad-6',
    title: 'Red Underwear',
    country: 'Brazil',
    region: 'Americas',
    description: 'Brazilians wear red underwear on New Year\'s Eve to attract love in the coming year, while yellow is worn for prosperity.',
    imageUrl: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400',
    featured: false,
  },
  {
    id: 'trad-7',
    title: 'Spring Festival (Chinese New Year)',
    country: 'China',
    region: 'Asia',
    description: 'The most important Chinese holiday features dragon dances, red decorations, family reunions, and giving red envelopes with money for good luck.',
    imageUrl: 'https://images.unsplash.com/photo-1549263352-de13f2b9e79f?w=400',
    featured: true,
  },
  {
    id: 'trad-8',
    title: 'Hogmanay',
    country: 'Scotland',
    region: 'Europe',
    description: 'Scotland\'s famous New Year celebration includes "first-footing" where the first person to enter your home after midnight brings gifts for good luck.',
    imageUrl: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=400',
    featured: false,
  },
  {
    id: 'trad-9',
    title: 'Nowruz',
    country: 'Iran',
    region: 'Middle East',
    description: 'The Persian New Year celebrates the spring equinox with a Haft-sin table containing seven symbolic items starting with the letter S.',
    imageUrl: 'https://images.unsplash.com/photo-1577643816920-65b43ba99fba?w=400',
    featured: false,
  },
  {
    id: 'trad-10',
    title: 'Burning Effigies',
    country: 'Ecuador',
    region: 'Americas',
    description: 'Ecuadorians create and burn life-sized effigies called "año viejo" (old year) to symbolize leaving behind negativity and bad memories.',
    imageUrl: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400',
    featured: false,
  },
  {
    id: 'trad-11',
    title: 'Diwali New Year',
    country: 'India',
    region: 'Asia',
    description: 'Many Indians celebrate the new year during Diwali with oil lamps, fireworks, sweets, and prayers to Lakshmi, the goddess of prosperity.',
    imageUrl: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=400',
    featured: false,
  },
  {
    id: 'trad-12',
    title: 'Ancestor Remembrance',
    country: 'Ghana',
    region: 'Africa',
    description: 'Ghanaians honor their ancestors and elders during New Year celebrations with traditional food, music, and storytelling.',
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400',
    featured: false,
  },
];

export const getFeaturedTraditions = (): Tradition[] => {
  return traditions.filter((t) => t.featured);
};

export const filterTraditionsByRegion = (region: string): Tradition[] => {
  if (region === 'all') return traditions;
  return traditions.filter((t) => t.region === region);
};
