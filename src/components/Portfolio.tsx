import React from 'react';
import { Info } from 'lucide-react';
import { PortfolioCard } from './PortfolioCard';
import type { PortfolioItem } from '../types';

export const Portfolio: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 'oakridge',
      name: 'Oakridge International Academy',
      category: 'School Website — Premium Concept',
      description: 'A sophisticated school website concept with an editorial academic feel and a refined visual presentation.',
      demoUrl: 'https://oakridge-school-demo.vercel.app/?utm_source=chatgpt.com',
      tag: 'Premium Concept',
      previewGradient: 'bg-gradient-to-br from-slate-100 via-indigo-50 to-sky-100',
    },
    {
      id: 'greenfield',
      name: 'Greenfield Matriculation School',
      category: 'School Website — Modern Concept',
      description: 'A clean, welcoming school website concept designed around trust, academics, and family-friendly communication.',
      demoUrl: 'https://greenfield-q9wv-rho.vercel.app/?utm_source=chatgpt.com',
      tag: 'Modern Concept',
      previewGradient: 'bg-gradient-to-br from-slate-100 via-emerald-50 to-teal-100',
    },
    {
      id: 'sunrise',
      name: 'Sunrise Public School',
      category: 'School Website — Bright Concept',
      description: 'A lively and approachable school website concept designed to communicate energy, learning, and student life.',
      demoUrl: 'https://sunrise-chi-liart.vercel.app/?utm_source=chatgpt.com',
      tag: 'Bright Concept',
      previewGradient: 'bg-gradient-to-br from-slate-100 via-sky-50 to-blue-100',
    },
    {
      id: 'heritage',
      name: 'Heritage Higher Secondary School',
      category: 'School Website — Traditional Concept',
      description: 'A refined academic website concept combining traditional school identity with a modern digital experience.',
      demoUrl: 'https://heritage-five-ebon.vercel.app/?utm_source=chatgpt.com',
      tag: 'Traditional Concept',
      previewGradient: 'bg-gradient-to-br from-slate-100 via-amber-50 to-orange-100',
    },
    {
      id: 'oxford',
      name: 'Oxford International School',
      category: 'School Website — Practical Concept',
      description: 'A simple, information-focused school website concept designed to make important information easy for parents to find.',
      demoUrl: 'https://oxford-sandy.vercel.app/?utm_source=chatgpt.com',
      tag: 'Practical Concept',
      previewGradient: 'bg-gradient-to-br from-slate-100 via-blue-50 to-sky-100',
    },
  ];

  return (
    <section id="work" className="py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            Demo Websites
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Work
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Explore some of the website concepts created by Dgrab.
          </p>
        </div>

        {/* Clear Portfolio Disclosure Box */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs flex items-center gap-3 shadow-xs">
          <Info className="w-5 h-5 text-sky-600 shrink-0" />
          <p>
            <strong className="text-slate-900 font-bold">Demo Concepts Notice:</strong> These are fictional school website concepts created to demonstrate Dgrab's design and development capabilities.
          </p>
        </div>

        {/* Portfolio Grid: Desktop 3/2, Tablet 2, Mobile 1 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};
