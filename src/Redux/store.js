import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./RootReducer";
// import { createStore } from 'redux';

import createSagaMiddleware from "redux-saga";
import Saga from "./Saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootPersistConfig = {
  key: "root",
  storage,
  // whitelist: ["auth", "salesModule"]
};

// Create a persisted reducer
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const sagaMiddleware = createSagaMiddleware();

// Create the store with the persisted reducer
const Store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(Saga);

// Persist the store
export const persistor = persistStore(Store);

export default Store;

// export const persistorlogin = persistStore(loginStore);
