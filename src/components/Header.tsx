import React from 'react';
import { Phone, Calendar, MapPin, Menu } from 'lucide-react';
import { Button } from './ui/Button';

export const Header = () => {
  return (
    <header className="bg-white py-4 border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-[#0f172a]">
            hospi<span className="text-cyan-500">one</span>
            <span className="text-cyan-500 text-4xl leading-none">...</span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-700">
          <Menu size={28} />
        </button>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-3 text-right">
            <div className="bg-slate-100 p-2 rounded-full">
              <Phone size={20} className="text-slate-700" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Toll Free No</p>
              <p className="text-lg font-bold text-slate-800 leading-none">1800 666 888</p>
            </div>
          </div>

          <Button className="gap-2 shadow-md shadow-cyan-200">
            <Calendar size={18} />
            Appointment
          </Button>

          <Button variant="outline" className="gap-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-cyan-600">
            <MapPin size={18} />
            Location
          </Button>
        </div>
      </div>
    </header>
  );
};
