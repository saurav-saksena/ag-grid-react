import React, { useState } from "react";
import GridContext from "./GridContext";

const Store = (props) => {
  const [pageName, setPageName] = useState("Home");
  const [textColor, setTextColor] = useState("text-primary");
  const changedPageName = (newName) => {
    setPageName(newName);
  };
  const changeColor = (newColor) => {
    setTextColor(newColor);
  };
  return (
    <GridContext.Provider
      value={{ pageName, changedPageName, changeColor, textColor }}
    >
      {props.children}
    </GridContext.Provider>
  );
};
export default Store;
