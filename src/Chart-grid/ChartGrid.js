// import React,{useState,useEffect,useMemo} from "react";

// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import 'ag-grid-enterprise';
// import { AgChartsReact } from 'ag-charts-react';
// import "./chart.css"
// const rowData1=[
//   {name:"alderlake platform",id:"787847",Type:"Plateform Family",dataComplete:96,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"Ottaway, Brian R",division:"CCG",new:true,active:false},
//   {name:"tanker plateform",id:"84738",Type:"Plateform Family",dataComplete:78,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:" vans devols",division:"CCG",new:true,active:false},
//   {name:"devin platform",id:"3498439",Type:"Plateform Family",dataComplete:67,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"chris evans",division:"CCG",new:false,active:true},
//   {name:"azile platform",id:"39834",Type:"Plateform Family",dataComplete:40,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"Tom Hiddelston",division:"CCG",new:false,active:true},
//   {name:"grid sys platform",id:"9348743",Type:"Plateform Family",dataComplete:80,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"Robert Downey Jn.",division:"CCG",new:true,active:false},
//   {name:"am tzy platform",id:"03484387",Type:"Plateform Family",dataComplete:99,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"Elizabeth Olsen",division:"CCG",new:false,active:true},
//   {name:"super nova platform",id:"03482387",Type:"Plateform Family",dataComplete:83,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"Peter Quill",division:"CCG",new:false,active:true},
//   {name:"Hyper nova platform",id:"03982387",Type:"Plateform Family",dataComplete:55,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"James Topely",division:"CCG",new:true,active:false},
//   {name:"Infinix platform",id:"03472387",Type:"Plateform Family",dataComplete:33,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"Gal Gadot",division:"CCG",new:true,active:false},
// ]
// export default function ChartGrid() {

//   const [rowData, setRowData] = useState(rowData1 );

//   const filterParams = useMemo(() => ({
//     values: [
//       '<50%', // Custom filter option
//       '50-69%', // Custom filter option
//       '70-89%', // Custom filter option
//       '90-100%' // Custom filter option
//     ],
//     comparator: (filterValue, cellValue) => {
//       console.log("Filter Value:", filterValue);
//       console.log("Cell Value:", cellValue);
//       const parsedCellValue = parseFloat(cellValue);
//       console.log("Parsed Cell Value:", parsedCellValue);
//       if (isNaN(parsedCellValue)) {
//         // If cellValue is not a valid number, return false
//         return false;
//       }
//       if (filterValue === '<50%') {
//         return parsedCellValue < 50;
//       } else if (filterValue === '50-69%') {
//         return parsedCellValue >= 50 && parsedCellValue <= 69;
//       } else if (filterValue === '70-89%') {
//         return parsedCellValue >= 70 && parsedCellValue <= 89;
//       } else if (filterValue === '90-100%') {
//         return parsedCellValue >= 90 && parsedCellValue <= 100;
//       }
//       return false;
//     }
//   }), [])
//   const sideBarDef={ toolPanels: [
//     {
//       id: 'filters',
//       labelDefault: 'Filters',
//       labelKey: 'filters',
//       iconKey: 'filter',
//       toolPanel: 'agFiltersToolPanel',
//       toolPanelParams:{
//         suppressValues: false,
//       }
//     },
//     {
//       id: 'columns',
//       labelDefault: 'Columns',
//       labelKey: 'columns',
//       iconKey: 'columns',
//       toolPanel: 'agColumnsToolPanel',
//     },
//   ],
//   defaultToolPanel: 'filters',
// }

//     const rowHeight = 30;
//     const headerHeight = 40;

//     const colDefs = [

//             { headerName:"Name(ID)", field: "name", width:467, filter:"agTextColumnFilter",floatingFilter:true,

//             valueGetter: (params) => {
//               if (params.data && params.data.name && params.data.id) {
//                   return `${params.data.name} (${params.data.id})`;
//               }
//               return '';
//           },

//             },
//             {headerName:"Item Type", field: "Type",width:310,filter:"agTextColumnFilter"},
//             {headerName:"Data Completeness", field: "dataComplete",filter:"agTextColumnFilter",filterParams:filterParams,
//               cellStyle: (params) => {

//                 const completeness = parseFloat(params.value);
//                 if (completeness >= 90) {
//                   return { backgroundColor: 'lightgreen' ,color:"blue"};
//                 } else if (completeness >= 80 && completeness < 90) {
//                   return { backgroundColor: 'lightblue' ,color:"blue"};
//                 } else if (completeness >= 50 && completeness < 80) {
//                   return { backgroundColor: 'lightyellow',color:"blue" };
//                 }else{
//                   return {backgroundColor:"pink",color:"blue"}
//                 }
//               },

//             },
//             {headerName:"3rd Party Compliance", field: "partyCompliance" , cellRenderer: (params) => {
//               if(params.value){

