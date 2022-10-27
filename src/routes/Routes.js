import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import BagPage from "../pages/Bag/BagPage";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bag" element={<BagPage />} />
        {/* <Route path="/short" element={} */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
