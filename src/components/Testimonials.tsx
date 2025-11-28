import React from 'react';
import { Button } from './ui/Button';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <span className="text-cyan-500 font-semibold text-sm">Our Testimonials</span>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">What Our Patient Says</h2>
        </div>

        <div className="max-w-4xl mx-auto relative py-8">
          {/* Left Quote */}
          <div className="hidden md:block absolute bottom-56 left-0 text-cyan-100 transform -translate-x-12">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.896 14.325 16.053 14.941 15.471C15.558 14.89 16.502 14.599 17.774 14.599L17.774 11.674C16.397 11.674 15.355 11.258 14.649 10.426C13.943 9.594 13.59 8.395 13.59 6.829L13.59 3L21.984 3L21.984 12.669C21.984 15.297 21.244 17.42 19.764 19.039C18.284 20.657 16.368 21.466 14.017 21ZM5.005 21L5.005 18C5.005 16.896 5.313 16.053 5.929 15.471C6.545 14.89 7.49 14.599 8.762 14.599L8.762 11.674C7.385 11.674 6.343 11.258 5.637 10.426C4.931 9.594 4.578 8.395 4.578 6.829L4.578 3L12.972 3L12.972 12.669C12.972 15.297 12.232 17.42 10.752 19.039C9.272 20.657 7.356 21.466 5.005 21Z" />
            </svg>
          </div>

          {/* Right Quote */}
          <div className="hidden md:block absolute bottom-0 right-0 text-cyan-100 transform translate-x-12">
             <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="rotate-180">
              <path d="M14.017 21L14.017 18C14.017 16.896 14.325 16.053 14.941 15.471C15.558 14.89 16.502 14.599 17.774 14.599L17.774 11.674C16.397 11.674 15.355 11.258 14.649 10.426C13.943 9.594 13.59 8.395 13.59 6.829L13.59 3L21.984 3L21.984 12.669C21.984 15.297 21.244 17.42 19.764 19.039C18.284 20.657 16.368 21.466 14.017 21ZM5.005 21L5.005 18C5.005 16.896 5.313 16.053 5.929 15.471C6.545 14.89 7.49 14.599 8.762 14.599L8.762 11.674C7.385 11.674 6.343 11.258 5.637 10.426C4.931 9.594 4.578 8.395 4.578 6.829L4.578 3L12.972 3L12.972 12.669C12.972 15.297 12.232 17.42 10.752 19.039C9.272 20.657 7.356 21.466 5.005 21Z" />
            </svg>
          </div>

          <p className="text-slate-600 leading-loose mb-8 text-sm md:text-base px-4">
            Since vindictively over agile the some far well besides constructively well airy then one during with close excellent grabbed gosh contrary far dalmatian upheld intrepid bought and toucan majestic more some apart dear boa much cast falcon a dwelled ouch busy.
          </p>

          <div>
            <h4 className="font-bold text-slate-800 text-lg">Mr. Dipti Deshmukh</h4>
            <span className="text-slate-500 text-sm">CEO</span>
          </div>
        </div>

        <div className="mt-12">
          <Button className="rounded-full px-10 bg-cyan-500 hover:bg-cyan-600">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};
