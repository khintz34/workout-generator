import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header flex-c-c">
      <div>
        <Link to="/" className="whiteLink">
          <h1 className="vh-font-3">Workout Generator</h1>
        </Link>
      </div>
      <div className="keep-right">
        <FontAwesomeIcon icon={faBars} className="whiteFont vh-font-2-5" />
      </div>
    </div>
  );
};

export default Header;
