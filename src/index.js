import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./component/App";
import { createStore } from "redux";
import rootreducer from "./Reducer";
import { Provider } from "react-redux";

const store = createStore(rootreducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
