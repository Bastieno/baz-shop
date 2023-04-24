import CartItem from '../cart-item';
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './styles';

const cartItems = [
  {
    price: 220,
    name: 'Adidas NMD',
    imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
    id: 10,
    quantity: 2,
  },
  {
    name: 'Adidas Yeezy',
    imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
    price: 280,
    id: 11,
    quantity: 2,
  },
  {
    price: 110,
    name: 'Black Converse',
    imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
    id: 12,
    quantity: 2,
  },
  {
    price: 160,
    name: 'Nike White AirForce',
    imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
    id: 13,
    quantity: 2,
  },
  {
    name: 'Nike Red High Tops',
    id: 14,
    imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
    price: 160,
    quantity: 2,
  },
  {
    imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
    id: 15,
    price: 160,
    name: 'Nike Brown High Tops',
    quantity: 2,
  },
  {
    price: 190,
    imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
    id: 16,
    name: 'Air Jordan Limited',
    quantity: 2,
  },
  {
    imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
    price: 200,
    id: 17,
    name: 'Timberlands',
    quantity: 2,
  },
];

function CartDropdown() {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer> Your cart is empty </EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
