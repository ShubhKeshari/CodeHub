import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Gallery from "../components/Gallery";

import About from "../components/About";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
function AllRouter() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/gallery"
          element={<Gallery showMenu={showMenu} />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default AllRouter;
