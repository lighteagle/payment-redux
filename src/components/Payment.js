import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetPaymentList } from "../redux";
import TablePayment from "./TablePayment";
import { Button, Modal } from "reactstrap";

export default function Payment() {
  const getPaymentList = useSelector((state) => state.paymentList);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchGetPaymentList()), [dispatch]);

  return (
    <div>
      {console.log(getPaymentList.paymentList.data)}
      <h1>Payment</h1>
      {getPaymentList.paymentList.data && (
        <TablePayment paymentList={getPaymentList.paymentList.data} />
      )}
      <Button color="primary">Add</Button>
    </div>
  );
}
