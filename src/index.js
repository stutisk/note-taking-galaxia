import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
makeServer();

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Router>
    <App />
    </Router>
    
    {/* </BrowserRouter>    */}
  </React.StrictMode>,
  document.getElementById("root")
);
