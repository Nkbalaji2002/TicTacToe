import React, { useEffect, useState } from "react";
import "./style.css";

const RandomColor = () => {
  const [typeOfColor, settypeOfColor] = useState("hex");
  const [color, setcolor] = useState("#000");

  const randomColorUtiltiy = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtiltiy(hex.length)];
    }

    setcolor(hexColor);
  };

  const handleCreateRandomRGBColor = () => {
    const r = randomColorUtiltiy(256);
    const g = randomColorUtiltiy(256);
    const b = randomColorUtiltiy(256);

    setcolor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRGBColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <button onClick={() => settypeOfColor("hex")}>Create HEX color</button>
        <button onClick={() => settypeOfColor("rgb")}>Create RGB color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRGBColor
          }
        >
          Generate Random Color
        </button>

        <div className="showColor">
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h3>{color}</h3>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
