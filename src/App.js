import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import { auth } from "./firebase/firebase";
import { userSignOut } from "./firebase/auth";
class App extends Component {
  signingOut = () => {
    userSignOut()
      .then(() => this.props.history.push("/"))
      .catch(console.log);
  };
  render() {
    return (
      <div className="App">
        <Header userSignOut={this.signingOut} />
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
