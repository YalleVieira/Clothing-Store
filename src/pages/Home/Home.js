import React from "react";
import NavBar from "../../components/NavBar/Header";
import destaque_home from "../../assets/img/destaque_home.jpeg";
import { Container } from "./home.style";
import Header from "../../components/NavBar/Header";
import About from "../../components/About/About";

const Home = () => {
  return (
    <Container>
      <Header />
      <About />
    </Container>
  );
};

export default Home;
