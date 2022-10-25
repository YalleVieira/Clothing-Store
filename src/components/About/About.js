import React from "react";
import { Container } from "./about.style";
import Image from "../../assets/img/about.jpg";

const About = () => {
  return (
    <Container>
      <div className="content-details">
        <h1>Feito para todo dia, para todos</h1>
        <p>
          owing to the claims of duty or the obligations of business it will
          frequently occur that pleasures have to be repudiated
        </p>
        <button>Shop Now</button>
      </div>
      <div className="content-img">
        <img src={Image} />
        <button>Printed Shirts</button>
      </div>
    </Container>
  );
};

export default About;
