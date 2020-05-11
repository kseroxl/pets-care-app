import React from "react";
import { Input, Select } from "../../../Inputs/Inputs";
import { Button } from "../../../Inputs/Buttons";
import { pets } from "../../../../config/lists.config";

const AddPetForm = () => {
  return (
    <div className="add-new-pet-form flex-centered">
      <form className="sign-up-form">
        <Select
          onChange=""
          className="full-width"
          icon="arrow-down.svg"
          options={pets}
          id="pets"
        />
        <Input type="text" placeholder="Pet's name" className="full-width" />
        <Input
          type="text"
          placeholder="Date of birth"
          className="full-width"
          icon="date.svg"
        />
        <Input
          type="text"
          placeholder="Date of death"
          className="full-width"
          icon="date.svg"
        />
        <Button text="Add" class="span-2 green-bg" />
      </form>
    </div>
  );
};

export default AddPetForm;
