import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Search, Globe, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const TopBar = () => {
  const { user, isAuthenticated, openModal, logout } = useAuth();

  return (
    <div className="bg-[#0f172a] text-white text-sm py-2 px-4 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-cyan-400 transition-colors">
            <Globe size={14} />
            <span>Language</span>
          </div>
          <div className="h-4 w-px bg-slate-700"></div>
          <div className="flex items-center space-x-3">
            <Facebook size={14} className="cursor-pointer hover:text-cyan-400 transition-colors" />
            <Instagram size={14} className="cursor-pointer hover:text-cyan-400 transition-colors" />
            <Youtube size={14} className="cursor-pointer hover:text-cyan-400 transition-colors" />
            <Twitter size={14} className="cursor-pointer hover:text-cyan-400 transition-colors" />
          </div>
          <div className="h-4 w-px bg-slate-700"></div>
          <div className="flex items-center space-x-2">
            <Search size={14} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none focus:ring-0 text-sm placeholder-slate-400 w-32 focus:outline-none"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <nav className="flex items-center space-x-4 text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Surgeries</a>
            <a href="#" className="hover:text-white transition-colors">Media</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </nav>
          
          {isAuthenticated ? (
             <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
               <div className="flex items-center gap-2 text-cyan-400">
                 <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                   <User size={14} />
                 </div>
                 <span className="font-medium text-xs">Hi, {user?.name}</span>
               </div>
               <button 
                 onClick={logout}
                 className="text-slate-400 hover:text-white transition-colors"
                 title="Logout"
               >
                 <LogOut size={14} />
               </button>
             </div>
          ) : (
            <button 
              onClick={openModal}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1 rounded font-semibold text-xs uppercase tracking-wide transition-colors"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
