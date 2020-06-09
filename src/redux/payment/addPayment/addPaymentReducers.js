import {
  FETCH_ADD_PAYMENT_REQUEST,
  FETCH_ADD_PAYMENT_SUCCESS,
  FETCH_ADD_PAYMENT_FAILURE,
} from "./addPaymentTypes";

const initialState = {
  loading: false,
  info: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADD_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ADD_PAYMENT_SUCCESS:
      return {
        loading: false,
        info: action.payload,
        error: "",
      };

    case FETCH_ADD_PAYMENT_FAILURE:
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
