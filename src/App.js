import React from 'react';
import './App.css';
import Header from './components/Header'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <Header/>
      SEARCH BAR?
      <LoginForm/>
    
      <div id="plant-container">
        plants
      </div>

    </div>
  );
}

export default App;
