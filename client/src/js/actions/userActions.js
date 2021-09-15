import axios from 'axios'
import {
    REGISTER_USER, REGISTER_SUCCESS, REGISTER_FAIL,
    LOGIN_USER, LOGIN_FAIL, LOGIN_SUCCESS, GET_PROFILE_USER,
    GET_PROFILE_SUCCESS, GET_PROFILE_FAIL, LOGOUT,
     UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_FAIL
} from '../const/actionTypes'


export const register = (newUser) => async dispatch => {
    // newUser = {email,name,lastName,password}
    dispatch({
        type: REGISTER_USER
    })
    try {
        const { data } = await axios.post('/api/auth/register', newUser);
        localStorage.setItem("token", data.token)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: { err: error.response.data, id: "register" }
        });
        //  alert(error.response.data[0].msg)
    }
}

export const login = (User) => async dispatch => {
    // User = {email,password}
    dispatch({
        type: LOGIN_USER
    })
    try {
        const { data } = await axios.post('/api/auth/login', User);
        localStorage.setItem("token", data.token)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: { err: error.response.data, id: "login" }
        });
        // alert(error.response.data[0].msg)
    }
}

export const modifiedUser = (id ,formData) => async (dispatch) => {
  
    dispatch({
      type: UPDATE_USER,
    });
    try {
      const { data } = await axios.put(`/api/auth/update_user/${id}` ,formData );
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAIL,
        // payload: error.response.data
      });
    }
  };

  export const deleteUser = (id) => async (dispatch) => {
    // User { name , lastName , email , password}
    dispatch({
      type: DELETE_USER,
    });
    try {
      const { data } = await axios.delete(`/api/auth/delete_user/${id}`);
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: error.response.data,
      });
    }
  };

export const getProfile = () => async dispatch => {
    // User = {email,password}
    dispatch({
        type: GET_PROFILE_USER
    })
    try {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: token
            }
        }
        console.log(config)
        const { data } = await axios.get('/api/auth/current_user', config)
        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_PROFILE_FAIL,
            payload: error.response.data
        })
    }
};
export const logout = () => dispatch => {
    localStorage.removeItem("token")
    dispatch({
        type: LOGOUT
    })
}


