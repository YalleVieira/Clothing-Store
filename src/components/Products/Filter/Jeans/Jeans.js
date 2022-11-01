import React from "react";
import { connect } from "react-redux";
import Header from "../../../Header/Header";
import NavBar from "../../../NavBar/NavBar";
import Product from "../../../CardProduct/Product";
import { Container } from "../filter.style";
import { filterJeans } from "../service.api";

const Jeans = ({ listProducts }) => {
  const jeans = filterJeans(listProducts);

  const jeansAtual = jeans.filter((product) => {
    return product != undefined;
  });

  return (
    <Container>
      <Header />
      <NavBar />
      <div className="grid-area">
        {jeansAtual ? (
          jeansAtual.map((product) => {
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

export default connect(mapStateProps)(Jeans);
