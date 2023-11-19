import React from "react";

import ReactDOM from "react-dom/client";

import AppLayout from "hostApp/AppLayout";

import App from "./app";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppLayout>
    <App />
    </AppLayout>
  </React.StrictMode>,
);
