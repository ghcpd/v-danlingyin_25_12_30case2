/**
 * Type definitions for New Year events
 */

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  fullDescription?: string;
  imageUrl?: string;
  time?: string;
}
