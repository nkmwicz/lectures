import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";
import { HelmetProvide } from "react-helmet-async";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <HelmetProvide>
        <BrowserRouter basename="/digital-history">
          <App />
        </BrowserRouter>
      </HelmetProvide>
    </RecoilRoot>
  </React.StrictMode>
);
