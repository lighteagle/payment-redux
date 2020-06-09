import { combineReducers } from "redux";

import getPaymentListReducer from "./payment/getPaymentList/getPaymentListReducers";
import addPaymentReducers from "./payment/addPayment/addPaymentReducers";

const rootReducer = combineReducers({
  paymentList: getPaymentListReducer,
  infoAdd: addPaymentReducers,
});

export default rootReducer;
