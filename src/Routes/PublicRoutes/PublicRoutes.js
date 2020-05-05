import React from "react";
import { Route } from "react-router-dom";
import Login from "../../components/PublicComponents/Login/Login";
import SignUp from "../../components/PublicComponents/SignUp/SignUp";

const PublicRoutes = (props) => {
  return (
    <div>
      <Route exact path={`${props.match.path}`} render={() => <Login />} />
      <Route path={`${props.match.path}signup`} render={() => <SignUp />} />
    </div>
  );
};

export default PublicRoutes;
