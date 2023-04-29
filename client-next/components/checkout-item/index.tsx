import React from 'react';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './styles';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '@/redux/features/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { CartItem } from '@/utils/types';

function CheckoutItem({ cartItem }: { cartItem: CartItem }) {
  const dispatch = useAppDispatch();
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => dispatch(removeItemFromCart(cartItem))}>
          &#10094;
        </div>
        <span>{quantity}</span>
        <div onClick={() => dispatch(addItemToCart(cartItem))}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
