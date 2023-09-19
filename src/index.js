import React from "react";
import App from "./App";
import "./index.css";
import { hydrate, render } from "react-dom";
import ReactDOM, { createRoot } from "react-dom/client";
import { PopupContext } from "./context/PopupContext";
import { store } from "./services/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const APP = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  root.hydrate(APP);
} else {
  root.render(APP);
}
