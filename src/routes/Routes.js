import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import BagPage from "../pages/Bag/BagPage";
import Short from "../components/Products/Filter/Short/Short";
import T_Shirt from "../components/Products/Filter/T_Shirt/T_Shirt";
import Jeans from "../components/Products/Filter/Jeans/Jeans";
import Gap from "../components/Products/Filter/Gap/Gap";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bag" element={<BagPage />} />
        <Route path="/short" element={<Short />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/gap" element={<Gap />} />
        <Route path="/t_shirt" element={<T_Shirt />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
