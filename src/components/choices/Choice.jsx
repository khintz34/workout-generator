import React from "react";
import Header from "../header/Header";

const Choice = (props) => {
  return (
    <div className="choice-container">
      <label className="whiteOutline">{props.title}</label>
    </div>
  );
};

export default Choice;
