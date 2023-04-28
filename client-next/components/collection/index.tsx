import React from 'react';
import type { Value } from '@/utils/types';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './styles';
import CollectionItem from '../collection-item';

type CollectionProps = {
  collection: Value;
};

function Collection({ collection }: CollectionProps) {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
}

export default Collection;
