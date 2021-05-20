// import { cartactionreducers } from "./cartactionreducers";
// import { productlistreducers } from "./productlistreducers";
// import { combineReducers } from "redux";
// import { cntreducer } from "./cntreducer";
// import { userreducer } from "./userreducer";

// const rootreducer = combineReducers({
//   cartactionreducers,
//   productlistreducers,
//   cntreducer,
//   userreducer,
// });
// export default rootreducer;
import { cartactionreducers } from "./cartactionreducers";
import { productlistreducers } from "./productlistreducers";
import { combineReducers } from "redux";
import { cntreducer } from "./cntreducer";
import { userreducer } from "./userreducer";

const rootreducer = combineReducers({
  cartactionreducers,
  productlistreducers,
  cntreducer,
  userreducer,
});
export default rootreducer;
