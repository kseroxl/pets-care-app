import React from "react";

const DashboardContainer = (props) => {
  return (
    <div className="full-screen white-bg">
      <div className="dashboard-page-header">
        {props.header && <h1>{props.header}</h1>}
      </div>
      {props.children}
    </div>
  );
};

export default DashboardContainer;
