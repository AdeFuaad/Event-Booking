import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-card-image">
        <img src={event.imageUrl} alt={event.title} />
      </div>
      <div className="event-card-content">
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-date">{new Date(event.date).toLocaleString()}</p>
        <p className="event-card-location">{event.location}</p>
        <p className="event-card-price">${event.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default EventCard;
