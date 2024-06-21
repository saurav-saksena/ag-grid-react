// import React, {
//   useCallback,
//   useMemo,
//   useRef,
//   useState,
//   StrictMode,
// } from "react";
// import { createRoot } from "react-dom/client";
// import { AgGridReact } from "@ag-grid-community/react";
// import "@ag-grid-community/styles/ag-grid.css";
// import "@ag-grid-community/styles/ag-theme-quartz.css";
// import "./style.css";
// import {
//   AgChartThemeOverrides,
//   ColDef,
//   ColGroupDef,
//   FirstDataRenderedEvent,
//   GridApi,
//   GridOptions,
//   GridReadyEvent,
//   ModuleRegistry,
//   createGrid,
// } from "@ag-grid-community/core";
// import { AgAxisCaptionFormatterParams } from "ag-charts-community";
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
// import { GridChartsModule } from "@ag-grid-enterprise/charts-enterprise";
// import { MenuModule } from "@ag-grid-enterprise/menu";
// import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
// import { getData } from "./data";
// ModuleRegistry.registerModules([
//   ClientSideRowModelModule,
//   GridChartsModule,
//   MenuModule,
//   RowGroupingModule,
// ]);

// const GridExample = () => {
//   const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
//   const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

//   const [columnDefs, setColumnDefs] = useState<ColDef[]>([
//     { field: "day", maxWidth: 120 },
//     {
//       field: "month",
//       chartDataType: "category",
//       filterParams: {
//         comparator: (a: string, b: string) => {
//           const months: {
//             [key: string]: number;
//           } = {
//             jan: 1,
//             feb: 2,
//             mar: 3,
//             apr: 4,
//             may: 5,
//             jun: 6,
//             jul: 7,
//             aug: 8,
//             sep: 9,
//             oct: 10,
//             nov: 11,
//             dec: 12,
//           };
//           const valA = months[a.toLowerCase()];
//           const valB = months[b.toLowerCase()];
//           if (valA === valB) return 0;
//           return valA > valB ? 1 : -1;
//         },
//       },
//     },
//     { field: "rain", chartDataType: "series" },
//     { field: "pressure", chartDataType: "series" },
//     { field: "temp", chartDataType: "series" },
//     { field: "wind", chartDataType: "series" },
//   ]);
//   const defaultColDef = useMemo<ColDef>(() => {
//     return {
//       flex: 1,
//       minWidth: 100,
//       editable: true,
//       filter: true,
//       floatingFilter: true,
//     };
//   }, []);
//   const popupParent = useMemo<HTMLElement | null>(() => {
//     return document.body;
//   }, []);
//   const chartThemeOverrides = useMemo<AgChartThemeOverrides>(() => {
//     return {
//       common: {
//         axes: {
//           number: {
//             title: {
//               enabled: true,
//               formatter: (params: AgAxisCaptionFormatterParams) => {
//                 return params.boundSeries.map((s) => s.name).join(" / ");
//               },
//             },
//           },
//         },
//       },
//       bar: {
//         series: {
//           strokeWidth: 2,
//           fillOpacity: 0.8,
//         },
//       },
//       line: {
//         series: {
//           strokeWidth: 5,
//           strokeOpacity: 0.8,
//           marker: {
//             enabled: false,
//           },
//         },
//       },
//     };
//   }, []);

//   const onGridReady = useCallback((params: GridReadyEvent) => {

//     getData().then((rowData) => params.api.setGridOption("rowData", rowData));
//   }, []);

//   const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
//     params.api.createRangeChart({
//       chartType: "customCombo",
//       cellRange: {
//         columns: ["month", "rain", "pressure", "temp"],
//       },
//       seriesChartTypes: [
//         { colId: "rain", chartType: "groupedColumn", secondaryAxis: false },
//         { colId: "pressure", chartType: "line", secondaryAxis: true },
//         { colId: "temp", chartType: "line", secondaryAxis: true },
//       ],
//       aggFunc: "sum",
//       suppressChartRanges: true,
//       chartContainer: document.querySelector("#myChart") as any,
//     });
//   }, []);

//   return (
//     <div style={containerStyle}>
//       <div className="wrapper">
//         <div
//           style={gridStyle}
//           className={
//             "ag-theme-quartz"
//           }
//         >
//           <AgGridReact
//             columnDefs={columnDefs}
//             defaultColDef={defaultColDef}
//             enableRangeSelection={true}
//             columnMenu={"new"}
//             enableCharts={true}
//             popupParent={popupParent}
//             chartThemeOverrides={chartThemeOverrides}
//             onGridReady={onGridReady}
//             onFirstDataRendered={onFirstDataRendered}
//           />
//         </div>
//         <div id="myChart" className="ag-theme-quartz"></div>
//       </div>
//     </div>
//   );
// };
