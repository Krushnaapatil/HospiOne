import React from 'react';
import { 
  Bone, Heart, Activity, Stethoscope, 
  Baby, Brain, Syringe, Eye, ArrowRightCircle 
} from 'lucide-react';

const categories = [
  { name: 'Orthopedics', icon: Bone },
  { name: 'Cardiology', icon: Heart },
  { name: 'Laparoscopy', icon: Activity },
  { name: 'Proctology', icon: Stethoscope },
  { name: 'Urology', icon: Activity }, // Placeholder icon
  { name: 'Gastro', icon: Stethoscope }, // Shortened for space
  { name: 'Oncology', icon: Activity },
  { name: 'Cosmetic', icon: Syringe },
  { name: 'Infertility', icon: Baby },
  { name: 'Gynecology', icon: Stethoscope },
  { name: 'Vascular', icon: Heart },
  { name: 'ENT', icon: Brain }, // Placeholder
  { name: 'Opthal', icon: Eye },
];

export const CategoryNav = () => {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-4 overflow-x-auto scrollbar-hide">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8 min-w-max md:justify-between">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="text-slate-500 group-hover:text-cyan-500 transition-colors mb-2">
                <cat.icon strokeWidth={1.5} size={28} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 group-hover:text-cyan-600">
                {cat.name}
              </span>
            </div>
          ))}
          
          <div className="flex flex-col items-center group cursor-pointer text-cyan-500">
            <div className="mb-2">
              <ArrowRightCircle strokeWidth={1.5} size={28} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">
              View All
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
