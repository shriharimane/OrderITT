import axios from "axios";
import {
  GET_MENU_FAIL,
  GET_MENU_REQUEST,
  GET_MENU_SUCCESS,
} from "../constants/menuConstants";

export const getMenus = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_MENU_REQUEST });

    const { data } = await axios.get(
      `https://orderitt.onrender.com/api/v1/eats/stores/${id}/menus`
    );

    const menuItems = data?.data?.[0]?.menu?.items || [];

    dispatch({
      type: GET_MENU_SUCCESS,
      payload: menuItems,
    });

  } catch (error) {
    dispatch({
      type: GET_MENU_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};