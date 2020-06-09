import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

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
const rowEvents = {
  onClick: (e, row, rowIndex) => {
    console.log(`clicked on row with index: ${rowIndex}`, row.id, row.name);
  },
};

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

export default function TablePayment({ paymentList }) {
  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
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
    ], // A numeric array is also available. the purpose of above example is custom the text
  };
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
          <BootstrapTable
            {...props.baseProps}
            rowEvents={rowEvents}
            pagination={paginationFactory(options)}
          />
        </div>
      )}
    </ToolkitProvider>
  );
}
