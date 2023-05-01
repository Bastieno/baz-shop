export type Key = 'hats' | 'jackets' | 'mens' | 'sneakers' | 'womens';
export type Value = {
  id: string;
  routeName: string;
  title: string;
  items: Array<{
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    priceId: string;
  }>;
};

export type Item = Value['items'][0];

export type CartItem = Item & {
  quantity: number;
};

export type CollectionMap = {
  [x in Key]: Value;
};

export type User = {
  id: string;
  displayName: string | null;
  email: string;
};
