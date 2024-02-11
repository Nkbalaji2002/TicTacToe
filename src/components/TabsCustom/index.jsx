import React from "react";
import Tabs from "./tab";
import "./style.css";

const RandomComponent = () => {
  return <h1>Some Random Content</h1>;
};

const CustomTabs = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <h1>This is content for Tab 1</h1>,
    },
    {
      label: "Tab 2",
      content: <h2>This is content for Tab 2</h2>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return (
    <>
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </>
  );
};

export default CustomTabs;
