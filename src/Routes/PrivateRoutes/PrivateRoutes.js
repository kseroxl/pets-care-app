import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as Routes from "../index";
import rolesConfig from "../../config/pages.config";

const PrivateRoutes = (props) => {
  let allowedRoutes = rolesConfig[props.role]
    ? rolesConfig[props.role].routes
    : [];
  return (
    <div>
      <section>
        <div>
          {allowedRoutes.map(({ url, component, exact }) => (
            <Route
              key={component}
              path={`${props.match.path}${url}`}
              component={Routes[component]}
              exact={exact}
            />
          ))}
          <Route exact path="/login">
            <Redirect from="login" to="/" />
          </Route>
          <Route exact path="/signup">
            <Redirect from="signup" to="/" />
          </Route>
        </div>
      </section>
    </div>
  );
};

export default PrivateRoutes;
