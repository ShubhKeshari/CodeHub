import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  const links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Dashboard", link: "/dashboard" },
  ];


  const activeStyle= {
    color: "red",
    fontWeight: "bold",
    textDecoration : "none"
  }

  return <div style={{display: "flex", gap: "20px"}}>
    {
        links.map((el)=>{
            return  <NavLink key={el.id} to={el.link} 
            style={({ isActive })=> isActive ? activeStyle : {color: "black", textDecoration : "none"}}>{el.name}</NavLink>
        
         })
    }
  </div>;
};

export default Navbar;
