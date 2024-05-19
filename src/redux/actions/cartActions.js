import axios from "axios";
import {
  setError,
  setLoading,
  setShippingCosts,
  cartItemAdd,
  cartItemRemoval,
  clearCart,
} from "../slices/cart";
export const addCartItem = (id, qty, color, size) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    const itemToAdd = {
      id: data._id,
      name: data.name,
      image: data.mainImg,
      price: data.newPrice,
      stock: data.stock,
      qty,
      size,
      color,
    };

    dispatch(cartItemAdd(itemToAdd));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};

export const removeCartItem = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(cartItemRemoval(id));
};

export const setShipping = (value) => async (dispatch) => {
  dispatch(setShippingCosts(value));
};

export const resetCart = () => (dispatch) => {
  dispatch(clearCart);
};
