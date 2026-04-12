import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Users, 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';
import {  Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

 const menuItems = [
  { name: 'Dashboard', icon: LayoutGrid, href: "/Dashboard" },
  { name: 'Patients', icon: Users, href: "/Dashboard/Patients" },
  { name: 'Appointments', icon: Calendar, href: "/Dashboard/Appointments" },
  { name: 'Messages', icon: MessageSquare, href: "/Dashboard/Messages" },
  { name: 'Analytics', icon: BarChart3, href: "/Dashboard/Analytics" },
];

  return (
    <div className="flex h-screen w-64 flex-col bg-[#f8f9f8] p-4 text-[#5c6d67] border-r border-gray-100">
      {/* Brand Header */}
      <div className="mb-10 px-4 pt-4">
        <Link to="/"><h1 className="text-xl font-bold text-[#4a5e56] leading-tight">
          MediLink
        </h1></Link>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9ca7a2]">
          Premium Telemedicine
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;
          
          return (
           <Link to={item.href} key={item.name}>
      <button
      onClick={() => setActiveItem(item.name)}
      className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
        isActive
        ? "bg-white text-[#4a5e56] shadow-sm ring-1 ring-black/5"
        : "hover:bg-gray-200/50 text-[#7a8a83]"
       }`}
     >
    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
    {item.name}
  </button>
</Link>
          );
        })}
      </nav>

      {/* Action Section */}
      <div className="mt-auto space-y-6 pb-6">
        <button className="w-full rounded-xl bg-[#032d1d] py-4 text-sm font-bold text-white transition-transform active:scale-95">
          Join Consultation
        </button>

        <div className="space-y-1 border-t border-gray-200 pt-6">
          <button className="flex w-full items-center gap-4 px-4 py-3 text-sm font-medium text-[#7a8a83] hover:text-[#4a5e56]">
            <HelpCircle size={20} />
            Help Center
          </button>
          <button className="flex w-full items-center gap-4 px-4 py-3 text-sm font-medium text-[#7a8a83] hover:text-[#4a5e56]">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;