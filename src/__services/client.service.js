import { signUpAPI } from "../config/api";

const getClients = () => {
  const headers = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
  };
  return fetch(signUpAPI, headers);
};

export const clientService = {
  getClients,
};
