import {
  AccountCircleOutlined,
  RestaurantMenuSharp,
  Scanner,
  ShoppingBasket,
  StarBorder,
} from "@material-ui/icons";
import React from "react";

function BtmNav() {
  return (
    <div className="btm-nav">
      <div className="icons">
        <RestaurantMenuSharp className="btm-icon" />
        Restaurant
      </div>

      <div className="icons">
        <Scanner className="btm-icon" />
        Products
      </div>
      <div className="icons">
        <StarBorder className="btm-icon" />
        Influencers
      </div>
      <div className="icons">
        <ShoppingBasket className="btm-icon" />
        Cart
      </div>
      <div className="icons">
        <AccountCircleOutlined className="btm-icon" />
        Account
      </div>
    </div>
  );
}

export default BtmNav;
