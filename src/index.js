require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@fontsource/karla/700.css";
import "./styles.css";

const root = createRoot(document.querySelector("#root"));
root.render(<App />)