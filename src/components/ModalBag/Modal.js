import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "./modal.style";
import { BsFillBagXFill } from "react-icons/bs";

function Modal({ productsFav }) {
  const calculoTotal = () => {
    var value = productsFav.map((product) => {
      return parseFloat(product.price);
    });
    var total = value.reduce(function (price, i) {
      return price + i;
    });
    return total;
  };

  return (
    <Container>
      {productsFav.length === 0 ? (
        <div className="modal-content">
          <p>Empty bag...</p>
          <BsFillBagXFill size="2em" className="bag-empty" />
        </div>
      ) : (
        <div className="modal-content">
          <p className="qtd-items">Itens in the bag: {productsFav.length}</p>
          {productsFav.map((product) => {
            return (
              <div className="product-bag" key={product.id}>
                <img className="img-product" src={product.image} />
                <div className="details-product">
                  <p>{product.description}</p>
                  <span>$ {product.price}</span>
                </div>
              </div>
            );
          })}
          <div className="footer-modal">
            <span className="total">Total: $ {calculoTotal()}</span>
            <Link to="/bag">Go to bag</Link>
          </div>
        </div>
      )}
    </Container>
  );
}

const mapStateProps = (store) => ({
  productsFav: store.productReducer.productsFav,
});

export default connect(mapStateProps)(Modal);
