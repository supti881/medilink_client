import React from 'react';
import { MapPin, Pencil, Share2 } from 'lucide-react';

const PatientHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-5xl items-center lg:items-start gap-6 lg:gap-8 rounded-3xl bg-[#f8f9f8] p-6 md:p-8 shadow-sm border border-gray-100">
      
      {/* Profile Image & ID Badge */}
      <div className="relative shrink-0">
        <div className="h-40 w-32 md:h-44 md:w-36 overflow-hidden rounded-2xl shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=400" 
            alt="Patient Profile" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#c6e7d1] px-4 py-1 text-[10px] md:text-[11px] font-bold text-[#032d1d] shadow-sm">
          Patient ID: SJ-9921
        </div>
      </div>

      {/* Patient Details Content */}
      <div className="flex flex-1 flex-col gap-6 text-center lg:text-left w-full">
        {/* Name and Location */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#032d1d]">Sarah Jenkins</h2>
          <div className="mt-2 flex items-center justify-center lg:justify-start gap-1 text-sm font-medium text-[#4a5e56]">
            <MapPin size={16} className="fill-[#032d1d] text-[#032d1d]" />
            Chelsea, London, UK
          </div>
        </div>

        {/* Vital Info Grid - 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 border-t border-gray-200 pt-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9ca7a2]">Age</span>
            <span className="text-base md:text-lg font-bold text-[#334139]">34 Years</span>
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9ca7a2]">Blood Type</span>
            <div className="flex flex-col leading-tight">
              <span className="text-base md:text-lg font-bold text-[#334139]">O Positive</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9ca7a2]">Contact</span>
            <span className="text-xs md:text-sm font-bold leading-tight text-[#334139]">+44 7700 900 123</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9ca7a2]">Primary Physician</span>
            <span className="text-[11px] md:text-xs font-bold leading-tight text-[#334139]">Dr. Julianne S.</span>
          </div>
        </div>
      </div>

      {/* Action Buttons - Full width on mobile */}
      <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-auto mt-4 lg:mt-0">
        <button className="flex-1 lg:w-40 flex items-center justify-center gap-2 rounded-full bg-[#032d1d] py-3 text-sm font-bold text-white transition-all hover:bg-[#05402a] active:scale-95">
          <Pencil size={16} />
          <span className="hidden sm:inline">Edit Record</span>
          <span className="sm:hidden">Edit</span>
        </button>
        <button className="flex-1 lg:w-40 flex items-center justify-center gap-2 rounded-full bg-[#d5e9db] py-3 text-sm font-bold text-[#032d1d] transition-all hover:bg-[#c6e7d1] active:scale-95">
          <Share2 size={16} />
          <span className="hidden sm:inline">Export PDF</span>
          <span className="sm:hidden">Export</span>
        </button>
      </div>
    </div>
  );
};

export default PatientHeader;