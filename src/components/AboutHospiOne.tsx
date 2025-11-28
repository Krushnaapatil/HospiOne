import React from 'react';

export const AboutHospiOne = () => {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">What is HospiOne ?</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 mb-8">
            {/* Left Image */}
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[300px]">
                <img 
                  src="logo.png" 
                  alt="Surgeons performing operation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="text-slate-700 font-semibold mb-6 text-lg leading-relaxed">
                HospiOne is a chain of hospitals, clinics and doctors, with strategic tie-ups, delivering the best medical services to the patients.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                The seeds were sown one and half years ago during the first wave of covid. The core Team of HospiOne managed majority of admissions, OPD consultations and counselling sessions which gave desired outcomes to our patients..Hospital will provide home services to senior citizens and bedridden patients in terms of nursing staff, physiotherapy and bedside medical care ..
              </p>
            </div>
          </div>

          {/* Full Width Text Below */}
          <div className="text-slate-500 text-sm leading-relaxed space-y-4">
            <p>
              HospiOne is a chain of hospitals, clinics and doctors, with strategic tie-ups, delivering the best medical services to the patients.
              The seeds were sown one and half years ago during the first wave of covid. The core Team of HospiOne managed majority of admissions, OPD consultations and counselling sessions which gave desired outcomes to our patients. The positive feedback from patients encouraged us to expand the services in Healthcare to further level. Highly experienced and qualified doctors enrolled into HospiOne will provide their services for pre operative check ups, pre operative fitness, as well as post operative care at their native places ensuring that the operating surgeon stays in touch throughout the process. Patients can avail diagnostic services , pathology and radiology services at affordable charges through HospiOne. Hospital will provide home services to senior citizens and bedridden patients in terms of nursing staff, physiotherapy and bedside medical care ..
            </p>
          </div>

          <div className="flex justify-end mt-4">
            <a href="#" className="text-cyan-500 font-semibold text-sm hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};
