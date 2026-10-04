import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

const ROUTE_SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Dgrab — Affordable Websites That Grow Your Business',
    description: 'Dgrab creates modern, mobile-friendly and affordable websites for businesses in India and internationally.',
  },
  '/services': {
    title: 'Our Services | Dgrab Web Design Studio',
    description: 'Explore website design, development, mobile optimization, hosting setup, SEO, and maintenance services by Dgrab.',
  },
  '/work': {
    title: 'Our Work & Demo Websites | Dgrab',
    description: 'Explore website concepts created by Dgrab, showcasing clean, responsive design capabilities across business sectors.',
  },
  '/process': {
    title: 'How It Works | Dgrab Simple 4-Step Process',
    description: 'Learn about Dgrab’s straightforward 4-step website development process — from concept sample to final launch.',
  },
  '/about': {
    title: 'About Dgrab & Founder Derik Austin S',
    description: 'Dgrab is a founder-led web design studio focused on creating clean, effective, affordable websites for small businesses.',
  },
  '/faq': {
    title: 'Frequently Asked Questions | Dgrab',
    description: 'Got questions about getting a business website? Find clear answers regarding pricing, mobile compatibility, hosting, and timeline.',
  },
  '/contact': {
    title: 'Contact Dgrab | Get a Free Sample Website',
    description: 'Contact Dgrab via WhatsApp (+91 9788945834), phone, email, or our enquiry form for a free custom website sample concept.',
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const routeConfig = ROUTE_SEO[pathname] || {
      title: 'Dgrab — Affordable Websites That Grow Your Business',
      description: 'Dgrab creates modern, mobile-friendly and affordable websites for businesses in India and internationally.',
    };

    const finalTitle = title || routeConfig.title;
    const finalDesc = description || routeConfig.description;

    document.title = finalTitle;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDesc);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', finalDesc);
      document.head.appendChild(metaDescription);
    }

    // Open Graph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', finalTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', finalDesc);
  }, [pathname, title, description]);

  return null;
};
