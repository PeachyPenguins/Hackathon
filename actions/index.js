import axios from "axios";
import * as actionTypes from "./types";
import firebase from "../services/firebase";
const db = firebase.database();

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

export const getOrders = () => (dispatch) => {
  db.ref("/orders").on("value", (snap) => {
    let data = snap.val() ? snap.val() : {};
    let orders = Object.values(data);
    dispatch({ type: actionTypes.GET_ORDERS, payload: orders });
  });
};

export const addOrders = (order) => (dispatch) => {
  dispatch({ type: actionTypes.ADD_ORDERS });
  db.ref("/orders").push(order);
};

export const updateOrders = (order) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_ORDERS });
  db.ref("/orders").update({
    [id]: {
      order: order.name,
      done: !doneState,
    },
  });
};

export const clearOrders = () => (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_ORDERS });
  db.ref("/orders").remove();
};

export const authorized = () => (dispatch) => {
dispatch({type: actionTypes.AUTHORIZED});
}

export const notAuthorized = () => (dispatch) => {
dispatch({type: actionTypes.NOT_AUTHORIZED});
}