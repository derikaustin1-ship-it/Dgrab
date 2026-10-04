import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const phone = '+91 9788945834';
  const email = 'theywantweb@gmail.com';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'Process', path: '/process' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4 text-left">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                D
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                Dgrab<span className="text-sky-400">.</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-300 font-semibold">
              Affordable Websites That Grow Your Business
            </p>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
              Dgrab is a web design studio creating affordable, modern, mobile-friendly websites for businesses in India and internationally.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 text-left space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-sky-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Service Area */}
          <div className="md:col-span-4 text-left space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Get In Touch
            </h4>
            
            <div className="space-y-2 text-xs font-medium">
              <a
                href={`tel:+919788945834`}
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{phone}</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{email}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Service area: India + International Clients</span>
              </div>
            </div>
          </div>

        </div>

        {/* Portfolio Disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 space-y-2">
          <p>
            Portfolio examples shown on this website include fictional demo concepts created by Dgrab.
          </p>
          <p>
            © {new Date().getFullYear()} Dgrab. All Rights Reserved. Founder: Derik Austin S.
          </p>
        </div>

      </div>
    </footer>
  );
};
