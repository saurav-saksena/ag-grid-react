import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import {
  ChartToolPanelsDef,
  ColDef,
  ColGroupDef,
  FirstDataRenderedEvent,
  GetChartToolbarItems,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ModuleRegistry,
  createGrid,
} from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { GridChartsModule } from "@ag-grid-enterprise/charts-enterprise";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  GridChartsModule,
  MenuModule,
  RowGroupingModule,
]);

function createGroupedBarChart(params, selector, columns) {
  params.api.createRangeChart({
    chartContainer: document.querySelector(selector),
    cellRange: {
      rowStartIndex: 0,
      rowEndIndex: 4,
      columns,
    },
    suppressChartRanges: true,
    chartType: "groupedBar",
  });
}

function createPieChart(params, selector, columns) {
  params.api.createRangeChart({
    chartContainer: document.querySelector(selector),
    cellRange: { columns },
    suppressChartRanges: true,
    chartType: "pie",
    aggFunc: "sum",
    chartThemeOverrides: {
      common: {
        padding: {
          top: 20,
          left: 10,
          bottom: 30,
          right: 10,
        },
        legend: {
          position: "right",
        },
      },
    },
  });
}

const Chart = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "30%", width: "100%" }), []);

  const [columnDefs, setColumnDefs] = useState([
    { field: "country", width: 150, chartDataType: "category" },
    { field: "group", chartDataType: "category" },
    { field: "gold", chartDataType: "series" },
    { field: "silver", chartDataType: "series" },
    { field: "bronze", chartDataType: "series" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
    };
  }, []);
  const chartToolPanelsDef = useMemo(() => {
    return { panels: [] };
  }, []);
  const popupParent = useMemo(() => {
    return document.body;
  }, []);
  const getChartToolbarItems = useCallback(() => [], []);

  const onGridReady = useCallback((params) => {
    getData().then((rowData) => params.api.setGridOption("rowData", rowData));
  }, []);

  const onFirstDataRendered = useCallback((event) => {
    createGroupedBarChart(event, "#chart1", ["country", "gold", "silver"]);
    createPieChart(event, "#chart2", ["group", "gold"]);
    createPieChart(event, "#chart3", ["group", "silver"]);
  }, []);

  return (
    <div style={containerStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div style={gridStyle} className={"ag-theme-quartz"}>
          <AgGridReact
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            enableRangeSelection={true}
            enableCharts={true}
            chartToolPanelsDef={chartToolPanelsDef}
            popupParent={popupParent}
            getChartToolbarItems={getChartToolbarItems}
            onGridReady={onGridReady}
            onFirstDataRendered={onFirstDataRendered}
          />
        </div>
        <div
          id="chart1"
          className="my-chart"
          style={{ flex: "1 1 auto", overflow: "hidden", height: "30%" }}
        ></div>
        <div
          style={{
            display: "flex",
            flex: "1 1 auto",
            overflow: "hidden",
            height: "30%",
            gap: "8px",
          }}
        >
          <div
            id="chart2"
            className="my-chart"
            style={{ flex: "1 1 auto", overflow: "hidden", width: "50%" }}
          ></div>
          <div
            id="chart3"
            className="my-chart"
            style={{ flex: "1 1 auto", overflow: "hidden", width: "50%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