//                 return params.value + "%";
//               }else{
//                 return ""
//               }
//             }  },
//             {headerName:"Export Compliance", field: "exportCompliance" , cellRenderer: (params) => {
//               return params.value + "%";
//             }  },
//             {headerName:"Intel Make Component", field: "intelMakeComponent" , cellRenderer: (params) => {
//               return params.value + "%";
//             }},
//             {headerName:"SW Component/Version", field: "swComponent_version" , cellRenderer: (params) => {
//               return params.value + "%";
//             }},
//             {headerName:"Ownership", field: "ownership" , cellRenderer: (params) => {
//               return params.value + "%";
//             }  },
//             {headerName:"Responisble Engineer", field:"responsibleEngineer"},
//             {headerName:"Divison", field:"division"},
//             {headerName:"new", field: "new", },
//             {headerName:"active", field: "active", },

//     ]

//   const defaultColDef = {
//     resizable: false,

//     floatingFilter: true,

//     filter: true,

//     suppressMenu: true,

//   };

//  const chartOptions = {
//    data: rowData1,
//    autoSize: true,
//    series: [{
//      type: 'bar',
//      xKey: 'name',
//     yKey: 'dataComplete',
//     fill:"#0054AE",
//       // Ensures bars are grouped for each category

//    },

// ],
//    legend: {
//      position: 'bottom',
//    },
//    title: {
//      text: '',
//    },

//  };

// console.log(rowData)
//   return (
//     <>
//     <div className="ag-theme-alpine layout-grid-sty" style={{ height: 300}}>
//  <AgGridReact

//         rowData={rowData}
//         columnDefs={colDefs}
//         rowHeight={rowHeight}
//         headerHeight={headerHeight}
//          defaultColDef={defaultColDef}
//         rowSelection="multiple"
//         pagination={true}
//         paginationPageSize={100}

//         tooltipShowDelay={500}
//         // onGridReady={onGridReady}
//         overlayNoRowsTemplate={'<span aria-live="polite" aria-atomic="true">No data available! Please search for other values</span>'}
//         enableCharts={true}

//         // sideBar={sideBarDef}

//       />

//         </div>
//         <div className="chart-container" style={{border:"1px solid red"}}>
//         <AgChartsReact options={chartOptions} />
//       </div>
//         </>
//   )
// }

