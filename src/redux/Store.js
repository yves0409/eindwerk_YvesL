// import { createStore } from "redux";
// //import combinedReducers from "./reducers";
// import AuthReducer from "./reducers/AuthReducer";
// //import thunk from "redux-thunk";

// const store = createStore(
//   AuthReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { createStore, compose, applyMiddleware } from "redux";
import combinedReducers from "./reducers";

import thunk from "redux-thunk";

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
