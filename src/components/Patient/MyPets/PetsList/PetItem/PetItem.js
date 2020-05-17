import React from "react";
import "./PetItem.css";

const PetItem = (props) => {
  return (
    <div className="shadow pet-item">
      <img src={`./icons/pets/${props.pet.species}-color.svg`} />
      <div className="pet-info">
        <p>
          <b>Species: &nbsp; &nbsp;</b>
          {props.pet.species}
        </p>
        <p>
          <b>Name: &nbsp; &nbsp;</b>
          {props.pet.name}
        </p>
        <p>
          <b>Birthday: &nbsp; &nbsp;</b>
          {props.pet.birthday}
        </p>
        {props.pet.death && (
          <p>
            <b>Death date: &nbsp; &nbsp;</b>
            {props.pet.death}
          </p>
        )}
      </div>
    </div>
  );
};

export default PetItem;
