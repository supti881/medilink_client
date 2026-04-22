import React from "react";
import { Search, Star, ShieldCheck } from "lucide-react";

const BookConsultation = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Michael Smith",
      specialty: "Cardiologist",
      rating: 4.9,
      image: "DS",
    },
    {
      id: 2,
      name: "Dr. Elena Rossi",
      specialty: "Neurologist",
      rating: 4.8,
      image: "ER",
    },
  ];

  return (
    <div className="p-8 bg-[#F8FAFB] min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#00402E]">
          Book a Consultation
        </h1>
        <p className="text-slate-500">
          Find and book the best specialists for your care.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="relative mb-8 max-w-2xl">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search by specialty or doctor name..."
          className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00402E]/20 focus:border-[#00402E] outline-none shadow-sm"
        />
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#F0F7F4] flex items-center justify-center font-bold text-xl text-[#00402E]">
                {doc.image}
              </div>
              <div>
                <h3 className="font-bold text-slate-800">{doc.name}</h3>
                <p className="text-xs text-slate-500 mb-2">{doc.specialty}</p>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star size={14} fill="currentColor" /> {doc.rating}
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Available Slots
              </p>
              <div className="flex gap-2">
                <button className="text-[11px] font-bold px-3 py-2 bg-slate-50 rounded-lg hover:bg-[#00402E] hover:text-white transition-all">
                  09:00 AM
                </button>
                <button className="text-[11px] font-bold px-3 py-2 bg-slate-50 rounded-lg hover:bg-[#00402E] hover:text-white transition-all">
                  11:30 AM
                </button>
                <button className="text-[11px] font-bold px-3 py-2 bg-slate-50 rounded-lg hover:bg-[#00402E] hover:text-white transition-all">
                  02:00 PM
                </button>
              </div>
            </div>

            <button className="w-full bg-[#00402E] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#002d20]">
              Confirm Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookConsultation;
