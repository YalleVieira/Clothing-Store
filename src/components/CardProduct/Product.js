import React from "react";
import { Container } from "./produtct.style";

const Product = ({ image, description }) => {
  return (
    <Container>
      <div className="container-img">
        <img src={image} />
      </div>
      <p>{description}</p>
      <span>$ 18.00 USD</span>
    </Container>
  );
};

export default Product;
