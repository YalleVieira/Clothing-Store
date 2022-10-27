import React from "react";
import { Container } from "./description.style";
import { RiLeafFill } from "react-icons/ri";
import { GiGinkgoLeaf, GiLotus } from "react-icons/gi";

const Description = () => {
  return (
    <Container>
      <h3>
        Everything we do <GiLotus className="icon-purple" size=".8em" /> is
        influenced by our shoppers.{" "}
        <GiGinkgoLeaf className="icon-green" size=".8em" /> We believe in good
        times <RiLeafFill className="icon-orange" size=".8em" /> and good vibes.
        Get into a club!
      </h3>
    </Container>
  );
};

export default Description;
