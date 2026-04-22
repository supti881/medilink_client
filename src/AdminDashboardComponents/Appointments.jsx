import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  MoreVertical,
  Search,
  CheckCircle,
  AlertCircle,
  User,
} from "lucide-react";

const Appointments = () => {
  // Mock Data - Connect to your MERN Backend
  const [appointments] = useState([
    {
      id: 1,
      patient: "Sarah Jenkins",
      doctor: "Dr. Smith",
      date: "Oct 24, 2024",
      time: "09:30 AM",
      type: "Post-op",
      status: "Confirmed",
    },
    {
      id: 2,
      patient: "Robert Chen",
      doctor: "Dr. Smith",
      date: "Oct 24, 2024",
      time: "10:15 AM",
      type: "Hypertension",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Alice Vane",
      doctor: "Dr. Miller",
      date: "Oct 24, 2024",
      time: "11:00 AM",
      type: "General Checkup",
      status: "Cancelled",
    },
    {
      id: 4,
      patient: "James Wu",
      doctor: "Dr. Smith",
      date: "Oct 24, 2024",
      time: "01:30 PM",
      type: "Consultation",
      status: "Confirmed",
    },
  ]);

  return (
    <div className="p-8 bg-[#F8FAFB] min-h-screen font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#00402E]">
            Appointment Schedule
          </h1>
          <p className="text-sm text-slate-500">
            Overview of all clinical consultations and telehealth blocks.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" /> Download Schedule
          </button>
          <button className="bg-[#00402E] text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-[#002d20] transition-all">
            + New Appointment
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            label: "Total Today",
            value: "24",
            icon: <CalendarIcon />,
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
          {
            label: "Pending Approval",
            value: "05",
            icon: <AlertCircle />,
            color: "text-amber-600",
            bg: "bg-amber-50",
          },
          {
            label: "Completed",
            value: "12",
            icon: <CheckCircle />,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4"
          >
            <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
              {React.cloneElement(stat.icon, { size: 20 })}
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Table Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-slate-50 flex justify-between items-center bg-white">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Filter by patient or doctor..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[#00402E]/10 focus:border-[#00402E] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 text-slate-600">
              All
            </button>
            <button className="px-3 py-1.5 text-xs font-medium rounded-lg hover:bg-slate-50 text-slate-500 transition-all">
              Telehealth
            </button>
            <button className="px-3 py-1.5 text-xs font-medium rounded-lg hover:bg-slate-50 text-slate-500 transition-all">
              In-Person
            </button>
          </div>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50/50">
              <th className="px-6 py-4">Patient</th>
              <th className="px-6 py-4">Assigned Doctor</th>
              <th className="px-6 py-4">Date & Time</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {appointments.map((appt) => (
              <tr
                key={appt.id}
                className="hover:bg-[#F0F7F4]/40 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="font-semibold text-slate-800">
                    {appt.patient}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                      <User size={12} className="text-slate-500" />
                    </div>
                    {appt.doctor}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-slate-700">
                    {appt.date}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={12} /> {appt.time}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500 italic">
                  {appt.type}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                      appt.status === "Confirmed"
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                        : appt.status === "Pending"
                          ? "bg-amber-50 text-amber-600 border border-amber-100"
                          : "bg-red-50 text-red-600 border border-red-100"
                    }`}
                  >
                    {appt.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
