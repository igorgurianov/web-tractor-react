import React from "react";
import App from "./App";
import "./index.css";
import { hydrate, render } from "react-dom";

const APP = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
