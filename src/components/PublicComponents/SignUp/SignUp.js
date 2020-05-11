import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { cities, pets } from "../../../config/lists.config";

import FormContainer from "../../Containers/FormContainer/FormContainer";
import { AuthConsumer } from "../../../authContext";
import { Input, Password, Select } from "../../Inputs/Inputs";
import { Button } from "../../Inputs/Buttons";
import { onDateChange, validateDateFormat } from "../../Inputs/Inputs";

function SignUp(props) {
  const user = {
    name: null,
    surname: null,
    email: null,
    phone: null,
    address: null,
    password: null,
    "confirm password": null,
  };
  const [error, setError] = useState("");
  const [userData, setData] = useState(user);

  const handleSubmit = (event, signupCallback) => {
    event.preventDefault();
    if (validateData()) {
      signupCallback(userData);
    }
  };

  const validateData = () => {
    console.log(userData);
    for (let key in userData) {
      if (!userData[key]) {
        setError("Please fill in all the fields");
        return false;
      }
    }
    if (userData["password"] !== userData["confirm password"]) {
      setError("Please confirm password correctly");
      return false;
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

  const handleDateChange = (e) => {
    if (e.target.value.length === 10)
      setError(validateDateFormat(e.target.value));
    else setError("");
    const newDate = onDateChange(e);
    setData({ ...userData, [e.target.id]: newDate });
  };

  const handleSelect = (label, option) => {
    setError("");
    setData({
      ...userData,
      [label]: option,
    });
  };

  const MAX_LENGTH = 10;

  return (
    <>
      <AuthConsumer>
        {({ initiateSignUp, user }) => (
          <FormContainer header="Sign up">
            {error && <p className="error-message">{error}</p>}
            <form className="sign-up-form">
              <Input
                type="text"
                placeholder="Name"
                className="full-width"
                onChange={handleChange}
              />
              <Input
                type="text"
                placeholder="Surname"
                className="full-width"
                onChange={handleChange}
              />
              <Input
                type="tel"
                placeholder="Phone"
                className="full-width"
                onChange={handleChange}
                icon="phone.svg"
              />
              {/* <Select
                onChange={handleSelect}
                className="full-width"
                icon="arrow-down.svg"
                options={cities}
                id="city"
              /> */}
              <Input
                type="text"
                placeholder="Address"
                className="full-width"
                onChange={handleChange}
                icon="home.svg"
              />
              <Input
                type="email"
                placeholder="Email"
                className="full-width span-2"
                onChange={handleChange}
                icon="email.svg"
              />
              <Password
                placeholder="Password"
                className="full-width"
                onChange={handleChange}
              />
              <Password
                placeholder="Confirm password"
                className="full-width"
                onChange={handleChange}
              />
              <div className="sign-up-button">
                <Button
                  onClick={(event) => handleSubmit(event, initiateSignUp)}
                  text="Sign up"
                  class="green-bg full-width"
                />
                <Link to="/" id="link-to-signup">
                  <p className="small text-centered">
                    Already heva an account? Log in
                  </p>
                </Link>
              </div>
            </form>
          </FormContainer>
        )}
      </AuthConsumer>
    </>
  );
}

export default SignUp;
