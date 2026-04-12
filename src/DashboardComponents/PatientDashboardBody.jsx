import React from 'react';
import { ArrowRight, Pill, FileText, Eye } from 'lucide-react';

const PatientDashboardBody = () => {
  return (
    /* Main Container: Single col on mobile, 12 cols on desktop */
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#f8f9f8] p-4 md:p-6 text-[#334139]">
      
      {/* Left Column: Medical History */}
      <div className="col-span-1 lg:col-span-7 rounded-3xl bg-white p-5 md:p-8 shadow-sm border border-gray-100">
        <div className="mb-6 flex flex-col xs:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-[#032d1d]">Medical History</h3>
          <button className="flex items-center gap-2 text-sm font-bold text-[#032d1d] hover:underline whitespace-nowrap">
            View Full History <ArrowRight size={18} />
          </button>
        </div>

        <div className="relative space-y-6 md:space-y-8 pl-6 md:pl-8">
          {/* Responsive Vertical Line */}
          <div className="absolute left-[11px] top-2 h-[95%] w-[0.5px] md:w-[2px] bg-[#e2e8e5]"></div>

          {[
            { title: 'Acute Pharyngitis', date: 'OCT 24, 2023', tags: ['Video', 'Prescription'], desc: 'Patient presented with persistent sore throat and low-grade fever.' },
            { title: 'Annual Wellness Exam', date: 'AUG 12, 2023', tags: ['In-Person', 'Bloodwork'], desc: 'Comprehensive physical check-up. All vitals within normal range.' },
            { title: 'Mild Vitamin D Deficiency', date: 'MAR 05, 2023', tags: [], desc: 'Lab results indicated serum 25-hydroxyvitamin D levels at 22 ng/mL.' }
          ].map((item, idx) => (
            <div key={idx} className="relative rounded-2xl bg-[#fbfcfb] p-5 md:p-6 ring-1 ring-gray-100 transition-all hover:shadow-md">
              {/* Responsive Timeline Dot */}
              <div className="absolute -left-[27px] md:-left-[29px] top-6 h-4 w-4 md:h-5 md:w-5 rounded-full border-2 md:border-4 border-white bg-[#c6e7d1] shadow-sm"></div>
              
              <div className="mb-2 flex flex-wrap justify-between items-start gap-2">
                <h4 className="font-bold text-[#032d1d] text-base md:text-lg">{item.title}</h4>
                <span className="text-[10px] font-bold text-[#9ca7a2] uppercase bg-gray-50 px-2 py-1 rounded-md">{item.date}</span>
              </div>
              <p className="mb-4 text-xs md:text-sm leading-relaxed text-[#5c6d67]">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="rounded-full bg-white px-3 py-1 text-[9px] md:text-[10px] font-bold text-[#7a8a83] ring-1 ring-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Widgets */}
      <div className="col-span-1 lg:col-span-5 space-y-6">
        
        {/* Upcoming Card */}
        <div className="rounded-3xl bg-[#032d1d] p-6 text-white shadow-lg overflow-hidden relative">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-medium opacity-90">Upcoming</h3>
            <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold backdrop-blur-sm">Next Week</span>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex h-16 w-16 md:h-20 md:w-20 flex-col items-center justify-center rounded-2xl bg-white/10 leading-none shrink-0 border border-white/5">
              <span className="text-[10px] font-bold uppercase opacity-60 mb-1">Nov</span>
              <span className="text-2xl md:text-3xl font-bold">12</span>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-base md:text-lg font-bold leading-tight">Dermatology Follow-up</h4>
              <p className="text-xs md:text-sm opacity-70 mt-1">10:30 AM • Video Call</p>
              <button className="mt-4 w-fit rounded-lg bg-white px-4 py-2 text-xs font-bold text-[#032d1d] transition-all active:scale-95">
                Add to Calendar
              </button>
            </div>
          </div>
        </div>

        {/* Active Prescriptions */}
        <div className="rounded-3xl bg-white p-5 md:p-6 shadow-sm border border-gray-100">
          <h3 className="mb-4 font-bold text-[#032d1d]">Active Prescriptions</h3>
          <div className="space-y-3">
            {[
              { name: 'Lisinopril', dose: '10mg • Daily', refill: '12d left' },
              { name: 'Vitamin D3', dose: '2000 IU • Daily', refill: 'Auto' }
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between rounded-2xl bg-[#fbfcfb] p-4 ring-1 ring-gray-50">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#c6e7d1] p-2 text-[#032d1d] shrink-0"><Pill size={16} /></div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold truncate">{p.name}</p>
                    <p className="text-[10px] text-[#9ca7a2] truncate">{p.dose}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#032d1d] whitespace-nowrap ml-2">{p.refill}</span>
              </div>
            ))}
            <button className="w-full mt-2 rounded-xl border border-gray-200 py-3 text-sm font-bold text-[#7a8a83] hover:bg-gray-50 transition-colors">
              Request Refill
            </button>
          </div>
        </div>

        {/* Lab Results */}
        <div className="rounded-3xl bg-white p-5 md:p-6 shadow-sm border border-gray-100">
          <h3 className="mb-4 font-bold text-[#032d1d]">Lab Results</h3>
          <div className="space-y-4">
            {['Complete Blood Count', 'Metabolic Panel'].map((test, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3 min-w-0">
                  <FileText size={18} className="text-[#9ca7a2] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold truncate group-hover:text-[#032d1d]">{test}</p>
                    <p className="text-[10px] text-[#9ca7a2]">Oct 15, 2023</p>
                  </div>
                </div>
                <button className="rounded-full bg-gray-50 p-2 text-[#7a8a83] hover:bg-[#c6e7d1] hover:text-[#032d1d] transition-all">
                  <Eye size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vitals Grid: 1 col on Mobile, 2 on Tablet, 4 on Desktop */}
      <div className="col-span-1 lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        {[
          { label: 'HEART RATE', value: '72', unit: 'bpm', status: 'Normal' },
          { label: 'BLOOD PRESSURE', value: '120/80', unit: 'mmHg', status: 'Optimal' },
          { label: 'GLUCOSE', value: '94', unit: 'mg/dL', status: 'Fasting' },
          { label: 'WEIGHT', value: '64.5', unit: 'kg', status: '-1.2kg' }
        ].map((stat, i) => (
          <div key={i} className="bg-[#032d1d] rounded-2xl p-6 text-white shadow-md hover:bg-[#043d28] transition-colors">
            <p className="text-[10px] font-bold tracking-widest opacity-60 uppercase">{stat.label}</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-bold">{stat.value}</span>
              <span className="text-xs opacity-60">{stat.unit}</span>
            </div>
            <p className="mt-2 text-[10px] opacity-70 font-medium">{stat.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDashboardBody;