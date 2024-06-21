import React from 'react';
import { AgChartsReact } from 'ag-charts-react';
import "../Chart-grid/chart.css"
const ChartComponent = () => {
  const data = [
    { val: 65, active: true, new: false },
    { val: 86, active: true, new: false },
    { val: 65, active: false, new: true },
    { val: 62, active: true, new: false },
    { val: 97, active: true, new: false },
    { val: 83, active: false, new: true },
  ];

  const options = {
    autoSize: true,
    series: [{
      type: 'bar',
      xKey: 'val',
      yKeys: ['active_90', 'active_80_89', 'active_less_80', 'new'],
      yNames: ['Active > 90', 'Active 80-89', 'Active < 80', 'New'],
      fills: ['#00FF00', '#FFFF00', '#FF0000', '#0000FF'],
      strokes: ['#000000'],
    }],
    data: data.map(item => ({
      ...item,
      active_90: item.active && item.val > 90 ? item.val : 0,
      active_80_89: item.active && item.val >= 80 && item.val <= 89 ? item.val : 0,
      active_less_80: item.active && item.val < 80 ? item.val : 0,
      new: item.new ? item.val : 0,
    })),
    legend: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <AgChartsReact options={options} />
    </div>
  );
};

export default ChartComponent;
