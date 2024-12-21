import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, link, useNavigate, withRouter, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import PlantContainer from "./containers/PlantContainer";
import CartPlantContainer from "./containers/CartPlantContainer";
import SearchBar from "./components/SearchBar";
import FilterOptions from "./components/FilterOptions";
import PlantShow from "./components/PlantShow";
import Logout from "./components/Logout";
import { USERS_URL } from "./constants";
import { loginUser } from "./actions/userActions";
import { fetchPlants } from "./actions/plantActions";
import { connect } from "react-redux";

const App = ({ loginUser, fetchPlants }) => {
  const [search, setSearch] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState({
    price: null,
    size: null,
    expLevel: null,
    lightRequired: null,
  });
  const [petFriendly, setPetFriendly] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(localStorage.loggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    checkForUser();
  }, []);

  const checkForUser = () => {
    if (currentUserId) {
      let id = parseInt(currentUserId);
      fetch(USERS_URL + "/" + id)
        .then((res) => res.json())
        .then((user_data) => {
          loginUser(user_data);
          fetchPlants();
        });
    } else {
      navigate("/login");
    }
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSetVisibilityFilter = (event) => {
    setVisibilityFilter({
      ...visibilityFilter,
      [event.target.name]: event.target.value,
    });
  };

  const handleSetPetFriendly = () => {
    setPetFriendly(!petFriendly);
  };

  const resetState = () => {
    setSearch("");
    setVisibilityFilter({
      price: null,
      size: null,
      expLevel: null,
      lightRequired: null,
    });
    setPetFriendly(false);
  };

  const handleSetIsClicked = () => {
    setIsClicked(true);
  };

  return (
    <div>
      {isClicked ? (
        <div className="App">
          <div>
            <Link to="/">
              <div id="app-header" onClick={resetState}>
                <img
                  className="logo-image"
                  src="https://www.dropbox.com/s/ovyh7qkl5p232sc/gtglogo.png?raw=1"
                  alt="plants-letters-font"
                  border="0"
                />
                <p className="slogan" onClick={resetState}>
                  <img
                    src="https://www.dropbox.com/s/uf7qka4e79pf06t/gtgbotaneeds.png?raw=1"
                    alt="miralight-font"
                    border="0"
                  />
                </p>
              </div>
            </Link>
          </div>
          <Logout />
          <CartPlantContainer />
          <br />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/plants/:id" component={PlantShow} />
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <SearchBar {...routeProps} updateSearch={updateSearch} />
            )}
          />
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <FilterOptions
                {...routeProps}
                setVisibilityFilter={handleSetVisibilityFilter}
                setPetFriendly={handleSetPetFriendly}
                resetState={resetState}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PlantContainer
                {...routeProps}
                search={search}
                visibilityFilter={visibilityFilter}
                petFriendly={petFriendly}
              />
            )}
          />
        </div>
      ) : (
        <div className="cover-image">
          <div className="heading-text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">Grow To Go</span>
              <span className="heading-primary-sub">
                For All Your Botaneeds
              </span>
            </h1>
            <a
              href="#"
              className="bttn bttn-white bttn-animated"
              onClick={handleSetIsClicked}
            >
              Get Shopping
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(null, { loginUser, fetchPlants })(App);
