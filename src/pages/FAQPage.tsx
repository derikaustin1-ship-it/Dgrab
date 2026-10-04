import React from 'react';
import { FAQ } from '../components/FAQ';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export const FAQPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 space-y-0">
      <FAQ />

      {/* Bottom CTA */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Have More Questions?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            We are always here to help you understand how a website can benefit your business.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4 text-sky-400" />
              <span>Contact Dgrab</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
