
// import React from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

// const MyGrid = () => {
   
   

//     return (
//         <div className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
//             <AgGridReact
//                 columnDefs={columnDefs}
//                 autoGroupColumnDef={autoGroupColumnDef}
//                 rowData={rowData}
              
//                 animateRows={true}
               
//             />
//             hello
//         </div>
//     );
// };

// export default MyGrid;



// import React from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

// const MyGrid = () => {
//     const columnDefs = [
//         { 
//             headerName: 'Name(ID)',
//             field: 'name',
//             valueGetter: (params) => {
//                 if (params.data && params.data.name && params.data.id) {
//                     return `${params.data.name} (${params.data.id})`;
//                 }
//                 return '';
//             },
//             rowGroup: true,
//             hide:true,
//             floatingFilter: true // Enable filtering for the grouped column
//         },
//         { field: 'Type', enableFilter: true },
//         { field: 'dataComplete', enableFilter: true },
//         { field: 'partyCompliance', enableFilter: true },
//         { field: 'exportCompliance', enableFilter: true },
//         { field: 'intelMakeComponent', enableFilter: true },
//         { field: 'swComponent_version', enableFilter: true },
//         { field: 'ownership', enableFilter: true },
//         { field: 'responsibleEngineer', enableFilter: true },
//         { field: 'division', enableFilter: true },
//         { field: 'new', enableFilter: true },
//         { field: 'active', enableFilter: true }
//     ];

//     const autoGroupColumnDef = {
//         headerName: 'Name(ID)',
//         field: 'name',
//         cellRenderer: 'agGroupCellRenderer',
        
//         floatingFilter: true, // Enable filtering for the grouped column
//         resizable: true
//     };

//     const rowData=[
//         {name:"alderlake platform",id:"787847",Type:"Plateform Family",dataComplete:96,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"Ottaway, Brian R",division:"CCG",new:true,active:false},
//         {name:"tanker plateform",id:"84738",Type:"Plateform Family",dataComplete:78,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:" vans devols",division:"CCG",new:true,active:false},
//         {name:"devin platform",id:"3498439",Type:"Plateform Family",dataComplete:67,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"chris evans",division:"CCG",new:false,active:true},
//         {name:"azile platform",id:"39834",Type:"Plateform Family",dataComplete:40,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"Tom Hiddelston",division:"CCG",new:false,active:true},
//         {name:"grid sys platform",id:"9348743",Type:"Plateform Family",dataComplete:80,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"Robert Downey Jn.",division:"CCG",new:true,active:false},
//         {name:"am tzy platform",id:"03484387",Type:"Plateform Family",dataComplete:99,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"Elizabeth Olsen",division:"CCG",new:false,active:true},
//         {name:"super nova platform",id:"03482387",Type:"Plateform Family",dataComplete:83,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"Peter Quill",division:"CCG",new:false,active:true},
//         {name:"Hyper nova platform",id:"03982387",Type:"Plateform Family",dataComplete:55,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"James Topely",division:"CCG",new:true,active:false},
//         {name:"Infinix platform",id:"03472387",Type:"Plateform Family",dataComplete:33,partyCompliance:71,exportCompliance:100,intelMakeComponent:100,swComponent_version:95,ownership:70,responsibleEngineer:"Gal Gadot",division:"CCG",new:true,active:false},
//     ]

//     return (
//         <div className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
//             <AgGridReact
//                 columnDefs={columnDefs}
//                 autoGroupColumnDef={autoGroupColumnDef}
//                 rowData={rowData}
//                 groupDefaultExpanded={-1}
//                 animateRows={true}
//                 groupUseEntireRow={true} // Enable filtering on grouped column
//             />
//         </div>
//     );
// };

// export default MyGrid;
