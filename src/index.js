require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@fontsource/karla/700.css";
import "@fontsource/inter/400.css";
import "./styles.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import gameOnReducer from "./features/gameOnSlice";
import diceReducer from "./features/diceSlice";
import timeReducer from "./features/timeSlice";
import rollsCountReducer from "./features/rollsCountSlice";

const store = configureStore({
    reducer: {
        gameOn: gameOnReducer,
        dice: diceReducer,
        time: timeReducer,
        rollsCount: rollsCountReducer
    }
})  

const root = createRoot(document.querySelector("#root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
