'use client';
import { useRouter } from 'next/navigation';
import type { Category } from '@/redux/features/category/categorySlice';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './styles';

type MenuItemsProps = Omit<Category, 'id'>;

function MenuItems({ title, imageUrl, size, linkUrl }: MenuItemsProps) {
  const router = useRouter();
  return (
    <MenuItemContainer size={size} onClick={() => router.push(linkUrl)}>
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default MenuItems;
