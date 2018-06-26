import React, { Component } from "react";
import { auth } from "../../firebase/firebase";

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };
  newUser = e => {
    auth.newCreateUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    );
  };
  render() {
    return (
      <div>
        <h2>Create an Account</h2>
        <form>
          <input type="text" />
        </form>
      </div>
    );
  }
}
export default SignUp;