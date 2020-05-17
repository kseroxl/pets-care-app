import React from "react";
import "./ClientHeader.css";
import ClientIcon from "../ClientIcon/ClientIcon";

const ClientHeader = (props) => {
  return (
    <div className="client-header flex-centered">
      <ClientIcon name={props.name} surname={props.surname} />
      <span id="client-header-round"></span>
      <span id="client-header-line"></span>
      <span id="client-header-round"></span>
      <img src={`./icons/pets/${props.pet.species}-color.svg`} />
    </div>
  );
};

export default ClientHeader;
