import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/utils/types';

type State = {
  currentUser: User | null;
  error: string | null;
};

const initialState: State = {
  currentUser: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSuccess(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
      state.error = null;
    },
    userFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    logout(state) {
      state.currentUser = null;
      state.error = null;
    },
  },
});

export const { userSuccess, userFailure, logout } = userSlice.actions;
export default userSlice.reducer;
