import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";

// using "ReactDom.render" no longer works as React has changed from 2022
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
