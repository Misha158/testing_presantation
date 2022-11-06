import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { ModalComponent } from "./testForModal/ModalComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ModalComponent />
  </React.StrictMode>
);
