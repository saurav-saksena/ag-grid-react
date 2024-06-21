import React, { useState } from "react";

const CustomFilterPanel = ({ applyFilter }) => {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleApplyFilter = () => {
    applyFilter(filterText);
  };

  return (
    <div className="custom-filter-panel">
      <input
        type="text"
        value={filterText}
        onChange={handleFilterChange}
        placeholder="Enter filter text"
      />
      <button onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  );
};

export default CustomFilterPanel;
