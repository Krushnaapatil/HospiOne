import React from 'react';
import { Phone } from 'lucide-react';

export const SurgeonBanner = () => {
  return (
    <section className="relative bg-[#009688] py-16 overflow-hidden">
      {/* Hexagonal Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          ARE YOU <span className="text-slate-900">A SURGEON ?</span>
        </h2>
        <h3 className="text-2xl font-semibold mb-6">Join Our Team</h3>
        
        <p className="max-w-2xl mx-auto text-white/80 text-xs mb-8 leading-relaxed">
          Luis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.Luis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-[#009688] transition-colors font-semibold">
            <Phone size={18} />
            1800 666 888
          </button>
          <button className="px-8 py-3 rounded-full bg-[#0f172a] text-white hover:bg-slate-800 transition-colors font-semibold shadow-lg">
            Connect Now
          </button>
        </div>
      </div>
    </section>
  );
};
