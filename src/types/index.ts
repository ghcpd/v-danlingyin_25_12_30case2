export interface Tradition {
  id: string;
  title: string;
  country: string;
  region: string;
  description: string;
  imageUrl?: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  date?: string;
}

export type Region = 'Asia' | 'Europe' | 'Americas' | 'Africa' | 'Oceania' | 'All';
