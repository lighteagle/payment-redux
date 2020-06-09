import { PAYMENT } from "../../../helper/APIUrl";
import axios from "axios";

import {
  FETCH_GET_PAYMENT_LIST_REQUEST,
  FETCH_GET_PAYMENT_LIST_SUCCESS,
  FETCH_GET_PAYMENT_LIST_FAILURE,
} from "./getPaymentListTypes";

export const fecthGetPaymentListRequest = () => {
  return {
    type: FETCH_GET_PAYMENT_LIST_REQUEST,
  };
};
export const fecthGetPaymentListSuccess = (paymentList) => {
  return {
    type: FETCH_GET_PAYMENT_LIST_SUCCESS,
    payload: paymentList,
  };
};
export const fecthGetPaymentListFailure = (error) => {
  return {
    type: FETCH_GET_PAYMENT_LIST_FAILURE,
    payload: error,
  };
};

export const fetchGetPaymentList = () => {
  return (dispatch) => {
    dispatch(fecthGetPaymentListRequest);
    axios
      .get(PAYMENT)
      .then((response) => {
        const paymentList = response.data;
        // console.log(response.data);
        dispatch(fecthGetPaymentListSuccess(paymentList));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(
          fecthGetPaymentListFailure("Fetch Get Payment List : " + errorMsg)
        );
      });
  };
};
