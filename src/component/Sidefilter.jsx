import React, {
    useCallback,
    useMemo,
    useRef,
    useState,
    StrictMode,
  } from "react";
  import { createRoot } from "react-dom/client";
  import { AgGridReact } from "@ag-grid-community/react";
  import "@ag-grid-community/styles/ag-grid.css";
  import "@ag-grid-community/styles/ag-theme-quartz.css";
  import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
  import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
  import { MenuModule } from "@ag-grid-enterprise/menu";
  import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
  import { ModuleRegistry } from "@ag-grid-community/core";
  ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    FiltersToolPanelModule,
    MenuModule,
    SetFilterModule,
  ]);
  
  const GridExample = () => {
    const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState([
      { field: "athlete", minWidth: 200, filter: "agTextColumnFilter" },
      { field: "age" },
      { field: "country", minWidth: 200 },
      { field: "year" },
      { field: "date", minWidth: 180 },
      { field: "gold", filter: false },
      { field: "silver", filter: false },
      { field: "bronze", filter: false },
      { field: "total", filter: false },
    ]);
    const defaultColDef = useMemo(() => {
      return {
        flex: 1,
        minWidth: 100,
        filter: true,
      };
    }, []);
  
    const onGridReady = useCallback((params) => {
      fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
        .then((resp) => resp.json())
        .then((data) => setRowData(data));
    }, []);
  
    return (
      <div style={containerStyle}>
        <div
          style={gridStyle}
          className={
            "ag-theme-quartz"
          }
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            sideBar={"filters"}
            onGridReady={onGridReady}
          />
        </div>
      </div>
    );
  };