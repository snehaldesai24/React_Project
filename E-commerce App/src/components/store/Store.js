import {legacy_createStore as createStore, applyMiddleware,combineReducers } from "redux";
import LoginReducer from "../reducer/LoginReducer";
import ProductsReducer from "../reducer/ProductReducer";
import logger from "redux-logger";

//multiple redux will stored
const combinedReducer = combineReducers({LoginReducer, ProductsReducer});
let store = createStore(combinedReducer, applyMiddleware(logger));

export default store;