import React from "react";
import "./CollectionItem.scss";

const CollectionItem = ({ imageUrl, name, price }) => (
  <div className="collectionItem">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collectionFooter">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
  </div>
);

export default CollectionItem;
