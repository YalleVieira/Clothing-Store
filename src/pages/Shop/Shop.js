import React from "react";
import Product from "../../components/CardProduct/Product";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Products from "../../components/Products/Products";

const Shop = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Products />
      <Footer />
    </>
  );
};

export default Shop;
