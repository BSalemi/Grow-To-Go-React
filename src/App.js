import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header'
import LoginForm from './components/LoginForm'
import PlantContainer from './containers/PlantContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          {/* SEARCH BAR? */}
          <Route exact path="/login" component={LoginForm} />
          <div id="plant-container">
          <PlantContainer/>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
