import { createSlice } from '@reduxjs/toolkit';
import categories from './data';

export type Category = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
};

type CategoryState = Category[];

const initialState: CategoryState = categories;

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    get(state) {
      state;
    },
  },
});

export const { get } = categorySlice.actions;
export default categorySlice.reducer;
