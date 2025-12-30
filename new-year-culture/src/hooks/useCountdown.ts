import { useState, useEffect, useCallback } from 'react';
import { CountdownTime } from '../types';

/**
 * Calculate time remaining until next New Year
 */
const calculateTimeRemaining = (targetDate: Date): CountdownTime => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

/**
 * Get the next New Year date
 */
const getNextNewYear = (): Date => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const nextNewYear = new Date(currentYear + 1, 0, 1, 0, 0, 0);
  return nextNewYear;
};

/**
 * Custom hook for countdown to New Year
 */
export const useCountdown = (): CountdownTime & { isNewYear: boolean } => {
  const [targetDate] = useState<Date>(() => getNextNewYear());
  const [timeRemaining, setTimeRemaining] = useState<CountdownTime>(() =>
    calculateTimeRemaining(targetDate)
  );
  const [isNewYear, setIsNewYear] = useState<boolean>(false);

  const updateCountdown = useCallback(() => {
    const remaining = calculateTimeRemaining(targetDate);
    setTimeRemaining(remaining);

    if (
      remaining.days === 0 &&
      remaining.hours === 0 &&
      remaining.minutes === 0 &&
      remaining.seconds === 0
    ) {
      setIsNewYear(true);
    }
  }, [targetDate]);

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [updateCountdown]);

  return { ...timeRemaining, isNewYear };
};
