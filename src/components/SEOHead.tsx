import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

const BASE_URL = 'https://dgrab.vercel.app';

const ROUTE_SEO: Record<string, { title: string; description: string; canonical: string }> = {
  '/': {
    title: 'Dgrab | Affordable Websites That Grow Your Business',
    description: 'Dgrab is a web design studio creating affordable, modern and responsive websites for businesses in India and worldwide.',
    canonical: `${BASE_URL}/`,
  },
  '/services': {
    title: 'Web Design & Development Services | Dgrab Studio',
    description: 'Explore affordable website design, web development, mobile responsive layouts, hosting setup, SEO foundations, and website maintenance by Dgrab.',
    canonical: `${BASE_URL}/services`,
  },
  '/work': {
    title: 'Our Work & Demo Websites | Dgrab Web Design',
    description: 'Explore live website concepts created by Dgrab, showcasing clean, responsive website design capabilities across school and business categories.',
    canonical: `${BASE_URL}/work`,
  },
  '/process': {
    title: 'How It Works — Simple 4-Step Website Process | Dgrab',
    description: 'Learn about Dgrab’s transparent 4-step web design process — from initial concept sample to final website launch.',
    canonical: `${BASE_URL}/process`,
  },
  '/about': {
    title: 'About Dgrab & Founder Derik Austin S',
    description: 'Dgrab is a founder-led web design studio focused on creating clean, professional, affordable websites for small businesses.',
    canonical: `${BASE_URL}/about`,
  },
  '/faq': {
    title: 'Frequently Asked Questions | Dgrab Web Design',
    description: 'Find clear answers to common questions about Dgrab website design services, free sample concepts, pricing, hosting, and mobile optimization.',
    canonical: `${BASE_URL}/faq`,
  },
  '/contact': {
    title: 'Contact Dgrab | Request a Free Sample Website',
    description: 'Get in touch with Dgrab via WhatsApp (+91 9788945834), direct phone call, email, or our free sample concept request form.',
    canonical: `${BASE_URL}/contact`,
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const routeConfig = ROUTE_SEO[pathname] || {
      title: 'Dgrab | Affordable Websites That Grow Your Business',
      description: 'Dgrab is a web design studio creating affordable, modern and responsive websites for businesses in India and worldwide.',
      canonical: `${BASE_URL}${pathname}`,
    };

    const finalTitle = title || routeConfig.title;
    const finalDesc = description || routeConfig.description;
    const finalCanonical = routeConfig.canonical;

    // 1. Page Title
    document.title = finalTitle;

    // 2. Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDesc);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', finalDesc);
      document.head.appendChild(metaDescription);
    }

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', finalCanonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', finalCanonical);
      document.head.appendChild(canonicalLink);
    }

    // 4. Open Graph Tags
    const ogTags: Record<string, string> = {
      'og:type': 'website',
      'og:title': finalTitle,
      'og:description': finalDesc,
      'og:url': finalCanonical,
      'og:site_name': 'Dgrab',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (ogMeta) {
        ogMeta.setAttribute('content', content);
      } else {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        ogMeta.setAttribute('content', content);
        document.head.appendChild(ogMeta);
      }
    });

    // 5. Twitter Card Tags
    const twitterTags: Record<string, string> = {
      'twitter:card': 'summary_large_image',
      'twitter:title': finalTitle,
      'twitter:description': finalDesc,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let twitterMeta = document.querySelector(`meta[name="${name}"]`);
      if (twitterMeta) {
        twitterMeta.setAttribute('content', content);
      } else {
        twitterMeta = document.createElement('meta');
        twitterMeta.setAttribute('name', name);
        twitterMeta.setAttribute('content', content);
        document.head.appendChild(twitterMeta);
      }
    });

    // 6. JSON-LD Structured Data Schema
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Dgrab',
      'url': 'https://dgrab.vercel.app/',
      'logo': 'https://dgrab.vercel.app/favicon.svg',
      'description': 'Dgrab is a web design studio creating affordable, modern, mobile-friendly websites for businesses in India and internationally.',
      'founder': {
        '@type': 'Person',
        'name': 'Derik Austin S',
        'jobTitle': 'Founder',
      },
      'telephone': '+91 9788945834',
      'email': 'theywantweb@gmail.com',
      'areaServed': ['India', 'International'],
      'priceRange': 'Affordable — Contact for a Quote',
      'offers': {
        '@type': 'Offer',
        'name': 'Free Sample Website Concept',
        'price': '0',
        'priceCurrency': 'INR',
      },
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData);
    } else {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }

  }, [pathname, title, description]);

  return null;
};
