import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

const EventCard = ({ event, onClick }: EventCardProps) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <h3 className="text-xl font-heading font-bold text-new-year-dark mb-3">
        {event.name}
      </h3>
      <div className="space-y-2 text-gray-700">
        <p className="flex items-center">
          <span className="mr-2">📅</span>
          <span>{formatDate(event.date)}</span>
        </p>
        <p className="flex items-center">
          <span className="mr-2">📍</span>
          <span>{event.location}</span>
        </p>
        <p className="text-gray-600 mt-4 line-clamp-2">
          {event.description}
        </p>
      </div>
      <button 
        className="mt-4 text-new-year-primary hover:text-new-year-secondary font-semibold"
        aria-label={`View details for ${event.name}`}
      >
        View Details →
      </button>
    </div>
  );
};

export default EventCard;
