// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  const defaultStyle = { color: "black" };
  const activeStyle = { color: "red" };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "lightgray",
        padding: "10px",
      }}
    >
      {listOfLinks.map((link) => (
        <NavLink
        //   style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
        
          key={link.to}
          to={link.to}
        >
          {link.displayText}
        </NavLink>
      ))}
    </div>
  );
}

export { Navbar };