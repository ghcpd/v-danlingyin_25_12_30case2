export interface Tradition {
  id: string;
  title: string;
  country: string;
  region: 'Asia' | 'Europe' | 'Americas' | 'Africa' | 'Oceania';
  description: string;
  imageUrl?: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  date: string;
}

export type Region = 'All' | 'Asia' | 'Europe' | 'Americas' | 'Africa' | 'Oceania';
