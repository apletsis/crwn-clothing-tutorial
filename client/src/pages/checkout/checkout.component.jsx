import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  CheckoutInfoWrapper,
  WarningContainer
} from "./checkout.styles";

const renderHeaderBlock = () => {
  const headerTitles = [
    "Product",
    "Description",
    "Quantity",
    "Price",
    "Remove"
  ];

  return headerTitles.map(title => {
    return (
      <HeaderBlockContainer key={title}>
        <span>{title}</span>
      </HeaderBlockContainer>
    );
  });
};

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>{renderHeaderBlock()}</CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>Total: ${total}</TotalContainer>
    <CheckoutInfoWrapper>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: any future date - CVV: Any 3 digits
      </WarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutInfoWrapper>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
