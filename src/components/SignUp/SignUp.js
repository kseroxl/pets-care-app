import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

import FormContainer from "../Containers/FormContainer/FormContainer";
import { AuthConsumer } from "../../authContext";
import { Input, Password, Select } from "../Inputs/Inputs";
import { Button } from "../Inputs/Buttons";
import { onDateChange, validateDateFormat } from "../Inputs/Inputs";

function SignUp(props) {
  const user = {
    name: null,
    surname: null,
    email: null,
    "phone number": null,
    address: null,
    password: null,
    "confirm password": null,
  };
  const [error, setError] = useState("");
  const [userData, setData] = useState(user);

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

  const handleSelect = (option) => {
    setData({
      ...userData,
      pet: option,
    });
  };

  const pets = ["Dog", "Cat", "Parrot"];
  const MAX_LENGTH = 10;

  return (
    <>
      <AuthConsumer>
        {({ initiateLogin, user }) => (
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
                placeholder="Phone number"
                className="full-width"
                onChange={handleChange}
                icon="phone.svg"
              />
              <Input
                type="text"
                placeholder="Address"
                className="full-width"
                onChange={handleChange}
                icon="home.svg"
              />
              {/* <Select
                onChange={handleSelect}
                className="full-width"
                icon="arrow-down.svg"
                options={pets}
              />
              <Input
                type="text"
                placeholder="Pet's name"
                className="full-width"
                onChange={handleChange}
                icon="pet.svg"
              />
              <Input
                type="text"
                placeholder="DD/MM/YYYY"
                className="full-width"
                onChange={handleDateChange}
                maxLength={MAX_LENGTH}
                icon="date.svg"
                id="birth-date"
                label="Date of birth"
              />
              <Input
                type="text"
                placeholder="DD/MM/YYYY"
                className="full-width "
                onChange={handleDateChange}
                maxLength={MAX_LENGTH}
                icon="date.svg"
                id="death-date"
                label="Date of death"
              /> */}
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
                  onClick={(event) => handleSubmit(event, initiateLogin)}
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
