import { PAYMENT } from "../../../helper/APIUrl";
import axios from "axios";

import {
  FETCH_DELETE_PAYMENT_REQUEST,
  FETCH_DELETE_PAYMENT_SUCCESS,
  FETCH_DELETE_PAYMENT_FAILURE,
} from "./deletePaymentTypes";

export const fetchDeletePaymentRequest = () => {
  return {
    type: FETCH_DELETE_PAYMENT_REQUEST,
  };
};
export const fetchDeletePaymentSuccess = (info) => {
  return {
    type: FETCH_DELETE_PAYMENT_SUCCESS,
    payload: info,
  };
};
export const fetchDeletePaymentFailure = (error) => {
  return {
    type: FETCH_DELETE_PAYMENT_FAILURE,
    payload: error,
  };
};

export const fetchDeletePayment = (id) => {
  return (dispatch) => {
    dispatch(fetchDeletePaymentRequest);
    axios
      .delete(PAYMENT + `/${id}`)
      .then((response) => {
        const info = response.data;
        // console.log(response.data);
        dispatch(fetchDeletePaymentSuccess(info));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDeletePaymentFailure("Fetch Add Payment : " + errorMsg));
      });
  };
};
