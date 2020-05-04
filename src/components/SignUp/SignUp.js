import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

import { AuthConsumer } from "../../authContext";
import FormContainer from "../Containers/FormContainer/FormContainer";
import { Input, Select } from "../Inputs/Inputs";
import { Button } from "../Inputs/Buttons";

function SignUp(props) {
  const user = {
    pet: "Dog",
    name: null,
    surname: null,
    email: null,
    "phone number": null,
    address: null,
    "pet's name": "",
  };
  const [error, setError] = useState("");
  const [userData, setData] = useState(user);

  const handleSubmit = (event, login) => {
    event.preventDefault();
    if (validateData()) {
      login(userData.email, "");
    } else setError("Please fill in all the fields");
  };

  const validateData = () => {
    for (let key in userData) {
      if (!userData[key]) return false;
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

  const checkLettersInDate = (date) => {
    console.log(date);
    var reg = new RegExp("[A-Za-z]");
    return reg.test(date);
  };

  const handleSelect = (option) => {
    setData({
      ...userData,
      pet: option,
    });
  };

  const handleDateChange = (e) => {
    if (!checkLettersInDate(e.target.value)) setError("");
    const valueIsNaN = Number.isNaN(
      parseInt(e.target.value[e.target.value.length - 1])
    );

    if (!valueIsNaN) {
      // TO DO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      //   if (e.target.value.length === 2 || e.target.value.length === 4) {
      //     e.target.value += "/";
      //   }
    } else {
      setError("Please enter date in numbers");
    }
  };

  const pets = ["Dog", "Cat", "Parrot"];

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
                type="email"
                placeholder="Email"
                className="full-width span-2"
                onChange={handleChange}
                icon="email.svg"
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
              <Select
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
                placeholder="MM/DD/YYYY"
                className="full-width"
                onChange={handleDateChange}
                maxLength="10"
                icon="date.svg"
              />
              <Input
                type="text"
                placeholder="MM/DD/YYYY"
                className="full-width "
                onChange={handleDateChange}
                maxLength="10"
                icon="date.svg"
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
