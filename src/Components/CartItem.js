import React from "react";

import WhatshotIcon from "@material-ui/icons/Whatshot";
import { Add, Remove } from "@material-ui/icons";
import { connect } from "react-redux";
import { DECREASE, INCREASE, REMOVE } from "../reduxActions/actions";
const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  increase,
  decrease,
}) => {
  return (
    <article className="cart-item">
      <img className="cart_image" src={img} alt={title} />
      <div>
        <h4 className="title">{title}</h4>
        <div className="text_content">
          <div className="calories">
            <WhatshotIcon className=" colories-icon" />
            <h4 className="item-price calories">1002 Cal</h4>
          </div>
          <h4 className="item-price main-price">${price}</h4>
        </div>
      </div>
      <div className="increase-amount">
        <button className="amount-btn" onClick={() => increase()}>
          <Add className="inc-btn" />
        </button>
        <div className="amount-1">
          <p className="amount">{amount}</p>
        </div>
        <button className="amount-btn" onClick={() => decrease()}>
          <Remove className="inc-btn" />
        </button>
      </div>
      <button className="remove-btn" onClick={() => remove()}>
        remove
      </button>
    </article>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id, amount } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
