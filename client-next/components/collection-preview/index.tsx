import { useRouter } from 'next/navigation';
import CollectionItem from '../collection-item';
import type { Value } from '@/utils/types';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './styles';

type CollectionPreviewProps = {
  items: Value['items'];
  title: Value['title'];
  routeName: Value['routeName'];
};

function CollectionPreview({
  items,
  title,
  routeName,
}: CollectionPreviewProps) {
  const router = useRouter();
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => router.push(`shop/${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}

export default CollectionPreview;
