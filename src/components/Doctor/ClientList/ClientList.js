import React, { useState, useEffect } from "react";

import { clientService } from "../../../__services/client.service";
import DashboardContainer from "../../Containers/DashboardContaine/DashboardContainer";
import { Input } from "../../Inputs/Inputs";
import ClientItem from "./ClientItem/ClientItem";
import "./ClientList.css";
import { clients } from "./clients-mock";

const ClientList = (props) => {
  const [clientList, setClientList] = useState([]);
  const [clientSearchList, setClientSearch] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // clientService
    //   .getClients()
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);
    //     setClientList(json);
    //   });
    setClientList(clients);
  });

  const clientSearch = (event) => {
    const toFind = event.target.value.toLowerCase();
    const [name, surname] = toFind.split(" ");
    let result = [];
    setSearch(toFind);

    clientList.forEach((client) => {
      let toAdd = false;
      if (
        name &&
        (client.name.toLowerCase().search(name) === 0 ||
          client.surname.toLowerCase().search(name) === 0)
      ) {
        toAdd = true;
        if (
          surname &&
          client.name.toLowerCase().search(surname) !== 0 &&
          client.surname.toLowerCase().search(surname) !== 0
        )
          toAdd = false;
      }
      if (toAdd) result.push(client);
    });
    setClientSearch([...new Set(result)]);
  };

  console.log(clientList);
  const list = search ? clientSearchList : clientList;
  return (
    <DashboardContainer header="List of patients">
      <Input
        type="text"
        placeholder="Enter name or surname"
        className="full-width"
        icon="search.svg"
        onChange={clientSearch}
      />
      <div className="scroll list-of-clients">
        {list &&
          list.map((client, index) => {
            return <ClientItem key={index} client={client} />;
          })}
      </div>
    </DashboardContainer>
  );
};

export default ClientList;
