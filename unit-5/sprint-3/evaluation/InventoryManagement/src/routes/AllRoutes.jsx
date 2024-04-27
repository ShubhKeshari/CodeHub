import React from 'react';
import { Route, Routes } from "react-router-dom";
import ProductListPage from '../pages/ProductListPage';
import LowInventoryPage from '../pages/LowInventoryPage';
function AllRoutes({product}) {
  return (
    <Routes>
        <Route path="/products" element={<ProductListPage product={product} />} />
        <Route path="/inventory" element={<LowInventoryPage />} />
    </Routes>
  );
}

export default AllRoutes