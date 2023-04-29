import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { CartItem, Item } from '@/utils/types';

type State = {
  cartItems: CartItem[];
};

const initialState: State = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<Item>) {
      const cartItemToAdd = action.payload;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
      );
      if (existingCartItem) {
        existingCartItem.quantity++;
      } else {
        state.cartItems.push({
          ...cartItemToAdd,
          quantity: 1,
        });
      }
    },
    removeItemFromCart(state, action: PayloadAction<Item>) {
      const cartItemToRemove = action.payload;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
      );

      if (existingCartItem && existingCartItem?.quantity > 1) {
        existingCartItem.quantity -= 1;
      }

      if (existingCartItem?.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== cartItemToRemove.id
        );
      }
    },
    clearItemFromCart(state, action: PayloadAction<Item>) {
      const cartItemToClear = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToClear.id
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
