import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const element = (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(element, rootElement);
} else {
  ReactDOM.render(element, rootElement);
}
