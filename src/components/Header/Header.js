import React from "react";
import "./header.style";
import { RiShoppingBagFill } from "react-icons/ri";
import { Container } from "./header.style";

const Header = () => {
  return (
    <Container className="navbar-container">
      <div className="navbar">
        <a href="#">Home</a>
        <a className="link-shop" href="#">
          Shop
        </a>
        <a className="link-page" href="#">
          Pages
        </a>
      </div>
      <h1>ColorWonder</h1>
      <RiShoppingBagFill className="icon-bag" size="1.5em" />
    </Container>
  );
};

export default Header;
