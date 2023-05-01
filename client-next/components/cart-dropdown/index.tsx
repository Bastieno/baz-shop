import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import CartItem from '../cart-item';
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './styles';

function CartDropdown() {
  const router = useRouter();
  const cartItems = useAppSelector(state => state.cart.cartItems);
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
          router.push('/checkout')
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
