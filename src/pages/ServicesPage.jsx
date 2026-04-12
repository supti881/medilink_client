import React from 'react';

import { Video, Home, Activity, ShieldPlus, ArrowRight, Pill, Brain } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    { title: "Video Consultation", icon: Video, desc: "High-definition, secure video calls with specialists from home.", price: "from $49" },
    { title: "Diagnostic Lab Tests", icon: Activity, desc: "Order lab kits to your door or visit a local partner clinic.", price: "from $25" },
    { title: "Mental Health", icon: Brain, desc: "Private therapy and psychiatric support for stress and anxiety.", price: "from $60" },
    { title: "Chronic Care", icon: Activity, desc: "Long-term management for diabetes, hypertension, and more.", price: "Monthly plans" },
    { title: "Prescription Refills", icon: Pill, desc: "Instant digital prescriptions sent to your preferred pharmacy.", price: "Free" },
    { title: "Preventative Health", icon: ShieldPlus, desc: "Annual check-ups and personalized wellness roadmaps.", price: "from $99" },
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-[#032d1d] tracking-tight">Comprehensive Care <br/><span className="text-[#5c6d67]">Tailored to You</span></h1>
        <p className="text-lg text-[#7a8a83] mt-4">Transparent pricing, world-class expertise, and zero wait times. Choose the service that fits your needs.</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm hover:border-[#c6e7d1] transition-all group cursor-pointer">
            <div className="w-14 h-14 bg-[#f8f9f8] rounded-2xl flex items-center justify-center text-[#032d1d] mb-8 group-hover:bg-[#032d1d] group-hover:text-white transition-colors">
              <service.icon size={28} />
            </div>
            
            <h3 className="text-xl font-bold text-[#032d1d] mb-3">{service.title}</h3>
            <p className="text-[#7a8a83] text-sm leading-relaxed mb-6">{service.desc}</p>
            
            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
              <span className="text-xs font-bold uppercase tracking-wider text-[#032d1d]">{service.price}</span>
              <button className="text-[#032d1d] group-hover:translate-x-2 transition-transform">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Insurance Banner */}
      <div className="bg-[#032d1d] rounded-[40px] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Have health insurance?</h2>
          <p className="text-white/60 text-sm">Most of our services are covered by major providers.</p>
        </div>
        <button className="bg-white text-[#032d1d] px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#c6e7d1] transition-all">
          Check Eligibility
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;