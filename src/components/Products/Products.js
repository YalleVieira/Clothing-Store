import React from "react";
import Product from "../CardProduct/Product";
import { connect } from "react-redux";
import { Container } from "./products.style";

const Products = ({ listProducts }) => {
  return (
    <Container>
      <div className="grid-area">
        {listProducts.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </Container>
  );
};

const mapStateProps = (store) => ({
  listProducts: store.productReducer.listProducts,
});

export default connect(mapStateProps)(Products);
