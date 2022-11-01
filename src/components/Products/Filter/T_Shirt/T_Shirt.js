import React from "react";
import { connect } from "react-redux";
import Header from "../../../Header/Header";
import NavBar from "../../../NavBar/NavBar";
import Product from "../../../CardProduct/Product";
import { Container } from "../filter.style";
import { filterShirt } from "../service.api";

const T_Shirt = ({ listProducts }) => {
  const shirt = filterShirt(listProducts);

  const shirtAtual = shirt.filter((product) => {
    return product != undefined;
  });

  console.log(shirtAtual);

  return (
    <Container>
      <Header />
      <NavBar />
      <div className="grid-area">
        {shirtAtual.length != 0 ? (
          shirtAtual.map((product) => {
            return <Product product={product} key={product.id} />;
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

export default connect(mapStateProps)(T_Shirt);
