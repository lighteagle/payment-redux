import { PAYMENT } from "../../../helper/APIUrl";
import axios from "axios";

import {
  FETCH_EDIT_PAYMENT_REQUEST,
  FETCH_EDIT_PAYMENT_SUCCESS,
  FETCH_EDIT_PAYMENT_FAILURE,
} from "./editPaymentTypes";

export const fecthEditPaymentRequest = () => {
  return {
    type: FETCH_EDIT_PAYMENT_REQUEST,
  };
};
export const fecthEditPaymentSuccess = (info) => {
  return {
    type: FETCH_EDIT_PAYMENT_SUCCESS,
    payload: info,
  };
};
export const fecthEditPaymentFailure = (error) => {
  return {
    type: FETCH_EDIT_PAYMENT_FAILURE,
    payload: error,
  };
};

export const fetchEditPayment = (id, paymentName) => {
  return (dispatch) => {
    dispatch(fecthEditPaymentRequest);
    axios
      .put(PAYMENT + `/${id}`, { name: paymentName })
      .then((response) => {
        const info = response.data;
        // console.log(response.data);
        dispatch(fecthEditPaymentSuccess(info));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fecthEditPaymentFailure("Fetch Edit Payment : " + errorMsg));
      });
  };
};
