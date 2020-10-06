import axios from "axios";
import * as actionTypes from "./types";

export const setLocation = (location) => (dispatch) => {
  dispatch({ type: actionTypes.SET_LOCATION, payload: location });
};

export const getData = (state) => (dispatch) => {
  dispatch({ type: actionTypes.GET_DATA_START });
  axios
    .get(`https://api.covid19api.com/summary`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_DATA_SUCCESS,
        payload: res.data.Countries,
      });
    })
    .catch((err) => {
      console.log("getData ERR", err);
      dispatch({
        type: actionTypes.GET_DATA_FAILURE,
        payload: err.message,
      });
    });
};
