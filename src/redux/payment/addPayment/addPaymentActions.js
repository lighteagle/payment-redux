import { PAYMENT } from "../../../helper/APIUrl";
import axios from "axios";

import {
  FETCH_ADD_PAYMENT_REQUEST,
  FETCH_ADD_PAYMENT_SUCCESS,
  FETCH_ADD_PAYMENT_FAILURE,
} from "./addPaymentTypes";

export const fetchAddPaymentRequest = () => {
  return {
    type: FETCH_ADD_PAYMENT_REQUEST,
  };
};
export const fetchAddPaymentSuccess = (info) => {
  return {
    type: FETCH_ADD_PAYMENT_SUCCESS,
    payload: info,
  };
};
export const fetchAddPaymentFailure = (error) => {
  return {
    type: FETCH_ADD_PAYMENT_FAILURE,
    payload: error,
  };
};

export const fetchAddPayment = (paymentName) => {
  return (dispatch) => {
    dispatch(fetchAddPaymentRequest);
    axios
      .post(PAYMENT, { name: paymentName })
      .then((response) => {
        const info = response.data;
        // console.log(response.data);
        dispatch(fetchAddPaymentSuccess(info));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchAddPaymentFailure("Fetch Add Payment : " + errorMsg));
      });
  };
};
