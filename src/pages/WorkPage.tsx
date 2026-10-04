import React from 'react';
import { Portfolio } from '../components/Portfolio';
import { Sparkles } from 'lucide-react';

interface WorkPageProps {
  onOpenSampleModal: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onOpenSampleModal }) => {
  return (
    <div className="pt-24 pb-16 space-y-0">
      {/* Full Portfolio Component */}
      <Portfolio />

      {/* Bottom CTA */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Like What You See?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Get a custom website sample concept designed specifically for your business.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenSampleModal}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              <span>Get a Free Sample Website</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
