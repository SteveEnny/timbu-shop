import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalCartItem: 0,
  subTotalPrice: 0,
  totalPrice: 0,
  delivery: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
      state.totalCartItem = state.totalCartItem + 1;
      state.subTotalPrice += action.payload.price;
      state.totalPrice += action.payload.price;
    },
    removeItem(state, action) {
      console.log(action.payload);
      state.cart = state.cart.filter(
        (itemId) => itemId.id !== action.payload.id
      );
      state.totalCartItem -= action.payload.quantity;
    },
    incItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      state.totalCartItem = state.totalCartItem + 1;
      state.subTotalPrice += item.price;
      state.totalPrice += item.price;
      //   item.totalPrice = item.quantity * item.unitPrice;
    },
    decItem(state, action) {
      console.log("decinn");
      const item = state.cart.find((item) => item.id === action.payload);
      state.totalPrice -= item.price;
      state.subTotalPrice -= item.price;
      state.totalCartItem = state.totalCartItem - 1;

      if (item.quantity === 1) {
        state.cart = state.cart.filter(
          (itemId) => itemId.id !== action.payload
        );
      }
      item.quantity--;
    },

    addDeliveryPrice(state, action) {
      console.log(action.payload);
      state.totalPrice += action.payload;
      state.delivery += action.payload;
    },
    clearCart(state, action) {
      state.cart = [];
      state.totalCartItem = 0;
      state.subTotalPrice = 0;
      state.totalPrice = 0;
      state.delivery = 0;
    },
  },
});
//
// console.log(cartSlice);

export const {
  addToCart,
  incItem,
  decItem,
  removeItem,
  clearCart,
  addDeliveryPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
