import React from "react";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./choice.css";

const Choice = (props) => {
  const getDisplay = () => {
    return { placeholder };
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-input">
        <div className="dropdown-selected-value">Select...</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            {" "}
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;

{
  /* <div className="dropdown-container">
<div className="dropdown-input">
  <div className="dropdown-selected-value">Select...</div>
  <div className="dropdown-tools">
    <div className="dropdown-tool">{faChevronDown}asdfsd</div>
  </div>
</div>
</div> */
}

{
  /* <h2>{props.title}</h2>
<select id={props.for} name={props.for} className="choiceSelect">
  {props.list.map((value, index) => {
    return (
      <option value={value} key={`keyOption-${index}-${value}`}>
        {value}
      </option>
    );
  })}
</select> */
}
