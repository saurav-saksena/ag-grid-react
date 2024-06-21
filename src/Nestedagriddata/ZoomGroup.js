import React, { useCallback, useMemo, useRef, useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./styles.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { ModuleRegistry } from "@ag-grid-community/core";

import { rowData12, columnDefs12 } from "./zoomData";
ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);

const NestedTreeGrouping = () => {
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState(rowData12);

  const [columnDefs, setColumnDefs] = useState(columnDefs12);
  const defaultColDef = {
    resizable: true,
    floatingFilter: true,
    filter: "agTextColumnFilter",
    filterParams: { newRowsAction: "keep" },
    cellHeight: 15,
  };

  // const autoGroupColumnDef = useMemo(() => {
  //     return {
  //       minWidth: 200,
  //       cellRendererParams: {
  //         suppressCount: true,

  //     },
  //       filterValueGetter: (params) => {
  //         if (params.node) {
  //           var colGettingGrouped = params.colDef.showRowGroup + "";
  //           return params.api.getCellValue({
  //             colKey: colGettingGrouped,
  //             rowNode: params.node,
  //           });
  //         }
  //       },
  //     };
  //   }, []);

  const sideBarDef = {
    toolPanels: [
      {
        id: "filters",
        labelDefault: "Filters",
        labelKey: "filters",
        iconKey: "filter",
        toolPanel: "agFiltersToolPanel",
        toolPanelParams: {
          suppressValues: false,
        },
      },
      {
        id: "columns",
        labelDefault: "Columns",
        labelKey: "columns",
        iconKey: "columns",
        toolPanel: "agColumnsToolPanel",
        toolPanelParams: {
          suppressValues: false,
          suppressPivotMode: true,
          suppressRowGroups: true,
          suppressValues: false,
        },
      },
    ],
    defaultToolPanel: "filters",
  };
  const rowHeight = 35;
  const autoGroupColumnDefs = useMemo(
    () => [
      {
        headerName: "Name(ID)",
        floatingFilter: true,
        filter: "agTextColumnFilter",
        minWidth: 550,
        cellRendererParams: {
          suppressCount: true,
        },
        valueGetter: (params) => {
          if (params.data && params.data.orgHierarchy && params.data.id) {
            return `${
              params.data.orgHierarchy[params.data.orgHierarchy.length - 1]
            } (${params.data.id})`;
          }
          return `${
            params.data.orgHierarchy[params.data.orgHierarchy.length - 1]
          }`;
        },
      },
      {
        headerName: "Test",
        floatingFilter: true,
        filter: "agTextColumnFilter",
        // Define other properties as needed
      },
    ],
    []
  );
  const getDataPath = useCallback((data) => {
    return data.orgHierarchy;
  }, []);

  return (
    <div style={{ height: 600 }}>
      <div className="example-wrapper">
        <div style={gridStyle} className={"ag-theme-alpine"}>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            autoGroupColumnDefs={autoGroupColumnDefs}
            //   groupHideOpenParents={true}
            treeData={true}
            rowHeight={rowHeight}
            getDataPath={getDataPath}
            sideBar={sideBarDef}
          />
        </div>
      </div>
    </div>
  );
};
export default NestedTreeGrouping;
