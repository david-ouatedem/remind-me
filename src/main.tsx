import React from "react";
import ReactDOM from "react-dom/client";
import { ROUTER } from "./router/BrowserRouter.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER} />
  </React.StrictMode>
);
