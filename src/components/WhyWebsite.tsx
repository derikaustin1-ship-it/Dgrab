import React from 'react';
import { ShieldCheck, Globe2, MessageSquareCheck } from 'lucide-react';

export const WhyWebsite: React.FC = () => {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Build Trust',
      text: 'A professional website gives customers a clear place to learn about your business.',
    },
    {
      icon: Globe2,
      title: 'Reach More People',
      text: 'Make your business accessible to customers beyond your physical location.',
    },
    {
      icon: MessageSquareCheck,
      title: 'Make Enquiries Easier',
      text: 'Give visitors clear ways to call, email, WhatsApp, or send an enquiry.',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Business Deserves a Professional Online Presence
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Your website is often one of the first places potential customers learn about your business. Dgrab helps you present your business clearly with a modern website that works across devices and makes it easy for customers to contact you.
          </p>
        </div>

        {/* 3 Compact Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-sky-400 hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sky-100 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{pt.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pt.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
