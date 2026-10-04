import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, LayoutGrid, MessageSquare } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ValueStrip } from '../components/ValueStrip';
import { PortfolioCard } from '../components/PortfolioCard';
import type { PortfolioItem } from '../types';

interface HomePageProps {
  onOpenSampleModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSampleModal }) => {
  const featuredPortfolio: PortfolioItem[] = [
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
      id: 'oxford',
      name: 'Oxford International School',
      category: 'School Website — Practical Concept',
      description: 'A simple, information-focused school website concept designed to make important information easy for parents to find.',
      demoUrl: 'https://oxford-sandy.vercel.app/?utm_source=chatgpt.com',
      tag: 'Practical Concept',
      previewGradient: 'bg-gradient-to-br from-slate-100 via-blue-50 to-sky-100',
    },
  ];

  const whatsappUrl =
    'https://wa.me/919788945834?text=' +
    encodeURIComponent("Hi Dgrab, I'd like to know more about getting a website for my business.");

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onOpenSampleModal={onOpenSampleModal} />

      {/* 2. Short Value Proposition Strip */}
      <ValueStrip />

      {/* 3. Short Introduction */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-700 bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200">
            Web Design Studio
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Websites Built Around Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Dgrab is a web design studio creating affordable, modern, mobile-friendly websites for businesses in India and internationally. We help you present your business clearly and make it easy for customers to contact you.
          </p>
          <div className="pt-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-xs transition-colors"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Portfolio (Top 3 previews only) */}
      <section className="py-16 bg-slate-50/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <LayoutGrid className="w-3.5 h-3.5" />
              Featured Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Website Concepts
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              A quick preview of recent website concepts created by Dgrab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPortfolio.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 font-bold text-sm shadow-xs transition-colors"
            >
              <span>View All Work</span>
              <ArrowRight className="w-4 h-4 text-sky-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Compact Free Sample CTA */}
      <section className="py-14 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Free Sample Concept
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              See What Your Website Could Look Like Before You Decide
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Not sure what your business website could look like? Get a free sample website concept designed around your business.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Get a Free Sample</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Short Final Contact CTA */}
      <section className="py-14 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ready to Put Your Business Online?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenSampleModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get a Quote</span>
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Dgrab</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
