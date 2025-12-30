import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const nextYear = now.getMonth() === 11 && now.getDate() === 31 ? currentYear + 1 : currentYear + 1;
      const newYear = new Date(nextYear, 0, 1, 0, 0, 0);
      const difference = newYear.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
      <span className="text-4xl md:text-5xl font-bold text-new-year-primary" aria-label={`${value} ${label}`}>
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-sm md:text-base text-white mt-2">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4" role="timer" aria-live="polite">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
