import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_USER,
  LOGIN_USER,
  GET_PROFILE_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  LOGOUT,
  UPDATE_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../const/actionTypes";

const initialState = {
  user: null,
  loading: false,
  token: null,
  isAuth: null,
  errors: {},
  users:[]
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
    case UPDATE_USER:
    case GET_PROFILE_USER:
      return { ...state, loading: true };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        user: payload.user,
        isAuth: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.map((user) =>
          user._id === payload._id ? { ...user, ...payload } : user
        ),
      };
    case UPDATE_USER_FAIL:
      return { ...state, errors: payload };

    case DELETE_USER:
      return { ...state, loading: true };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => user._id !== payload._id),
      };
    case DELETE_USER_FAIL:
      return { ...state, errors: payload };

    case GET_PROFILE_SUCCESS:
      return { ...state, loading: false, user: payload.user, isAuth: true };

    case REGISTER_FAIL:
    case GET_PROFILE_FAIL:
    case LOGIN_FAIL:
      return { ...state, loading: false, isAuth: false, errors: payload };

    case LOGOUT:
      return { ...state, user: null, isAuth: false, token: null };
    default:
      return state;
  }
};

export default userReducer;
