import React from "react";
import { Container } from "./newCollection.style";

const NewCollection = ({ title1, title2, text, image }) => {
  return (
    <Container>
      <div className="collection-details">
        <div className="content-title">
          <h3>{title1}</h3>
          <h3>{title2}</h3>
        </div>
        <p>{text}</p>
        <button className="btn btn-shop">Shop Now</button>
      </div>
      <img src={image} />
    </Container>
  );
};

export default NewCollection;
