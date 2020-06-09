import { PAYMENT } from "../../../helper/APIUrl";
import axios from "axios";

import {
  FETCH_ACTIVE_PAYMENT_REQUEST,
  FETCH_ACTIVE_PAYMENT_SUCCESS,
  FETCH_ACTIVE_PAYMENT_FAILURE,
} from "./activePaymentTypes";

export const fetchActivePaymentRequest = () => {
  return {
    type: FETCH_ACTIVE_PAYMENT_REQUEST,
  };
};
export const fetchActivePaymentSuccess = (info) => {
  return {
    type: FETCH_ACTIVE_PAYMENT_SUCCESS,
    payload: info,
  };
};
export const fetchActivePaymentFailure = (error) => {
  return {
    type: FETCH_ACTIVE_PAYMENT_FAILURE,
    payload: error,
  };
};

export const fetchActivePayment = (id) => {
  return (dispatch) => {
    dispatch(fetchActivePaymentRequest);
    axios
      .delete(PAYMENT + `/${id}`)
      .then((response) => {
        const info = response.data;
        // console.log(response.data);
        dispatch(fetchActivePaymentSuccess(info));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchActivePaymentFailure("Fetch Add Payment : " + errorMsg));
      });
  };
};
