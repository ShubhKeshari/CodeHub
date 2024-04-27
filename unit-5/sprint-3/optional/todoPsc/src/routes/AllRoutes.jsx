import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            //<PrivateRoute>
              <Dashboard />
            //</PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;
