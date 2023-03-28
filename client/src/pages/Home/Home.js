import React, { useState, useEffect } from 'react';
import EventList from '../../components/EventList/EventList';
import './Home.css';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from your API
    // For example:
    // fetch('/api/events')
    //   .then((response) => response.json())
    //   .then((data) => setEvents(data));
  }, []);

  return (
    <div className="home">
      <h2>Upcoming Events</h2>
      <EventList events={events} />
    </div>
  );
};

export default Home;
