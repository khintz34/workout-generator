import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavbarStore } from "../../stores/navbarStore";

const Header = () => {
  const navbarStatus = useNavbarStore((state) => state.navbarStatus);
  const changeStatus = useNavbarStore((state) => state.changeStatus);

  const handleToggle = () => {
    if (navbarStatus === true) {
      changeStatus(false);
    } else {
      changeStatus(true);
    }
  };

  const closeMenu = () => {
    changeStatus(false);
  };
  return (
    <div className="header flex-c-c">
      <div>
        <Link to="/" className="whiteLink">
          <h1 className="vh-font-3">Workout Generator</h1>
        </Link>
      </div>
      <div className="keep-right">
        {navbarStatus === false ? (
          <div onClick={handleToggle} id="rightHeaderSmall">
            <FontAwesomeIcon
              icon={faBars}
              className="whiteFont vh-font-2-5"
              onClick={handleToggle}
            />
          </div>
        ) : (
          <div onClick={handleToggle} className="xBtnContainer">
            <div className="iconWidth openBtn xBtn">X</div>
          </div>
        )}
      </div>
      <div id="sideNav" className="sideNav">
        <ul
          className={`menuNav ${
            navbarStatus === true ? " showMenu" : " hideNav"
          }`}
        >
          <Link to={"/"} className=" whiteFont">
            <li className="header-btn menuItem" onClick={closeMenu}>
              Home
            </li>
          </Link>
          <Link className=" whiteFont" to="/options">
            <li className="header-btn menuItem" onClick={closeMenu}>
              Options{" "}
            </li>
          </Link>

          <Link className="whiteFont " to="/about">
            <li className="header-btn menuItem" onClick={closeMenu}>
              About
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
