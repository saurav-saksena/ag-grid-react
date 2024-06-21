import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import NewData from "./NewData.js";
import GridContext from "../../ContextApi/GridContext.js";
const GridWithChart = () => {
  const { changedPageName, changeColor } = useContext(GridContext);

  const [rowData, setRowData] = useState(NewData);
  const [columnDefs, setColumnDefs] = useState([
    { headerName: "Item Type", field: "itemType", width: 170, pinned: "left" },
    {
      headerName: "Data Completeness",
      field: "dataComplete",
      width: 170,
      pinned: "left",
      hide: true,
      cellRenderer: (params) => {
        if (params.value) {
          return (
            <a
              style={{ textDecoration: "none" }}
              href="https://www.ag-grid.com/react-data-grid/excel-export-hyperlinks/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {params.value}{" "}
            </a>
          );
        } else {
          return "";
        }
      },

      cellStyle: (params) => {
        const completeness = parseFloat(params.value);
        if (completeness >= 90) {
          return { backgroundColor: "lightgreen", color: "blue" };
        } else if (completeness >= 80 && completeness < 90) {
          return { backgroundColor: "lightblue", color: "blue" };
        } else if (completeness > 50 && completeness < 80) {
          return { backgroundColor: "lightyellow", color: "blue" };
        } else {
          return { backgroundColor: "pink", color: "blue" };
        }
      },
    },
    { headerName: "new total", field: "nTotal" },
    { headerName: "90-100", field: "n90_100" },
    { headerName: "70-89", field: "n70_89" },
    { headerName: "50-59", field: "n50_69" },
    { headerName: ">50", field: "n50" },
    { headerName: "active total", field: "aTotal" },
    { headerName: "90-100", field: "a90_100" },
    { headerName: "70-89", field: "a70_89" },
    { headerName: "50-69", field: "a50_69" },
    { headerName: ">50", field: "a50" },

    {
      headerName: "3rd Party Compliance",
      field: "thirdParty",
      hide: true,
      cellRenderer: (params) => {
        if (params.value) {
          return params.value + "%";
        } else {
          return "";
        }
      },
    },
    {
      headerName: "Export Compliance",
      field: "exportCompliance",
      cellRenderer: (params) => {
        return params.value + "%";
      },
    },
    {
      headerName: "Intel Make Component",
      field: "intelMakeComponent",
      cellRenderer: (params) => {
        return params.value + "%";
      },
    },
    {
      headerName: "SW Component/Version",
      field: "swComponent_version",
      cellRenderer: (params) => {
        return params.value + "%";
      },
    },
    {
      headerName: "Ownership",
      field: "ownership",
      cellRenderer: (params) => {
        return params.value + "%";
      },
    },
    {
      headerName: "Responisble Engineer",
      field: "responsibleEngineer",
      cellRenderer: function (params) {
        return (
          <a
            className="hyper--cell"
            href={
              "https://www.ag-grid.com/react-data-grid/excel-export-hyperlinks/" +
              params.data.id
            }
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            {params.value}{" "}
          </a>
        );
      },
    },
    { headerName: "Divison", field: "division" },
  ]);
  const handleClick = () => {
    return "hello";
  };

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      editable: false,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    };
  }, []);
  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: "Name(ID)",
      floatingFilter: true,
      filter: "agTextColumnFilter",
      minWidth: 300,
      pinned: "left",
      cellRendererParams: {
        suppressCount: true,
      },

      valueGetter: (params) => {
        if (params.data && params.data.orgHierarchy && params.data.id) {
          return `${
            params.data.orgHierarchy[params.data.orgHierarchy.length - 1]
          }  (${params.data.id})`;
        }
        return "";
      },
    };
  }, []);
  const getDataPath = useCallback((data) => {
    // console.log(data);
    return data.orgHierarchy;
  }, []);
  const popupParent = useMemo(() => {
    return document.body;
  }, []);
  const chartThemeOverrides = useMemo(() => {
    return {
      common: {
        axes: {
          number: {
            title: {
              enabled: false,
              formatter: (params) => {
                return params.boundSeries.map((s) => s.name).join(" / ");
              },
            },
          },
        },
      },
      bar: {
        series: {
          strokeWidth: 2,
          height: 30,
          fillOpacity: 0.8,
        },
        legend: { enabled: false },
      },
      legend: { enabled: false },
      axes: [
        { type: "category", positon: "bottom", label: { formatter: () => "" } },
        { type: "number", positon: "left" },
      ],
    };
  }, []);

  const onGridReady = useCallback((params) => {
    params.api.setGridOption("rowData", rowData);
  }, []);

  const onFirstDataRendered = useCallback((params) => {
    params.api.createRangeChart({
      chartType: "groupedColumn",
      cellRange: {
        columns: ["dataComplete", "thirdParty"],
      },
      seriesChartTypes: [
        { colId: "dataComplete", chartType: "groupedColumn" },
        { colId: "thirdParty", chartType: "groupedColumn" },
      ],
      aggFunc: "sum",
      suppressChartRanges: true,

      chartContainer: document.querySelector("#myChart"),
    });
  }, []);
  useEffect(() => {
    changedPageName("Integrated Chart");
    changeColor("text-danger");
  }, []);
  return (
    <div>
      <div className="wrapper">
        <div style={{ height: 300 }} className={"ag-theme-alpine"}>
          <AgGridReact
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            columnMenu={"new"}
            enableCharts={true}
            popupParent={popupParent}
            chartThemeOverrides={chartThemeOverrides}
            onGridReady={onGridReady}
            onFirstDataRendered={onFirstDataRendered}
            treeData={true}
            autoGroupColumnDef={autoGroupColumnDef}
            getDataPath={getDataPath}
          />
        </div>
        <div
          id="myChart"
          className="ag-theme-alpine"
          style={{ height: 500, width: 300, margin: "auto" }}
        ></div>
      </div>
    </div>
  );
};

