import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEditPayment, fetchDeletePayment } from "../redux";
import BootstrapTable from "react-bootstrap-table-next";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function TablePayment({ paymentList }) {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [paymentName, setPaymentName] = useState("");
  const [paymentId, setPaymentId] = useState("");

  const toggle = () => setModal(!modal);
  const handleShowEditModal = (payName) => {
    setPaymentName(payName);
    toggle();
    console.log(paymentId);
  };

  const handleEditModal = (id, payment) => {
    dispatch(fetchEditPayment(id, payment));
    toggle();
  };

  const { SearchBar } = Search;
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "50px" };
      },
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
      style: {
        cursor: "pointer",
      },
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          console.log(row);
          setPaymentId(row.id);
          handleShowEditModal(row.name);
        },
      },
    },
    {
      dataField: "is_active",
      text: "Active",
      formatter: (rowContent, row) => {
        return <BootstrapSwitchButton checked={true} size="sm" />;
      },

      headerStyle: () => {
        return { width: "100px" };
      },
    },
    {
      // dataField: "fixed",
      text: "Delete",
      formatter: (rowContent, row) => {
        return <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} />;
      },
      headerStyle: () => {
        return { width: "100px" };
      },
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          console.log(row);
          dispatch(fetchDeletePayment(row.id));
        },
      },
    },
  ];

  const defaultSorted = [
    {
      dataField: "id",
      order: "desc",
    },
  ];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: paymentList.length,
      },
    ],
  };

  return (
    <>
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={paymentList}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            <div className="float-right">
              <SearchBar {...props.searchProps} placeholder="Search ..." />
            </div>
            <BootstrapTable
              {...props.baseProps}
              // rowEvents={rowEvents}
              pagination={paginationFactory(options)}
            />
          </div>
        )}
      </ToolkitProvider>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Payment</ModalHeader>
        <ModalBody>
          <label>
            Name :{" "}
            <input
              type="text"
              name="name"
              value={paymentName}
              onChange={(e) => setPaymentName(e.target.value)}
            />
          </label>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => handleEditModal(paymentId, paymentName)}
          >
            Edit
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
