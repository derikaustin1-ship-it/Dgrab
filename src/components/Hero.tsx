import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Sparkles, CheckCircle2, Layout, Smartphone, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenSampleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSampleModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/40 to-white">
      {/* Background soft subtle glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-200/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700 shadow-xs">
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>Web Design Studio • India & International</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Affordable Websites That{' '}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Grow Your Business
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Modern, mobile-friendly websites designed to help businesses build credibility, reach customers, and grow online — without unnecessary complexity.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center justify-center gap-2.5 px-6.5 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-base shadow-lg shadow-sky-600/25 hover:shadow-sky-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-sky-100" />
                <span>Get a Free Sample Website</span>
              </button>

              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-6.5 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-slate-900 font-bold text-base shadow-xs hover:shadow-sm transition-all"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Small supporting line */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Serving businesses across India and internationally. No obligation concept.</span>
            </div>
          </div>

          {/* Right Column: Light Theme Browser Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-white border border-slate-200/90 p-2 shadow-xl shadow-slate-200/80 overflow-hidden group">
              
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-100 rounded-t-xl border-b border-slate-200">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="px-4 py-1 bg-white rounded-md text-[11px] text-slate-600 border border-slate-200 font-mono tracking-tight flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  dgrab.com/preview-concept
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <Layout className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Mockup Canvas */}
              <div className="p-4 bg-slate-50/50 space-y-4 text-left">
                
                {/* Mockup Hero Banner */}
                <div className="p-5 rounded-xl bg-gradient-to-r from-sky-900 to-indigo-950 text-white border border-sky-800 relative overflow-hidden shadow-sm">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-sky-300 bg-sky-400/20 px-2 py-0.5 rounded border border-sky-400/30">
                    Live Demo Concept
                  </span>
                  <h4 className="text-base font-bold text-white mt-2">Oakridge International Academy</h4>
                  <p className="text-xs text-sky-100/80 mt-1">Excellence in Education • Modern Academic Portal</p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2.5 py-1 text-[10px] rounded bg-sky-400 text-slate-950 font-bold">Apply Now</span>
                    <span className="px-2.5 py-1 text-[10px] rounded bg-white/20 text-white">Explore Campus</span>
                  </div>
                </div>

                {/* Grid of 2 mini mockup cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 transition-colors">
                    <div className="w-full h-16 rounded bg-emerald-50 border border-emerald-100 mb-2 flex items-center justify-center text-emerald-700 text-xs font-mono font-bold">
                      Greenfield Demo
                    </div>
                    <span className="text-xs font-bold text-slate-800 block truncate">Greenfield School</span>
                    <span className="text-[10px] text-slate-500 block">Modern & Welcoming</span>
                  </div>

                  <div className="p-3 rounded-lg bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 transition-colors">
                    <div className="w-full h-16 rounded bg-sky-50 border border-sky-100 mb-2 flex items-center justify-center text-sky-700 text-xs font-mono font-bold">
                      Sunrise Demo
                    </div>
                    <span className="text-xs font-bold text-slate-800 block truncate">Sunrise Public School</span>
                    <span className="text-[10px] text-slate-500 block">Bright & Approachable</span>
                  </div>
                </div>

                {/* Responsive Badge Overlay */}
                <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-between text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-sky-600" />
                    <span className="font-medium">100% Mobile Responsive Layouts</span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
