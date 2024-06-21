import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const SidebarFilter = ({ columnDefs, onFilterChange }) => {
  const [filterValues, setFilterValues] = useState({});

  const handleCheckboxChange = (event, column) => {
    const { name, checked } = event.target;
    setFilterValues((prevState) => ({
      ...prevState,
      [column.field]: checked,
    }));
    onFilterChange(filterValues);
  };

  return (
    <div>
      {columnDefs.map((column) => (
        <div key={column.field}>
          <label>
            <input
              type="checkbox"
              name={column.field}
              checked={filterValues[column.field] || false}
              onChange={(e) => handleCheckboxChange(e, column)}
            />
            {column.headerName}
          </label>
        </div>
      ))}
    </div>
  );
};

const GridComponent = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const columnDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "Age", field: "age" },
    { headerName: "Country", field: "country" },
    // Add more column definitions as needed
  ];

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const onFilterChange = (filterValues) => {
    // Apply filtering based on filterValues
    const filterModel = {};
    Object.keys(filterValues).forEach((key) => {
      if (filterValues[key]) {
        filterModel[key] = { type: "set", values: [""] };
      }
    });
    gridApi.setFilterModel(filterModel);
    gridApi.onFilterChanged();
  };

  const defaultColDef = {
    resizable: false,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    suppressMenu: true,
    cellStyle: {
      borderRight: "1px solid #B9B9B9",
    },
  };

  return (
    <div
      className="ag-theme-alpine"
      applying
      the
      grid
      theme
      style={{ height: 451, marginRight: openAccordion ? "10px" : "40px" }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        onGridReady={onGridReady}
        defaultColDef={defaultColDef}
        sideBar={{
          toolPanels: [
            {
              id: "filters",
              labelDefault: "Filters",
              labelKey: "filters",
              toolPanel: "sidebarFilter",
            },
          ],
          defaultToolPanel: "filters",
        }}
      />
      <SidebarFilter columnDefs={columnDefs} onFilterChange={onFilterChange} />
    </div>
  );
};

export default GridComponent;
