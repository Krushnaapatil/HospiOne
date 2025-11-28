import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Button } from './ui/Button';

export const AarogyaHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-12 lg:py-20 overflow-hidden">
      {/* Background Pattern - Crosses */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0891b2 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Large decorative crosses */}
      <div className="absolute top-20 left-10 text-slate-200 opacity-50 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
      </div>
      <div className="absolute bottom-20 right-10 text-slate-200 opacity-50 hidden lg:block">
        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop" 
                alt="Doctor Video Consultation" 
                className="w-full h-auto object-cover"
              />
              {/* Overlay UI Mockup elements to match design */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-slate-700">Live Consultation</span>
                </div>
                <div className="flex gap-2">
                   <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600"><Phone size={14} /></div>
                   <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-red-500"><Phone size={14} className="rotate-[135deg]" /></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements behind image */}
            <div className="absolute -z-10 top-[-20px] left-[-20px] w-full h-full border-2 border-cyan-200 rounded-2xl"></div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h3 className="text-cyan-500 font-semibold text-xl mb-2 tracking-wide">Let's Talk With Your</h3>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              AAROGYA SATHI...
            </h1>
            <p className="text-slate-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="outline" className="rounded-full px-8 py-3 border-cyan-500 text-cyan-600 hover:bg-cyan-50">
                <Phone size={18} className="mr-2" />
                1800 666 888
              </Button>
              <Button className="rounded-full px-8 py-3 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-200/50">
                <Calendar size={18} className="mr-2" />
                Book Free Consultation
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
