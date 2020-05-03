import React from "react";
import "./Inputs.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`button pointer ${props.class}`}>
      {props.text}
    </button>
  );
};

export { Button };
