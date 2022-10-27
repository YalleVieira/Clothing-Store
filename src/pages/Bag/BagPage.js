import React from "react";
import { connect } from "react-redux";
import Product from "../../components/CardProduct/Product";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { Container } from "./bagPage.style";

function BagPage({ productsFav }) {
  return (
    <Container>
      <Header />
      <NavBar />
      <div className="grid-area">
        {productsFav.length === 0 ? (
          <div id="bag-empty">
            <p>Empty bag!</p>
          </div>
        ) : (
          productsFav.map((product) => {
            return <Product product={product} />;
          })
        )}
      </div>
    </Container>
  );
}

const mapStateProps = (store) => ({
  productsFav: store.productReducer.productsFav,
});

export default connect(mapStateProps)(BagPage);
