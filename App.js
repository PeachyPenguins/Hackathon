import React from "react";
import Home from "./components/Home";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export default function App() {
  // Using thunk middleware for asynchronous calls
  const middleware = [thunk];
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
