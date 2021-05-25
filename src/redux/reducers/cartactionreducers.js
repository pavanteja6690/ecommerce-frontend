import { Actiontypes } from "../types";

const initialstate = [];

export const cartactionreducers = (
  cartitems = initialstate,
  { type, payload }
) => {
  switch (type) {
    case Actiontypes.ADD_TO_CART:
      let newcart = [...cartitems];
      let index = cartitems.findIndex((ele) => ele.id === payload.data.id);
      if (index !== -1) {
        newcart[index].count++;
        return newcart;
      } else {
        let a = payload.data;
        a.count = 1;
        return [...cartitems, a];
      }

    case Actiontypes.REMOVE_FROM_CART:
      return [...cartitems].filter((ele) => ele.id !== payload);

    case Actiontypes.INCREASE_COUNT:
      let inde = cartitems.findIndex((ele) => ele.id === payload);
      let newcart1 = [...cartitems];
      newcart1[inde].count++;
      return newcart1;

    case Actiontypes.DECREASE_COUNT:
      let ind = cartitems.findIndex((ele) => ele.id === payload);
      let newcart2 = [...cartitems];
      newcart2[ind].count--;
      if (newcart2[ind].count === 0) {
        return newcart2.filter((ele) => ele.id !== payload);
      }
      return newcart2;
    case "EmptyCartSignout":
      return [];
    case "Fillcartsignin":
      let newusercart = payload;
      return newusercart;
    // case "updatingcartonrefresh":
    //   if (payload == undefined) return [];
    //   return payload;
    default:
      return cartitems;
  }
};
