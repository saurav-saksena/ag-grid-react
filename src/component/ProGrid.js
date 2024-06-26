import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useContext,
} from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-enterprise";
import GridContext from "../ContextApi/GridContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./gridtable.css";

import { rowData } from "../mockGriApi.js";
import CustomStatsToolPanel from "./CustomStatsToolPanel.js";

const ProGrid = () => {
  const { changedPageName, changeColor } = useContext(GridContext);
  const [serachCondition, setSearchConditon] = useState(false);
  const [allRowData, setAllRowData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [releasedVal, setReleasedVal] = useState("external released");

  const gridRef = useRef();
  const sauravRef = useRef(null);
  const downloadBtnRef = useRef(null);
  const plateformRef = useRef();
  const selectedRowsRef = useRef([]);
  const downloadExcel = useCallback(() => {
    gridRef?.current?.api?.exportDataAsExcel();
  }, []);

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    if (selectedRows.length === 1) {
      selectedRowsRef.current = [...selectedRows];
      downloadBtnRef.current.disabled = false;
    } else {
      downloadBtnRef.current.disabled = true;
    }
    plateformRef.current.innerText =
      selectedRows.length === 1
        ? "Plateform Name : " + selectedRows[0].library
        : "Plateform Name :";
  }, []);

  const rowHeight = 24;
  const headerHeight = 40;
  const colDefs = [
    {
      checkboxSelection: true,
      width: 50,
      resizable: false,
      pinned: true,
      suppressMovable: true,
      suppressMenu: true,
      filter: false,
      suppressColumnsToolPanel: true,
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "Component",
      suppressFiltersToolPanel: true,
      headerTooltip:
        "A component is software that is delivered by a team or a vendor. The component contains information about the software in general and not the information related to the specific version of a software.*",
      children: [
        { headerName: "Library", field: "library", tooltipField: "library" },
        {
          headerName: "Primary Contact",
          field: "primaryConatct",
          hide: true,
          tooltipField: "primaryConatct",
        },
        {
          headerName: "Name",
          field: "componentName",
          tooltipField: "componentName",
        },
        { headerName: "ID", field: "componentId", tooltipField: "componentId" },
      ],
    },
    {
      headerName: "Component Version",
      suppressFiltersToolPanel: true,
      headerTooltip:
        "A version is a specific instance/snapshot of a component.*",
      children: [
        {
          headerName: "Internal Version",
          field: "version",
          tooltipField: "version",
        },
        { headerName: "Version", field: "FQN", tooltipField: "FQN" },
        { headerName: "ID", field: "versionId", tooltipField: "versionId" },
      ],
    },
    {
      headerName: "Release",
      suppressFiltersToolPanel: true,
      headerTooltip:
        "An instantiation of a Release Group that represents a specific distribution, or release, that is planned for or realized at, a specific point in time (Memorialized)*.",
      children: [
        { headerName: "Name", field: "name", tooltipField: "name" },
        {
          headerName: "Responsible Engineer",
          field: "engineer",
          tooltipField: "engineer",
        },
        {
          headerName: "Organization",
          field: "organization",
          tooltipField: "organization",
        },
        {
          headerName: "Release ID",
          field: "releasedId",
          tooltipField: "releasedId",
        },
        { headerName: "Sourcing", field: "" },
        { headerName: "ID", field: "id", tooltipField: "id" },
      ],
    },
    {
      headerName: "Variant",
      suppressFiltersToolPanel: true,
      headerTooltip:
        "A software item with unique techinical characteristic ranges. For example, a specific market segment, a customer, or an operating system. A Variant contains one or more Releases.**",
      children: [
        { headerName: "Name", field: "", tooltipField: "" },
        { headerName: "Responsible Engineer", field: "", tooltipField: "" },
        { headerName: "Organization", field: "", tooltipField: "organization" },
        { headerName: "Sourcing", field: "" },
        { headerName: "ID", field: "", tooltipField: "" },
      ],
    },
    {
      children: [
        { headerName: "Name", field: "", tooltipField: "" },
        { headerName: "Responsible Engineer", field: "", tooltipField: "" },
        { headerName: "Organization", field: "", tooltipField: "" },
        { headerName: "Sourcing", field: "" },
        { headerName: "ID", field: "", tooltipField: "" },
      ],
    },
    {
      headerName: "Platform",
      suppressFiltersToolPanel: true,
      children: [
        { headerName: "Name", field: "", tooltipField: "" },
        { headerName: "Responsible Engineer", field: "", tooltipField: "" },
        { headerName: "Organization", field: "", tooltipField: "" },
        { headerName: "Variant ID", field: "" },
      ],
    },
    {
      headerName: "External Distribution",
      suppressFiltersToolPanel: true,
      children: [
        {
          headerName: "External ID",
          field: "externalId",
          tooltipField: "externalId",
        },
        { headerName: "Contact", field: "conatct", tooltipField: "conatct" },
        {
          headerName: "Organization",
          field: "externalOrganization",
          tooltipField: "externalOrganization",
        },
        { headerName: "Status", field: "status", tooltipField: "status" },
        { headerName: "Download URL", field: "" },
      ],
    },
    {
      headerName: "Report",
      suppressFiltersToolPanel: true,
      children: [
        { headerName: "Where Used", field: "" },
        { headerName: "View BOM", field: "" },
      ],
    },
    {
      headerName: "External Release",
      hide: true,
      filter: "agTextColumnFilter",
      filter: "agSetColumnFilter",
    },
    {
      headerName: "Internal Release",
      hide: true,
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Unrelease",
      hide: true,
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Where Used Selected ID",
      hide: true,
      suppressFiltersToolPanel: true,
    },
    {
      headerName: "Where used Selected UI Tab Name",
      hide: true,
      suppressFiltersToolPanel: true,
    },
    {
      headerName: "BOM Selected ID ",
      hide: true,
      suppressFiltersToolPanel: true,
    },
    {
      headerName: "BOM Selected UI Tab Name",
      hide: true,
      suppressFiltersToolPanel: true,
    },
  ];

  const sideBar = useMemo(() => {
    return {
      toolPanels: [
        {
          id: "filter",
          labelDefault: " Filter",
          labelKey: "filter",
          iconKey: "filter",
          toolPanel: CustomStatsToolPanel,
          toolPanelParams: {
            title: "filter",
          },
        },
        {
          id: "columns",
          labelDefault: "Columns",
          labelKey: "columns",
          iconKey: "columns",
          toolPanel: "agColumnsToolPanel",
        },
      ],
      defaultToolPanel: "customStats",
    };
  }, []);

  const sideBarDef = {
    toolPanels: [
      {
        id: "filters",
        labelDefault: "Filters",
        labelKey: "filters",
        iconKey: "filter",
        toolPanel: "agColumnsToolPanel",
        toolPanelParams: {
          suppressPivots: true,
          suppressPivotMode: true,
          defaultToolPanel: "filters",
          suppressExpandAll: true,
          suppressSyncLayoutWithGrid: true,
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

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (searchWord.trim() === "") {
      setSearchConditon(false);
    } else {
      setSearchConditon(true);
    }

    if (searchWord === "undefined") {
      setAllRowData([]);
    } else {
      setAllRowData(rowData);
    }
  };
  const handleClick = (event) => {
    const buttonValue = event.currentTarget.value;
    setReleasedVal(buttonValue);
  };
  const releasedNumVal = {
    external: 100,
    internal: 20,
    unreleased: 10,
    all: 200,
  };
  const onGridReady = useCallback((params) => {
    document.getElementById("selectedOnly").checked = true;
    downloadBtnRef.current.disabled = true;
  }, []);

  const onBtExport = useCallback(() => {
    // console.log(selectedRowsRef);
    sauravRef.current.hidden = true;
    console.log(sauravRef.current);
    gridRef.current.api.exportDataAsExcel({
      onlySelected: document.querySelector("#selectedOnly").checked,
    });
  }, []);
  useEffect(() => {
    changedPageName("Project Grid");
    changeColor("text-info");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <form ref={sauravRef} onSubmit={hanldeSubmit}>
        <input
          type="search"
          spellCheck="false"
          onChange={handleChange}
          placeholder="search"
          style={{
            display: "block",
            textAlign: "center",
            margin: "20px auto",
            padding: "6px",
            borderRadius: "6px",
          }}
        />
      </form>
      {/* {sauravRef.current === true ? "saurav" : "kumar"} */}
      {serachCondition && (
        <div
          className="ag-theme-quartz layout-grid-sty"
          applying
          the
          grid
          theme
          style={{ height: 340 }}
        >
          <div className="d-flex bd-highlight item-count">
            <div className="p-1 bd-highlight fw-semibold">
              <spna>{releasedVal}</spna> :
              {releasedVal === "external released"
                ? releasedNumVal.external
                : releasedVal === "internal released"
                ? releasedNumVal.internal
                : releasedVal === "unreleased"
                ? releasedNumVal.unreleased
                : releasedNumVal.all}
              {releasedVal !== "external released" && (
                <button
                  className="top_released_button"
                  value="external released"
                  onClick={handleClick}
                >
                  external released<span> : {releasedNumVal.external}</span>
                </button>
              )}
              {releasedVal !== "internal released" && (
                <button
                  className="top_released_button"
                  value="internal released"
                  onClick={handleClick}
                >
                  internal released<span> : {releasedNumVal.internal}</span>
                </button>
              )}
              {releasedVal !== "unreleased" && (
                <button
                  className="top_released_button"
                  value="unreleased"
                  onClick={handleClick}
                >
                  unreleased<span> : {releasedNumVal.unreleased}</span>
                </button>
              )}
              {releasedVal !== "all" && (
                <button
                  className="top_released_button"
                  value="all"
                  onClick={handleClick}
                >
                  all<span> : {releasedNumVal.all}</span>
                </button>
              )}
            </div>
            <div className="ms-auto p-1 bd-highlight d-flex btns">
              <>
                <button
                  className="btn btn-sm btn-primary btnss"
                  onClick={downloadExcel}
                >
                  Export to Excel
                </button>
                <button
                  className="btn btn-sm btn-success btnses"
                  ref={downloadBtnRef}
                  onClick={onBtExport}
                >
                  Download
                </button>
                <label
                  className="option"
                  htmlFor="selectedOnly"
                  style={{ display: "none" }}
                >
                  <input id="selectedOnly" type="checkbox" />
                  Selected Rows Only
                </label>
              </>

              <i className="intelicon-full-screen m-1 max-icon" />
            </div>
          </div>
          <p className="top_released_button" ref={plateformRef}>
            Plateform Name :
          </p>
          <AgGridReact
            ref={gridRef}
            rowData={allRowData}
            columnDefs={colDefs}
            rowHeight={rowHeight}
            headerHeight={headerHeight}
            defaultColDef={defaultColDef}
            rowSelection="single"
            pagination={true}
            paginationPageSize={100}
            tooltipShowDelay={500}
            overlayNoRowsTemplate={
              '<span aria-live="polite" aria-atomic="true">No data available! Please search for other values</span>'
            }
            animateRows={true}
            sideBar={sideBarDef}
            onGridReady={onGridReady}
            onSelectionChanged={onSelectionChanged}
          />
        </div>
      )}
    </>
  );
};

export default ProGrid;
