import { useCountdown } from '../../hooks';
import { padNumber, getNextYear } from '../../utils';

interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 min-w-[60px] sm:min-w-[80px] md:min-w-[100px] border border-white/20">
      <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display tabular-nums">
        {padNumber(value)}
      </span>
    </div>
    <span className="mt-2 text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-wider">
      {label}
    </span>
  </div>
);

export const CountdownTimer: React.FC = () => {
  const { days, hours, minutes, seconds, isNewYear } = useCountdown();
  const nextYear = getNextYear();

  if (isNewYear) {
    return (
      <div
        className="text-center py-8"
        role="timer"
        aria-live="polite"
        aria-label="New Year Celebration"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display mb-4 animate-bounce-slow">
          🎉 Happy New Year {nextYear}! 🎉
        </h2>
        <p className="text-xl text-white/80">Wishing you joy and prosperity!</p>
      </div>
    );
  }

  return (
    <div
      className="text-center"
      role="timer"
      aria-live="polite"
      aria-label={`Countdown to New Year ${nextYear}`}
    >
      <h2 className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 md:mb-6 font-display">
        Countdown to {nextYear}
      </h2>
      <div
        className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6"
        aria-label={`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`}
      >
        <TimeUnit value={days} label="Days" />
        <span
          className="text-2xl sm:text-3xl md:text-4xl text-festive-gold font-bold self-start mt-4 sm:mt-6 md:mt-8"
          aria-hidden="true"
        >
          :
        </span>
        <TimeUnit value={hours} label="Hours" />
        <span
          className="text-2xl sm:text-3xl md:text-4xl text-festive-gold font-bold self-start mt-4 sm:mt-6 md:mt-8"
          aria-hidden="true"
        >
          :
        </span>
        <TimeUnit value={minutes} label="Minutes" />
        <span
          className="text-2xl sm:text-3xl md:text-4xl text-festive-gold font-bold self-start mt-4 sm:mt-6 md:mt-8"
          aria-hidden="true"
        >
          :
        </span>
        <TimeUnit value={seconds} label="Seconds" />
      </div>
    </div>
  );
};
