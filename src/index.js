import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { NotesProvider } from "../src/Context/NotesContext";
makeServer();

ReactDOM.render(
  <React.StrictMode>
   
      <NotesProvider>
        <Router>
          <App />
        </Router>
      </NotesProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
