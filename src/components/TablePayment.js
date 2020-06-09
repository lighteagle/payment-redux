import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
  },
  {
    dataField: "is_active",
    text: "Active",
    formatter: (rowContent, row) => {
      return <BootstrapSwitchButton checked={true} size="sm" />;
    },
  },
  {
    dataField: "fixed",
    text: "Delete",
    formatter: (rowContent, row) => {
      return <FontAwesomeIcon icon={faTrash} />;
    },
  },
];
const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];
export default function TablePayment({ paymentList }) {
  return (
    <BootstrapTable
      bootstrap4
      keyField="id"
      data={paymentList}
      columns={columns}
      defaultSorted={defaultSorted}
    />
  );
}
