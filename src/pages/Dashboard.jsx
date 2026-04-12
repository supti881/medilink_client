import { useState } from "react";
import Sidebar from "../DashboardComponents/Sidebar";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-50 h-full transform bg-white transition-transform duration-300 md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Section */}
      <div className="flex flex-col flex-1">

        {/* Mobile Header */}
        <div className="flex items-center justify-between bg-white p-4 shadow md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={26} />
          </button>

          <h1 className="font-semibold text-lg">Dashboard</h1>

          <div className="w-6" />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;