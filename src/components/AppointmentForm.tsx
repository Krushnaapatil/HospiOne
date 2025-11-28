import React from 'react';
import { ChevronDown } from 'lucide-react';

export const AppointmentForm = () => {
  return (
    <section className="relative -mt-10 z-20 pb-24">
      <div className="container mx-auto px-4">
        <div className="bg-[#00a79d] rounded-xl shadow-xl p-6 md:p-8 max-w-5xl mx-auto relative">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Let's Schedule Your Appointment</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              placeholder="Enter Full Name" 
              className="w-full px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
            <input 
              type="text" 
              placeholder="Enter Mobile Number" 
              className="w-full px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="relative">
              <select className="w-full px-4 py-3 rounded-md text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-300 bg-white cursor-pointer">
                <option>Select City</option>
                <option>New York</option>
                <option>London</option>
                <option>Mumbai</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>
            <div className="relative">
              <select className="w-full px-4 py-3 rounded-md text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-300 bg-white cursor-pointer">
                <option>Select Disease</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>
            <div className="relative">
              <select className="w-full px-4 py-3 rounded-md text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-300 bg-white cursor-pointer">
                <option>Select Sub-Disease</option>
                <option>Type A</option>
                <option>Type B</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Hanging Button */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-6">
            <button className="bg-[#0f172a] text-white px-10 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-lg border-4 border-white/10">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
