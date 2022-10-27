import { PRODUCT_ACTION_TYPES } from "./product.types";

export const addProductBag = (product) => {
  return {
    type: PRODUCT_ACTION_TYPES.SET_PRODUCT_ADD,
    payload: product,
  };
};

export const loadProduct = (product) => {
  return {
    type: PRODUCT_ACTION_TYPES.SET_PRODUCT_LOAD,
    payload: product,
  };
};

export const removeProductBag = (product) => {
  return {
    type: PRODUCT_ACTION_TYPES.SET_PRODUCT_DEL,
    payload: product,
  };
};

export const addProductFav = (product) => {
  return {
    type: PRODUCT_ACTION_TYPES.SET_PRODUCT_FAV,
    payload: product,
  };
};
