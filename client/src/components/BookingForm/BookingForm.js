import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ event, onBook }) => {
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setTicketQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook(ticketQuantity);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Book Tickets</h3>
      <div className="booking-form-field">
        <label htmlFor="ticketQuantity">Quantity:</label>
        <input
          type="number"
          id="ticketQuantity"
          name="ticketQuantity"
          min="1"
          value={ticketQuantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="booking-form-actions">
        <button type="submit">Book Now</button>
      </div>
    </form>
  );
};

export default BookingForm;
