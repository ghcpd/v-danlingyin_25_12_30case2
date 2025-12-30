/**
 * Type definitions for New Year traditions
 */

export type Region = 'Asia' | 'Europe' | 'Americas' | 'Africa' | 'Oceania' | 'Middle East';

export interface Tradition {
  id: string;
  title: string;
  country: string;
  region: Region;
  description: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface TraditionFilterOptions {
  region: Region | 'all';
}
