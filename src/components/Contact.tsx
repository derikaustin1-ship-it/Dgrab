import React from 'react';
import { MessageSquare, Phone, Mail, Globe } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

export const Contact: React.FC = () => {
  const phone = '+91 9788945834';
  const email = 'theywantweb@gmail.com';
  const whatsappUrl =
    'https://wa.me/919788945834?text=' +
    encodeURIComponent("Hi Dgrab, I'd like to know more about getting a website for my business.");

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-700 bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Your Website
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Have a business that needs a website? Tell us what you have in mind.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Contact Information
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We respond quickly to all enquiries. Reach out via WhatsApp, phone, or email to discuss your business website needs.
            </p>

            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 hover:shadow-md flex items-start gap-4 transition-all duration-200 group"
              >
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-bold block">
                    WhatsApp Chat
                  </span>
                  <span className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors block">
                    {phone}
                  </span>
                  <span className="text-xs text-emerald-600 font-semibold mt-0.5 block">Chat with Dgrab on WhatsApp →</span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:+919788945834`}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-sky-400 hover:shadow-md flex items-start gap-4 transition-all duration-200 group"
              >
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-bold block">
                    Direct Phone Call
                  </span>
                  <span className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors block">
                    {phone}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5 block">Click to call directly on mobile</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${email}`}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md flex items-start gap-4 transition-all duration-200 group"
              >
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-bold block">
                    Email Address
                  </span>
                  <span className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors block truncate">
                    {email}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5 block">Send us an email anytime</span>
                </div>
              </a>
            </div>

            {/* Service Area Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-700 font-medium">
              <Globe className="w-4 h-4 text-sky-600 shrink-0" />
              <span>
                <strong className="text-slate-900 font-bold">Service Area:</strong> India + International Clients
              </span>
            </div>

          </div>

          {/* Right Column: Embedded Sample Request Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
            <EnquiryForm />
          </div>

        </div>

      </div>
    </section>
  );
};
