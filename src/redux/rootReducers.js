import { combineReducers } from "redux";

import getPaymentListReducer from "./payment/getPaymentList/getPaymentListReducers";
import addPaymentReducers from "./payment/addPayment/addPaymentReducers";
import editPaymentReducers from "./payment/editPayment/editPaymentReducers";
import deletePaymentReducers from "./payment/deletePayment/deletePaymentReducers";

const rootReducer = combineReducers({
  paymentList: getPaymentListReducer,
  infoAdd: addPaymentReducers,
  infoEdit: editPaymentReducers,
  infoDelete: deletePaymentReducers,
});

export default rootReducer;
