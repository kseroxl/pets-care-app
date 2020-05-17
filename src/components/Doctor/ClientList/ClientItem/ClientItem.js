import React from "react";
import "./ClientItem.css";
import ClientHeader from "../ClientHeader/ClientHeader";

const ClientItem = (props) => {
  return (
    <div className="shadow client-item">
      <ClientHeader
        name={props.client.name}
        surname={props.client.surname}
        pet={props.client.pet}
      />
      <div className="client-info">
        <h4>
          <b>
            {props.client.name} {props.client.surname}
          </b>
        </h4>
        <p className="small">
          <b>Email: </b>
          {props.client.email}
        </p>
        <p className="small">
          <b>Phone: </b>
          {props.client.phone}
        </p>
        <hr />
        <p className="small">
          <b>Species: </b>
          {props.client.pet.species}
        </p>
        <p className="small">
          <b>Pet's name: </b>
          {props.client.pet.name}
        </p>
      </div>
    </div>
  );
};

export default ClientItem;
