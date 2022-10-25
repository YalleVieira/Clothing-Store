import React from "react";
import { Container } from "./about.style";
import Image from "../../assets/img/capa-.jpeg";

const About = () => {
  return (
    <Container>
      <div className="content-details">
        <h1>Made for every day, for everyone.</h1>
        <p>
          Owing to the claims of duty or the obligations of business it will
          frequently occur that pleasures have to be repudiated.
        </p>
        <button className="btn btn-shop">Shop Now</button>
      </div>
      <div className="content-img">
        <img src={Image} />
        <button className="btn btn-printed">Printed Shirts</button>
      </div>
    </Container>
  );
};

export default About;
