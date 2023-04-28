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
  }>;
};

export type CollectionMap = {
  [x in Key]: Value;
};