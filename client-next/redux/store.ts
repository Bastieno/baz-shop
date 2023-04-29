import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '@/redux/features/category/categorySlice';
import userReducer from '@/redux/features/user/userSlice';
import collectionsReducer from '@/redux/features/collections/collectionSlice';
import cartReducer from '@/redux/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    user: userReducer,
    collections: collectionsReducer,
    cart: cartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
