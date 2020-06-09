import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

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
    dataField: "fixed",
    text: "Delete",
    formatter: (rowContent, row) => {
      return <FontAwesomeIcon icon={faTrash} />;
    },
    headerStyle: () => {
      return { width: "100px" };
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
          <BootstrapTable {...props.baseProps} />
        </div>
      )}
    </ToolkitProvider>
  );
}
