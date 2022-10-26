import React from "react";
import { Container } from "./footer.style";

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <h1>ColorWonder</h1>
        <p>
          Which is the same as saying through shrinking from toil and pain.
          These cases are perfectly simple and easy to distiguish
        </p>
        <div className="content-adress">
          <h4>Adress</h4>
          <p>HS B26, Horton Ford Rd, Eidson, TN, 37731</p>
        </div>
        <p>Inspired by webestica design.</p>
      </div>
      <div className="footer-nav">
        <a href="">Home</a>
        <a href="">Shop</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Subscribe</a>
        <a href="">New Collection</a>
        <a href="">We Recommend</a>
      </div>
    </Container>
  );
};

export default Footer;
