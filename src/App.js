import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import PlantContainer from './containers/PlantContainer';
import CartPlantContainer from './containers/CartPlantContainer';
import SearchBar from './components/SearchBar';



class App extends React.Component {
  
  state = {
    search: ""
}

 updateSearch = (event) =>{
   this.setState({
     search: event.target.value
   })
 }


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
            <CartPlantContainer/>
            <Route exact path="/login" component={LoginForm} history={this.history}/>
            <SearchBar updateSearch={this.updateSearch}/>
            <Route exact path="/" render={(routeProps)=> <PlantContainer {...routeProps} search={this.state.search}/>}/>
        </Router>
      </div>
    );
  }
  }
  
// mapDispatchToProps here to handle SearchBar function?

export default App;
