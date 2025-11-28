import React from 'react';
import { User, Activity, Heart, Bone, Droplet, Accessibility } from 'lucide-react';
import { Button } from './ui/Button';

const specialities = [
  { name: 'Hair Transplant', icon: User },
  { name: 'Spine', icon: Activity },
  { name: 'Bypass', icon: Heart },
  { name: 'Hip Replacement', icon: Accessibility },
  { name: 'Kidney Stones', icon: Droplet },
  { name: 'Knee Replacement', icon: Bone },
];

export const Specialities = () => {
  return (
    <section className="py-20 bg-white relative">
      {/* Decorative dots background */}
      <div className="absolute right-0 top-20 opacity-20 hidden lg:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">Our Specialities</h2>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-100 p-8 lg:p-12 max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {specialities.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer">
                <div className="w-20 h-20 rounded-full border border-slate-200 flex items-center justify-center mb-4 group-hover:border-cyan-500 group-hover:shadow-lg group-hover:shadow-cyan-100 transition-all duration-300 bg-slate-50 group-hover:bg-white">
                  <item.icon 
                    size={32} 
                    strokeWidth={1.5} 
                    className="text-slate-400 group-hover:text-cyan-500 transition-colors" 
                  />
                </div>
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button className="px-10 rounded-full bg-cyan-500 hover:bg-cyan-600">
              View More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
