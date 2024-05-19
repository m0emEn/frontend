import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import axios from "axios";
const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.baseURL = "https://ecommerce-backend-wfya.onrender.com";
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
