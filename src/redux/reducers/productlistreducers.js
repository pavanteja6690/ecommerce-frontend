import { Actiontypes } from "../types";
const initialstate = [];
export const productlistreducers = (
  productslist = initialstate,
  { type, payload }
) => {
  switch (type) {
    case Actiontypes.SET_PRODUCT:
      return [...productslist, payload];
    case "Setproducts":
      return payload;
    default:
      return productslist;
  }
};
