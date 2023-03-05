import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Chama o arquivo app para rederizar as informações na págnas

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
