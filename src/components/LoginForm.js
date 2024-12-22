import React, { useState } from "react";
import { loginUser } from "../actions/userActions";
import { fetchPlants } from "../actions/plantActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ loginUser, fetchPlants }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (name.length > 1 && email.length > 1) {
      const user = {
        name: name,
        email: email,
      };
      loginUser(user);
      navigate("/");
      fetchPlants();
    } else {
      alert("Please enter a username and email address to login.");
    }
  };

  return (
    <div id="login-form">
      <form onSubmit={handleOnSubmit}>
        <div style={{ display: "flex", "align-items": "center" }}>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name"
            value={name}
            onChange={handleOnChange}
          />
        </div>
        <div style={{ display: "flex", "align-items": "center" }}>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Please enter your email"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <input id="login-submit" type="submit" value="Get Shopping!" />
      </form>
    </div>
  );
};

export default connect(null, { loginUser, fetchPlants })(LoginForm);
