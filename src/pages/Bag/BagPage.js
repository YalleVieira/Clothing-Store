import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import { Container } from "./bagPage.style";
import { useNavigate } from "react-router-dom";

function BagPage({ productsFav }) {
  const navigate = useNavigate();

  const calculoTotal = () => {
    var value = productsFav.map((product) => {
      return parseFloat(product.price);
    });
    var total = value.reduce(function (price, i) {
      return price + i;
    });
    return total;
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <Header />
      {productsFav.length === 0 ? (
        <div id="content-empty">
          <p>Empty bag...</p>
          <button onClick={handleBack} className="btn btn-back">
            Back
          </button>
        </div>
      ) : (
        <div className="content-product">
          {" "}
          <div className="">
            {productsFav.map((product) => {
              return (
                <div className="card-product">
                  <img src={product.image} />
                  <p>{product.description}</p>
                  <span>R$ {product.price}</span>
                </div>
              );
            })}
          </div>
          <div className="total-products">
            <p>Total items: {productsFav.length}</p>
            <p>Amount: R$ {calculoTotal()}</p>
          </div>
        </div>
      )}
    </Container>
  );
}

const mapStateProps = (store) => ({
  productsFav: store.productReducer.productsFav,
});

export default connect(mapStateProps)(BagPage);
