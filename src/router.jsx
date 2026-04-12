import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardOverview from "./DashboardComponents/DashboardOverview";
import Patients from "./DashboardComponents/Patients";
import Appointments from "./DashboardComponents/Appointments";
import Analytics from "./DashboardComponents/Analytics";
import DoctorsPage from "./pages/DoctorPage";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Homelayout from "./Layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
       {
        path: "/",
        element: <Home />
      },
      {
        path: "doctors",
        element: <DoctorsPage />
      },
       {
        path: "about",
        element: <AboutPage />
      },
       {
        path: "services",
        element: <ServicesPage />
      }
    ]
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
      {
        path: "Analytics",
        element: <Analytics />
      },
    ],
  },
]);

export default router;