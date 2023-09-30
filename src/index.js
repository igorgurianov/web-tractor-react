import React from "react";
import App from "./App";
import { hydrate, render } from "react-dom";
import "./index.css";
// import ReactDOM, { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./services/store";

const APP = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// if (rootElement.hasChildNodes()) {
//   root.hydrate(APP);
// } else {
//   root.render(APP);
// }
