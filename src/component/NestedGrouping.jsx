import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
const NestedGrouping = ({ groupData }) => {
  const columnDefs = [
    { headerName: "Name", field: "name", rowGroup: true, hide: true },
    { headerName: "Sub Name", field: "subName", rowGroup: true, hide: true },
    //   { headerName: "ID", field: "id" },
    //   { headerName: "Sub ID", field: "subId" },
    { headerName: "Item Type", field: "itemType" },
    { headerName: "Data Completeness", field: "dataCompleteness" },
    { headerName: "3rd Party", field: "3rdParty" },
  ];

  const defaultColDef = {
    sortable: true,
    resizable: true,
    flex: 1,
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        rowData={groupData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        groupUseEntireRow={true}
        autoGroupColumnDef={{
          headerName: "Group",
          field: "group",
          minWidth: 300,
        }}
      ></AgGridReact>
    </div>
  );
};
export default NestedGrouping;
