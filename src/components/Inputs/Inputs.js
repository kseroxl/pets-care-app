import React, { createRef } from "react";
import "./Inputs.css";

const Input = (props) => {
  const style = {
    background: `url(./icons/${props.icon}) no-repeat`,
    backgroundPosition: "100% 50%",
  };
  return (
    <div className={`input ${props.className}`}>
      {props.label && <label>{props.label}</label>}
      <input {...props} style={style} />
    </div>
  );
};

const Select = (props) => {
  const style = {
    background: `url(./icons/${props.icon}) no-repeat`,
    backgroundPosition: "100% 50%",
  };
  const ref = createRef();

  const handleChange = () => {
    var selectedOption = ref.current.options[ref.current.selectedIndex].value;
    props.onChange(selectedOption);
  };

  return (
    <div className={`input ${props.class}`}>
      {props.label && <label>{props.label}</label>}
      <select
        ref={ref}
        className="pointer"
        style={style}
        onChange={handleChange}
      >
        {props.options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export { Input, Select };
