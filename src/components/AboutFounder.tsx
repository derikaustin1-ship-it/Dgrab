import React from 'react';
import { Sparkles, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import founderPhoto from '../assets/derik_official.jpg';

interface AboutFounderProps {
  onOpenSampleModal: () => void;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ onOpenSampleModal }) => {
  return (
    <section id="about" className="py-20 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Part 1: About Dgrab Studio */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-700 bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200">
            About Dgrab
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Founder-Led Web Design Studio
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-semibold">
            Dgrab is a web design studio focused on creating professional, affordable websites for businesses in India and around the world.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We believe a business website doesn't need to be complicated to be effective. It should clearly communicate what you offer, look professional on every device, and make it easy for customers to get in touch.
          </p>
        </div>

        {/* Part 2: Meet the Founder */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-lg relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Founder Image (Uploaded real photo) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-xs sm:max-w-sm">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative rounded-2xl bg-white p-2 border border-slate-200 overflow-hidden shadow-md">
                  <img
                    src={founderPhoto}
                    alt="Derik Austin S - Founder of Dgrab"
                    className="w-full h-80 sm:h-96 object-cover object-top rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200/90 text-center shadow-md">
                    <span className="font-heading font-extrabold text-slate-900 text-base block">Derik Austin S</span>
                    <span className="text-xs text-sky-600 font-bold">Founder, Dgrab</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Info & Statement */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Meet the Founder</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Hi, I'm Derik Austin S
              </h3>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  I started Dgrab with a simple goal: to help businesses get a professional presence online without making the process unnecessarily complicated or expensive.
                </p>
                <p>
                  I focus on creating clean, modern websites that present a business clearly and make it easier for customers to connect.
                </p>
              </div>

              {/* Founder Commitments */}
              <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-sky-600 shrink-0" />
                  <span>Direct communication with the founder — no pushy agency fluff</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-sky-600 shrink-0" />
                  <span>Free initial website concept sample before you decide</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-sky-600 shrink-0" />
                  <span>Responsive, accessible, and optimized for real business results</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenSampleModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-sm shadow-md shadow-sky-600/20 transition-all cursor-pointer"
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="mailto:theywantweb@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-sm font-bold transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                  <span>theywantweb@gmail.com</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