export default GridWithChart;

// import React,{useCallback,useMemo,useState} from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const initialRowData = [
//   { make: "Toyota", model: "Celica", price: 35000 },
//   { make: "Ford", model: "Mondeo", price: 32000 },
//   { make: "Porsche", model: "Boxster", price: 72000 },
// ];
// const GridWithChart = () => {

//   const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
//   const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

//   const [rowData, setRowData] = useState(initialRowData);
//     const columnDefs = [
//     { headerName: "Make", field: "make" },
//     { headerName: "Model", field: "model" },
//     { headerName: "Price", field: "price" },
//   ];

//     const defaultColDef = useMemo(() => {
//       return {
//         flex: 1,
//         minWidth: 100,
//         editable: true,
//         filter: "agTextColumnFilter",
//         floatingFilter: true,
//       };
//     }, []);
//     const popupParent = useMemo(() => {
//       return document.body;
//     }, []);
//     const chartThemeOverrides = useMemo(() => {
//       return {
//         common: {
//           axes: {
//             number: {
//               title: {
//                 enabled: true,
//                 formatter: (params) => {
//                   return params.boundSeries.map((s) => s.name).join(" / ");
//                 },
//               },
//             },
//           },
//         },
//         bar: {
//           series: {
//             fill:"teal",
//             strokeWidth: 2,
//             fillOpacity: 0.8,

//           },
//         },
//       };
//     }, []);

//     const onGridReady = useCallback((params) => {

//        params.api.setGridOption("rowData", rowData);
//     }, []);

//     const onFirstDataRendered = useCallback((params) => {
//       params.api.createRangeChart({
//         chartType: "groupedColumn",
//         cellRange: {
//           columns: ["model","price"],
//         },
//         seriesChartTypes: [
//           { colId: "model", chartType: "groupedColumn" },
//           { colId: "price", chartType: "groupedColumn" }, // Change chartType to 'bar' here

//         ],
//         aggFunc: "sum",
//         suppressChartRanges: true,
//         chartContainer: document.querySelector("#myChart"),
//       });
//     }, []);

//   return (
//     <div style={containerStyle}>

//       <div className="wrapper">
//       <i className="bi bi-airplane-engines-fill"></i>
//         <div
//           style={{height:300}}
//           className={
//             "ag-theme-alpine"
//           }
//         >
//           <AgGridReact
//             columnDefs={columnDefs}
//             defaultColDef={defaultColDef}
//             columnMenu={"new"}
//             enableCharts={true}
//             popupParent={popupParent}
//             chartThemeOverrides={chartThemeOverrides}
//             onGridReady={onGridReady}
//             onFirstDataRendered={onFirstDataRendered}
//           />
//         </div>
//         <div id="myChart" className="ag-theme-alpine" style={{height:200,width:"70%",margin:"auto"}}></div>
//       </div>
//     </div>
//   );
// };

// export default GridWithChart;
