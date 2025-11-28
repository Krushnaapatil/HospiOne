import React from 'react';
import { Button } from './ui/Button';

const events = [
  {
    id: 1,
    date: "10",
    month: "JAN",
    title: "Pioneering Discoveries In Inflammatory Bowel Disease",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    date: "10",
    month: "JAN",
    title: "Pioneering Discoveries In Inflammatory Bowel Disease",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    date: "10",
    month: "JAN",
    title: "Pioneering Discoveries In Inflammatory Bowel Disease",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    date: "10",
    month: "JAN",
    title: "Pioneering Discoveries In Inflammatory Bowel Disease",
    image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?q=80&w=2070&auto=format&fit=crop"
  }
];

export const EventsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-semibold text-sm">Our Events</span>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">Read Our Latest Events</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt="Event" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-cyan-500 text-white p-2 rounded text-center min-w-[50px]">
                  <div className="text-lg font-bold leading-none">{event.date}</div>
                  <div className="text-[10px] font-medium uppercase">{event.month}</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-800 text-sm leading-relaxed group-hover:text-cyan-600 transition-colors">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="rounded-full px-10 bg-cyan-500 hover:bg-cyan-600">
            See Al Events
          </Button>
        </div>
      </div>
    </section>
  );
};
