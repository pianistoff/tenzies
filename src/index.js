require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.scss";
import { Provider } from "react-redux";
import store from "./store/storeConfig";

const root = createRoot(document.querySelector("#root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
