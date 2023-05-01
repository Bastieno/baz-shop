'use client';

import { useEffect } from 'react';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import { useAppDispatch } from '@/redux/hooks';
import { convertCollectionsSnapshotToMap, db } from '@/utils/firebase';
import {
  onError,
  saveCollections,
} from '@/redux/features/collections/collectionSlice';

function ShopLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const [collectionSnapshot, loading, error] = useCollection(
    collection(db, 'collections')
  );

  const collectionsMap = convertCollectionsSnapshotToMap(collectionSnapshot);

  useEffect(() => {
    if (collectionsMap) {
      dispatch(saveCollections(collectionsMap));
    }
    if (error) {
      dispatch(onError(error));
    }
  }, [collectionsMap]);

  if (loading) {
    return (
      <div className='w-[100%] h-screen flex items-center justify-center'>
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}

export default ShopLayout;
