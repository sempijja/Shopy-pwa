import { type RouteConfig, index } from "@react-router/dev/routes";

export default [index("routes/home.tsx")] satisfies RouteConfig;
// app/routes.ts
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Root from "./root";
import Home from "./home";
import Onboarding from "./onboarding/onboarding";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "home", element: <Home /> },
      { path: "onboarding", element: <Onboarding /> }, // Add this line
    ],
  },
];

export default createBrowserRouter(routes);

