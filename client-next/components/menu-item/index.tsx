'use client';
import type { Category } from '@/redux/features/category/categorySlice';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './styles';

type MenuItemsProps = Omit<Category, 'id'>

function MenuItems({ title, imageUrl, size }: MenuItemsProps) {
  return (
    <MenuItemContainer size={size}>
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
