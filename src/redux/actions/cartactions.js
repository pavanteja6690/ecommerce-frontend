import { Actiontypes } from "../types";
// this is productlist action
export const setproduct = (product) => {
  return {
    type: Actiontypes.SET_PRODUCT,
    payload: product,
  };
};
// this is for stopping home from rerendering by fetching again and again bcoz of useeffect
export const flagcounter = (data) => {
  return {
    type: Actiontypes.FLAG_COUNTER,
    payload: data,
  };
};
// these are cart actions
export const addtocart = (product) => {
  return {
    type: Actiontypes.ADD_TO_CART,
    payload: product,
  };
};
export const removefromcart = (productid) => {
  return {
    type: Actiontypes.REMOVE_FROM_CART,
    payload: productid,
  };
};
export const increasecount = (id) => {
  return {
    type: Actiontypes.INCREASE_COUNT,
    payload: id,
  };
};
export const decreasecount = (id) => {
  return {
    type: Actiontypes.DECREASE_COUNT,
    payload: id,
  };
};
