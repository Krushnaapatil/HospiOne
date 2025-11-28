import React from 'react';
import { ShieldCheck, ThumbsUp, Stethoscope, Cpu, Phone, Calendar } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-cyan-50 pt-12 pb-0 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="z-10 pb-12 lg:pb-24">
            <span className="text-slate-600 font-medium text-lg mb-2 block">
              Consult Top Doctors Online
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#0f172a] leading-tight mb-6">
              Find Specialized Doctors & Get <span className="text-cyan-500">Quality Treatments</span>
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {[
                { icon: ShieldCheck, label: 'Quality Care' },
                { icon: ThumbsUp, label: 'Affordable' },
                { icon: Stethoscope, label: 'Surgeries' },
                { icon: Cpu, label: 'Modern Tech' },
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-cyan-600 mb-3 shadow-sm">
                    <feature.icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{feature.label}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 mb-8 max-w-lg leading-relaxed">
              Usually we try to do as much as possible so that our patients does not have any difficult and provides prompt treatment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="rounded-full px-8 py-3 border-cyan-500 text-slate-700 hover:bg-cyan-50">
                <Phone size={20} className="mr-2" />
                1800 666 888
              </Button>
              <Button className="rounded-full px-8 py-3 shadow-lg shadow-cyan-200/50">
                <Calendar size={20} className="mr-2" />
                Book Free Consultation
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 flex justify-end">
            <img 
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop" 
              alt="Team of Doctors" 
              className="w-full max-w-xl object-cover rounded-t-[3rem] shadow-2xl"
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-20 -left-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">100% Verified</p>
                  <p className="text-xs text-slate-500">Specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
