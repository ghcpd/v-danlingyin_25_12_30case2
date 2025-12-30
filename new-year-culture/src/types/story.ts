/**
 * Type definitions for New Year cultural stories
 */

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  publishDate?: string;
  imageUrl?: string;
  readTime?: number;
}
