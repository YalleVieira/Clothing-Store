import React from "react";
import { connect } from "react-redux";
import Product from "../../components/CardProduct/Product";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { Container } from "./bagPage.style";
import { BsFillBagXFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function BagPage({ productsFav }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <Header />
      <NavBar />
      {productsFav.length === 0 ? (
        <div id="content-empty">
          <p>Empty bag...</p>
          <button onClick={handleBack} className="btn btn-back">
            Back
          </button>
        </div>
      ) : (
        <div className="grid-area">
          {" "}
          {productsFav.map((product) => {
            return <Product product={product} />;
          })}
        </div>
      )}
    </Container>
  );
}

const mapStateProps = (store) => ({
  productsFav: store.productReducer.productsFav,
});

export default connect(mapStateProps)(BagPage);
