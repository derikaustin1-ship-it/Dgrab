import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Loader2, AlertCircle, MessageSquare } from 'lucide-react';
import type { EnquiryFormData } from '../types';

interface EnquiryFormProps {
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  onSuccess,
  title = 'Request a Free Sample Website',
  subtitle = 'Fill out your business details below to receive a custom website concept.',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    businessName: '',
    businessType: '',
    phone: '',
    email: '',
    websiteType: 'Business Website',
    details: '',
  });

  // Honeypot field for bot spam protection
  const [hpField, setHpField] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const whatsappUrl =
    'https://wa.me/919788945834?text=' +
    encodeURIComponent("Hi Dgrab, I tried submitting the sample request form on your website and would like to connect.");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic client validation
    if (!formData.name.trim() || !formData.businessName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your Name, Business Name, and Phone/WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          hp_field: hpField,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit enquiry');
      }

      // Success
      setIsSubmitting(false);
      setSubmitted(true);
      // Clear form
      setFormData({
        name: '',
        businessName: '',
        businessType: '',
        phone: '',
        email: '',
        websiteType: 'Business Website',
        details: '',
      });
      setHpField('');

      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 3000);
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setIsSubmitting(false);
      setErrorMessage(
        'Something went wrong while sending your request. Please try again or contact us on WhatsApp.'
      );
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-emerald-300 text-center space-y-4 shadow-sm animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 font-heading">
          Request Received!
        </h3>
        <p className="text-slate-700 text-sm max-w-md mx-auto leading-relaxed font-medium">
          Thank you! Your request has been received. We'll get back to you soon.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setSubmitted(false);
            }}
            className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-sky-700 text-xs font-bold transition-colors cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>
      </div>

      {/* Error Alert Box */}
      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-3 animate-in fade-in duration-200">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="flex-1 space-y-1">
            <p className="font-semibold">{errorMessage}</p>
            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold underline hover:text-emerald-800"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Contact us directly on WhatsApp instead →</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hidden Honeypot Field for Spam Protection */}
      <div style={{ display: 'none', opacity: 0, height: 0 }} aria-hidden="true">
        <input
          type="text"
          name="hp_field"
          tabIndex={-1}
          autoComplete="off"
          value={hpField}
          onChange={(e) => setHpField(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Your Name <span className="text-sky-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-500/20 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Business Name <span className="text-sky-600">*</span>
          </label>
          <input
            type="text"
            name="businessName"
            required
            value={formData.businessName}
            onChange={handleChange}
            placeholder="e.g. Sharma Coaching Classes"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-500/20 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Business Type <span className="text-sky-600">*</span>
          </label>
          <input
            type="text"
            name="businessType"
            required
            value={formData.businessType}
            onChange={handleChange}
            placeholder="e.g. School, Retail Shop, Clinic"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-500/20 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            What kind of website do you need?
          </label>
          <select
            name="websiteType"
            value={formData.websiteType}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-500/20 transition-colors"
          >
            <option value="School Website">School Website Concept</option>
            <option value="Business Website">Business Website</option>
            <option value="E-Commerce / Shop">Online Shop / Retail</option>
            <option value="Services Website">Professional Services</option>
            <option value="Personal Brand">Personal Brand / Portfolio</option>
            <option value="Other">Other Custom Website</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Phone / WhatsApp <span className="text-sky-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-500/20 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="yourname@gmail.com"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-500/20 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          Additional Details (Optional)
        </label>
        <textarea
          name="details"
          rows={3}
          value={formData.details}
          onChange={handleChange}
          placeholder="Tell us a little bit about your goals, current logo/website, or any specific requirements..."
          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-500/20 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-sm shadow-md shadow-sky-600/20 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Request...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 text-sky-200" />
            <span>Request Free Sample</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-500 text-center">
        No payment required. We will create a custom preview concept tailored for your business.
      </p>
    </form>
  );
};
