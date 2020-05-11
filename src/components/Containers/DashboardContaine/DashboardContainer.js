import React from "react";
import { useLocation } from "react-router-dom";
import LogOut from "../../Logout/Logout";
import { HomeButton } from "../../Inputs/Buttons";

const DashboardContainer = (props) => {
  const location = useLocation();
  return (
    <div className="full-screen white-bg">
      <div className="dashboard-page-header">
        {props.header && <h1>{props.header}</h1>}
      </div>
      {location.pathname !== "/" && <HomeButton />}
      <div className={`${location.pathname !== "/" ? "lower" : ""} container`}>
        {props.children}
      </div>
      <LogOut />
    </div>
  );
};

export default DashboardContainer;
