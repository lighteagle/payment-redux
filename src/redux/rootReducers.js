import { combineReducers } from "redux";

import getPaymentListReducer from "./payment/getPaymentList/getPaymentListReducers";

const rootReducer = combineReducers({
  paymentList: getPaymentListReducer,
});

export default rootReducer;
