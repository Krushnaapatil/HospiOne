import React from 'react';
import { 
  Phone, Mail, ChevronRight, ChevronsUp, 
  Facebook, Instagram, Youtube, Twitter 
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const LinkItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-2 group cursor-pointer">
      <ChevronRight size={16} className="mt-1 text-white/70 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
      <span className="text-slate-300 text-sm hover:text-cyan-400 transition-colors">{text}</span>
    </li>
  );

  return (
    <footer className="bg-[#1a1b3a] text-white pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Column 1: Logo & Info (3 cols wide) */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-4xl font-bold text-white">
              hospi<span className="text-white">one</span>
              <span className="text-pink-500">.</span>
              <span className="text-cyan-500">.</span>
              <span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={18} className="text-slate-400" />
                <span className="text-sm font-medium">1800 222 666</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={18} className="text-slate-400" />
                <span className="text-sm font-medium">info@hospione.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Information (2 cols wide) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">Information</h3>
            <ul className="space-y-3">
              <LinkItem text="Home" />
              <LinkItem text="About us" />
              <LinkItem text="Media" />
              <LinkItem text="Blog" />
              <LinkItem text="Privacy Policy" />
              <LinkItem text="FAQ's" />
              <LinkItem text="Terms & Condition" />
            </ul>
          </div>

          {/* Column 3: Patient Care (2 cols wide) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">Patient Care</h3>
            <ul className="space-y-3">
              <LinkItem text="Find a Doctor" />
              <LinkItem text="Book Physical Appointment" />
              <LinkItem text="Patient Testimonials" />
              <LinkItem text="FAQ's" />
            </ul>
          </div>

          {/* Column 4: Centers of Excellence (3 cols wide - Split list) */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">Centers of Excellence</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {/* Left Sub-col */}
              <ul className="space-y-3">
                <LinkItem text="Orthopedics" />
                <LinkItem text="Cardiology" />
                <LinkItem text="Laparoscopy" />
                <LinkItem text="Proctology" />
                <LinkItem text="Urology" />
                <LinkItem text="Gastroenterology" />
                <LinkItem text="Cosmetic / Aesthetic" />
                <LinkItem text="Infertility" />
              </ul>
              {/* Right Sub-col */}
              <ul className="space-y-3">
                <LinkItem text="Gynecology" />
                <LinkItem text="Vascular" />
                <LinkItem text="ENT" />
                <LinkItem text="Opthal" />
                <LinkItem text="Urology" />
                <LinkItem text="Neurosurgery / Neurology" />
                <LinkItem text="Bariatric Surgery" />
                <LinkItem text="Homecare" />
              </ul>
            </div>
          </div>

          {/* Column 5: Contact Us (2 cols wide) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-3">
              <LinkItem text="Ask a Query" />
              <LinkItem text="Give Your Feedback" />
              <LinkItem text="Hospi One Lifeline" />
              <LinkItem text="Become a Arogyasathi" />
              <LinkItem text="Career" />
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all text-white">
              <Facebook size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all text-white">
              <Instagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all text-white">
              <Youtube size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all text-white">
              <Twitter size={14} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-slate-500 text-xs text-center md:text-right">
            <p>Copyrights (c) 2022.HospiOne.All rights reserved. Design by Digital Marketing StudioGenix</p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className="absolute right-8 bottom-20 bg-cyan-400 hover:bg-cyan-500 text-white p-3 rounded-full shadow-lg transition-all animate-bounce-slow"
          aria-label="Scroll to top"
        >
          <ChevronsUp size={24} />
        </button>

      </div>
    </footer>
  );
};
