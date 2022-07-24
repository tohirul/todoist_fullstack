import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { FaMoon, FaRegMoon } from "react-icons/fa";
// import { CgMoon } from "react-icons/cg";
const Header = () => {
  return (
    <header className="header" id="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaMoon />
              <FaRegMoon />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
