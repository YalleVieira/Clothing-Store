import React from "react";
import "./header.style";
import { RiShoppingBagFill } from "react-icons/ri";
import { Container } from "./header.style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container className="navbar-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <Link to="/">
        <h1>ColorWonder</h1>
      </Link>
      <Link to="/bag">
        <RiShoppingBagFill className="icon-bag" size="1.5em" />
      </Link>
    </Container>
  );
};

export default Header;
