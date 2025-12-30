import { EventCard, Modal } from '../../components';
import { events } from '../../data';
import { useModal } from '../../hooks';
import { Event } from '../../types';

export const EventsPage: React.FC = () => {
  const { isOpen, data: selectedEvent, openModal, closeModal } = useModal<Event>();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-festive-midnight via-purple-900 to-festive-midnight text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            New Year{' '}
            <span className="text-festive-gold">Events</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Discover spectacular New Year celebrations happening around the world.
            From iconic countdowns to cultural festivals.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 sm:py-16" aria-label="Events list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              <span className="font-semibold text-festive-midnight">
                {events.length}
              </span>{' '}
              upcoming events to celebrate the new year
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onViewDetails={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          title={selectedEvent.name}
          size="lg"
        >
          <div className="space-y-6">
            {/* Event Image */}
            {selectedEvent.imageUrl && (
              <div className="rounded-xl overflow-hidden">
                <img
                  src={selectedEvent.imageUrl}
                  alt={selectedEvent.name}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}

            {/* Event Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-festive-gold/10 rounded-lg">
                  <svg
                    className="w-6 h-6 text-festive-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-semibold text-gray-900">{selectedEvent.date}</p>
                  {selectedEvent.time && (
                    <p className="text-sm text-gray-600">{selectedEvent.time}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-festive-red/10 rounded-lg">
                  <svg
                    className="w-6 h-6 text-festive-red"
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
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-900">{selectedEvent.location}</p>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                About This Event
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {selectedEvent.fullDescription || selectedEvent.description}
              </p>
            </div>
          </div>
        </Modal>
      )}

      {/* Info Section */}
      <section className="py-12 bg-white" aria-labelledby="events-info">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="events-info"
            className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4"
          >
            A World of Celebrations
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            New Year events bring millions of people together in celebration.
            Whether you're watching fireworks over Sydney Harbour, counting down in
            Times Square, or experiencing a traditional temple ceremony in Japan,
            these events create lasting memories and unite us in hope for the year
            ahead.
          </p>
        </div>
      </section>
    </main>
  );
};
