import React from "react";
import {
  Calendar,
  MessageSquare,
  Activity,
  Clock,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const PatientDashboard = () => {
  return (
    <div className="p-8 bg-[#F8FAFB] min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#00402E]">
          Good Morning, Sarah
        </h1>
        <p className="text-slate-500">
          You have a consultation scheduled for today at 09:30 AM.
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
            Next Consultation
          </p>
          <div className="flex items-center gap-3 text-[#00402E]">
            <Clock size={20} />
            <span className="text-2xl font-bold">In 45 Mins</span>
          </div>
        </div>
        <div className="bg-[#00402E] p-6 rounded-2xl shadow-lg text-white">
          <p className="text-emerald-100/70 text-xs font-bold uppercase tracking-wider mb-2">
            Prescriptions
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">02 Active</span>
            <button className="text-xs bg-white/20 px-3 py-1 rounded-lg">
              View All
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
            Health Score
          </p>
          <div className="flex items-center gap-2 text-emerald-600">
            <Activity size={20} />
            <span className="text-2xl font-bold">92%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Visit Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-[#00402E]">Current Care Plan</h2>
            <button className="text-[#00402E] text-xs font-bold flex items-center gap-1">
              History <ArrowRight size={14} />
            </button>
          </div>
          <div className="flex items-center gap-4 p-4 bg-[#F0F7F4] rounded-xl border border-emerald-100">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-[#00402E]">
              DS
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 text-sm">
                Post-Op Recovery
              </h3>
              <p className="text-xs text-slate-500">
                With Dr. Smith • General Hospital
              </p>
            </div>
            <button className="bg-[#00402E] text-white px-4 py-2 rounded-xl text-xs font-bold">
              Join Room
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <button className="w-full bg-emerald-100 text-[#00402E] p-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-200 transition-all">
            <Calendar size={18} /> Book New Consultation
          </button>
          <NavLink to={"/chat"}>
            <button className="w-full border border-slate-200 bg-white text-slate-600 p-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50">
              <MessageSquare size={18} /> Chat with Nurse
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
