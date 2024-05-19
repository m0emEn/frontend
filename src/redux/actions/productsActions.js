import {
  setLoading,
  setError,
  setProducts,
  setProduct,
} from "../slices/product";
import axios from "axios";
export const getProducts = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get("/api/products");
    const { products } = data;
    dispatch(setProducts(products));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error occured .Please Try Again Later"
      )
    );
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setProduct(data));
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
