import React, { useState } from "react";
import { Rating } from "primereact/rating";
import "./style.css";

export default function Star_Rating() {
  const [value, setValue] = useState(null);

  const handleRateChange = (e) => {
    console.log(e.value);
    setValue(e.value);
  };

  return (
    <div className="card flex justify-content-center">
      <Rating
        value={value}
        onChange={handleRateChange}
        stars={10}
        cancel={false}
        className="custom-rating"
      />
    </div>
  );
}
