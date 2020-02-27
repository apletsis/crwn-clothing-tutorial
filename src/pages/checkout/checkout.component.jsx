import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const renderHeaderBlock = () => {

  const headerTitles = [
    "Product",
    "Description",
    "Quantity",
    "Price",
    "Remove"
  ];

  return headerTitles.map((title, index) => {
    return (
      <div className="header-block" key={index}>
        <span>{title}</span>
      </div>
    );
  });
};

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">{renderHeaderBlock()}</div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      Total: ${total}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
