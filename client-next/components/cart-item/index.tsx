import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './styles';

type CartItemProps = {
  item: {
    id: string | number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  };
};

function CartItem({
  item: { name, price, imageUrl, quantity },
}: CartItemProps) {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <span> {name} </span>
        <span>
          {' '}
          {quantity} x ${price}{' '}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;
