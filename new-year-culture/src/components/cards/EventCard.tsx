import { Event } from '../../types';

interface EventCardProps {
  event: Event;
  onViewDetails: (event: Event) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onViewDetails }) => {
  const { name, date, location, description, imageUrl, time } = event;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onViewDetails(event);
    }
  };

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-festive-red to-festive-gold flex items-center justify-center">
            <span className="text-6xl" role="img" aria-hidden="true">
              🎆
            </span>
          </div>
        )}
        {/* Date Badge */}
        <div className="absolute top-3 left-3 bg-white rounded-lg px-3 py-2 shadow-md">
          <span className="text-sm font-bold text-festive-midnight block">
            {date}
          </span>
          {time && (
            <span className="text-xs text-gray-500">{time}</span>
          )}
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2 text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm">{location}</span>
        </div>

        <h3 className="text-xl font-display font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-festive-red transition-colors">
          {name}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>

        <button
          type="button"
          onClick={() => onViewDetails(event)}
          onKeyDown={handleKeyDown}
          className="inline-flex items-center gap-2 px-4 py-2 bg-festive-midnight text-white rounded-lg hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-festive-gold focus:ring-offset-2 transition-all text-sm font-medium"
          aria-label={`View details for ${name}`}
        >
          View Details
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};
