import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleWare from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

/* we can add new middlewares to middlewares array and use each item from that array
   as an argument for applyMiddleware function using spread operator*/
const sagaMiddleware = createSagaMiddleWare();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
   middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
