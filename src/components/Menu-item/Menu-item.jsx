import React from "react";
import "./Menu-item.scss";
import { Link } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Link to="/shop" className="content">
        <h1 className="title"> {title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </Link>
    </div>
  </div>
);

export default MenuItem;
