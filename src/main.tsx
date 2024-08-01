import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Recurrence from "./routes/recurrence";
import { routes } from "./routes/routes";
import ReactJsCron from "./routes/reactJsCron";
import ReactCronSchedule from "./routes/reactCronSchedule";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: routes.RECURRENCE.REACT_JS_CRON.url,
          element: <ReactJsCron />,
        },
        {
          path: routes.RECURRENCE.REACT_CRON_SCHEDULE.url,
          element: <ReactCronSchedule />,
        },
        {
          path: routes.RECURRENCE.REACT_RRULE_GENERATOR.url,
          element: <Recurrence />,
        },
      ],
    },
  ],
  { basename: "/react-lab/" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
