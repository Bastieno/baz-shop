import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '@/redux/features/category/categorySlice'

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
