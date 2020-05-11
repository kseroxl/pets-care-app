import React from "react";
import Logout from "../../Logout/Logout";
import DashboardContainer from "../../Containers/DashboardContaine/DashboardContainer";
import Sections from "./Sections/Sections";

function HomePatient() {
  return (
    <DashboardContainer header="Home">
      <Sections />
    </DashboardContainer>
  );
}

export default HomePatient;
