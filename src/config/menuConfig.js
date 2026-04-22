import {
  LayoutGrid,
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
} from "lucide-react";

export const menuByRole = {
  doctor: [
    { name: "Dashboard", icon: LayoutGrid, href: "/dashboard/overview" },
    { name: "Patients", icon: Users, href: "/dashboard/patients" },
    { name: "Appointments", icon: Calendar, href: "/dashboard/appointments" },
    { name: "Messages", icon: MessageSquare, href: "/dashboard/messages" },
    { name: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
  ],

  patient: [
    {
      name: "Dashboard",
      icon: LayoutGrid,
      href: "/dashboard/patientdashboard",
    },
    {
      name: "My Appointments",
      icon: Calendar,
      href: "/dashboard/myappointments",
    },
    {
      name: "Book Consultation",
      icon: MessageSquare,
      href: "/dashboard/bookconsultation",
    },
  ],

  admin: [
    { name: "Dashboard", icon: LayoutGrid, href: "/dashboard/admindashboard" },
    { name: "All Users", icon: Users, href: "/dashboard/usermanagement" },
    { name: "Appointments", icon: Calendar, href: "/dashboard/appointments" },
    { name: "Analytics", icon: BarChart3, href: "/dashboard/adminanalytics" },
  ],
};
