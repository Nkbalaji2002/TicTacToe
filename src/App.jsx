import React from "react";
import "./index.css";

import "primeicons/primeicons.css";
import TreeView from "./components/TreeView";
import { menus } from "./components/TreeView/data";

const App = () => {
  return (
    <>
      {/* <CustomTabs /> */}
      <TreeView menus={menus} />
    </>
  );
};

export default App;
