import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What types of businesses do you build websites for?',
      answer:
        "Dgrab works with businesses across different industries. Tell us what your business does and what you need, and we'll discuss a suitable website approach.",
    },
    {
      question: 'Can I see a sample before deciding?',
      answer:
        'Yes. Dgrab offers a free sample website concept so you can see a possible direction before deciding to move forward.',
    },
    {
      question: 'Will my website work on mobile?',
      answer:
        'Yes. Websites are designed to be responsive across phones, tablets, laptops, and desktops.',
    },
    {
      question: 'Can you help with domain and hosting?',
      answer:
        'Yes. Dgrab can help with domain and hosting setup as part of the website process.',
    },
    {
      question: 'Can I request changes?',
      answer:
        'Yes. Website content and design can be refined according to your requirements during the project.',
    },
    {
      question: 'Do you provide website maintenance?',
      answer:
        'Maintenance and future updates can be discussed depending on your requirements.',
    },
    {
      question: 'Do you work with clients outside India?',
      answer:
        'Yes. Dgrab is open to working with clients in India and internationally.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Contact Dgrab through WhatsApp, phone, email, or the enquiry form and tell us what kind of website you need.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Everything you need to know about working with Dgrab.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-sky-400 shadow-md shadow-sky-900/5'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-slate-100 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600 bg-sky-50' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
