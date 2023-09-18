import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ contact: Reducer });

const middleware = [thunk, logger]; // Agrega el middleware de Redux Logger

const Store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production', // Habilita Redux DevTools en desarrollo
});

export default Store;