import React from 'react';
import { Tag, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

interface PricingSectionProps {
  onOpenSampleModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenSampleModal }) => {
  const whatsappUrl =
    'https://wa.me/919788945834?text=' +
    encodeURIComponent("Hi Dgrab, I'd like to get a quote for my business website.");

  return (
    <section className="py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            Pricing Philosophy
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Affordable Websites
          </h2>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-sky-700 font-heading">
              Affordable websites — contact us for a quote
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
              Every business has different requirements, so we keep our approach flexible and discuss what you actually need before providing a quote.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>No hidden surprises</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Tailored to your needs</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Free sample concept</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenSampleModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-sm shadow-md shadow-sky-600/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get a Quote</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Quote Request</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
