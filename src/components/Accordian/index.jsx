import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setenableMultipleSelection] = useState(false);
  const [multiple, setmultiple] = useState([]);
  //

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);

    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    console.log("Enabled Multi Selected");
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setmultiple(cpyMultiple);
  };

  console.log(selected, multiple);

  return (
    <>
      <div className="acc-wrapper">
        <button
          onClick={() => setenableMultipleSelection(!enableMultipleSelection)}
        >
          Enable Mutli Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    enableMultipleSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultipleSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="acc-content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="acc-content">{dataItem.answer}</div>
                    )}

                {/* {selected === dataItem.id
                  ? multiple.indexOf(dataItem.id) !==1
                    -1(<div className="acc-content">{dataItem.answer}</div>)
                  : null} */}
              </div>
            ))
          ) : (
            <div>No Data Found</div>
          )}
        </div>
      </div>
      {/* <h1>Accordian Component</h1> */}
    </>
  );
};

export default Accordian;
