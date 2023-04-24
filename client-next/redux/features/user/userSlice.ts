import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSuccess(state, action) {
      state.currentUser = action.payload;
      state.error = null;
    },
    userFailure(state, action) {
      state.error = action.payload
    },
    logout(state) {
      state.currentUser = null;
      state.error = null;
    }
  }
})

export const { userSuccess, userFailure, logout } = userSlice.actions;
export default userSlice.reducer;
