import { PAYMENT } from "../../../helper/APIUrl";
import axios from "axios";

import {
  FETCH_DELETE_PAYMENT_REQUEST,
  FETCH_DELETE_PAYMENT_SUCCESS,
  FETCH_DELETE_PAYMENT_FAILURE,
} from "./deletePaymentTypes";

export const fecthDeletePaymentRequest = () => {
  return {
    type: FETCH_DELETE_PAYMENT_REQUEST,
  };
};
export const fecthDeletePaymentSuccess = (info) => {
  return {
    type: FETCH_DELETE_PAYMENT_SUCCESS,
    payload: info,
  };
};
export const fecthDeletePaymentFailure = (error) => {
  return {
    type: FETCH_DELETE_PAYMENT_FAILURE,
    payload: error,
  };
};

export const fetchAddPayment = (id) => {
  return (dispatch) => {
    dispatch(fecthDeletePaymentRequest);
    axios
      .delete(PAYMENT + `${id}`)
      .then((response) => {
        const info = response.data;
        // console.log(response.data);
        dispatch(fecthDeletePaymentSuccess(info));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fecthDeletePaymentFailure("Fetch Add Payment : " + errorMsg));
      });
  };
};
