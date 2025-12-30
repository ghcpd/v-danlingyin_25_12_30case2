/**
 * Central export for all TypeScript types
 */

export * from './tradition';
export * from './event';
export * from './story';

/**
 * Navigation link type
 */
export interface NavLink {
  label: string;
  path: string;
}

/**
 * Countdown time units
 */
export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
