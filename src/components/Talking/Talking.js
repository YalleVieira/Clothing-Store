import React from "react";
import { Container } from "./talking.style";

const Talking = () => {
  return (
    <Container>
      <div className="container-talking">
        <h3 id="title">Look Who's Talking...</h3>
        <div className="content-talking">
          <div className="talking-slogan">
            <p>
              "But who has any right to find fault with a man who chooses to
              enjoy a pleasure that has."
            </p>
            <h2>vertrio</h2>
          </div>
          <div className="talking-slogan">
            <p>
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium."
            </p>
            <h2>happenz</h2>
          </div>
          <div className="talking-slogan">
            <p>
              "No one rejects, dislikes, or avoids pleasures itself, because it
              is pleasure, but because."
            </p>
            <h2>Augey</h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Talking;
