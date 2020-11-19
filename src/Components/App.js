import React from "react";
import CartContainer from "./CartContainer";
import cartItems from "../data";
import { createStore } from "redux";
import reducer from "../reduxActions/reducer";
import { Provider } from "react-redux";
const initalStore = {
  cart: cartItems,
  total: 105.0,
  amount: 5,
};
const store = createStore(reducer, initalStore);

function App() {
  return (
    <Provider store={store}>
      <CartContainer />
    </Provider>
  );
}

export default App;
