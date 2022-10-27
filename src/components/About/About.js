import React from "react";
import { Container } from "./about.style";
import Image from "../../assets/img/capa-.jpeg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleShop = () => {
    navigate("/shop");
  };

  const handleInfo = () => {
    alert("We are working on it.");
  };

  return (
    <Container>
      <div className="content-details">
        <h1>Made for every day, for everyone.</h1>
        <p>
          Owing to the claims of duty or the obligations of business it will
          frequently occur that pleasures have to be repudiated.
        </p>
        <button onClick={handleShop} className="btn btn-shop">
          Shop Now
        </button>
      </div>
      <div className="content-img">
        <img src={Image} />
        <button onClick={handleInfo} className="btn btn-printed">
          Printed Shirts
        </button>
      </div>
    </Container>
  );
};

export default About;
