import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherprops }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "googleSignIn" : ""} customButton`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;
