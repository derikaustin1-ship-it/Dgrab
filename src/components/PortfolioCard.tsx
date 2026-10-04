import React from 'react';
import { ExternalLink, GraduationCap, Laptop, Sparkles } from 'lucide-react';
import type { PortfolioItem } from '../types';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col hover:border-sky-400 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-slate-200/60 group">
      
      {/* Visual Mockup Header */}
      <div className={`relative h-48 sm:h-52 ${item.previewGradient} p-4 flex flex-col justify-between overflow-hidden border-b border-slate-200/60`}>
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-25 pointer-events-none" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-slate-200 text-[11px] font-bold text-sky-700 shadow-xs">
            <Sparkles className="w-3 h-3 text-sky-600" />
            Demo Concept
          </span>
          <span className="p-1.5 rounded-md bg-white/80 backdrop-blur-md text-slate-700 shadow-xs">
            <GraduationCap className="w-4 h-4 text-sky-700" />
          </span>
        </div>

        {/* Central Mockup Representation */}
        <div className="relative z-10 my-auto text-center p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm group-hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center gap-2 text-slate-900 font-mono text-xs font-bold">
            <Laptop className="w-4 h-4 text-sky-600" />
            <span>{item.name}</span>
          </div>
          <span className="text-[10px] text-sky-600 font-mono block mt-0.5 font-semibold">Interactive Live Concept</span>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-600 font-semibold">
          <span>{item.category}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-sky-600 transition-colors">
              {item.name}
            </h3>
          </div>
          <span className="inline-block px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-semibold mb-3 border border-slate-200/80">
            {item.category}
          </span>
          <p className="text-sm text-slate-600 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href={item.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-sm transition-all duration-200 shadow-sm group/btn cursor-pointer"
          >
            <span>View Website</span>
            <ExternalLink className="w-4 h-4 text-slate-300 group-hover/btn:text-white transition-colors" />
          </a>
        </div>
      </div>

    </div>
  );
};
