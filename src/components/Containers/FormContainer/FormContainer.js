import React from "react";
import "./FormContainer.css";

const FormContainer = (props) => {
  return (
    <div className="dark-bg full-screen">
      <h1 className="form-page-header">{props.header}</h1>
      <div className="flex-centered form-container">
        <div className="white-bg flex-centered ">
          {props.children}
          <img
            className="form-dog-img"
            alt="dog"
            src="./images/form-page-dog.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
