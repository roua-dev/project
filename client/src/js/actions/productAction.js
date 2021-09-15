import axios from "axios";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
} from "../const/actionTypes";

export const addProduct = (NewProduct) => async (dispatch) => {
  // newProduct = { Article , Image , Description , Price}
  dispatch({
    type: ADD_PRODUCT,
  });
  try {
    const { data } = await axios.post("/api/prod/add_product", NewProduct);
    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};

export const modifiedProduct = (id ,formData) => async (dispatch) => {
  
  dispatch({
    type: UPDATE_PRODUCT,
  });
  try {
    const { data } = await axios.put(`/api/prod/update_product/${id}` ,formData);
    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.response.data
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  // Product {Article , Image , Description , Price}
  dispatch({
    type: DELETE_PRODUCT,
  });
  try {
    const { data } = await axios.delete(`/api/prod/delete_product/${id}`);
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};

export const getAllProducts = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS,
  });
  try {
    const { data } = await axios.get("/api/prod/products");
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
    });
  }
};
