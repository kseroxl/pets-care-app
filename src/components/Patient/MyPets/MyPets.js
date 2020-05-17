import React, { useState } from "react";
import "./MyPets.css";
import DashboardContainer from "../../Containers/DashboardContaine/DashboardContainer";
import ModalWindow from "../../Containers/ModalWindow/ModalWindow";
import { Button } from "../../Inputs/Buttons";
import AddPetForm from "./AddPetForm/AddPetForm";
import PetItem from "./PetsList/PetItem/PetItem";
import { pets } from "./pets-mock";

const MyPets = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [newPets, setNewPets] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const onPetAdd = (newPet) => {
    console.log(newPet);
    setNewPets([...newPets, newPet]);
    hideModal();
  };

  return (
    <DashboardContainer header="My pets">
      <ModalWindow
        header="Add new pet"
        show={showModal}
        handleClose={hideModal}
      >
        <AddPetForm onPetAdd={onPetAdd} />
      </ModalWindow>
      <div className="pets-list-container flex-centered container">
        <div className="pets-list scroll full-width">
          {pets ? (
            pets.map((pet) => <PetItem pet={pet} />)
          ) : (
            <p className="grey-text">You have no pets yet</p>
          )}
          {newPets.length > 0
            ? newPets.map((pet) => <PetItem pet={pet} />)
            : null}
        </div>
        <Button onClick={openModal} class="green-bg" text="Add pet" />
      </div>
    </DashboardContainer>
  );
};

export default MyPets;
