import React from 'react';
import { UserCheck, Activity, ShieldCheck, Clock } from 'lucide-react';
import { Button } from './ui/Button';

export const WhyHospiOne = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">Why HospiOne</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
            We Provide Best Online<br />Doctor Consultation For You
          </h2>
        </div>

        {/* Radial Layout Container */}
        <div className="relative max-w-5xl mx-auto h-[600px] hidden lg:block">
          {/* Dashed Circle Track */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-dashed border-slate-200"></div>

          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-b from-teal-400 to-teal-600 p-2 shadow-2xl shadow-teal-200 flex items-center justify-center relative">
               <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
               <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white relative">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbCUyMHRlYW18ZW58MHx8MHx8fDA%3D" 
                    alt="Doctors Team" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-3 text-center">
                    <p className="font-bold text-slate-800 text-lg leading-none">Consult</p>
                    <p className="text-xs font-semibold text-slate-500">with Expert</p>
                  </div>
               </div>
            </div>
            <p className="mt-6 text-xs text-slate-400 max-w-[200px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>

          {/* Satellites */}
          {/* Top Left */}
          <div className="absolute top-[15%] left-[15%] max-w-[200px] text-right flex items-center gap-4">
            <div>
              <h4 className="font-bold text-slate-800 mb-1">All Types Doctors & Surgeons</h4>
              <p className="text-[10px] text-slate-500">Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo</p>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden flex-shrink-0 bg-cyan-50">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Top Right */}
          <div className="absolute top-[15%] right-[15%] max-w-[200px] text-left flex items-center gap-4">
             <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden flex-shrink-0 bg-cyan-50">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-1">Overall Assistance Throughout Surgery</h4>
              <p className="text-[10px] text-slate-500">Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo</p>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-[15%] left-[15%] max-w-[200px] text-right flex items-center gap-4">
            <div>
              <h4 className="font-bold text-slate-800 mb-1">Overall 50+ Treatments</h4>
              <p className="text-[10px] text-slate-500">Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo</p>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden flex-shrink-0 bg-cyan-50">
              <img src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbCUyMHRlYW18ZW58MHx8MHx8fDA%3D" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-[15%] right-[15%] max-w-[200px] text-left flex items-center gap-4">
             <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden flex-shrink-0 bg-cyan-50">
              <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-1">Post Care Surgery Service</h4>
              <p className="text-[10px] text-slate-500">Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo</p>
            </div>
          </div>
        </div>

        {/* Mobile Fallback Layout */}
        <div className="lg:hidden space-y-8">
           <div className="flex justify-center mb-8">
             <div className="w-48 h-48 rounded-full bg-gradient-to-b from-teal-400 to-teal-600 p-2 shadow-xl">
               <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white relative">
                  <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" className="w-full h-full object-cover" />
               </div>
             </div>
           </div>
           {[
             { title: 'All Types Doctors & Surgeons', icon: UserCheck },
             { title: 'Overall Assistance Throughout Surgery', icon: Activity },
             { title: 'Overall 50+ Treatments', icon: ShieldCheck },
             { title: 'Post Care Surgery Service', icon: Clock }
           ].map((item, idx) => (
             <div key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg">
               <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-cyan-500 shadow-sm">
                 <item.icon size={20} />
               </div>
               <div>
                 <h4 className="font-bold text-slate-800">{item.title}</h4>
                 <p className="text-xs text-slate-500">Lorem ipsum dolor sit amet cons adipiscing elit.</p>
               </div>
             </div>
           ))}
        </div>

        <div className="text-center mt-12">
          <Button className="rounded-full px-8 py-3 bg-cyan-500 hover:bg-cyan-600">
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
