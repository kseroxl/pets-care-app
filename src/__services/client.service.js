import { signUpAPI, addPetAPI } from "../config/api";

const getClients = () => {
  const headers = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
  };
  return fetch(signUpAPI, headers);
};

const addPet = (newPet) => {
  const headers = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPet),
  };
  return fetch(addPetAPI, headers);
};

export const clientService = {
  getClients,
  addPet,
};
