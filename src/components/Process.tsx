import React from 'react';
import { MessageSquarePlus, Palette, SlidersHorizontal, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell Us About Your Business',
      desc: 'Share your business details, goals, services, and the type of website you need.',
      icon: MessageSquarePlus,
    },
    {
      number: '02',
      title: 'Get a Sample Concept',
      desc: 'We create a sample website concept so you can see the direction before deciding.',
      icon: Palette,
    },
    {
      number: '03',
      title: 'Refine Your Website',
      desc: 'Once you decide to move forward, the website is customized with your actual business information and requirements.',
      icon: SlidersHorizontal,
    },
    {
      number: '04',
      title: 'Launch',
      desc: 'Your finished website is prepared for launch and made available to your customers.',
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-700 bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            A Simple Way to Get Your Website Online
          </h2>
          <p className="text-base text-slate-600 font-normal">
            A clear, straightforward workflow designed to keep things stress-free.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-heading text-slate-300 group-hover:text-sky-600 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 group-hover:bg-sky-100 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
