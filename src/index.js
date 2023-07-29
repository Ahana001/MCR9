import "./index.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
import { DataContextProvider } from "../src/Context/DataContext";
import { DisplayContextProvider } from "./Context/DisplayContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <DisplayContextProvider>
          <App />
        </DisplayContextProvider>
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
