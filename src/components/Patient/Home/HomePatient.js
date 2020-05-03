import React from "react";
import Logout from "../../Logout/Logout";
import DashboardContainer from "../../Containers/DashboardContaine/DashboardContainer";

function HomePatient() {
  return (
    <DashboardContainer header="Home">
      <h1 style={{ textAlign: "center" }}>Patient Home</h1>
      <Logout />
    </DashboardContainer>
  );
}

export default HomePatient;
