import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import { AuthConsumer } from "../../../authContext";
import FormContainer from "../../Containers/FormContainer/FormContainer";
import { Input, Password } from "../../Inputs/Inputs";
import { Button } from "../../Inputs/Buttons";

function Login(props) {
  const [userData, setData] = useState({ email: null, password: null });
  const [error, setError] = useState("");

  const handleSubmit = (event, login) => {
    event.preventDefault();
    if (validateData()) {
      login(userData.email, "");
    }
  };

  const validateData = () => {
    for (let key in userData) {
      if (!userData[key]) {
        setError("Please fill in all the fields");
        return false;
      }
    }
    return true;
  };

  const handleChange = (e) => {
    setData({
      ...userData,
      [e.target.placeholder.toLowerCase()]: e.target.value,
    });
    setError("");
  };

  return (
    <>
      <AuthConsumer>
        {({ initiateLogin }) => (
          <FormContainer header="Log in">
            {error && <p className="error-message">{error}</p>}
            <form className="log-in-form flex-centered">
              <Input
                type="email"
                placeholder="Email"
                className="full-width"
                onChange={handleChange}
                icon="email.svg"
              />
              <Password
                placeholder="Password"
                className="full-width"
                onChange={handleChange}
              />
              <Button
                onClick={(event) => handleSubmit(event, initiateLogin)}
                text="Log in"
                class="green-bg full-width"
              />
              <Link to="signup" id="link-to-signup">
                <p className="small text-centered">
                  Don't have an account? Sign up
                </p>
              </Link>
            </form>
          </FormContainer>
        )}
      </AuthConsumer>
    </>
  );
}

export default Login;
