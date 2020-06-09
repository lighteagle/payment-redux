import { combineReducers } from "redux";

import getPaymentListReducer from "./payment/getPaymentList/getPaymentListReducers";
import addPaymentReducers from "./payment/addPayment/addPaymentReducers";
import editPaymentReducers from "./payment/editPayment/editPaymentReducers";

const rootReducer = combineReducers({
  paymentList: getPaymentListReducer,
  infoAdd: addPaymentReducers,
  infoEdit: editPaymentReducers,
});

export default rootReducer;