import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext,
} from "react";
// import { groupData } from "../Nestedagriddata/GridExample";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { AgChartsReact } from "ag-charts-react"; // Import AG Charts
import "./chart.css";
import GridContext from "../ContextApi/GridContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const groupData = [
  {
    orgHierarchy: "Panther Lake Platform",
    itemType: "Platform Family",
    dataComplete: 100,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Ottaway, Brian R",
    division: "CCG",
    new: true,
    active: false,
    id: 10047640,
    icon: 1,
  },
  {
    orgHierarchy: "Panther Lake P Plateform segment",
    itemType: "Platform Segment",
    dataComplete: 83,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Emma Brooks",
    division: "CCG",
    new: false,
    active: true,
    id: 10047678,
    icon: 1,
  },
];
export default function ChartGrid() {
  const { changedPageName, changeColor } = useContext(GridContext);
  const [chartData, setChartData] = useState(groupData);
  const [gridApi, setGridApi] = useState(null);
  const [rowDataNew, setRowDataNew] = useState(groupData);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Name(Id)",
      value: "orgHierarchy",
      width: 400,
      cellRenderer: (params) => {
        return (
          <Link style={{ textDecoration: "none" }} to={"/groupgrid"}>
            <i className="bi bi-box text-dark m-2"></i>
            {params.data.orgHierarchy}({params.data.id})
          </Link>
        );
      },
    },
    { headerName: "Item Type", field: "itemType", width: 200 },
    {
      headerName: "Data Completeness",
      field: "dataComplete",
      width: 330,
      cellRenderer: (params) => {
        if (params.value) {
          return (
            <Link
              to={`/groupgrid2/${params.data.id}`}
              style={{ textDecoration: "none" }}
            >
              {params.value + "%"}
            </Link>
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
    {
      headerName: "3rd Party Compliance",
      field: "partyCompliance",
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
    { headerName: "Responisble Engineer", field: "responsibleEngineer" },
    { headerName: "Divison", field: "division" },
  ]);
  const defaultColDef = {
    resizable: false,
    floatingFilter: true,
    filter: "agTextColumnFilter",
    filterParams: { newRowsAction: "keep" },
  };

  // const autoGroupColumnDef = useMemo(() => {
  //   return {
  //     headerName: "Name(ID)",
  //     floatingFilter:true,filter:"agTextColumnFilter",
  //     minWidth: 550,

  //     cellRendererParams: {
  //       suppressCount: true,
  //     },

  //     valueGetter: (params) => {

  //         if (params.data && params.data.orgHierarchy && params.data.id) {
  //             return `${params.data.orgHierarchy[params.data.orgHierarchy.length-1]} (${params.data.id})`;
  //         }
  //         return '';
  //     },
  //   };
  // }, []);
  // const getDataPath = useCallback((data) =>

  //   {
  //   return data.orgHierarchy;

  // }, []);

  useEffect(() => {
    updateChartData();
  }, [gridApi]);
  useEffect(() => {
    changedPageName("Home");
    changeColor("text-primary");
  }, []);
  const filterParams = useMemo(
    () => ({
      values: ["<50%", "50-69%", "70-89%", "90-100%"],
      comparator: (filterValue, cellValue) => {
        console.log("Filter Value:", filterValue);
        console.log("Cell Value:", cellValue);
        const parsedCellValue = parseFloat(cellValue);
        console.log("Parsed Cell Value:", parsedCellValue);
        if (isNaN(parsedCellValue)) {
          return false;
        }
        if (filterValue === "<50%") {
          return parsedCellValue < 50;
        } else if (filterValue === "50-69%") {
          return parsedCellValue >= 50 && parsedCellValue <= 69;
        } else if (filterValue === "70-89%") {
          return parsedCellValue >= 70 && parsedCellValue <= 89;
        } else if (filterValue === "90-100%") {
          return parsedCellValue >= 90 && parsedCellValue <= 100;
        }
        return false;
      },
    }),
    []
  );
  const updateChartData = () => {
    // const rowData = gridApi?.api.getModel().rowsToDisplay.map(rowNode => rowNode.data);
    // console.log(rowData)
    // setChartData(rowData);
  };
  // console.log(chartData)
  // console.log(gridApi)

  const onGridReady = (params) => {
    setGridApi(params);
    // expandFilters(params, "make");
    params.api.getToolPanelInstance("filters").expandFilters();
  };

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
      },
    ],
    defaultToolPanel: "filters",
  };

  const rowHeight = 30;
  const headerHeight = 40;

  const rangeCounts = {
    new: { "90-100": 0, "70-89": 0, "50-69": 0, "<50": 0 },
    active: { "90-100": 0, "70-89": 0, "50-69": 0, "<50": 0 },
  };

  chartData.forEach((item) => {
    const rangeKey =
      item.dataComplete >= 90
        ? "90-100"
        : item.dataComplete >= 70
        ? "70-89"
        : item.dataComplete >= 50
        ? "50-69"
        : "<50";

    if (item.new) {
      rangeCounts["new"][rangeKey]++;
    }
    if (item.active) {
      rangeCounts["active"][rangeKey]++;
    }
  });

  const activeTotalCount = Object.values(rangeCounts["active"]).reduce(
    (acc, curr) => acc + curr,
    0
  );
  const newTotalCount = Object.values(rangeCounts["new"]).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const chartData1 = [
    { x: "Total", Active: activeTotalCount, New: newTotalCount },

    {
      x: "90-100%",
      Active: rangeCounts["active"]["90-100"],
      New: rangeCounts["new"]["90-100"],
    },
    {
      x: "70-89%",
      Active: rangeCounts["active"]["70-89"],
      New: rangeCounts["new"]["70-89"],
    },
    {
      x: "50-69%",
      Active: rangeCounts["active"]["50-69"],
      New: rangeCounts["new"]["50-69"],
    },
    {
      x: "<50%",
      Active: rangeCounts["active"]["<50"],
      New: rangeCounts["new"]["<50"],
    },
  ];
  console.log("saurav", chartData1);
  const chartOptions = {
    data: chartData1,
    autoSize: true,
    series: [
      {
        type: "bar",
        xKey: "x",
        yKey: "New",
        fill: "red",
      },
      {
        type: "bar",
        xKey: "x",
        yKey: "Active",
        fill: "#0099EC",
      },
    ],
    legend: {
      position: "bottom",
    },
    title: {
      text: "",
    },
  };

  return (
    <>
      <div className="ag-theme-alpine layout-grid-sty" style={{ height: 330 }}>
        <AgGridReact
          rowData={rowDataNew}
          columnDefs={columnDefs}
          rowHeight={rowHeight}
          headerHeight={headerHeight}
          defaultColDef={defaultColDef}
          rowSelection="single"
          pagination={true}
          paginationPageSize={100}
          tooltipShowDelay={500}
          onGridReady={onGridReady}
          overlayNoRowsTemplate={
            '<span aria-live="polite" aria-atomic="true">No data available! Please search for other values</span>'
          }
          enableCharts={true}
          onFilterChanged={updateChartData}
          onSortChanged={updateChartData}
          sideBar={sideBarDef}
          // sideBar={sideBarDef}
          // groupDefaultExpanded={-1}
          animateRows={true}
          // autoGroupColumnDef={autoGroupColumnDef}
          // groupUseEntireRow={true}
          groupDisplayType={"singleColumn"}
          // autoGroupColumnDef={autoGroupColumnDef}
          // treeData={true}
          // groupDefaultExpanded={-1}
          // sideBar={sideBarDef}
          // getDataPath={getDataPath}
        />
      </div>
      <div className="chart--container">
        <AgChartsReact options={chartOptions} />
      </div>
    </>
  );
}
