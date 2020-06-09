import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetPaymentList, fetchAddPayment } from "../redux";
import TablePayment from "./TablePayment";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Payment() {
  const getPaymentList = useSelector((state) => state.paymentList);
  const infoAdd = useSelector((state) => state.infoAdd);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchGetPaymentList()), [dispatch, infoAdd]);

  const [modal, setModal] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [paymentName, setPaymentName] = useState("");

  const toggle = () => setModal(!modal);

  const handleShowAddModal = () => {
    setIsAdd(true);
    setPaymentName("");
    toggle();
  };

  const handleAddModal = (payment) => {
    dispatch(fetchAddPayment(payment));
    setPaymentName("");
    toggle();
  };

  const handleEdit = () => {
    setIsAdd(false);
    toggle();
  };

  return (
    <div>
      {/* {console.log(getPaymentList.paymentList.data)} */}
      <h1>Payment</h1>
      {getPaymentList.paymentList.data && (
        <TablePayment paymentList={getPaymentList.paymentList.data} />
      )}
      <Button
        color="primary"
        onClick={handleShowAddModal}
        className="float-right"
      >
        + Add
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {isAdd ? "Add Payment" : "Edit Payment"}
        </ModalHeader>
        <ModalBody>
          <label>
            Name :{" "}
            <input
              type="text"
              name="name"
              onChange={(e) => setPaymentName(e.target.value)}
            />
          </label>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleAddModal(paymentName)}>
            {isAdd ? "Add " : "Edit "}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
