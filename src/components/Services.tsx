import React from 'react';
import {
  Layout,
  Code2,
  Smartphone,
  Globe,
  Search,
  MailCheck,
  MessageSquare,
  Images,
  Wrench,
  Sliders
} from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      icon: Layout,
      title: 'Website Design',
      desc: 'Professional layouts designed around your business, customers, and goals.',
    },
    {
      icon: Code2,
      title: 'Website Development',
      desc: 'Responsive websites built with modern web technologies.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive Design',
      desc: 'Websites that work properly across phones, tablets, laptops, and desktops.',
    },
    {
      icon: Globe,
      title: 'Domain & Hosting Setup',
      desc: 'Help with getting your website domain and hosting ready for launch.',
    },
    {
      icon: Search,
      title: 'Basic SEO',
      desc: 'Essential on-page SEO foundations to help search engines understand your website.',
    },
    {
      icon: MailCheck,
      title: 'Contact & Enquiry Forms',
      desc: 'Make it easy for potential customers to contact your business.',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Integration',
      desc: 'Give customers a direct way to start a conversation through WhatsApp.',
    },
    {
      icon: Images,
      title: 'Gallery & Portfolio',
      desc: 'Show your products, services, projects, facilities, or work visually.',
    },
    {
      icon: Wrench,
      title: 'Website Maintenance',
      desc: 'Support with future website updates and content changes.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50/60 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-700 bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What We Can Build For You
          </h2>
          <p className="text-base text-slate-600 font-normal">
            From a simple business website to a more detailed online presence, Dgrab can help you create a website that fits your business.
          </p>
        </div>

        {/* 9 Service Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-50 group-hover:border-sky-200 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Customization disclaimer note */}
        <div className="mt-10 max-w-xl mx-auto text-center p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center gap-2.5 text-xs text-slate-600">
          <Sliders className="w-4 h-4 text-sky-600 shrink-0" />
          <span>Services can be customized according to your specific business requirements and goals.</span>
        </div>

      </div>
    </section>
  );
};
