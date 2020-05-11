import React from "react";
import { Link } from "react-router-dom";
import "./HomeSection.css";

const HomeSection = (props) => {
  console.log(props.link);
  return (
    <Link to={props.link} className="section-bg-dark dark-bg">
      <div className="section-bg-white white-bg shadow">
        <div className="flex-centered">
          <img src={`${props.img}`} alt="client section" />
        </div>
        <div className="green-bg section-header small">{props.header}</div>
      </div>
    </Link>
  );
};

export default HomeSection;
