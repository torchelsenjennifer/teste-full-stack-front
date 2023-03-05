import React from "react";
import App from "./routes";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";


//Chama o arquivo app para rederizar as informações na págnas

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
