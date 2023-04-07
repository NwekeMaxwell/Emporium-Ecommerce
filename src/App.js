import React from "react";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import SignInOrUp from "./Pages/SignInOrUpPage/SignInOrUp";

import { auth } from "./components/Firebase/Firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  currentUser = () =>
    onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  // unsubscribeFromAuth = () => null;

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStatechanged((user) => {
  //     this.setState({ currentUser: user });

  //     console.log(user);
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
  // <HeaderComponent currentUser={this.state.currentUser} />

  render() {
    return (
      <div>
        <HeaderComponent />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/shop" Component={ShopPage} />
          <Route path="/signin" Component={SignInOrUp} />
        </Routes>
      </div>
    );
  }
}

export default App;
