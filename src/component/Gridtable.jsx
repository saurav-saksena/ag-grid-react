
import React,{useRef,useState,useCallback,useMemo} from 'react'
import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import "./gridtable.css"
import 'ag-grid-enterprise';




export default function Gridtable() {
   
     const gridRef = useRef();
  

        const [rowData, setRowData] = useState([
          { make: "Tesla", model: "Model Y", price: 64950, electric: true },
          { make: "Ford", model: "F-Series", price: 33850, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: true },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: true },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: true },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
          
        ]);
   
      
        const [colDefs, setColDefs] = useState([
          { field: "make" ,filter:true,floatingFilter: true,suppressFiltersToolPanel: true, tooltipField: "model",rowGroup: true, hide: true},
          { field: "model",floatingFilter: true,  filter: "agTextColumnFilter",          
cellRenderer: function(params) {
  return <a className='hyper--cell' href="https://www.ag-grid.com/react-data-grid/excel-export-hyperlinks/" target="_blank" rel="noreferrer"> {params.value} </a>
            },},
          { field: "price",filter:true,floatingFilter: true, aggFunc: "sum" },
          { field: "electric",filter:true,floatingFilter: true }
        ]);
        const autoGroupColumnDef = useMemo(() => {
          return {
            headerName: "Model",
            minWidth: 300,
            floatingFilter:true
          };
        }, []);
          const paginationPageSizeSelector = [1,2,3,5,14];

          const onBtExport = useCallback(() => {
            const performExport = async () => {
              const spreadsheets = [];
              //set a filter condition ensuring no records are returned so only the header content is exported
              await gridRef.current.api.setColumnFilterModel("athlete", {
                values: [],
              });
              gridRef.current.api.onFilterChanged();
              //custom content for cover page
              spreadsheets.push(
                gridRef.current.api.getSheetDataForExcel({
                  prependContent: [  
                    {
                      cells: [
                        {
                          styleId: "coverHeading",
                          mergeAcross: 3,
                          data: { value: "AG Grid", type: "String" },
                        },
                      ],
                    },
                    {
                      cells: [
                        {
                          styleId: "coverHeading",
                          mergeAcross: 3,
                          data: { value: "", type: "String" },
                        },
                      ], 
                    },
                    {
                      cells: [
                        {
                          styleId: "coverText",
                          mergeAcross: 3,
                          data: {
                            value:
                              "Data shown lists Olympic medal winners for years 2000-2012",
                            type: "String",
                          },
                        },
                      ],
                    },
                    {
                      cells: [
                        {
                          styleId: "coverText",
                          data: {
                            value:
                              "This data includes a row for each participation record - athlete name, country, year, sport, count of gold, silver, bronze medals won during the sports event",
                            type: "String",
                          },
                        },
                      ],
                    },
                  ],
                  processHeaderCallback: () => "",
                  sheetName: "cover",
                }),
              );
              //remove filter condition set above so all the grid data can be exported on a separate sheet
              await gridRef.current.api.setColumnFilterModel("athlete", null);
              gridRef.current.api.onFilterChanged();
              spreadsheets.push(gridRef.current.api.getSheetDataForExcel());
              gridRef.current.api.exportMultipleSheetsAsExcel({
                data: spreadsheets,
                fileName: "ag-grid.xlsx",
              });
            };
            performExport();
          }, []);
  return (
    <>
    <div style={{backgroundColor:"black",color:"white"}}>Gridtable
 <div
  className="ag-theme-quartz" 
  style={{ height: 400 }} 
 >


   <AgGridReact
   ref={gridRef}
       rowData={rowData}
       columnDefs={colDefs}
       pagination={true}
       paginationPageSize={10}
       paginationPageSizeSelector={paginationPageSizeSelector}
      //  sideBar={"filters"}
      sideBar={['columns', 'filters']}
      filter={'agSetColumnFilter'}
      autoGroupColumnDef={autoGroupColumnDef}
       tooltipShowDelay={500}
       groupDisplayType={"singleColumn"}
          showOpenedGroup={true}
      
   />
 </div>
    </div>
    <button className='excel--button' onClick={onBtExport}>export to excel</button>
    </>
  )
}


// import React from 'react';
// import { AgChartsReact } from 'ag-charts-react';

// export default function Gridtable() {
//     const options = {
//         data: [
//             { make: 'Toyota', model: 'Celica', price: 35000 },
//             { make: 'Toyota', model: 'Celica', price: 35001 },
//             { make: 'Ford', model: 'Mondeo', price: 32000 },
//             { make: 'Porsche', model: 'Boxster', price: 72000 },
//             { make: 'Porsche', model: 'Cayman', price: 67000 },
//             { make: 'Ford', model: 'Fiesta', price: 22000 },
//         ],
//         series: [{
//           type: 'bar',
//             xKey: 'make',
//             yKey: 'price',
//             label: {
//                 enabled: true,
//             },
//             // Custom tooltip
//             tooltipRenderer: function(params) {
//                 const { xKey, yKey } = params;
//                 return `<b>${xKey}</b>: $${yKey}`;
//             }
//         }],
//         legend: {
//             enabled: true,
//         },
//         title: {
//             text: 'Car Prices by Make',
//         },
//     };

//     return (
//         <div style={{ height: 400 }}>
//             <AgChartsReact options={options} />
//         </div>
//     );
// }

