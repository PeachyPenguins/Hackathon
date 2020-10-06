import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initialState = {
  location: "",
  covidData: [],
  loading: false,
  error: "",
};

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case actionTypes.GET_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        covidData: action.payload,
      };
    case actionTypes.GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  state: initialReducer,
});

export default rootReducer;
