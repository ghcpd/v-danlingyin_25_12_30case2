/**
 * Utility functions for the application
 */

/**
 * Format number with leading zero if needed
 */
export const padNumber = (num: number): string => {
  return num.toString().padStart(2, '0');
};

/**
 * Get year for display
 */
export const getNextYear = (): number => {
  return new Date().getFullYear() + 1;
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

/**
 * Class name utility for conditional classes
 */
export const cn = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Generate unique ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};
