import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faEnvelope,
  faHouse,
  faImages,
  faCircleInfo,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";
function Navbar({ showMenu, setShowMenu }) {
  //const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="navbar">
      <li className="navHome">
        <NavLink to="/" >
          <FontAwesomeIcon icon={faHouse} /> Home
        </NavLink>
      </li>
      
      <ul className={showMenu ? "navbar-menu show" : "navbar-menu"}>
        <li>
          <NavLink to="/gallery" >
            <FontAwesomeIcon icon={faImages} /> Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
          >
            <FontAwesomeIcon icon={faCircleInfo} /> About
          </NavLink>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default Navbar;
