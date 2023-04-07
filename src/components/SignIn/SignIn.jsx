import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";
// import { signInWithGoogle } from "../Firebase/Firebase.utils";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  signInWithGoogle = (e) => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  render() {
    return (
      <div className="signIn">
        <h2>I already have an account</h2>
        <span> Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" children="submit form" />
            <CustomButton
              isGoogleSignIn
              onClick={this.signInWithGoogle}
              children="sign in with google"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
