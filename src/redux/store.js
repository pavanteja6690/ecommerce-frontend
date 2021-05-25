// import { createStore } from "redux";
// import rootreducer from "./reducers/rootreducer";

// const store = createStore(
//   rootreducer,
//   {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;
import { createStore } from "redux";
import rootreducer from "./reducers/rootreducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  whitelist: ["userreducer", "cartactionreducers"],
  storage,
};
// const persistedReducer = persistReducer(persistConfig, rootreducer);
const persistedReducer = persistReducer(persistConfig, rootreducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
export default store;
