import React from 'react';
import { UserPlus, Stethoscope, CalendarCheck, UserCheck } from 'lucide-react';

const steps = [
  { 
    title: 'Registration', 
    icon: UserPlus,
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    title: 'Talk To Specialist', 
    icon: Stethoscope,
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    title: 'Book Appointment', 
    icon: CalendarCheck,
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop'
  },
  { 
    title: 'Choose A Doctors', 
    icon: UserCheck,
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop'
  },
];

export const ProcessFlow = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-semibold uppercase tracking-wide text-sm">How HospiOne Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
            A Simplified Procedure To<br />Cure Your Health
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Dashed Line Background (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
             <svg className="w-full h-20" preserveAspectRatio="none">
               <path d="M0,10 Q400,80 800,10 T1600,10" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
             </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                {/* Image Circle */}
                <div className="relative w-48 h-48 mb-6 transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-full border-4 border-white shadow-xl overflow-hidden z-10 bg-white">
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  
                  {/* Connector Dot */}
                  <div className="absolute top-1/2 -right-4 w-6 h-6 bg-cyan-500 rounded-full border-4 border-white shadow-md hidden lg:block z-20"></div>
                  <div className="absolute top-1/2 -left-4 w-6 h-6 bg-cyan-500 rounded-full border-4 border-white shadow-md hidden lg:block z-20"></div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 max-w-3xl mx-auto bg-[#0f172a] rounded-lg p-8 text-center shadow-2xl">
          <p className="text-white text-lg">
            If you have difficulty understanding our work process please <a href="#" className="text-cyan-400 font-bold hover:underline">contact us</a> for better information.
          </p>
        </div>
      </div>
    </section>
  );
};
