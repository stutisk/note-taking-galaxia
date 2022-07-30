import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { NotesProvider } from "../src/Context/NotesContext";
import { AuthProvider } from "../src/Context/AuthContext";
import { ArchieveProvider } from "./Context/ArchieveContext";
import { ModalProvider } from "./Context/ModalContext";
import { TrashProvider } from "./Context/TrashContext";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <Router>
        <AuthProvider>
          <ArchieveProvider>
            <ModalProvider>
              <TrashProvider>
                <App />
              </TrashProvider>
            </ModalProvider>
          </ArchieveProvider>
        </AuthProvider>
      </Router>
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
