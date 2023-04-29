import { addItemToCart } from '@/redux/features/cart/cartSlice';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './styles';
import type { Item } from '@/utils/types';
import { useAppDispatch } from '@/redux/hooks';

type CollectionItemProps<Item> = {
  item: Item;
};

function CollectionItem({ item }: CollectionItemProps<Item>) {
  const dispatch = useAppDispatch();
  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{`$${price}`}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => dispatch(addItemToCart(item))} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
}

export default CollectionItem;
