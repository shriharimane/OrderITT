import axios from "axios";
import {
  ADD_TO_CART,
  FETCH_CART,
  REMOVE_ITEM_CART,
  UPDATE_CART_ITEM,
} from "../constants/cartConstants";

const API = process.env.REACT_APP_API_URL;

/* =========================
   FETCH CART
========================= */
export const fetchCartItems = (alert) => async (dispatch) => {
  try {
    const response = await axios.get(`${API}/api/v1/eats/cart/get-cart`);

    dispatch({
      type: FETCH_CART,
      payload: response.data.data,
    });
  } catch (error) {
    console.error("Fetch cart error: ", error);
    if (alert) {
      alert.info("Cart is hungry");
    }
  }
};

/* =========================
   ADD TO CART
========================= */
export const addItemToCart =
  (foodItemId, restaurant, quantity, alert) =>
  async (dispatch, getState) => {
    try {
      const { user } = getState().auth;

      const response = await axios.post(`${API}/api/v1/eats/cart/add-to-cart`, {
        userId: user._id,
        foodItemId,
        restaurantId: restaurant,
        quantity,
      });

      alert.success("Item added to cart");

      dispatch({
        type: ADD_TO_CART,
        payload: response.data.cart,
      });
    } catch (error) {
      alert.error(error.response ? error.response.data.message : error.message);
    }
  };

/* =========================
   UPDATE CART ITEM
========================= */
export const updateCartQuantity =
  (foodItemId, quantity, alert) =>
  async (dispatch, getState) => {
    try {
      const { user } = getState().auth;

      if (typeof foodItemId === "object") {
        foodItemId = foodItemId._id;
      }

      const response = await axios.post(
        `${API}/api/v1/eats/cart/update-cart-item`,
        {
          userId: user._id,
          foodItemId,
          quantity,
        }
      );

      dispatch({
        type: UPDATE_CART_ITEM,
        payload: response.data.cart,
      });
    } catch (error) {
      alert.error(error.response ? error.response.data.message : error.message);
    }
  };

/* =========================
   REMOVE ITEM FROM CART
========================= */
export const removeItemFromCart =
  (foodItemId, alert) =>
  async (dispatch, getState) => {
    try {
      const { user } = getState().auth;

      if (typeof foodItemId === "object") {
        foodItemId = foodItemId._id;
      }

      const response = await axios.delete(
        `${API}/api/v1/eats/cart/delete-cart-item`,
        {
          data: { userId: user._id, foodItemId },
        }
      );

      dispatch({
        type: REMOVE_ITEM_CART,
        payload: response.data,
      });
    } catch (error) {
      if (alert) {
        alert.error(
          error.response ? error.response.data.message : error.message
        );
      }
    }
  };