import React, { useCallback, useMemo, useRef, useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./styles.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { ModuleRegistry } from "@ag-grid-community/core";
ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);
const groupData = [
  {
    orgHierarchy: ["Panther Lake P Platform Segment"],
    itemType: "Platform Segment",
    testName: "",
    source: "",
    testCategory: "",
    pass_fail: "",
    itemScore: 83,
    id: 10047640,
  },
  {
    orgHierarchy: [
      "Panther Lake P Platform Segment",
      "Panther Lake P Premium Notebook",
    ],
    itemType: "Platform Variant",
    testName: "",
    source: "",
    testCategory: "",
    pass_fail: "",
    itemScore: 87,
    id: 10047641,
  },
  {
    orgHierarchy: [
      "Panther Lake P Platform Segment",
      "Panther Lake P Premium Notebook",
      "Panther Lake Window System",
    ],
    itemType: "Product Variant",
    testName: "Test details",
    source: "",
    testCategory: "",
    pass_fail: "",
    itemScore: 92,
    id: 10047642,
  },

  {
    orgHierarchy: [
      "Panther Lake P Platform Segment",
      "Panther Lake P Premium Notebook",
      "Panther Lake P Linux System Software",
    ],
    itemType: "Product Variant",
    testName: "Test details",
    source: "",
    testCategory: "",
    pass_fail: "",
    itemScore: 50,
    id: 10047644,
  },
  {
    orgHierarchy: [
      "Panther Lake P Platform Segment",
      "Panther Lake P Hybrid FGPA",
    ],
    itemType: "Product Variant",
    testName: "",
    source: "",
    testCategory: "",
    pass_fail: "",
    itemScore: 50,
    id: 10047645,
  },
  {
    orgHierarchy: [
      "Panther Lake P Platform Segment",
      "Panther Lake P Hybrid FGPA",
      "Panther Lake P Hybrid FGPA",
    ],
    itemType: "Product Variant",
    testName: "Test details",
    source: "",
    testCategory: "",
    pass_fail: "",
    itemScore: 50,
    id: 10047646,
  },
];

const GridExample1 = () => {
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState(groupData);
  const [columnDefs, setColumnDefs] = useState([
    { headerName: "Item Type", field: "itemType", width: 200 },
    { headerName: "Test Name", field: "testName" },
    { headerName: "Source", field: "source" },
    { headerName: "Test Category", field: "testCategory" },
    { headerName: "Pass/Fail", field: "pass_fail" },
    { headerName: "Weight", field: "weight" },
    { headerName: "Test Score", field: "testScore" },
    {
      headerName: "Item Score(Weighted)",
      field: "itemScore",
      cellRenderer: (params) => {
        if (params.value) {
          return params.value + "%";
        } else {
          return "";
        }
      },
    },
  ]);
  const defaultColDef = {
    resizable: false,
    floatingFilter: true,
    filter: "agTextColumnFilter",
    filterParams: { newRowsAction: "keep" },
  };

  const autoGroupColumnDef = useMemo(() => {
    return {
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
        return "";
      },
    };
  }, []);
  const getDataPath = useCallback((data) => {
    return data.orgHierarchy;
  }, []);

  const sideBarDef = {
    toolPanels: [
      {
        id: "columns",
        labelDefault: "Columns",
        labelKey: "columns",
        iconKey: "columns",
        toolPanel: "agFiltersToolPanel",
        toolPanelParams: {
          suppressValues: false,
          suppressPivotMode: true,
          suppressRowGroups: true,
          suppressValues: false,
        },
      },
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
    ],
    defaultToolPanel: "columns",
  };

  return (
    <div style={{ height: 480 }}>
      <div className="example-wrapper">
        <div style={gridStyle} className={"ag-theme-alpine"}>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            autoGroupColumnDef={autoGroupColumnDef}
            treeData={true}
            groupDefaultExpanded={-1}
            sideBar={["filters", "columns"]}
            getDataPath={getDataPath}
          />
        </div>
      </div>
    </div>
  );
};
export default GridExample1;
