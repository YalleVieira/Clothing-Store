import React from "react";
import { Container } from "./home.style";
import Header from "../../components/NavBar/Header";
import About from "../../components/About/About";
import Description from "../../components/Description/Description";
import Recommend from "../../components/Recommend/Recommend";
import ShopAll from "../../assets/img/shop-all.jpeg";

const Home = () => {
  return (
    <Container>
      <Header />
      <About />
      <Description />
      <Recommend />
      <div className="shop-all">
        <a href="">
          <img src={ShopAll} />
        </a>
      </div>
    </Container>
  );
};

export default Home;
