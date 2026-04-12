import { Video, User, Clock, Plus } from 'lucide-react';

const Appointments = () => {
  const appointments = [
    { name: 'Sarah Jenkins', type: 'Follow-up: Hypertension', status: 'CONFIRMED', time: '09:30 AM', method: 'Video Call', icon: Video, color: 'text-green-600 bg-green-50' },
    { name: 'Robert Chen', type: 'Post-Op Cardiology', status: 'PENDING', time: '11:15 AM', method: 'In-person', icon: User, color: 'text-orange-600 bg-orange-50' },
    { name: 'Alice Moore', type: 'Initial Assessment', status: 'CONFIRMED', time: '02:45 PM', method: 'Video Call', icon: Video, color: 'text-green-600 bg-green-50' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#f8f9f8] p-4 md:p-8">
      
      {/* Left Column: Consultations List */}
      <div className="col-span-1 lg:col-span-4 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#032d1d]">Consultations</h2>
            <p className="text-sm text-[#7a8a83]">4 appointments today</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#032d1d] px-4 py-2 text-sm font-bold text-white transition-transform active:scale-95">
            <Plus size={18} /> Book New
          </button>
        </div>

        <div className="space-y-4">
          {appointments.map((apt, i) => (
            <div key={i} className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${apt.name}`} alt={apt.name} />
                  </div>
                  <div>
                    <p className="font-bold text-[#032d1d]">{apt.name}</p>
                    <p className="text-[11px] text-[#7a8a83]">{apt.type}</p>
                  </div>
                </div>
                <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${apt.color}`}>
                  {apt.status}
                </span>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                <div className="flex items-center gap-2 text-[#5c6d67] text-xs font-medium">
                  <apt.icon size={14} /> {apt.method}
                </div>
                <div className="flex items-center gap-2 text-[#032d1d] text-xs font-bold">
                  <Clock size={14} /> {apt.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Calendar Widget */}
      <div className="col-span-1 lg:col-span-8">
        <div className="rounded-[32px] bg-white p-6 md:p-10 shadow-sm border border-gray-100 h-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#032d1d]">October 2024</h2>
              <p className="text-sm text-[#7a8a83] mt-1">Week 42 • 4 Appointments Scheduled</p>
            </div>
            
            <div className="flex p-1 bg-[#f8f9f8] rounded-xl self-start md:self-auto">
              {['Month', 'Week', 'Day'].map((tab) => (
                <button 
                  key={tab}
                  className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${
                    tab === 'Month' ? 'bg-white text-[#032d1d] shadow-sm' : 'text-[#7a8a83] hover:text-[#032d1d]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-px overflow-hidden">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
              <div key={day} className="pb-4 text-center text-[10px] font-bold tracking-widest text-[#9ca7a2]">
                {day}
              </div>
            ))}
            
            {/* Minimal Grid Generation */}
            {Array.from({ length: 21 }, (_, i) => i + 27).map((day, idx) => {
              const actualDay = day > 31 ? day - 31 : day;
              const isToday = actualDay === 7;
              
              return (
                <div key={idx} className="aspect-square md:aspect-auto md:h-32 border-t border-gray-100 p-2 md:p-4 group cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className={`text-sm font-bold ${isToday ? 'text-[#032d1d]' : 'text-[#7a8a83]'}`}>
                    {actualDay}
                  </span>
                  
                  {isToday && (
                    <div className="mt-2 space-y-1 hidden md:block">
                      <div className="rounded-lg bg-[#032d1d] p-2 text-[9px] font-bold text-white truncate">
                        09:30 AM ...
                      </div>
                      <div className="rounded-lg bg-[#4a5e56] p-2 text-[9px] font-bold text-white truncate">
                        11:15 AM ...
                      </div>
                    </div>
                  )}
                  {isToday && <div className="md:hidden w-1.5 h-1.5 rounded-full bg-[#032d1d] mx-auto mt-1" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;