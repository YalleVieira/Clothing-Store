import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./navbar.style";

const NavBar = () => {
  return (
    <Container>
      <Link to="/t_shirt">T-shirts</Link>
      <Link to="/jeans">Jeans</Link>
      <Link to="/short">Shorts</Link>
      <Link to="/gap">Gap</Link>
    </Container>
  );
};

export default NavBar;
