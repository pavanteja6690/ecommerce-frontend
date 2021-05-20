//this is to store a variable to avoid use effect to be called again and again in home js
import { Actiontypes } from "../types";
const initialstate = 0;
export const cntreducer = (cnt = initialstate, { type, payload }) => {
  if (type === Actiontypes.FLAG_COUNTER) {
    return cnt + 1;
  }
  return cnt;
};
