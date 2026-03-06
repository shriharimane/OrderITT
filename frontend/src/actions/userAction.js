import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  NEW_PASSWORD_REQUEST,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAIL,
} from "../constants/UserConstant";

const API = process.env.REACT_APP_API_URL || "https://orderitt.onrender.com";

// LOGIN
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post(
      `${API}/api/v1/users/login`,
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.data.user,
    });

  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response?.data?.message || "Login Failed",
    });
  }
};

// REGISTER
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const { data } = await axios.post(
      `${API}/api/v1/users/signup`,
      userData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.data.user,
    });

    return data.data.user;

  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// LOAD USER
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`${API}/api/v1/users/me`);

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });

  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// UPDATE PROFILE
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const { data } = await axios.put(
      `${API}/api/v1/users/me/update`,
      userData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });

  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// LOGOUT
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`${API}/api/v1/users/logout`);

    dispatch({
      type: LOGOUT_SUCCESS,
    });

  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// UPDATE PASSWORD
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const { data } = await axios.put(
      `${API}/api/v1/users/password/update`,
      passwords,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });

  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// FORGOT PASSWORD
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const { data } = await axios.post(
      `${API}/api/v1/users/forgetPassword`,
      email,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.success,
    });

  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// RESET PASSWORD
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PASSWORD_REQUEST });

    const { data } = await axios.patch(
      `${API}/api/v1/users/resetPassword/${token}`,
      passwords,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    dispatch({
      type: NEW_PASSWORD_SUCCESS,
      payload: data.success,
    });

  } catch (error) {
    dispatch({
      type: NEW_PASSWORD_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// CLEAR ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};