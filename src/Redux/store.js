
import { createStore, applyMiddleware, compose } from "redux";



import rootReducer from "./RootReducer";

import createSagaMiddleware from "redux-saga";
import Saga from "./Saga";



const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
    rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(Saga);
export default Store;

// export const persistorlogin = persistStore(loginStore);