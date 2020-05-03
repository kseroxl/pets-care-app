import React, { Component } from "react";
import { AuthProvider } from "../../authContext";
import { authenticationService } from "../../__services/authentication.service";

class Auth extends Component {
  state = {
    authenticated: false,
    user: {
      role: "visitor",
    },
    accessToken: "",
  };

  initiateLogin = (email, password) => {
    if (email !== "doctor" && email !== "patient") return;
    authenticationService.login(email);
    const user = this.state.user;
    user.role = email;
    this.setState({
      user: user,
    });
    this.props.updateRole(email);
  };

  logout = () => {
    authenticationService.logout();
    const user = this.state.user;
    user.role = null;
    this.setState({
      user: user,
    });
    this.props.updateRole(null);
  };

  handleAuthentication = () => {
    //this.setSession()
  };

  setSession(data) {
    const user = {
      id: data.sub,
      email: data.email,
      role: data.role,
    };
    this.setState({
      authenticated: true,
      accessToken: data.accessToken,
      user,
    });
  }

  render() {
    const authProviderValue = {
      ...this.state,
      initiateLogin: this.initiateLogin,
      handleAuthentication: this.handleAuthentication,
      logout: this.logout,
    };
    return (
      <AuthProvider value={authProviderValue}>
        {this.props.children}
      </AuthProvider>
    );
  }
}

export default Auth;
