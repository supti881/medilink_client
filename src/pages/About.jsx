import React from 'react';
import { ShieldCheck, Users, Globe, Zap, Heart, Award } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: 'Active Patients', value: '120k+' },
    { label: 'Verified Doctors', value: '1.2k' },
    { label: 'Consultations', value: '2M+' },
    { label: 'Countries', value: '15+' },
  ];

  const values = [
    { 
      icon: ShieldCheck, 
      title: "Data Security", 
      desc: "We employ end-to-end encryption for every consultation and medical record, exceeding HIPAA standards." 
    },
    { 
      icon: Heart, 
      title: "Patient-First Care", 
      desc: "Our platform is designed to reduce the friction between feeling unwell and getting professional help." 
    },
    { 
      icon: Zap, 
      title: "Instant Connectivity", 
      desc: "Average wait time to see a specialist is under 15 minutes, 24 hours a day, 7 days a week." 
    }
  ];

  return (
    <div className="bg-[#f8f9f8] text-[#334139] font-sans">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-[#c6e7d1] text-[#032d1d] text-xs font-bold uppercase tracking-widest">
                Our Mission
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-[#032d1d] leading-tight">
                Healthcare that <br /> 
                <span className="text-[#5c6d67]">moves with you.</span>
              </h1>
              <p className="text-lg text-[#5c6d67] max-w-xl mx-auto lg:mx-0">
                Medilink was founded in 2020 with a simple goal: to make premium healthcare accessible to everyone, regardless of their location or schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#032d1d] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#05402a] transition-all">
                  Join our team
                </button>
                <button className="border border-gray-200 bg-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                  Our medical board
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="Medical Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl hidden md:flex items-center gap-4 border border-gray-50">
                <div className="bg-[#c6e7d1] p-3 rounded-2xl text-[#032d1d]">
                  <Award size={32} />
                </div>
                <div>
                  <p className="font-bold text-[#032d1d]">ISO Certified</p>
                  <p className="text-xs text-[#9ca7a2]">Quality Healthcare Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#032d1d] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <h4 className="text-3xl md:text-4xl font-bold text-white">{stat.value}</h4>
                <p className="text-xs font-bold text-[#c6e7d1] uppercase tracking-widest opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#032d1d]">Built on trust and innovation</h2>
            <p className="text-[#5c6d67]">We are bridging the gap between traditional medicine and the digital future.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f8f9f8] w-14 h-14 rounded-2xl flex items-center justify-center text-[#032d1d] mb-6">
                  <val.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#032d1d] mb-4">{val.title}</h3>
                <p className="text-sm leading-relaxed text-[#5c6d67]">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="bg-[#c6e7d1] rounded-[48px] p-8 md:p-16 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#032d1d]">Ready to meet your doctor?</h2>
            <p className="text-[#032d1d] opacity-80 max-w-xl mx-auto">
              Join thousands of people who have simplified their healthcare journey with Medilink.
            </p>
            <button className="bg-[#032d1d] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center text-[#9ca7a2] text-sm">
          <p>© 2024 Medilink Health. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;