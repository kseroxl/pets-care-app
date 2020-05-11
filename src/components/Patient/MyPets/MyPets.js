import React, { useState } from "react";
import "./MyPets.css";
import DashboardContainer from "../../Containers/DashboardContaine/DashboardContainer";
import ModalWindow from "../../Containers/ModalWindow/ModalWindow";
import { Button } from "../../Inputs/Buttons";
import AddPetForm from "./AddPetForm/AddPetForm";

const MyPets = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <DashboardContainer header="My pets">
      <ModalWindow
        header="Add new pet"
        show={showModal}
        handleClose={hideModal}
      >
        <AddPetForm />
      </ModalWindow>
      <div className="pets-list-container flex-centered">
        {props.pets ? (
          props.pets
        ) : (
          <p className="grey-text">You have no pets yet</p>
        )}
        <Button onClick={openModal} class="green-bg" text="Add pet" />
      </div>
    </DashboardContainer>
  );
};

export default MyPets;
