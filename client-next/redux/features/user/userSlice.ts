import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/utils/types';
import { FirebaseError } from 'firebase/app';


FirebaseError
type State = {
  currentUser: User | null;
  error: string | undefined;
};

const initialState: State = {
  currentUser: null,
  error: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSuccess(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
      state.error = undefined;
    },
    userFailure(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
    logout(state) {
      state.currentUser = null;
      state.error = undefined;
    },
  },
});

export const { userSuccess, userFailure, logout } = userSlice.actions;
export default userSlice.reducer;
