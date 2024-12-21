import React, { useEffect } from "react";
import { logoutUser } from "../actions/userActions";
import { connect } from "react-redux";
import { logoutIcon } from "../constants.js";
import { useNavigate } from "react-router-dom";

const Logout = ({ logoutUser, user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    renderLogOutButton();
  }, []);

  const renderLogOutButton = () => {
    let logOutBtn = document.getElementById("logout");
    if (localStorage.loggedIn && logOutBtn) {
      logOutBtn.style.display = "block";
    } else if (!localStorage.loggedIn && logOutBtn) {
      logOutBtn.style.display = "none";
      navigate("/login");
    }
  };

  const handleOnClick = () => {
    localStorage.clear("loggedIn");
    logoutUser(user.user);
    navigate("/login");
  };

  return (
    <div>
      <div className="logout-btn">
        <button id="logout" onClick={handleOnClick}>
          <img alt="logout button" src={`${logoutIcon}`} />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(Logout);
