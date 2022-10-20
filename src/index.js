import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </CookiesProvider>
  </React.StrictMode>
);
