import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

/* we can add new middlewares to middlewares array and use each item from that array
   as an argument for applyMiddleware function using spread operator*/
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
