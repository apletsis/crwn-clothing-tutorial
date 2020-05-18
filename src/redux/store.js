import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

/* we can add new middlewares to middlewares array and use each item from that array
   as an argument for applyMiddleware function using spread operator*/
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
   middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
