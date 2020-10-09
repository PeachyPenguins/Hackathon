import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initialState = {
  loading: false,
  error: "",
  orders: [],
  currentOrder: null,
  done: false,
  isAuthenticated: false
};

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case actionTypes.AUTHORIZED:
      return {
        ...state,
        isAuthenticated: true,
      };
    case actionTypes.NOT_AUTHORIZED:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  state: initialReducer,
});

export default rootReducer;
