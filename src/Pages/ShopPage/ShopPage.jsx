import React, { Component } from "react";
import SHOP_DATA from "./2.2 shop.data.js";
import "./ShopPage.scss";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.jsx";

export default class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const collections = this.state.collection;
    return (
      <div className="shopPage">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
