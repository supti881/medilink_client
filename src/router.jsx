import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardOverview from "./DashboardComponents/DashboardOverview";
import Patients from "./DashboardComponents/Patients";
import Appointments from "./DashboardComponents/Appointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      {
        path: "patients",
        element: <Patients />,
      },
      {
        path: "Appointments",
        element: <Appointments />,
      },
    ],
  },
]);

export default router;