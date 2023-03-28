import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';
import EventCard from '../../components/EventCard/EventCard';
import './EventDetails.css';

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details from your API using the eventId
    // For example:
    // fetch(`/api/events/${eventId}`)
    //   .then((response) => response.json())
    //   .then((data) => setEvent(data));
  }, [eventId]);

  const handleBook = (ticketQuantity) => {
    // Handle booking logic here
    console.log(`Booked ${ticketQuantity} tickets for event: ${event.title}`);
  };

  if (!event) {
    return <p>Loading event details...</p>;
  }

  return (
    <div className="event-details">
      <EventCard event={event} />
      <BookingForm event={event} onBook={handleBook} />
    </div>
  );
};

export default EventDetails;
