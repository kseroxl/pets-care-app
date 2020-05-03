import React from "react";
import Logout from "../../Logout/Logout";

const ClientList = (props) => {
  return (
    <div>
      <ul>
        <li>Sam</li>
        <li>Kate</li>
        <li>Mark</li>
      </ul>
      <Logout />
    </div>
  );
};

export default ClientList;
