import React from "react";
import Product from "../CardProduct/Product";
import { Container } from "./recommend.style";
import Cap from "../../assets/img/products/bone.webp";

const Recommend = () => {
  const image = Cap,
    capDescription = "White brand logo printed visor cap";

  return (
    <Container>
      <h3>We Recommend</h3>
      <div className="grid-area">
        <Product image={image} description={capDescription} />
        <Product image={image} description={capDescription} />
        <Product image={image} description={capDescription} />
        <Product image={image} description={capDescription} />
        <Product image={image} description={capDescription} />
        <Product image={image} description={capDescription} />
        <Product image={image} description={capDescription} />
        <Product image={image} description={capDescription} />
      </div>
    </Container>
  );
};

export default Recommend;
