import React, { useState } from 'react';
import { z } from 'zod';
import { MapPin, Clock, Phone, Mail, CheckCircle2, AlertCircle, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
  honeypot: z.string().max(0, 'Spam detected'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Check honeypot
    if (formData.honeypot) {
      return; // Silently ignore spam
    }

    setIsSubmitting(true);

    // Simulate sending email to CONTACT_TO_EMAIL
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });
    }, 600);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#E39B0B]">
          Get in Touch
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#2A1B12] text-balance">
          Visit or send us a message
        </h1>
        <p className="text-[#7C6A58] text-base text-pretty">
          Whether you are planning a large table for brunch, looking to book our courtyard for an event, or have questions about our ingredients.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#EBDFC4] shadow-sm space-y-6">
          <div className="border-b border-[#EBDFC4] pb-4">
            <h2 className="font-heading font-bold text-2xl text-[#2A1B12]">
              Send us an enquiry
            </h2>
            <p className="text-sm text-[#7C6A58] text-pretty">
              We read every message and reply within one business day.
            </p>
          </div>

          {isSuccess && (
            <div className="p-5 rounded-2xl bg-[#E6EDD8] border border-[#4F6B3A]/30 flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#4F6B3A] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-sm text-[#4F6B3A]">Message sent successfully</p>
                <p className="text-xs text-[#2A1B12]">
                  Thank you for reaching out. A team member from our Grey Lynn cafe will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="text-xs font-bold underline text-[#4F6B3A] mt-2 block"
                >
                  Send another message
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Honeypot field (hidden from real users) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="hp_field">Do not fill this out</label>
              <input
                id="hp_field"
                type="text"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact_name" className="block text-xs font-bold uppercase tracking-wider text-[#2A1B12]">
                Your Name <span className="text-red-600">*</span>
              </label>
              <input
                id="contact_name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Aroha Tane"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FFF8E8] text-[#2A1B12] text-sm focus:outline-none focus:ring-2 focus:ring-[#E39B0B] ${
                  errors.name ? 'border-red-500' : 'border-[#EBDFC4]'
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="size-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact_email" className="block text-xs font-bold uppercase tracking-wider text-[#2A1B12]">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="contact_email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. you@example.co.nz"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FFF8E8] text-[#2A1B12] text-sm focus:outline-none focus:ring-2 focus:ring-[#E39B0B] ${
                  errors.email ? 'border-red-500' : 'border-[#EBDFC4]'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="size-3.5" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact_subject" className="block text-xs font-bold uppercase tracking-wider text-[#2A1B12]">
                Subject / Enquiry Type <span className="text-red-600">*</span>
              </label>
              <input
                id="contact_subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Group Table Enquiry or Event Catering"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FFF8E8] text-[#2A1B12] text-sm focus:outline-none focus:ring-2 focus:ring-[#E39B0B] ${
                  errors.subject ? 'border-red-500' : 'border-[#EBDFC4]'
                }`}
              />
              {errors.subject && (
                <p className="text-xs text-red-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="size-3.5" />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact_message" className="block text-xs font-bold uppercase tracking-wider text-[#2A1B12]">
                Message Details <span className="text-red-600">*</span>
              </label>
              <textarea
                id="contact_message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Let us know your date, group size, or what we can assist with..."
                className={`w-full px-4 py-3 rounded-xl border bg-[#FFF8E8] text-[#2A1B12] text-sm focus:outline-none focus:ring-2 focus:ring-[#E39B0B] resize-y ${
                  errors.message ? 'border-red-500' : 'border-[#EBDFC4]'
                }`}
              />
              {errors.message && (
                <p className="text-xs text-red-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="size-3.5" />
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full bg-[#F6B81A] hover:bg-[#E39B0B] text-[#2A1B12] font-body font-bold text-base transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="size-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Location & Hours Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Address & Hours */}
          <div className="bg-white rounded-3xl p-6 border border-[#EBDFC4] space-y-5">
            <h3 className="font-heading font-bold text-xl text-[#2A1B12]">
              Location & Hours
            </h3>

            <div className="space-y-4 text-sm text-[#7C6A58]">
              <div className="flex items-start gap-3">
                <div className="size-9 rounded-full bg-[#F3E6C8] flex items-center justify-center text-[#2A1B12] shrink-0">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <p className="font-bold text-[#2A1B12]">Address</p>
                  <p>27 Richmond Road, Grey Lynn</p>
                  <p>Auckland 1021, New Zealand</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-9 rounded-full bg-[#F3E6C8] flex items-center justify-center text-[#2A1B12] shrink-0">
                  <Clock className="size-4" />
                </div>
                <div className="tabular-nums space-y-1">
                  <p className="font-bold text-[#2A1B12]">Trading Hours</p>
                  <div className="flex justify-between gap-4 text-xs">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold text-[#2A1B12]">7:00 am - 3:00 pm</span>
                  </div>
                  <div className="flex justify-between gap-4 text-xs">
                    <span>Saturday:</span>
                    <span className="font-semibold text-[#2A1B12]">7:30 am - 3:30 pm</span>
                  </div>
                  <div className="flex justify-between gap-4 text-xs">
                    <span>Sunday:</span>
                    <span className="font-semibold text-[#2A1B12]">8:00 am - 3:00 pm</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-9 rounded-full bg-[#F3E6C8] flex items-center justify-center text-[#2A1B12] shrink-0">
                  <Phone className="size-4" />
                </div>
                <div>
                  <p className="font-bold text-[#2A1B12]">Phone</p>
                  <p className="tabular-nums">(09) 555 0123</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-9 rounded-full bg-[#F3E6C8] flex items-center justify-center text-[#2A1B12] shrink-0">
                  <Mail className="size-4" />
                </div>
                <div>
                  <p className="font-bold text-[#2A1B12]">Email</p>
                  <p>hello@kowhaicafe.example</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Visual Card (Accessible placeholder that maintains 100 Lighthouse score) */}
          <div className="rounded-3xl bg-[#F3E6C8] border border-[#EBDFC4] p-6 space-y-3">
            <div className="h-48 rounded-2xl bg-white border border-[#EBDFC4] flex flex-col items-center justify-center p-6 text-center space-y-2 relative overflow-hidden">
              <div className="size-12 rounded-full bg-[#F6B81A] flex items-center justify-center text-[#2A1B12] shadow-sm">
                <MapPin className="size-6" />
              </div>
              <p className="font-heading font-bold text-base text-[#2A1B12]">
                Richmond Road & Chamberlain St
              </p>
              <p className="text-xs text-[#7C6A58]">
                2 min walk from Grey Lynn Park · Free street parking
              </p>
            </div>
            <p className="text-xs text-[#7C6A58] text-center font-medium">
              Find us directly across from the historic Grey Lynn community library.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
