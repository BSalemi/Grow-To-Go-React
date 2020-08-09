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
    visibilityFilter: {
      price: null,
      size: null,
      expLevel: null,
      lightRequired: null
    },
    petFriendly: false,
    isClicked: false
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
     ...this.state,
     search: event.target.value
   })
 }

 setVisibilityFilter = (event) => {
   this.setState({
     visibilityFilter: {
       ...this.state.visibilityFilter,
       [event.target.name]: event.target.value
     }
   })
 }


 setPetFriendly = () => {
  this.setState(prevState => {
    return {
      ...prevState,
      petFriendly: !prevState.petFriendly
      }
  })
 }

  resetState = () => {
    this.setState({
      search: "",
      visibilityFilter: {
        price: null,
        size: null,
        expLevel: null,
        lightRequired: null
      },
      petFriendly: false,
    })
  }

  setIsClicked = () => {
    this.setState({
      isClicked: true
    })
  }

 componentDidMount(){
   this.checkForUser()
 }



  render(){
    return (
      <div>
     {this.state.isClicked ? 
      <div className="App">
          <div>
            <Link to="/">
            <div id="app-header" onClick={this.resetState}>
              <img className="logo-image" src="https://www.dropbox.com/s/ovyh7qkl5p232sc/gtglogo.png?raw=1" alt="plants-letters-font" border="0"/>
              <p className="slogan" onClick={this.resetState}>
                <img src="https://www.dropbox.com/s/uf7qka4e79pf06t/gtgbotaneeds.png?raw=1" alt="miralight-font" border="0"/>
              </p>
            </div>
            </Link>
            </div>
            <Logout/>
            <CartPlantContainer/>
            <br/>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/plants/:id" component={PlantShow} />
            <Route exact path="/" render={(routeProps) =>  <SearchBar {...routeProps} updateSearch={this.updateSearch}/> }/>
            <Route exact path="/" render={(routeProps) =>  <FilterOptions {...routeProps}setVisibilityFilter={this.setVisibilityFilter} setPetFriendly={this.setPetFriendly} resetState={this.resetState}/> }/>
            <Route exact path="/" render={(routeProps)=> <PlantContainer {...routeProps} search={this.state.search} visibilityFilter={this.state.visibilityFilter} petFriendly={this.state.petFriendly}/>}/>

      </div> :
      <div className="cover-image">
        <div className="heading-text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Grow To Go</span>
            <span className="heading-primary-sub">For All Your Botaneeds</span>
          </h1>

          <a href="#" className="bttn bttn-white bttn-animated" onClick={this.setIsClicked}>Get Shopping</a>
        </div>
      </div>
     } </div>
    );
  }
  }


export default connect(null, {loginUser, fetchPlants})(withRouter(App));
