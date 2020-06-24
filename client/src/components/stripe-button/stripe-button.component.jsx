import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import logo from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_ODoph7uCr3kqm68ObEeurqLN00VDynVPpa";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    }).then(res => {
      alert("Payment successfull");
    }).catch(error => {
      console.error("Payment error: " + JSON.parse(error));
      alert(
        "Something's wrong with your payment. Please sure you use provided credit card"
      );
    })
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
