import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import EventDetails from './pages/EventDetails/EventDetails';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events/:eventId" component={EventDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
