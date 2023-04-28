'use client';

import { useAppSelector } from '@/redux/hooks';
import Collection from '@/components/collection';
import Header from '@/components/header';
import type { Key } from '@/utils/types';

type SectionPageProps = {
  params: {
    section: Key;
  };
};

function SectionPage({ params: { section } }: SectionPageProps) {
  const collectionsMap = useAppSelector(
    (state) => state.collections.collectionsMap
  );
  const collection = collectionsMap?.[section];

  if (!collection) return null;

  return (
    <>
      <Header />
      <Collection collection={collection} />
    </>
  );
}

export default SectionPage;
