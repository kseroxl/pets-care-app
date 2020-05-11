import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Inputs/Buttons";
import "./WelcomeView.css";

const WelcomeView = () => {
  return (
    <div className="welcome-view">
      <div className="container">
        <h2>Welcome</h2>
        <img src="./images/welcome-view.svg" alt="pets hospital" />
        <p>
          Looking for a professional medical care for your pet?
          <br />
          We can help you!
        </p>
        <span></span>
        <Link to="/signup">
          <Button text="Sign up" class="dark-bg one-third-width" />
        </Link>
        <Link to="/login" id="link-to-signup">
          <p className="small text-centered green-text">
            Already heva an account? Log in
          </p>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeView;
