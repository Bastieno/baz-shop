import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_loSAUFN13BJfnSqpxX1LnWBb00t0Yxvgs4';

  const onToken = token => {
    axios({
      url: 'http://localhost:5000/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then( response => {
      alert('Payment successful');
    }).catch( error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('Payment failed. Please make sure you are entering the correct details')
    })
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
