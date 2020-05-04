import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as Routes from "../index";
import rolesConfig from "../../config/pages.config";

const PrivateRoutes = (props) => {
  console.log(props);
  let allowedRoutes = rolesConfig[props.role]
    ? rolesConfig[props.role].routes
    : [];
  return (
    <div>
      <section>
        <div>
          {allowedRoutes.map(({ url, component }) => (
            <Route
              key={component}
              path={`${props.match.path}${url}`}
              component={Routes[component]}
            />
          ))}
          <Redirect from="signup" to="/" />
        </div>
      </section>
    </div>
  );
};

export default PrivateRoutes;
