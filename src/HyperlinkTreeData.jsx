import React, { useState, useEffect, useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";

const groupData = [
  {
    onHierarchy: ["Panther Lake Platform"],
    itemType: "Platform Family",
    dataComplete: 100,
    thirdParty: 71,
    id: 6536,
  },
  {
    onHierarchy: ["Panther Lake Platform", "Panther Lake P Plateform segment"],
    itemType: "Platform Segment",
    dataComplete: 90,
    thirdParty: 71,
    id: 7876,
  },
  {
    onHierarchy: [
      "Panther Lake Platform",
      "Panther Lake P Plateform segment",
      "Panther Lake P Premium Notebook clanshell convertible",
    ],
    itemType: "Product Variant",
    dataComplete: 85,
    thirdParty: 71,
    id: 7276,
  },
  {
    onHierarchy: [
      "Panther Lake Platform",
      "Panther Lake P Plateform segment",
      "Panther Lake P Premium Notebook clanshell convertible",
      "panther lake windows system software",
    ],
    itemType: "Product Variant",
    dataComplete: 75,
    thirdParty: 71,
    id: 7211,
  },
];
export default function HyperlinkTreeData() {
  const [rowDataNew, setRowDataNew] = useState(groupData);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Item Type",
      field: "itemType",
      width: 200,
      cellRenderer: function (params) {
        return (
          <a
            className="hyper--cell"
            href="https://www.ag-grid.com/react-data-grid/excel-export-hyperlinks/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            {params.value}{" "}
          </a>
        );
      },
    },
    { headerName: "Data Completeness", field: "dataComplete", width: 330 },
    { headerName: "3rd Party Compliance", field: "thirdParty" },
  ]);
  const defaultColDef = {
    resizable: false,
    floatingFilter: true,
    filter: "agTextColumnFilter",
    filterParams: { newRowsAction: "keep" },
  };
  // const rowGroupCallback = (params) => {
  //   return params.node.key;
  // };

  const getIndentClass = (params) => {
    var indent = 0;
    var node = params.node;
    while (node && node.parent) {
      indent++;
      node = node.parent;
    }
    return "indent-" + indent;
  };

  const autoGroupColumnDef = useMemo(() => {
    return {
      cellClass: getIndentClass,
      headerName: "Name(ID)",
      floatingFilter: true,
      filter: "agTextColumnFilter",
      minWidth: 550,
      cellRendererParams: {
        suppressCount: true,
      },

      // valueGetter: (params) => {
      //   if (params.data && params.data.onHierarchy && params.data.id) {
      //     return `${
      //       params.data.onHierarchy[params.data.onHierarchy.length - 1]
      //     } (${params.data.id})`;
      //   }
      //   return "";
      // },

      // valueGetter: (params) => {
      //   if (params.data && params.data.onHierarchy && params.data.id) {
      //     return <a href="">{params.data.onHierarchy[params.data.onHierarchy.length - 1]} {params.data.id}</a>;
      //   }
      //   return "";
      // },

      // cellRenderer: (params) => {
      //   if (params.data && params.data.onHierarchy && params.data.id) {
      //     return <a href="">{params.data.onHierarchy[params.data.onHierarchy.length - 1]} ({params.data.id})</a>;
      //   }
      //   return "";
      // },
    };
  }, []);

  const getDataPath = useCallback((data) => {
    return data.onHierarchy;
  }, []);
  const excelStyles = useMemo(() => {
    return [
      {
        id: "indent-1",
        alignment: {
          indent: 1,
        },
        // note, dataType: 'string' required to ensure that numeric values aren't right-aligned
        dataType: "String",
      },
      {
        id: "indent-2",
        alignment: {
          indent: 2,
        },
        dataType: "String",
      },
      {
        id: "indent-3",
        alignment: {
          indent: 3,
        },
        dataType: "String",
      },
      {
        id: "indent-4",
        alignment: {
          indent: 4,
        },
        dataType: "String",
      },
    ];
  }, []);
  return (
    <div className="ag-theme-alpine layout-grid-sty" style={{ height: 330 }}>
      <AgGridReact
        rowData={rowDataNew}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        autoGroupColumnDef={autoGroupColumnDef}
        treeData={true}
        getDataPath={getDataPath}
        excelStyles={excelStyles}
      />
    </div>
  );
}
