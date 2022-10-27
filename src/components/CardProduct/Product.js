import React from "react";
import { Container } from "./produtct.style";
import { RiShoppingBagFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  addProductBag,
  addProductFav,
} from "../../store/product/product.action";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddBag = (e) => {
    e.preventDefault();
    dispatch(addProductFav(product));
  };

  return (
    <Container>
      <img className="img-product" src={product.image} />
      <div className="details-product">
        <div className="text-product">
          <p>{product.description}</p>
          <span>$ {product.price} USD</span>
        </div>
        <RiShoppingBagFill onClick={handleAddBag} className="icon-bag" />
      </div>
    </Container>
  );
};

export default Product;
