import React from "react";
import { Route } from "react-router-dom";
import Login from "../../components/PublicComponents/Login/Login";

const PublicRoutes = (props) => {
  return (
    <div>
      <Route path={`${props.match.path}`} render={() => <Login />} />
    </div>
  );
};

export default PublicRoutes;
