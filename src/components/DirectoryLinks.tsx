import React from 'react';

const directoryData = [
  {
    category: "Gynaecology",
    links: ["Gynaecologist In Bangalore", "Gynaecologist In Chandigarh", "Gynaecologist In Chennai", "Gynaecologist In Delhi", "Gynaecologist In Gurgaon", "Gynaecologist In Lucknow", "Gynaecologist In Mumbai", "Gynaecologist In Pune"]
  },
  {
    category: "Aesthetic",
    links: ["Plastic surgeon In Ahmedabad", "Plastic surgeon In Bangalore", "Plastic surgeon In Chandigarh", "Plastic surgeon In Chennai", "Plastic surgeon In Delhi", "Plastic surgeon In Gurgaon", "Plastic surgeon In Kolkata", "Plastic surgeon In Lucknow", "Plastic surgeon In Mumbai", "Plastic surgeon In Pune"]
  },
  {
    category: "Laparoscopy",
    links: ["Laparoscopic Surgeon In Ahmedabad", "Laparoscopic Surgeon In Bangalore", "Laparoscopic Surgeon In Chandigarh", "Laparoscopic Surgeon In Chennai", "Laparoscopic Surgeon In Delhi", "Laparoscopic Surgeon In Gurgaon", "Laparoscopic Surgeon In Kolkata", "Laparoscopic Surgeon In Lucknow", "Laparoscopic Surgeon In Mumbai", "Laparoscopic Surgeon In Pune"]
  },
  {
    category: "Vascular",
    links: ["Vascular surgeon In Ahmedabad", "Vascular surgeon In Bangalore", "Vascular surgeon In Chandigarh", "Vascular surgeon In Chennai", "Vascular surgeon In Delhi", "Vascular surgeon In Gurgaon", "Vascular surgeon In Kolkata", "Vascular surgeon In Lucknow", "Vascular surgeon In Mumbai", "Vascular surgeon In Pune"]
  },
  {
    category: "ENT",
    links: ["ENT specialist In Bangalore", "ENT specialist In Chandigarh", "ENT specialist In Chennai", "ENT specialist In Delhi", "ENT specialist In Gurgaon", "ENT specialist In Lucknow", "ENT specialist In Mumbai", "ENT specialist In Pune"]
  },
  {
    category: "Proctology",
    links: ["Proctologist In Ahmedabad", "Proctologist In Bangalore", "Proctologist In Chandigarh", "Proctologist In Chennai", "Proctologist In Delhi", "Proctologist In Gurgaon", "Proctologist In Kolkata", "Proctologist In Lucknow", "Proctologist In Mumbai", "Proctologist In Pune"]
  },
  {
    category: "Urology",
    links: ["Urologist In Bangalore", "Urologist In Chandigarh", "Urologist In Chennai", "Urologist In Delhi", "Urologist In Gurgaon", "Urologist In Kolkata", "Urologist In Lucknow", "Urologist In Mumbai", "Urologist In Pune"]
  },
  {
    category: "Orthopedics",
    links: ["Orthopedic surgeon In Bangalore", "Orthopedic surgeon In Delhi", "Orthopedic surgeon In Gurgaon", "Orthopedic surgeon In Mumbai", "Orthopedic surgeon In Pune"]
  },
  {
    category: "Fertility",
    links: ["Fertility specialist In Delhi"]
  },
  {
    category: "Ophthalmology",
    links: ["Eye specialist In Ahmedabad", "Eye specialist In Bangalore", "Eye specialist In Chennai", "Eye specialist In Delhi", "Eye specialist In Gurgaon", "Eye specialist In Lucknow", "Eye specialist In Mumbai"]
  }
];

export const DirectoryLinks = () => {
  return (
    <section className="bg-white py-12 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          {directoryData.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row text-xs leading-relaxed">
              <div className="md:w-32 flex-shrink-0 mb-2 md:mb-0">
                <h4 className="font-bold text-slate-800">{item.category}</h4>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-x-1 text-slate-500">
                  {item.links.map((link, linkIdx) => (
                    <React.Fragment key={linkIdx}>
                      <a href="#" className="hover:text-cyan-500 transition-colors">{link}</a>
                      {linkIdx < item.links.length - 1 && <span className="text-slate-300">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
