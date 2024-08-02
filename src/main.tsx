import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Recurrence from "./routes/recurrence";
import { routes } from "./routes/routes";
import ReactJsCron from "./routes/reactJsCron";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: routes.RECURRENCE.REACT_JS_CRON.url,

        element: <ReactJsCron />,
      },
      {
        path: routes.RECURRENCE.MORE.url,
        element: <Recurrence />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
