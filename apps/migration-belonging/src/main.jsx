import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <HelmetProvider>
        <BrowserRouter basename="/migration-belonging">
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </RecoilRoot>
  </React.StrictMode>
);
