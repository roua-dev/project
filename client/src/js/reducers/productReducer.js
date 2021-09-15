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

const initialState = {
  products: [],
  product: null,
  loading: false,
  token: null,
  errors: null,
};
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
    case UPDATE_PRODUCT:
    case DELETE_PRODUCT:
      return { ...state, loading: true };

    case ADD_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: payload.product };

    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.map((product) =>
          product._id === payload._id ? { ...product, ...payload } : product
        ),
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.filter(
          (product) => product._id !== payload._id
        ),
      };

    case ADD_PRODUCT_FAIL:
    case UPDATE_PRODUCT_FAIL:
    case DELETE_PRODUCT_FAIL:
      return { ...state, errors: payload };

    case GET_PRODUCTS:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: payload };
    case GET_PRODUCTS_FAIL:
      return { ...state, errors: payload };
    default:
      return state;
  }
};

export default productReducer;
