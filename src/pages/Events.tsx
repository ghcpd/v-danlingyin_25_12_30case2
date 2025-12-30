import { useState } from 'react';
import EventCard from '../components/EventCard';
import Modal from '../components/Modal';
import { events } from '../data/events';
import { Event } from '../types';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-heading font-bold text-center text-new-year-dark mb-4">
          New Year Events
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Join the celebration! Discover major New Year events and festivities happening around the world
        </p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onClick={() => handleEventClick(event)}
            />
          ))}
        </div>

        {/* Event Detail Modal */}
        <Modal
          isOpen={selectedEvent !== null}
          onClose={handleCloseModal}
          title={selectedEvent?.name || ''}
        >
          {selectedEvent && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-new-year-primary to-new-year-secondary h-32 rounded-lg flex items-center justify-center">
                <span className="text-7xl" role="img" aria-label="Event icon">
                  🎆
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📅</span>
                  <div>
                    <h3 className="font-semibold text-gray-700">Date</h3>
                    <p className="text-gray-600">{formatDate(selectedEvent.date)}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-3">📍</span>
                  <div>
                    <h3 className="font-semibold text-gray-700">Location</h3>
                    <p className="text-gray-600">{selectedEvent.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-3">ℹ️</span>
                  <div>
                    <h3 className="font-semibold text-gray-700">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Events;
