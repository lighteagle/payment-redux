import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetPaymentList } from "../redux";
import TablePayment from "./TablePayment";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Payment() {
  const [modal, setModal] = useState(false);
  const [isAdd, setIsAdd] = useState(true);

  const toggle = () => setModal(!modal);

  const handleAdd = () => {
    setIsAdd(true);
    toggle();
  };
  const handleEdit = () => {
    setIsAdd(false);
    toggle();
  };
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
      <Button color="primary" onClick={handleAdd} className="float-right">
        + Add
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {isAdd ? "Add Payment" : "Edit Payment"}
        </ModalHeader>
        <ModalBody>
          <label>
            Name : <input type="text" name="name" />
          </label>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggle}>
            {isAdd ? "Add " : "Edit "}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
