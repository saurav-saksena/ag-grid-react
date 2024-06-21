import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { AgChartsReact } from "ag-charts-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";

export default function HideBar() {
  const initialRowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ];
  const columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
  ];
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      resizable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    };
  }, []);
  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "400px", width: "600px" }}
    >
      <AgGridReact
        rowData={initialRowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        enableCharts={true}
      />
      <div
        id="rangeChart"
        className="ag-chart-container"
        style={{ height: 200 }}
      ></div>
    </div>
  );
}
