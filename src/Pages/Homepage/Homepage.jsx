import React from "react";
import Directory from "../../components/Directory/Directory";
import "./Homepage.scss";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
      <Outlet />
    </div>
  );
};

export default Homepage;
