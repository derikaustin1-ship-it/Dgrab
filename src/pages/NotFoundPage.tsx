import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MessageSquare, AlertCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] pt-32 pb-20 flex items-center justify-center bg-slate-50/60 px-4">
      <div className="max-w-md mx-auto text-center p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-xs">
          <AlertCircle className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 font-mono">404 Error</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-sky-600" />
            <span>Contact Dgrab</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
