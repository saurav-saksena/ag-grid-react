import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./styles.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { ModuleRegistry } from "@ag-grid-community/core";
import { columnDefsData, groupDataTree } from "./NestedTreeGroupData";
import "bootstrap-icons/font/bootstrap-icons.css";
import GridContext from "../ContextApi/GridContext";
import { useParams } from "react-router-dom";

ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);

const NestedTreeGrouping = () => {
  const { changedPageName, changeColor } = useContext(GridContext);
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState(groupDataTree);
  const { id } = useParams();

  const [columnDefs, setColumnDefs] = useState(columnDefsData);
  const defaultColDef = {
    resizable: false,
    floatingFilter: true,
    filter: "agTextColumnFilter",
    filterParams: { newRowsAction: "keep" },
    cellHeight: 15,
  };
  const getFileCellRenderer = () => {
    class FileCellRenderer {
      init(params) {
        var tempDiv = document.createElement("div");
        var value = params.value;
        var icon =
          params.data.itemType === "Product Variant"
            ? "bi bi-calendar-event m-2"
            : "bi bi-box m-2";
        tempDiv.innerHTML = !params.data.toHide
          ? `<a href="https://www.ag-grid.com/react-data-grid/tree-data/" style="text-decoration:none;" target="_blank"><i class="${icon}"></i>${value}</a>`
          : " ";
        this.eGui = tempDiv.firstChild;
      }
      getGui() {
        return this.eGui;
      }
      refresh() {
        return false;
      }
    }
    return FileCellRenderer;
  };
  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: "Name(ID)",
      floatingFilter: true,
      filter: "agTextColumnFilter",
      minWidth: 550,

      cellRendererParams: {
        suppressCount: true,
        innerRenderer: getFileCellRenderer(),
      },
    };
  }, []);

  // const autoGroupColumnDef = useMemo(() => {
  //   return {
  //     headerName: "Name(ID)",
  //     floatingFilter: true,
  //     filter: "agTextColumnFilter",
  //     minWidth: 550,

  //     cellRendererParams: {
  //       suppressCount: true,
  //     },

  //     valueGetter: (params) => {
  //       console.log("saksena",params)
  //       if (params.data.toHide) {
  //         return "";
  //       }
  //       if (params.data && params.data.orgHierarchy && params.data.id) {
  //         return `${
  //           params.data.orgHierarchy[params.data.orgHierarchy.length - 1]
  //         } (${params.data.id})`;
  //       }
  //       return `${
  //         params.data.orgHierarchy[params.data.orgHierarchy.length - 1]
  //       }`;
  //     },
  //   };
  // }, []);

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
        toolPanel: "agColumnsToolPanel",
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
  };
  const rowHeight = 35;
  useEffect(() => {
    changedPageName("Test Details");
    changeColor("text-success");
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
            autoGroupColumnDef={autoGroupColumnDef}
            treeData={true}
            groupDefaultExpanded={-1}
            sideBar={sideBarDef}
            getDataPath={getDataPath}
            rowHeight={rowHeight}
          />
        </div>
      </div>
    </div>
  );
};
export default NestedTreeGrouping;
