'use client';

import Header from '@/components/header';
import MenuItem from '@/components/menu-item';
import { useAppSelector } from '@/redux/hooks';

export default function Home() {
  const categories = useAppSelector(state => state.categories);
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex flex-wrap justify-between w-[100%] p-5'>
        {
          categories.map(({ id, ...otherProps }) => (
            <MenuItem key={id } {...otherProps} />
          ))
        }
      </div>
    </div>
  );
}
