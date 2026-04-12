import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardOverview from "./DashboardComponents/DashboardOverview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
    {
    path: "Dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/Dashboard",
        element: <DashboardOverview></DashboardOverview>
      }
    ]
  },
]);
export default router