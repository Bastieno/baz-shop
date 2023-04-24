import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '@/redux/features/category/categorySlice'
import userReducer from '@/redux/features/user/userSlice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    user: userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
