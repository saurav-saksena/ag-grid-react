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
import GridContext from "../ContextApi/GridContext";
import { Link } from "react-router-dom";
ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);
export const groupData = [
  {
    orgHierarchy: ["Panther Lake Platform"],
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
    orgHierarchy: ["Panther Lake Platform", "Panther Lake P Plateform segment"],
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
  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake P Plateform segment",
      "Panther Lake P Premium Notebook clanshell convertible",
    ],
    itemType: "Product Variant",
    dataComplete: 87,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Ava Thornton",
    division: "CCG",
    new: true,
    active: false,
    id: 10048249,
    icon: 1,
  },
  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake P Plateform segment",
      "Panther Lake P Premium Notebook clanshell convertible",
      "panther lake windows system software",
    ],
    itemType: "Product Variant",
    dataComplete: 92,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Isabella Chambers",
    division: "CCG",
    new: true,
    active: false,
    id: 10051032,
    icon: 2,
  },
  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake P Plateform segment",
      "Panther Lake P Premium Notebook clanshell convertible",
      "panther lake windows system software",
    ],
    itemType: "Product Variant",
    dataComplete: 92,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Charlie Fitzgerald",
    division: "CCG",
    new: false,
    active: true,
    id: 10051031,
    icon: 2,
  },
  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake P Plateform segment",
      "Panther Lake P Premium Notebook clanshell convertible",
      "panther lake p Linux system software",
    ],
    itemType: "Product Variant",
    dataComplete: 50,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Amelia Sullivan",
    division: "CCG",
    new: false,
    active: true,
    id: 10054247,
    icon: 2,
  },
  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake P Plateform segment",
      "panther lake P Hybrid FPGA",
    ],
    itemType: "Product Variant",
    dataComplete: 50,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "William Higgins",
    division: "CCG",
    new: true,
    active: false,
    id: 10053432,
    icon: 1,
  },
  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake P Plateform segment",
      "panther lake P previous",
    ],
    itemType: "Product Variant",
    dataComplete: 100,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Mia Lawrence",
    division: "CCG",
    new: false,
    active: true,
    id: 10053433,
    icon: 1,
  },
  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake P Plateform segment",
      "panther lake P virtual",
    ],
    itemType: "Product Variant",
    dataComplete: 80,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "George Shepherd",
    division: "CCG",
    new: true,
    active: false,
    id: 10053802,
    icon: 1,
  },
  {
    orgHierarchy: ["Panther Lake Platform", "Panther Lake U Plateform Segment"],
    itemType: "Platform Segment",
    dataComplete: 88,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Emily Watts",
    division: "CCG",
    new: false,
    active: true,
    id: 10048243,
    icon: 1,
  },
  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake U Plateform Segment",
      "Panther Lake U Mainstream Notebook Clamshell",
    ],
    itemType: "Product Variant",
    dataComplete: 100,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Noah Parsons",
    division: "CCG",
    new: true,
    active: false,
    id: 10048250,
    icon: 1,
  },
  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake U Plateform Segment",
      "Panther Lake U Mainstream Notebook Clamshell",
      "Panther Lake windows system software",
    ],
    itemType: "Product Variant",
    dataComplete: 100,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Grace Fletcher",
    division: "CCG",
    new: false,
    active: true,
    id: 10051032,
    icon: 2,
  },
  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake U Plateform Segment",
      "Panther Lake U Mainstream Notebook Clamshell",
      "Panther Lake windows system software",
    ],
    itemType: "Product Variant",
    dataComplete: 66,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Jacob Nixon",
    division: "CCG",
    new: true,
    active: false,
    id: 10051031,
    icon: 2,
  },
  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake U Plateform Segment",
      "Panther Lake U Mainstream Notebook Clamshell",
      "Panther Lake U Linux system software",
    ],
    itemType: "Product Variant",
    dataComplete: 48,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Lily Carr",
    division: "CCG",
    new: true,
    active: false,
    id: 10054069,
    icon: 2,
  },

  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake U Plateform Segment",
      "Paanther Lake U Chrome Platform Configuration",
    ],
    itemType: "Product Variant",
    dataComplete: 100,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Ethan Chambers",
    division: "CCG",
    new: false,
    active: true,
    id: 10052354,
    icon: 1,
  },
  {
    orgHierarchy: ["Panther Lake Platform", "Panther Lake H Platform Segment"],
    itemType: "Platform Segment",
    dataComplete: 100,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Charlotte Sharp",
    division: "CCG",
    new: true,
    active: false,
    id: 10059828,
    icon: 1,
  },
  {
    orgHierarchy: [
      "Panther Lake Platform",
      "Panther Lake H Platform Segment",
      "Panther Lake windows system software",
    ],
    itemType: "Product Variant",
    dataComplete: 66,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Chrish Hemsworth",
    division: "CCG",
    new: false,
    active: true,
    id: 10061050,
    icon: 2,
  },
  {
    orgHierarchy: ["Panther Lake zoom"],
    itemType: "zoom Family",
    dataComplete: 48,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Ottaway, Brian R",
    division: "CCG",
    new: true,
    active: false,
    id: 10063067,
    icon: 1,
  },
  {
    orgHierarchy: ["Panther Lake zoom", "Panther Lake P Plateform segment"],
    itemType: "Platform Segment",
    dataComplete: 90,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Emma Brooks",
    division: "CCG",
    new: true,
    active: false,
    id: 10065010,
    icon: 1,
  },
  {
    orgHierarchy: [
      "Panther Lake zoom",
      "Panther Lake P Plateform segment",
      "Panther Lake P Premium Notebook clanshell convertible",
    ],
    itemType: "Product Variant",
    dataComplete: 85,
    thirdParty: 71,
    exportCompliance: 100,
    intelMakeComponent: 100,
    swComponent_version: 95,
    ownership: 70,
    responsibleEngineer: "Ava Thornton",
    division: "CCG",
    new: false,
    active: true,
    id: 10069828,
    icon: 1,
  },
];

const GridExample = () => {
  const { changedPageName, changeColor } = useContext(GridContext);
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState(groupData);
  const [columnDefs, setColumnDefs] = useState([
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
  const rowGroupCallback = (params) => {
    return params.node.key;
  };

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
      headerName: "Name(ID)",
      cellClass: getIndentClass,
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
  const generateIndentStyles = (numIndents) => {
    const styles = [];
    for (let i = 1; i <= numIndents; i++) {
      styles.push({
        id: `indent-${i}`,
        alignment: {
          indent: i,
        },
        dataType: "String",
      });
    }
    return styles;
  };

  const excelStyles = useMemo(() => {
    return generateIndentStyles(10);
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
  useEffect(() => {
    changedPageName("Tree Data Hierarchy");
    changeColor("text-dark");
  }, []);
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
            sideBar={sideBarDef}
            getDataPath={getDataPath}
            excelStyles={excelStyles}
          />
        </div>
      </div>
    </div>
  );
};
export default GridExample;
