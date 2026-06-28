import { Product } from '@/services/fakestoreapi';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = Product & { quantity: number };

type StateType = {
  cart: CartItem[];
};
const initialState: StateType = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exisiting = state.cart.find((item) => item.id == action.payload.id);
      if (exisiting) {
        exisiting.quantity += 1;
      } else {
        const newCartItem = {
          ...action.payload,
          quantity: 1,
        };
        state.cart.push(newCartItem);
      }
    },

    removeFromCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index != -1) {
        state.cart.splice(index, 1);
      }
    },

    incrementQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const item = state.cart.find((item) => item.id === productId);
      if (item && item.quantity) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const item = state.cart.find((item) => item.id === productId);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
});
