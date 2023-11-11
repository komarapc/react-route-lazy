import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const About = lazy(() => import("@/view/About"));
const Home = lazy(() => import("@/view/Home"));
const NotFound = lazy(() => import("@/view/404"));
const Profile = lazy(() => import("@/view/Profile"));

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    ErrorBoundary: NotFound,
  },
  {
    path: "about",
    Component: About,
  },
  {
    path: "profile",
    Component: Profile,
  },
]);
