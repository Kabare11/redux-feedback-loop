import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

// Action Types
export const ADD_CUSTOMER_INFO = "ADD_CUSTOMER_INFO";
export const CLEAR_CUSTOMER_INFO = "CLEAR_CUSTOMER_INFO";
export const ADD_FEELING = "ADD_FEELING";
export const ADD_UNDERSTANDING = "ADD_UNDERSTANDING";
export const ADD_COMMENTS = "ADD_COMMENTS";
export const ADD_SUPPORTED = "ADD_SUPPORTED";

// Action Creators
export const addCustomerInfo = (info) => ({
  type: ADD_CUSTOMER_INFO,
  payload: info,
});
export const clearCustomerInfo = () => ({ type: CLEAR_CUSTOMER_INFO });
export const addFeeling = (feeling) => ({
  type: ADD_FEELING,
  payload: feeling,
});
export const addUnderstanding = (understanding) => ({
  type: ADD_UNDERSTANDING,
  payload: understanding,
});
export const addComments = (comments) => ({
  type: ADD_COMMENTS,
  payload: comments,
});
export const addSupported = (feelingPost) => ({
  type: ADD_SUPPORTED,
  payload: feelingPost,
});

// Reducers
const customerInfo = (state = {}, action) => {
  switch (action.type) {
    case ADD_CUSTOMER_INFO:
      return { ...state, ...action.payload };
    case CLEAR_CUSTOMER_INFO:
      return {};
    default:
      return state;
  }
};

const cart = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    return [...state, action.payload];
  }
  if (action.type === "CLEAR_CART") {
    return [];
  }
  return state;
};

const feeling = (state = 0, action) => {
  if (action.type === ADD_FEELING) {
    return action.payload;
  }
  return state;
};

const understanding = (state = 0, action) => {
  if (action.type === ADD_UNDERSTANDING) {
    return action.payload;
  }
  return state;
};

const comments = (state = "", action) => {
  if (action.type === ADD_COMMENTS) {
    return action.payload;
  }
  return state;
};

const supported = (state = 0, action) => {
  if (action.type === ADD_SUPPORTED) {
    return action.payload;
  }
  return state;
};

const store = createStore(
  combineReducers({
    customerInfo,
    cart,
    feeling,
    understanding,
    comments,
    supported,
  }),
  applyMiddleware(logger)
);
/*
  store is just an object similar to:

  const store = {
    customerInfo: {},
    cart: []
  }
*/

export default store;