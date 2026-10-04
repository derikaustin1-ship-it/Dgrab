import React from 'react';
import { Palette, Smartphone, Target, BadgePercent } from 'lucide-react';

export const ValueStrip: React.FC = () => {
  const items = [
    {
      icon: Palette,
      title: 'Modern Design',
      desc: 'Clean and professional websites.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      desc: 'Designed to work across phones, tablets, and desktops.',
    },
    {
      icon: Target,
      title: 'Business Focused',
      desc: 'Built around what your customers need to know.',
    },
    {
      icon: BadgePercent,
      title: 'Affordable',
      desc: 'Professional websites without unnecessary complexity.',
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200/80 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-md transition-all"
              >
                <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-100 text-sky-600 shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
