import type { CollectionMap } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = {
  collectionsMap: CollectionMap | undefined;
  error: string | undefined;
};

const initialState: State = {
  collectionsMap: undefined,
  error: undefined,
};

const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    saveCollections(state, action: PayloadAction<CollectionMap>) {
      state.collectionsMap = action.payload;
      state.error = undefined;
    },
    onError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { saveCollections, onError } = collectionsSlice.actions;
export default collectionsSlice.reducer;
