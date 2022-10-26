import React from "react";
import { Container } from "./home.style";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Description from "../../components/Description/Description";
import Recommend from "../../components/Recommend/Recommend";
import NewCollection from "../../components/NewCollection/NewCollection";

import ImageCollection from "../../assets/img/new-collection.png";
import ShopAll from "../../assets/img/shop-all.jpeg";
import NavBar from "../../components/NavBar/NavBar";
import Talking from "../../components/Talking/Talking";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const title1 = "Bold Colors",
    title2 = "Vibrant collection",
    description =
      "The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures";

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
      <NavBar />
      <NewCollection
        title1={title1}
        title2={title2}
        text={description}
        image={ImageCollection}
      />
      <Talking />
      <Subscribe />
      <Footer />
    </Container>
  );
};

export default Home;
