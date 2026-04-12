import React from 'react';
import { Search, Star, Calendar, MessageCircle, Filter } from 'lucide-react';

const DoctorsPage = () => {
  const doctors = [
    { name: "Dr. Julianne Shepard", specialty: "Cardiology", rating: 4.9, reviews: 128, image: "https://i.pravatar.cc/150?u=1", availability: "Today" },
    { name: "Dr. Marcus Holloway", specialty: "Dermatology", rating: 4.8, reviews: 95, image: "https://i.pravatar.cc/150?u=2", availability: "Tomorrow" },
    { name: "Dr. Elena Rodriguez", specialty: "Neurology", rating: 5.0, reviews: 210, image: "https://i.pravatar.cc/150?u=3", availability: "Today" },
    { name: "Dr. Samuel Park", specialty: "Pediatrics", rating: 4.7, reviews: 84, image: "https://i.pravatar.cc/150?u=4", availability: "Oct 15" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-[#032d1d]">Available Specialists</h1>
          <p className="text-[#7a8a83] mt-1">Book a consultation with our world-class medical team.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca7a2]" size={18} />
            <input 
              type="text" 
              placeholder="Search by specialty..." 
              className="bg-white border border-gray-100 rounded-2xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#c6e7d1] outline-none w-full md:w-64 shadow-sm"
            />
          </div>
          <button className="p-3 bg-white border border-gray-100 rounded-2xl text-[#032d1d] hover:bg-gray-50 shadow-sm">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc, i) => (
          <div key={i} className="group bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="relative mb-4">
              <img src={doc.image} alt={doc.name} className="w-20 h-20 rounded-2xl object-cover mb-4" />
              <span className="absolute top-0 right-0 bg-[#c6e7d1] text-[#032d1d] text-[10px] font-bold px-3 py-1 rounded-full">
                {doc.availability}
              </span>
            </div>
            
            <h3 className="font-bold text-[#032d1d] text-lg leading-tight">{doc.name}</h3>
            <p className="text-sm text-[#7a8a83] mb-4">{doc.specialty}</p>
            
            <div className="flex items-center gap-1 mb-6">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-bold text-[#032d1d]">{doc.rating}</span>
              <span className="text-xs text-[#9ca7a2]">({doc.reviews} reviews)</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#032d1d] text-white text-xs font-bold hover:bg-[#05402a] transition-colors">
                <Calendar size={14} /> Book
              </button>
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#f8f9f8] text-[#032d1d] text-xs font-bold hover:bg-gray-100 transition-colors">
                <MessageCircle size={14} /> Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;