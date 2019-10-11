import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import PlantContainer from './containers/PlantContainer';



class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <div>
            <Link to="/">
            <div id="app-header">
              <img src="https://fontmeme.com/permalink/190910/cd6f2ab7e2bb65d7267bc46d5894d410.png" alt="plants-letters-font" border="0"/>
              <p className="slogan">
                <img src="https://fontmeme.com/permalink/190910/e82e091f0a56a273adfbca896400ea3b.png" alt="miralight-font" border="0"/>
              </p>
            </div>
            </Link>
            </div>
            <Route exact path="/login" component={LoginForm} history={this.history}/>
            <Route exact path="/" history={this.history} component={PlantContainer}/>
        </Router>
      </div>
    );
  }
  }
  
// mapDispatchToProps here to handle SearchBar function?

export default App;
