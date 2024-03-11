import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SNMTUiContextProvider } from "@snmt-react-ui/core";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SNMTUiContextProvider value={{ locale: "ru", theme: "dark" }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SNMTUiContextProvider>
  </React.StrictMode>
);
