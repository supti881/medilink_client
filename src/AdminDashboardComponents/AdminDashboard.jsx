import React from "react";
import {
  Users,
  Calendar,
  AlertTriangle,
  Activity,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const AdminDashboard = () => {
  // Summary Stats for Admin
  const summaryCards = [
    {
      label: "Total Patients",
      value: "1,284",
      grow: "+12%",
      icon: <Users className="text-blue-600" />,
      bg: "bg-blue-50",
    },
    {
      label: "Active Appointments",
      value: "42",
      grow: "+4 today",
      icon: <Calendar className="text-emerald-600" />,
      bg: "bg-emerald-50",
    },
    {
      label: "Pending Approvals",
      value: "07",
      grow: "Action required",
      icon: <AlertTriangle className="text-amber-600" />,
      bg: "bg-amber-50",
    },
    {
      label: "System Uptime",
      value: "99.9%",
      grow: "Stable",
      icon: <Activity className="text-[#00402E]" />,
      bg: "bg-[#F0F7F4]",
    },
  ];

  return (
    <div className="p-8 bg-[#F8FAFB] min-h-screen font-sans">
      {/* Welcome Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#00402E]">Admin Overview</h1>
          <p className="text-slate-500">
            System status and clinical management dashboard.
          </p>
        </div>
        <div className="text-right">
          <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wide">
            ● System Live
          </span>
        </div>
      </div>

      {/* 4-Column Stat Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryCards.map((card, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm"
          >
            <div
              className={`${card.bg} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}
            >
              {card.icon}
            </div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
              {card.label}
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-slate-800">
                {card.value}
              </h3>
              <span className="text-[10px] font-bold text-emerald-600">
                {card.grow}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Section: Recent Activity / Pending Tasks */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h2 className="font-bold text-[#00402E]">Recent Registrations</h2>
            <button className="text-[#00402E] text-xs font-bold flex items-center gap-1 hover:underline">
              View All <ArrowRight size={14} />
            </button>
          </div>
          <div className="p-0">
            {[
              {
                name: "Marcus Wright",
                role: "Patient",
                time: "2 mins ago",
                status: "Verified",
              },
              {
                name: "Dr. Elena Rossi",
                role: "Doctor",
                time: "1 hour ago",
                status: "Pending Review",
              },
              {
                name: "Julianne Moore",
                role: "Patient",
                time: "3 hours ago",
                status: "Verified",
              },
              {
                name: "Kevin Hart",
                role: "Staff",
                time: "Yesterday",
                status: "Verified",
              },
            ].map((user, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {user.name}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {user.role} • {user.time}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-1 rounded-md ${
                    user.status === "Verified"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Section: Quick Access & Alerts */}
        <div className="space-y-6">
          {/* Action Card */}
          <div className="bg-[#00402E] p-6 rounded-2xl text-white shadow-lg">
            <h3 className="font-bold mb-2">Admin Quick Actions</h3>
            <p className="text-xs opacity-70 mb-4">
              Commonly used tools for management.
            </p>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-medium flex justify-between items-center">
                User Audit Log <ArrowRight size={14} />
              </button>
              <button className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-medium flex justify-between items-center">
                Backup Database <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Urgent Notifications Card */}
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h3 className="text-red-800 font-bold text-sm mb-3 flex items-center gap-2">
              <AlertTriangle size={16} /> Critical Alerts (03)
            </h3>
            <div className="space-y-3">
              <div className="text-[11px] text-red-600 font-medium pb-2 border-b border-red-200/50">
                ● 2 Patients flagged for medical history updates.
              </div>
              <div className="text-[11px] text-red-600 font-medium pb-2 border-b border-red-200/50">
                ● Subscription expiring in 4 days for Dr. Smith.
              </div>
              <div className="text-[11px] text-red-600 font-medium">
                ● High traffic detected on Appointment API.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
