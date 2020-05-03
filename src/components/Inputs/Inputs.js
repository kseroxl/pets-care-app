import React from "react";
import "./Inputs.css";

const Input = (props) => {
  const style = {
    background: `url(./icons/${props.icon}) no-repeat`,
    backgroundPosition: "100% 50%",
  };
  return (
    <div className={`input ${props.class}`}>
      {props.label && <label>{props.label}</label>}
      <input
        style={style}
        onChange={props.onChange}
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export { Input };
