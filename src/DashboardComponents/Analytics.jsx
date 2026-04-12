import { TrendingUp } from 'lucide-react';
import React from 'react';

const Analytics = () => {
  return (
   <div className="space-y-6 bg-[#f8f9f8] p-4 md:p-8 text-[#334139]">
      
      {/* Top Row: Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Revenue Card */}
        <div className="rounded-[32px] bg-[#032d1d] p-8 text-white shadow-lg relative overflow-hidden">
          <p className="text-xs font-bold tracking-widest opacity-60 uppercase">Monthly Revenue</p>
          <h3 className="mt-4 text-4xl font-bold">$142,850</h3>
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#c6e7d1]">
            <TrendingUp size={16} /> +12.4% from last month
          </div>
        </div>

        {/* New Patients Card */}
        <div className="rounded-[32px] bg-white p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#9ca7a2] uppercase">New Patients</p>
            <h3 className="mt-4 text-3xl font-bold text-[#032d1d]">1,284</h3>
          </div>
          <div className="mt-6 flex items-end gap-1 h-12">
            {[40, 70, 45, 90, 65, 50].map((h, i) => (
              <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-sm ${i === 3 ? 'bg-[#032d1d]' : 'bg-[#c6e7d1]'}`} />
            ))}
          </div>
        </div>

        {/* Avg Duration Card */}
        <div className="rounded-[32px] bg-white p-8 shadow-sm border border-gray-100">
          <p className="text-xs font-bold tracking-widest text-[#9ca7a2] uppercase">Avg Duration</p>
          <h3 className="mt-4 text-3xl font-bold text-[#032d1d]">18.5m</h3>
          <div className="mt-8 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#c6e7d1] w-[70%]" />
          </div>
          <p className="mt-2 text-[10px] font-bold text-[#9ca7a2] text-right">-2m</p>
        </div>
      </div>

      {/* Middle Row: Trends & Retention */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Consultation Volume Chart */}
        <div className="lg:col-span-2 rounded-[32px] bg-white p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <h3 className="text-xl font-bold text-[#032d1d]">Consultation Volume Trends</h3>
              <p className="text-xs text-[#9ca7a2] mt-1">Daily distribution of video vs. chat sessions</p>
            </div>
            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#032d1d]" /> Video</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#c6e7d1]" /> Chat</div>
            </div>
          </div>
          
          <div className="flex items-end justify-between h-64 gap-2 sm:gap-4">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
              <div key={day} className="flex-1 flex flex-col items-center gap-4 group">
                <div className="w-full max-w-[40px] flex flex-col-reverse gap-1 h-full">
                  <div className="bg-[#c6e7d1] rounded-md transition-all group-hover:opacity-80" style={{ height: `${Math.random() * 40 + 20}%` }} />
                  <div className="bg-[#032d1d] rounded-md transition-all group-hover:opacity-90" style={{ height: `${Math.random() * 40 + 30}%` }} />
                </div>
                <span className="text-[10px] font-bold text-[#9ca7a2]">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Retention Card */}
        <div className="rounded-[32px] bg-[#032d1d] p-8 text-white shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold">Patient Retention</h3>
            <p className="text-xs opacity-60 mt-1">Quarterly re-consultation rate</p>
          </div>
          
          <div className="relative flex items-center justify-center my-8">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-white/10" />
              <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray={364.4} strokeDashoffset={364.4 * (1 - 0.78)} className="text-[#c6e7d1]" />
            </svg>
            <div className="absolute text-center">
              <span className="text-3xl font-bold block">78%</span>
              <span className="text-[8px] font-bold uppercase tracking-widest opacity-60">Loyalty Score</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-2xl p-4">
              <p className="text-lg font-bold">2.4k</p>
              <p className="text-[8px] font-bold opacity-50 uppercase tracking-tighter">Returning</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-4">
              <p className="text-lg font-bold">1.1k</p>
              <p className="text-[8px] font-bold opacity-50 uppercase tracking-tighter">First Time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Recent Consultations */}
      <div className="rounded-[32px] bg-white p-6 md:p-8 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-[#032d1d]">Recent Consultations</h3>
          <button className="text-xs font-bold text-[#9ca7a2] hover:text-[#032d1d] transition-colors">View all history</button>
        </div>
        
        <div className="space-y-4">
          {[
            { name: 'Sarah Jenkins', type: 'Hypertension Follow-up', time: '14:30 PM', status: 'COMPLETED', duration: '24 mins' },
            { name: 'Marcus Holloway', type: 'Post-Op Recovery Check', time: '11:15 AM', status: 'COMPLETED', duration: '12 mins' },
            { name: 'Elena Rodriguez', type: 'Tele-Cardiology Consult', time: '09:00 AM', status: 'CANCELED', duration: '--' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl hover:bg-[#fbfcfb] transition-colors border border-transparent hover:border-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden shrink-0">
                  <img src={`https://i.pravatar.cc/100?u=${item.name}`} alt="" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#032d1d]">{item.name}</p>
                  <p className="text-[10px] text-[#9ca7a2]">{item.type} • {item.time}</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-6 mt-4 sm:mt-0">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${item.status === 'COMPLETED' ? 'bg-[#c6e7d1] text-[#032d1d]' : 'bg-red-50 text-red-600'}`}>
                  {item.status}
                </span>
                <span className="text-[10px] font-bold text-[#9ca7a2] w-12 text-right">{item.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;