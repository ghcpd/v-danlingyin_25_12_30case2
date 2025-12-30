import { useState, useEffect } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const nextYear = new Date(currentYear + 1, 0, 1, 0, 0, 0);
      const difference = nextYear.getTime() - now.getTime();

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 min-w-[70px] sm:min-w-[90px]">
        <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-600">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="mt-2 text-sm sm:text-base font-medium text-white uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-500 py-8 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-8">
          Countdown to New Year {new Date().getFullYear() + 1}
        </h2>
        <div 
          className="flex justify-center gap-3 sm:gap-4 md:gap-6"
          role="timer"
          aria-live="polite"
          aria-label={`Time until New Year: ${timeRemaining.days} days, ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes, ${timeRemaining.seconds} seconds`}
        >
          <TimeUnit value={timeRemaining.days} label="Days" />
          <TimeUnit value={timeRemaining.hours} label="Hours" />
          <TimeUnit value={timeRemaining.minutes} label="Minutes" />
          <TimeUnit value={timeRemaining.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};
