import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header'
import LoginForm from './components/LoginForm'
import PlantContainer from './containers/PlantContainer';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          <Route exact path="/login" component={LoginForm} />
          <SearchBar/>
          <PlantContainer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
