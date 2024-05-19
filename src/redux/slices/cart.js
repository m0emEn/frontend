import { createSlice } from "@reduxjs/toolkit";

const calculateSubtotal = (cartState) => {
  let result = 0;
  cartState.map((item) => (result += item.qty * item.price));
  return result;
};

export const initialState = {
  loading: false,
  error: null,
  cartItems: JSON.parse(localStorage.getItem("cartItems")) ?? [],
  shipping: JSON.parse(localStorage.getItem("shipping")) ?? Number(7),
  subtotal: localStorage.getItem("cartItems")
    ? calculateSubtotal(JSON.parse(localStorage.getItem("cartItems")))
    : 0,
};

const updateLocalStorage = (cart) => {
  localStorage.setItem("cartItems", JSON.stringify(cart));
  localStorage.setItem("subtotal", JSON.stringify(calculateSubtotal(cart)));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    cartItemAdd: (state, { payload }) => {
      const existingItem = state.cartItems.find(
        (item) =>
          item.id === payload.id &&
          item.color === payload.color &&
          item.size === payload.size
      );

      if (existingItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, qty: item.qty + payload.qty } // Update the quantity
            : item
        );
      } else {
        state.cartItems = [...state.cartItems, payload];
      }
      state.loading = false;
      state.error = null;
      updateLocalStorage(state.cartItems);
      state.subtotal = Number(calculateSubtotal(state.cartItems));
    },
    cartItemRemoval: (state, { payload }) => {
      state.cartItems = [...state.cartItems].filter(
        (item) =>
          item.id !== payload.id ||
          item.color !== payload.color ||
          item.size !== payload.size
      );
      updateLocalStorage(state.cartItems);
      state.subtotal = calculateSubtotal(state.cartItems);
      state.loading = false;
      state.error = null;
    },
    increaseCartItemQty: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === payload.id &&
        item.color === payload.color &&
        item.size === payload.size
          ? { ...item, qty: item.qty + 1 }
          : item
      );
      updateLocalStorage(state.cartItems);
      state.subtotal = Number(calculateSubtotal(state.cartItems));
    },
    decreaseCartItemQty: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === payload.id &&
        item.color === payload.color &&
        item.size === payload.size &&
        item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
      updateLocalStorage(state.cartItems);
      state.subtotal = Number(calculateSubtotal(state.cartItems));
    },
    setShippingCosts: (state, { payload }) => {
      state.shipping = payload;
      localStorage.setItem("shipping", payload);
    },
    clearCart: (state) => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("shipping");
      localStorage.removeItem("subTotal");
      state.cartItems = [];
      state.shipping = Number(7);
      state.subtotal = 0;
      state.loading = false;
      state.error = null;
    },
  },
});
export const {
  setError,
  setLoading,
  cartItemAdd,
  cartItemRemoval,
  increaseCartItemQty,
  decreaseCartItemQty,
  setShippingCosts,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const cartSelector = (state) => state.cart;
