import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Utensils,
  ShoppingBag,
  Briefcase,
  Stethoscope,
  Building2,
  Rocket,
  Store,
  UserCheck,
  Wrench,
  HelpCircle,
  MessageCircle
} from 'lucide-react';

interface BusinessTypesProps {
  onOpenSampleModal: () => void;
}

export const BusinessTypes: React.FC<BusinessTypesProps> = ({ onOpenSampleModal }) => {
  const categories = [
    { name: 'Schools', icon: GraduationCap },
    { name: 'Coaching & Education', icon: BookOpen },
    { name: 'Restaurants & Cafés', icon: Utensils },
    { name: 'Shops & Retail', icon: ShoppingBag },
    { name: 'Professional Services', icon: Briefcase },
    { name: 'Clinics & Wellness', icon: Stethoscope },
    { name: 'Real Estate', icon: Building2 },
    { name: 'Startups', icon: Rocket },
    { name: 'Local Businesses', icon: Store },
    { name: 'Personal Brands', icon: UserCheck },
    { name: 'Service Businesses', icon: Wrench },
    { name: 'Other Businesses', icon: HelpCircle },
  ];

  const whatsappUrl =
    'https://wa.me/919788945834?text=' +
    encodeURIComponent("Hi Dgrab, I have a business and I'd like to discuss a website for my category.");

  return (
    <section className="py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-700 bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200">
            Business Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Websites for Different Types of Businesses
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Whether you run a school, a retail store, or a local service, Dgrab designs websites tailored to how your business operates.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-sky-300 hover:bg-white flex flex-col items-center text-center group transition-all duration-200 shadow-xs hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center mb-3 group-hover:bg-sky-50 group-hover:border-sky-200 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Category Note & Action */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">Don't see your business category?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Talk to us about what your business does and what kind of website you need.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Talk to Us</span>
            </a>
            <button
              onClick={onOpenSampleModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer"
            >
              <span>Get Free Sample</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
