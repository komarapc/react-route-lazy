import "./index.css";

import React, { Suspense } from "react";

import Loader from "./components/Loader.tsx";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  </React.StrictMode>
);
