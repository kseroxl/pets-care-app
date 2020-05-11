import React from "react";
import Logout from "../../Logout/Logout";
import { clientService } from "../../../__services/client.service";
import DashboardContainer from "../../Containers/DashboardContaine/DashboardContainer";
import { Input } from "../../Inputs/Inputs";
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
          className="full-width search-bar"
          icon="search.svg"
        />
        <table className="list-of-clients">
          <thead>
            <tr>
              <th>Name and surname</th>
              <th>Email</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.clientList
              ? this.state.clientList.map((client) => {
                  return (
                    <tr key={client.id}>
                      <td>
                        {client.name} {client.surname}
                      </td>
                      <td>{client.email}</td>
                      <td>{client.phone}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </DashboardContainer>
    );
  }
}

export default ClientList;
