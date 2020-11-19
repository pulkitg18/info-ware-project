import { KeyboardArrowLeft } from "@material-ui/icons";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_TOTALS } from "../reduxActions/actions";
import BtmNav from "./BtmNav";
import CartItem from "./CartItem";
import Footer from "./Footer";

const CartContainer = ({ cart = [], amount, dispatch }) => {
  function refresh() {
    window.location.reload();
  }

  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  });
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header className="empty-cart">
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
          <button onClick={refresh} className="btn">
            Add Items
          </button>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <KeyboardArrowLeft className="left-icon" />
      </header>
      <div className="item_wraperr">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}

        <Footer amount={amount} />
      </div>
      <BtmNav />
    </section>
  );
};

const mapStateToProps = (store) => {
  return { cart: store.cart, amount: store.total };
};
export default connect(mapStateToProps)(CartContainer);
