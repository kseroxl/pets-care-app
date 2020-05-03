import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import history from "../../util/history";
import { authenticationService } from "../../__services/authentication.service";

import PublicRoutes from "../../Routes/PublicRoutes/PublicRoutes";
import PrivateRoutes from "../../Routes/PrivateRoutes/PrivateRoutes";
import Auth from "../Auth/Auth";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      loading: true,
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({
        currentUser: x,
      })
    );
  }

  updateRole = (role) => {
    console.log("update");
    this.setState({
      currentUser: role,
    });
  };

  render() {
    const role = this.state.currentUser;
    return (
      <Auth updateRole={this.updateRole}>
        <BrowserRouter history={history}>
          <Switch>
            {role ? (
              <Route
                path="/"
                render={(props) => <PrivateRoutes {...props} role={role} />}
              />
            ) : (
              <Route path="/" render={(props) => <PublicRoutes {...props} />} />
            )}
          </Switch>
        </BrowserRouter>
      </Auth>
    );
  }
}

export default App;
