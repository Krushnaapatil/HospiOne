import React from 'react';
import { Video, MessageCircle, Heart, UserPlus, Apple, Play } from 'lucide-react';

export const DownloadApp = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-50 to-slate-50 py-20 overflow-hidden relative">
      {/* Background geometric shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/40 skew-x-12 transform origin-top-right"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Phone Mockup */}
          <div className="flex justify-center lg:justify-end relative">
             {/* Concentric Circles Background */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/20 rounded-full blur-2xl"></div>

             <div className="relative z-10 w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
                {/* Phone Screen Content */}
                <div className="w-full h-full bg-white overflow-hidden flex flex-col">
                   <div className="bg-[#0f172a] text-white p-6 pt-10 rounded-b-3xl">
                      <div className="flex justify-between items-center mb-4">
                         <div className="w-6 h-0.5 bg-white/50 rounded"></div>
                         <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      </div>
                      <h3 className="text-xl font-bold">Hey Christian</h3>
                      <p className="text-xs text-slate-400 mb-4">Find your favorite doctor!</p>
                      <div className="bg-slate-800 rounded-full p-2 flex items-center px-4">
                        <span className="text-slate-500 text-xs">Search doctor</span>
                      </div>
                   </div>
                   <div className="p-4 flex-1 bg-slate-50">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-bold text-sm">Top Doctor</h4>
                        <span className="text-[10px] text-cyan-500">See All</span>
                      </div>
                      <div className="space-y-3">
                        {[1, 2].map((i) => (
                          <div key={i} className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm">
                             <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                             <div>
                               <div className="w-24 h-3 bg-slate-200 rounded mb-1"></div>
                               <div className="w-16 h-2 bg-slate-100 rounded"></div>
                             </div>
                          </div>
                        ))}
                      </div>
                   </div>
                   {/* Bottom Nav */}
                   <div className="bg-white p-4 flex justify-between items-center border-t border-slate-100">
                      {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 bg-slate-200 rounded-full"></div>)}
                   </div>
                </div>
             </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-cyan-500 font-semibold mb-2 block">Download Our App</span>
            <h2 className="text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Download HospiOne App<br />From Your Mobile
            </h2>
            <p className="text-slate-500 mb-10 text-sm leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-cyan-500"><Video size={20} /></div>
                <span className="text-sm font-medium text-slate-700 pt-1">Video Consult With Doctors</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-cyan-500"><MessageCircle size={20} /></div>
                <span className="text-sm font-medium text-slate-700 pt-1">Ask Free Questions</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-cyan-500"><Heart size={20} /></div>
                <span className="text-sm font-medium text-slate-700 pt-1">Exclusive Healthcare</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-cyan-500"><UserPlus size={20} /></div>
                <span className="text-sm font-medium text-slate-700 pt-1">Create an account and make easy treatment</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                <Apple size={24} />
                <div className="text-left">
                  <div className="text-[10px] leading-none">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                <Play size={24} fill="white" />
                <div className="text-left">
                  <div className="text-[10px] leading-none">GET IT ON</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
