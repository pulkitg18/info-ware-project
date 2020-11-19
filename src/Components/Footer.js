import { Remove } from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";
import { CLEAR_CART } from "../reduxActions/actions";

function Footer({ amount, dispatch }) {
  const finalAmount = amount + 1;

  const checkoutAlert = () => {
    alert(`You have succesfully made a payment of $${finalAmount}`);
  };
  return (
    <div className="footer">
      <p className="footer-text">Add a note</p>
      <textarea
        className="footer-input"
        placeholder="Let us know any additional request"
      />

      <div className="cart-total">
        <h4 className="normal-text">
          Cart Total <span>${amount}</span>
        </h4>
        <h4 className="normal-text">
          Delivery Charges <span>$1</span>
        </h4>
        <h4>
          total <span>${finalAmount}</span>
        </h4>
      </div>
      <div className="buttons">
        <button className="add" onClick={() => dispatch({ type: CLEAR_CART })}>
          <Remove className="add-btn" />
          Empty Cart
        </button>
        <button className="btn clear-btn" onClick={checkoutAlert}>
          Check Out
        </button>
      </div>
    </div>
  );
}

export default connect()(Footer);
