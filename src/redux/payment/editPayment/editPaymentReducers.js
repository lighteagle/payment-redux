import {
  FETCH_EDIT_PAYMENT_REQUEST,
  FETCH_EDIT_PAYMENT_SUCCESS,
  FETCH_EDIT_PAYMENT_FAILURE,
} from "./editPaymentTypes";

const initialState = {
  loading: false,
  info: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EDIT_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EDIT_PAYMENT_SUCCESS:
      return {
        loading: false,
        info: action.payload,
        error: "",
      };

    case FETCH_EDIT_PAYMENT_FAILURE:
      return {
        loading: false,
        info: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
