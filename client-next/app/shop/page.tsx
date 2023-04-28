'use client';

import CollectionPreview from '@/components/collection-preview';
import Header from '@/components/header';

import { convertCollectionsMapToArray } from '@/utils/firebase';

import { useAppSelector } from '@/redux/hooks';

function Shop() {
  const collectionsMap = useAppSelector(
    (state) => state.collections.collectionsMap
  );

  const collections = convertCollectionsMapToArray(collectionsMap);

  return (
    <>
      <Header />
      <div className='px-10 py-5'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    </>
  );
}

export default Shop;
