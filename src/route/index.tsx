import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router";
import App from "@pages/app/App";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />
  }
]

const router = createBrowserRouter(routes);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}