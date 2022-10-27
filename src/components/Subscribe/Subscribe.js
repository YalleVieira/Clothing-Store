import React from "react";
import { Container } from "./subcribe.style";
import Instagram from "../../assets/img/social-media/insta.png";
import Twitter from "../../assets/img/social-media/twitter.png";
import Email from "../../assets/img/social-media/email.png";
import Facebook from "../../assets/img/social-media/facebook.png";

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We are working on it.");
  };

  return (
    <Container>
      <h3>Don't miss the update</h3>
      <form className="form-subscribe">
        <input placeholder="Enter your email" />
        <button
          onClick={handleSubmit}
          className="btn btn-subscribe"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      <div className="social-media">
        <a href="">
          <img src={Instagram} />
        </a>
        <a href="">
          <img src={Twitter} />
        </a>
        <a href="">
          <img src={Email} />
        </a>
        <a href="">
          <img src={Facebook} />
        </a>
      </div>
    </Container>
  );
};

export default Subscribe;
