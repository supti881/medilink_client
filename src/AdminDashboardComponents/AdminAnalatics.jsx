import React from 'react';
import { TrendingUp, Users, Calendar, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const AdminAnalytics = () => {
  // Simple summary data - easy to map from an aggregate API call
  const stats = [
    { label: 'Total Revenue', value: '$12,450', change: '+12.5%', icon: <TrendingUp size={20} />, trendingUp: true },
    { label: 'New Patients', value: '48', change: '+4.3%', icon: <Users size={20} />, trendingUp: true },
    { label: 'Consultations', value: '184', change: '-2.1%', icon: <Calendar size={20} />, trendingUp: false },
    { label: 'Avg. Rating', value: '4.9', change: '+0.2%', icon: <Activity size={20} />, trendingUp: true },
  ];

  const departmentPerformance = [
    { name: 'General Medicine', appointments: 85, color: 'bg-emerald-500' },
    { name: 'Cardiology', appointments: 42, color: 'bg-blue-500' },
    { name: 'Dermatology', appointments: 30, color: 'bg-amber-500' },
    { name: 'Telehealth', appointments: 27, color: 'bg-[#00402E]' },
  ];

  return (
    <div className="p-8 bg-[#F8FAFB] min-h-screen font-sans">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#00402E]">Performance Analytics</h1>
        <p className="text-sm text-slate-500">Real-time overview of clinic activity and growth.</p>
      </div>

      {/* Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-slate-50 rounded-lg text-[#00402E]">
                {stat.icon}
              </div>
              <div className={`flex items-center text-xs font-bold ${stat.trendingUp ? 'text-emerald-600' : 'text-red-500'}`}>
                {stat.change} 
                {stat.trendingUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Department Progress Section */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-lg font-bold text-[#00402E] mb-6">Appointments by Department</h2>
          <div className="space-y-6">
            {departmentPerformance.map((dept, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-slate-700">{dept.name}</span>
                  <span className="text-slate-500">{dept.appointments} appts</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className={`${dept.color} h-full rounded-full transition-all duration-1000`} 
                    style={{ width: `${(dept.appointments / 100) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Insight Card */}
        <div className="bg-[#00402E] text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-semibold mb-2">Weekly Goal</h2>
            <p className="text-emerald-100/70 text-sm mb-8">You have reached 75% of your patient consultation target.</p>
            
            <div className="text-4xl font-bold mb-1">12.5k</div>
            <p className="text-xs uppercase tracking-widest opacity-60 mb-6">Revenue this week</p>
            
            <button className="w-full py-3 bg-emerald-400 hover:bg-emerald-300 text-[#00402E] font-bold rounded-xl transition-all">
              View Detailed Report
            </button>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;