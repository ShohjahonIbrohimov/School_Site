import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./routes";
import "antd/dist/antd.css";
import "./styles/main.css";

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById("root")
);
