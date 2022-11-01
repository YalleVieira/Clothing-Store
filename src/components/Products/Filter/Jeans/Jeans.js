import React from "react";
import { Container } from "./jeans.style";
import { connect } from "react-redux";
import Header from "../../../Header/Header";
import NavBar from "../../../NavBar/NavBar";
import Product from "../../../CardProduct/Product";
import { filterJeans } from "../service.api";

const Jeans = ({ listProducts }) => {
  const jeans = filterJeans(listProducts);

  console.log(jeans);
  return (
    <Container>
      <Header />
      <NavBar />
      <div className="grid-area">
        {jeans.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </Container>
  );
};

const mapStateProps = (store) => ({
  listProducts: store.productReducer.listProducts,
});

export default connect(mapStateProps)(Jeans);
