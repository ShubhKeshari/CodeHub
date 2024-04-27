import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Navbar from '../components/Navbar'
import PrivateRoute from './PrivateRoute'
import Login from '../pages/Login'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute>
                <Dashboard />
            </PrivateRoute>} />
        </Routes>
    </div>
  )
}

export default AllRoutes