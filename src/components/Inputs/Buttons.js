import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Inputs.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`button pointer ${props.class}`}>
      {props.text}
    </button>
  );
};

const HomeButton = () => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div>
      <Link to="/" className="home-link">
        <img
          alt="home"
          src="./icons/arrow-green.svg"
          className={`${hovered ? "hovered" : ``}`}
        />
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="green-text"
        >
          Home
        </span>
      </Link>
    </div>
  );
};

export { Button, HomeButton };
