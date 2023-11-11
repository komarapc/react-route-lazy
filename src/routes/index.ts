import About from "@/view/About";
import Home from "@/view/Home";
import NotFound from "@/view/404";
import Profile from "@/view/Profile";
import { createBrowserRouter } from "react-router-dom";

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
