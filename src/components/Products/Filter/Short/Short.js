import React from "react";
import { connect } from "react-redux";
import Product from "../../../CardProduct/Product";
import Header from "../../../Header/Header";
import NavBar from "../../../NavBar/NavBar";
import { filterShort } from "../service.api";
import { Container } from "../filter.style";

const Short = ({ listProducts }) => {
  const short = filterShort(listProducts);

  const shortAtual = short.filter((product) => {
    return product != undefined;
  });

  return (
    <Container>
      <Header />
      <NavBar />
      <div className="grid-area">
        {shortAtual ? (
          shortAtual.map((product) => {
            return <Product product={product} />;
          })
        ) : (
          <div>There are no products of this type.</div>
        )}
      </div>
    </Container>
  );
};

const mapStateProps = (store) => ({
  listProducts: store.productReducer.listProducts,
});

export default connect(mapStateProps)(Short);
