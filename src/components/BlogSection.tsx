import React from 'react';
import { User, Calendar } from 'lucide-react';
import { Button } from './ui/Button';

const blogs = [
  {
    title: "Pioneering Discoveries In Inflammatory Bowel Disease",
    excerpt: "Luis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    date: "19 Sept 2021",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
  },
  {
    title: "Pioneering Discoveries In Inflammatory Bowel Disease",
    excerpt: "Luis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    date: "19 Sept 2021",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Pioneering Discoveries In Inflammatory Bowel Disease",
    excerpt: "Luis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    date: "19 Sept 2021",
    author: "Admin",
    image: "logo.png"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-semibold text-sm uppercase">Our Blogs</span>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">Read Our Latest Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-4 relative h-64">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                <div className="flex items-center gap-1">
                  <User size={14} className="text-cyan-500" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="text-cyan-500" />
                  <span>{blog.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                {blog.title}
              </h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                {blog.excerpt}
              </p>
              
              <button className="text-cyan-500 text-sm font-semibold hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="rounded-full px-8 bg-cyan-500 hover:bg-cyan-600">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};
