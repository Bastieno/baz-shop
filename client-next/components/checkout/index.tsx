import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import CheckoutItem from '../checkout-item';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  CheckoutBodyContainer,
  StyledLink,
} from './styles';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import CheckoutButton from '../checkout-button';
import CustomButton from '../custom-button';
import { clearCart } from '@/redux/features/cart/cartSlice';

function Checkout() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const total = useMemo(() => {
    return cartItems.reduce(
      (acc, { quantity, price }) => acc + quantity * price,
      0
    );
  }, [cartItems]);

  const searchParams = useSearchParams();
  const isCheckoutCanceled = searchParams.get('canceled');
  const isCheckoutSuccessful = searchParams.get('success');

  useEffect(() => {
    if (isCheckoutCanceled) {
      alert(
        'Order canceled -- continue to shop around and checkout when you are ready.'
      );
    }
  }, [isCheckoutCanceled]);

  useEffect(() => {
    if (isCheckoutSuccessful) {
      dispatch(clearCart());
    }
  }, [isCheckoutSuccessful]);

  if (isCheckoutSuccessful) {
    return (
      <div className='w-[100%] h-[70vh] flex flex-col items-center justify-center'>
        <p className='mb-5 text-green-900'>
          Order placed! You will receive an email confirmation.
        </p>
        <p className='mb-5'>
          You can continue to shop around by using the button below.
        </p>
        <StyledLink href='/shop'>Go to Shop</StyledLink>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className='w-[100%] h-[70vh] flex flex-col items-center justify-center'>
        <p className='mb-5'>No items in cart. Go to shop to add items</p>
        <StyledLink href='/shop'>Go to Shop</StyledLink>
      </div>
    );
  }

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      <CheckoutBodyContainer>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CheckoutBodyContainer>
      <TotalContainer>Total: ${total}</TotalContainer>
      <div className='flex justify-between items-center w-[100%]'>
        <div>
          <CustomButton
            type='button'
            inverted
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </CustomButton>
        </div>
        <div>
          <CheckoutButton />
        </div>
      </div>
    </CheckoutPageContainer>
  );
}

export default Checkout;
