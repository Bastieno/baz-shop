import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './styles';

function CartIcon({
  itemCount,
  toggleCartHidden,
}: {
  itemCount: number;
  toggleCartHidden: () => void;
}) {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer> {itemCount} </ItemCountContainer>
    </CartIconContainer>
  );
}

export default CartIcon;
