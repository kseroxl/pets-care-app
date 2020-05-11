import React from "react";

import { clientService } from "../../../__services/client.service";
import DashboardContainer from "../../Containers/DashboardContaine/DashboardContainer";
import { Input } from "../../Inputs/Inputs";
import ClientItem from "./ClientItem/ClientItem";
import "./ClientList.css";

class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientList: [],
    };
  }
  componentDidMount() {
    clientService
      .getClients()
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          clientList: json,
        });
      });
  }

  render() {
    return (
      <DashboardContainer header="List of patients">
        <Input
          type="text"
          placeholder="Enter name or surname"
          className="full-width"
          icon="search.svg"
        />
        {this.state.clientList.length &&
          this.state.clientList.map((client, index) => {
            return <ClientItem key={index} client={client} />;
          })}
      </DashboardContainer>
    );
  }
}

export default ClientList;
