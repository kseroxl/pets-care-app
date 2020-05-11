import React, { Component } from "react";
import { AuthProvider } from "../../authContext";
import { authenticationService } from "../../__services/authentication.service";

class Auth extends Component {
  state = {
    authenticated: false,
    user: {
      role: null,
      id: null,
    },
    accessToken: "",
  };

  initiateLogin = (email, password) => {
    console.log(email);
    if (email !== "doctor" && email !== "patient") return;
    authenticationService.login(email);
    const user = this.state.user;
    user.role = email;
    user.id = 1;
    this.setState({
      user: user,
    });
    this.props.updateRole(email);
  };

  initiateSignUp = (newUser) => {
    console.log(newUser);
    authenticationService.signUp(newUser);
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
      initiateSignUp: this.initiateSignUp,
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
