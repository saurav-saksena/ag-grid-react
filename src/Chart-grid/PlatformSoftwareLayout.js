import React, { useState, useMemo, useCallback,  useRef, useContext, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { AgChartsReact } from "ag-charts-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import 'ag-grid-enterprise';
// import "./PlatformSoftwareLayout.css";
// import { groupData, columnData } from "../BOMInnerLayout/MockDataBom";
import { groupData } from "../Nestedagriddata/GridExample";
import "./chart.css"
import GridContext from "../ContextApi/GridContext";
const PlatformSoftwareLayout = () => {
  const {changedPageName,changeColor}=useContext(GridContext)
  // const initialRowData = [
  //   { make: "Toyota", model: "Celica", price: 35000 },
  //   { make: "Ford", model: "Mondeo", price: 32000 },
  //   { make: "Porsche", model: "Boxster", price: 72000 },
  // ];

  const [rowDataState, setRowDataState] = useState(groupData);
  const [chartData, setChartData] = useState(groupData);
  const [chartType, setChartType] = useState("bar");
  const gridRef=useRef()
  

  // const columnDefs = columnData;
  //   { headerName: "Make", field: "make" },
  //   { headerName: "Model", field: "model" },
  //   { headerName: "Price", field: "price" },
  // ];
  const [columnDefs, setColumnDefs] = useState([
     
    {headerName:"Item Type", field: "itemType",width:200  },
    {headerName:"Data Completeness", field: "dataComplete",width:330,
    cellRenderer: (params) => {
      if(params.value){

        return params.value + "%";
      }else{
        return ""
      }
    },
    
    cellStyle: (params) => {
     
      const completeness = parseFloat(params.value);
      if (completeness >= 90) {
        return { backgroundColor: 'lightgreen' ,color:"blue"};
      } else if (completeness >= 80 && completeness < 90) {
        return { backgroundColor: 'lightblue' ,color:"blue"};
      } else if (completeness > 50 && completeness < 80) {
        return { backgroundColor: 'lightyellow',color:"blue" };
      }else{
        return {backgroundColor:"pink",color:"blue"}
      }
    },
    
  },
  {headerName:"3rd Party Compliance", field: "partyCompliance" , cellRenderer: (params) => {
    if(params.value){

      return params.value + "%";
    }else{
      return ""
    }
  }  },
  {headerName:"Export Compliance", field: "exportCompliance" , cellRenderer: (params) => {
    return params.value + "%";
  }  },
  {headerName:"Intel Make Component", field: "intelMakeComponent" , cellRenderer: (params) => {
    return params.value + "%";
  }},
  {headerName:"SW Component/Version", field: "swComponent_version" , cellRenderer: (params) => {
    return params.value + "%";
  }},
  {headerName:"Ownership", field: "ownership" , cellRenderer: (params) => {
    return params.value + "%";
  }  },
  {headerName:"Responisble Engineer", field:"responsibleEngineer"},
  {headerName:"Divison", field:"division"},
    
  ]);
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

  // const onFilterChanged = (event) => {
  //   // debugger;
  //   const newData = event.api.getModel().rowsToDisplay.map((row) => row.data);
  //    setRowDataState(newData);
   
  //    setChartData(newData);
  // };
  // const onCellValueChanged = (event) => {
  //   debugger;
  //   const newData = event.api.getModel().rowsToDisplay.map((row) => row.data);
  //   setRowDataState(newData);
  //   setChartData(newData);
  // };

  const onRowSelected = (event) => {
    if (event.node.isSelected()) {
      setChartType("normalizedColumn");
    } else {
      setChartType("normalizedColumn");
    }
  };

  const onFirstDataRendered = useCallback((params) => {
    params.api.createCrossFilterChart({
      
      chartType: "normalizedColumn",
      
      cellRange: {
        columns: ["thirdParty",  "dataComplete"],
      },
      
      aggFunc: "sum",
   
      chartContainer: document.querySelector("#rangeChart"),
      
      
    });
  }, []);
  const chartThemeOverrides = useMemo(() => {
    return {
      
      common: {
        
         background: {
        // fill: "yellow",
         },
        axes: {
          number: {
            title: {
              enabled: true,
              formatter: (params) => {
                return params.boundSeries.map((s) => s.name).join(" / ");
              },
            },
          },
        },
        
      },
      bar: {
        
        series: {
          fill:"red",
          strokeWidth:5,
          fillOpacity: 1,
          strokeOpacity:0.2,
          cornerRadius:6 ,
          highlightStyle:{
            item:{
              fill:"red"
            }
          }
        },
      },
     
      // line: {
      //   series: {
      //     strokeWidth: 5,
      //     strokeOpacity: 0.2,
      //     fills:['red'],
      //     marker: {
      //       enabled: false,
      //     },
      //   },
      // },
    };
    
  }, []);
 useEffect(()=>{
  changedPageName("Platform Software")
  changeColor("text-warning")
 },[])

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
                return `${params.data.orgHierarchy[params.data.orgHierarchy.length - 1]} (${params.data.id})`;
            }
            return "";
        },

        cellRenderer: "agGroupCellRenderer", // Add this line to use the default cellRenderer for groups

        onCellClicked: (event) => { // onClick function
            console.log("Cell clicked:", event.value); // Example action, you can replace this with your desired action
        },
    };
}, []);

  const getDataPath = useCallback((data) => {
    return data.orgHierarchy;
  }, []);

  return (
    <div className="app-container" style={{height:400}}>
      <div className="ag-grid-container ag-theme-alpine" style={{height:300}}>
        <AgGridReact
        ref={gridRef}
          rowData={rowDataState}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          // onCellValueChanged={onCellValueChanged}
          // onFilterChanged={onFilterChanged}
          onRowSelected={onRowSelected}
          rowSelection="multiple"
          treeData={true}
          autoGroupColumnDef={autoGroupColumnDef}
          onFirstDataRendered={onFirstDataRendered}
          getDataPath={getDataPath}
          enableCharts={true}
          chartThemeOverrides={chartThemeOverrides}
        />
      </div>
      <div id="rangeChart" className="ag-chart-container" style={{height:200}}></div>
    </div>
  );
};
export default PlatformSoftwareLayout;