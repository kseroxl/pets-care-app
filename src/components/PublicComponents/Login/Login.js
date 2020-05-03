import React, { useState } from "react";
import "./Login.css";

import { AuthConsumer } from "../../../authContext";
import FormContainer from "../../Containers/FormContainer/FormContainer";
import { Input } from "../../Inputs/Inputs";
import { Button } from "../../Inputs/Buttons";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event, login, role) => {
    event.preventDefault();
    if (!email) {
      setError("Please enter your email");
    } else if (!password) {
      setError("Please enter your password");
    } else {
      login(email, password);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
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
                class="full-width"
                onChange={handleChangeEmail}
                icon="email.svg"
              />
              <Input
                type="password"
                placeholder="Password"
                class="full-width"
                onChange={handleChangePassword}
                icon="password.svg"
              />
              <Button
                onClick={(event) =>
                  handleSubmit(event, initiateLogin, "doctor")
                }
                text="Log in"
                class="green-bg full-width"
              />
            </form>
          </FormContainer>
        )}
      </AuthConsumer>
    </>
  );
}

export default Login;
