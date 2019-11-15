import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.styles.scss';
import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div onClick={() => removeItem(cartItem)} className="arrow">&#10094;</div> 
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div> 
      </span>
      <span className="price"> {price} </span>
      <div onClick={() => clearItem(cartItem)} className="remove-button">&#10005;</div>

    </div>
  )
}

const mapDispatchTToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItemToCart(item)),
})

export default connect(null, mapDispatchTToProps)(CheckoutItem);