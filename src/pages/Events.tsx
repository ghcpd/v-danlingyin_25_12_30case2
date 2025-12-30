import { useState } from 'react';
import { EventCard } from '../components/EventCard';
import { Modal } from '../components/Modal';
import { events } from '../data/events';
import { Event } from '../types';

export const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-4">
            New Year Events Worldwide
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join millions around the globe in spectacular New Year celebrations and countdown events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      <Modal
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.name || ''}
      >
        {selectedEvent && (
          <div className="space-y-4">
            {selectedEvent.imageUrl && (
              <img
                src={selectedEvent.imageUrl}
                alt={selectedEvent.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <span className="mr-3 text-xl">📅</span>
                <div>
                  <span className="font-semibold">Date: </span>
                  {formatDate(selectedEvent.date)}
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-3 text-xl">📍</span>
                <div>
                  <span className="font-semibold">Location: </span>
                  {selectedEvent.location}
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
