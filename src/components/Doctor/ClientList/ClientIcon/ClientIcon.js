import React from "react";
import "./ClientIcon.css";

const ClientIcon = (props) => {
  return (
    <div className="client-icon flex-centered" style={props.style}>
      <span>{props.name.charAt(0).toUpperCase()}</span>
      <span>{props.surname.charAt(0).toUpperCase()}</span>
    </div>
  );
};

export default ClientIcon;
