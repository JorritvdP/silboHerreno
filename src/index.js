import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./routes/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuienesSomos from "./routes/QuinesSomos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "quienessomos", element: <QuienesSomos /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
