import React from "react";
import { Link } from "react-router-dom";
import DashboardContainer from "../../Containers/DashboardContaine/DashboardContainer";

function HomeDoctor() {
  return (
    <DashboardContainer header="Home">
      <div
        className="flex-center"
        style={{ flexDirection: "column", width: "100%", textAlign: "center" }}
      >
        <h1>Doctor Home</h1>
        <button>
          <Link to="/clients">See clients list</Link>
        </button>
      </div>
    </DashboardContainer>
  );
}

export default HomeDoctor;
