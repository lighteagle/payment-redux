import {
  FETCH_GET_PAYMENT_LIST_REQUEST,
  FETCH_GET_PAYMENT_LIST_SUCCESS,
  FETCH_GET_PAYMENT_LIST_FAILURE,
} from "./getPaymentListTypes";

const initialState = {
  loading: false,
  paymentList: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_PAYMENT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GET_PAYMENT_LIST_SUCCESS:
      return {
        loading: false,
        paymentList: action.payload,
        error: "",
      };

    case FETCH_GET_PAYMENT_LIST_FAILURE:
      return {
        loading: false,
        paymentList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
