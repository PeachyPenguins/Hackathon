import axios from "axios";
import * as actionTypes from "./types";

export const setLocation = (location) => (dispatch) => {
  dispatch({ type: actionTypes.SET_LOCATION, payload: location });
};
