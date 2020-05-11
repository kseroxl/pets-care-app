import React from "react";
import { Route } from "react-router-dom";
import Login from "../../components/PublicComponents/Login/Login";
import SignUp from "../../components/PublicComponents/SignUp/SignUp";
import WelcomeView from "../../components/WelcomeView/WelcomeView";

const PublicRoutes = (props) => {
  return (
    <div>
      <Route
        exact
        path={`${props.match.path}`}
        render={() => <WelcomeView />}
      />
      <Route path={`${props.match.path}login`} render={() => <Login />} />
      <Route path={`${props.match.path}signup`} render={() => <SignUp />} />
    </div>
  );
};

export default PublicRoutes;
