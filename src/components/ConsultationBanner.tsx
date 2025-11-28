import React from 'react';
import { Calendar } from 'lucide-react';

export const ConsultationBanner = () => {
  return (
    <section className="relative z-20 -mt-16 mb-20 px-4">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Get An Free Online Consultation<br />Over <span className="text-slate-900">50+ Surgeries</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-cyan-200 transition-all whitespace-nowrap">
            <Calendar size={20} />
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
};
