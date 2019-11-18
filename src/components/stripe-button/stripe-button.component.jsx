import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_loSAUFN13BJfnSqpxX1LnWBb00t0Yxvgs4';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful')
  }

  return (
      <StripeCheckout 
        label='Pay Now'
        name='Baz Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Cuz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
  )
}

export default StripeCheckoutButton;
