import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';

interface FinalCTAProps {
  onOpenSampleModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenSampleModal }) => {
  const whatsappUrl =
    'https://wa.me/919788945834?text=' +
    encodeURIComponent("Hi Dgrab, I'd like to know more about getting a website for my business.");

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Ready to Put Your Business Online?
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
          Let's create a website that represents your business professionally.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenSampleModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-base shadow-lg shadow-sky-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-sky-100" />
            <span>Get a Free Sample Website</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md transition-colors"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>WhatsApp Dgrab</span>
          </a>
        </div>
      </div>
    </section>
  );
};
