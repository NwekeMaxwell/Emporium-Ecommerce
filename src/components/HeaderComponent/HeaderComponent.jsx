import React from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.scss";
import { ReactComponent as Logo } from "./crown.svg";
import { auth } from "../Firebase/Firebase.utils";
import { connect } from "react-redux";

const HeaderComponent = ({ currentUser }) => (
  <div className="header">
    <Link className="logoContainer" to="/">
      <Logo />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          {" "}
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(HeaderComponent);
