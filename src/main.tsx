import "./index.css";

import React, { Suspense } from "react";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  </React.StrictMode>
);
