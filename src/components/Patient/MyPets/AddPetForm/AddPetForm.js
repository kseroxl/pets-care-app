import React, { useState } from "react";
import { Input, Select } from "../../../Inputs/Inputs";
import { Button } from "../../../Inputs/Buttons";
import { pets } from "../../../../config/lists.config";
import { AuthConsumer } from "../../../../authContext";
import { clientService } from "../../../../__services/client.service";

const AddPetForm = (props) => {
  const [newPet, setNewPet] = useState({});
  const [error, setError] = useState("");

  const validateData = () => {
    if (!newPet.species || !newPet.birthday) {
      setError("Please fill in pet's species and date of birth");
      return false;
    }
    return true;
  };
  const handleChange = (property, value) => {
    setError("");
    setNewPet({ ...newPet, [property]: value });
  };
  const onAddPet = (e, ownerId) => {
    e.preventDefault();
    if (validateData()) {
      //clientService.addPet({ ...newPet, ownerId: ownerId }).then((response) => {
      props.onPetAdd(newPet);
      //});
    }
  };
  return (
    <AuthConsumer>
      {({ user }) => (
        <div className="add-new-pet-form flex-centered">
          <form className="sign-up-form">
            {error && (
              <p style={{ top: "20%", width: "60%" }} className="error-message">
                {error}
              </p>
            )}
            <Select
              onChange={handleChange}
              className="full-width"
              icon="arrow-down.svg"
              options={pets}
              id="species"
            />
            <Input
              type="text"
              placeholder="Pet's name"
              className="full-width"
              id="name"
              onChange={(e) => handleChange(e.target.id, e.target.value)}
            />
            <Input
              type="text"
              placeholder="Date of birth"
              className="full-width"
              icon="date.svg"
              id="birthday"
              onChange={(e) => handleChange(e.target.id, e.target.value)}
            />
            <Input
              type="text"
              placeholder="Date of death"
              className="full-width"
              icon="date.svg"
              id="death"
              onChange={(e) => handleChange(e.target.id, e.target.value)}
            />
            <Button
              onClick={(e) => onAddPet(e, user.id)}
              text="Add"
              class="span-2 green-bg"
            />
          </form>
        </div>
      )}
    </AuthConsumer>
  );
};

export default AddPetForm;
