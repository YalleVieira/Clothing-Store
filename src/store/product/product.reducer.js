import { act } from "react-dom/test-utils";
import { productList } from "../../productData";
import { PRODUCT_ACTION_TYPES } from "./product.types";

const INITIAL_STATE = {
  listProducts: productList,
  productsFav: [],
  selectedProduct: {},
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_ACTION_TYPES.SET_PRODUCT_ADD:
      return {
        ...state,
        listProducts: [...state.listProducts, action.payload],
      };
    case PRODUCT_ACTION_TYPES.SET_PRODUCT_DEL:
      return {};

    case PRODUCT_ACTION_TYPES.SET_PRODUCT_FAV:
      return {
        ...state,
        productsFav: [...state.productsFav, action.payload],
      };
    case PRODUCT_ACTION_TYPES.SET_PRODUCT_LOAD:
      return {
        ...state,
        selectedProduct: action.product,
      };
    default:
      return state;
  }
};
