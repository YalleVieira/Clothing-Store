import React from "react";
import { Container } from "./gap.style";
import { connect } from "react-redux";
import { filterJeans } from "../service.api";

const Gap = ({ listProducts }) => {
  const jeans = filterJeans(listProducts);

  console.log(jeans);

  return <Container>Gap</Container>;
};

const mapStateProps = (store) => ({
  listProducts: store.productReducer.listProducts,
});

export default connect(mapStateProps)(Gap);
