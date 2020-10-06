import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initialState = {
  location: "",
  covidData: "",
};

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  state: initialReducer,
});

export default rootReducer;
