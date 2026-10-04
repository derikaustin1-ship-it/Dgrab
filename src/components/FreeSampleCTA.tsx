import React from 'react';
import { Sparkles, MessageSquare, Check } from 'lucide-react';

interface FreeSampleCTAProps {
  onOpenSampleModal: () => void;
}

export const FreeSampleCTA: React.FC<FreeSampleCTAProps> = ({ onOpenSampleModal }) => {
  const whatsappUrl =
    'https://wa.me/919788945834?text=' +
    encodeURIComponent("Hi Dgrab, I'd like to know more about getting a website for my business.");

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 border border-sky-800 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xl shadow-slate-200">
          
          {/* Subtle bg decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              Free Sample Website Concept
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              See What Your Website Could Look Like Before You Decide
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
              Not sure what your business website could look like? Get a free sample website concept and see how your business could be presented online before moving forward.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenSampleModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-base shadow-lg shadow-sky-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request a Free Sample</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-md transition-colors"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp Dgrab</span>
              </a>
            </div>

            <div className="pt-3 flex items-center justify-center gap-2 text-xs text-slate-300 font-medium">
              <Check className="w-4 h-4 text-sky-400" />
              <span>No fake promises. Just a sample concept designed around your business.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
