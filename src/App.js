import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import PlantContainer from './containers/PlantContainer';
import CartPlantContainer from './containers/CartPlantContainer';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions'
import PlantShow from './components/PlantShow'
import Logout from './components/Logout';
import {USERS_URL} from './constants'
import {loginUser} from './actions/userActions'
import {fetchPlants} from './actions/plantActions'
import {connect} from 'react-redux'


class App extends React.Component {
  
  state = {
    search: "",
    visibilityFilter: null,
    petFriendly: false,
  }


  checkForUser(){
    if(localStorage.loggedIn){
        let id = localStorage.loggedIn
        fetch(USERS_URL + "/" + id)
        .then(res => res.json())
        .then((user_data => {
            this.props.loginUser(user_data, this.props.history)
            this.props.fetchPlants()
            })
        );
    } else {
        this.props.history.push('/login');
    }
}

 updateSearch = (event) =>{
   this.setState({
     search: event.target.value
   })
 }

 setVisibilityFilter = (event) => {
   this.setState({
     visibilityFilter: event.target.value
   })
 }

 setPetFriendly = () => {
   this.setState(prevState => {
     return {
       petFriendly: !prevState.petFriendly
       }
   })
  }

  
 componentDidMount(){
   this.checkForUser()
 }


  render(){
    return (
      <div className="App">
        
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
            <Logout/>
            <CartPlantContainer/>
            <SearchBar updateSearch={this.updateSearch}/>
            <br/>
            <FilterOptions setVisibilityFilter={this.setVisibilityFilter} setPetFriendly={this.setPetFriendly}/>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/plants/:id" component={PlantShow} />
            <Route exact path="/" render={(routeProps)=> <PlantContainer {...routeProps} search={this.state.search} visibilityFilter={this.state.visibilityFilter} petFriendly={this.state.petFriendly}/>}/>
        
      </div>
    );
  }
  }


export default connect(null, {loginUser, fetchPlants})(withRouter(App));
