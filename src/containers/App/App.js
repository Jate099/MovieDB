import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';

function App() {
  return (
    <Router>
      <Route path="/" extact component={Home}/>
    </Router>
  );
}

export default App;
