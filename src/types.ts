export interface EnquiryFormData {
  name: string;
  businessName: string;
  businessType: string;
  phone: string;
  email: string;
  websiteType: string;
  details: string;
}

export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  description: string;
  demoUrl: string;
  tag: string;
  previewGradient: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
