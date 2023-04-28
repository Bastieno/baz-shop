import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './styles';

type Item = {
  name: string;
  imageUrl: string;
  price: number;
};

type CollectionItemProps<Item> = {
  item: Item;
  addItem?: (item: Item) => void;
};

function CollectionItem({ item, addItem }: CollectionItemProps<Item>) {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{`$${price}`}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => {}} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
}

export default CollectionItem;
