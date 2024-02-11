import React, { useState } from "react";
import "./style.css";
import useLocalStorage from "./localStorge";

const DarkTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    console.log("Button Clicked");
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);

  return (
    <>
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>Hello World</p>
          <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
      </div>
    </>
  );
};

export default DarkTheme;
