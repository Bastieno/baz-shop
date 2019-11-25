import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchTToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchTToProps)(CheckoutItem);