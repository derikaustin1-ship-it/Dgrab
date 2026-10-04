import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate backend submission readiness
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    }, 800);
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
        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
          Thanks! Your request has been received. Dgrab will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              businessName: '',
              businessType: '',
              phone: '',
              email: '',
              websiteType: 'Business Website',
              details: '',
            });
          }}
          className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-sky-700 text-xs font-bold transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-left mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>
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
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-600 transition-colors"
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
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-600 transition-colors"
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
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-600 transition-colors"
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
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-sky-600 transition-colors"
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
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-600 transition-colors"
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
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-600 transition-colors"
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
          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-600 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-sm shadow-md shadow-sky-600/20 transition-all cursor-pointer disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Request...</span>
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
