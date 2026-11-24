import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Download,
  ExternalLink,
  Copy,
  Check,
  Send,
  AlertCircle,
} from 'lucide-react';
import { CANDIDATE, RESUME_URL } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: 'DevOps / Platform Engineering Inquiry',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [draftPrepared, setDraftPrepared] = useState(false);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim() || form.subject.trim().length < 3) {
      nextErrors.subject = 'Please specify a subject.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Please include a brief message (at least 10 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildMailtoHref = () => {
    const body = `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`;
    return `mailto:${CANDIDATE.email}?subject=${encodeURIComponent(
      form.subject.trim()
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setDraftPrepared(true);
    window.location.href = buildMailtoHref();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CANDIDATE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard blocked
    }
  };

  const handleCopyDraft = async () => {
    if (!validate()) return;
    const text = `To: ${CANDIDATE.email}\nSubject: ${form.subject.trim()}\nFrom: ${form.name.trim()} (${form.email.trim()})\n\n${form.message.trim()}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2200);
    } catch {
      // Clipboard blocked
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white dark:bg-[#090E17]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
                Let&apos;s Connect
              </p>
              <h2
                id="contact-heading"
                className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white [text-wrap:balance]"
              >
                Let&apos;s Build Something Reliable, Secure &amp; Scalable.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Reach out directly for DevOps, Cloud Architecture, Kubernetes, DevSecOps, or AI
                Platform Engineering discussions.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0C1320] divide-y divide-slate-200 dark:divide-slate-800">
              <div className="p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Email</span>
                    <a
                      href={`mailto:${CANDIDATE.email}`}
                      className="text-sm font-medium text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-cyan-400 truncate block"
                    >
                      {CANDIDATE.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#080D16] px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Phone</span>
                  <a
                    href="tel:+917397039768"
                    className="text-sm font-medium text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-cyan-400 font-mono tabular-nums"
                  >
                    {CANDIDATE.phone}
                  </a>
                </div>
              </div>

              <div className="p-4 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Location</span>
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    {CANDIDATE.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${CANDIDATE.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-4 py-2.5 text-xs font-semibold text-white dark:text-slate-950 transition-colors whitespace-nowrap shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Directly</span>
              </a>

              <a
                href={CANDIDATE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0C1320] hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-900 dark:text-slate-100 transition-colors whitespace-nowrap shrink-0"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={CANDIDATE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0C1320] hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-900 dark:text-slate-100 transition-colors whitespace-nowrap shrink-0"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={RESUME_URL}
                download="SivaSuriya_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0C1320] hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-900 dark:text-slate-100 transition-colors whitespace-nowrap shrink-0"
              >
                <Download className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Validated Email Message Composer */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleComposeEmail}
              noValidate
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0C1320] p-6 sm:p-8 space-y-5"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">
                  Send a Message
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Validates your inquiry and opens your default email client pre-addressed to{' '}
                  {CANDIDATE.email} (no server-side mail relay is configured on this static site).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Recruiter or Engineering Lead"
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#080D16] px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#080D16] px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => {
                    setForm({ ...form, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: undefined });
                  }}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#080D16] px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                {errors.subject && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Share role details, infrastructure scope, or technical questions..."
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#080D16] px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {draftPrepared && (
                <div className="rounded-lg border border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/30 px-4 py-3 text-xs text-blue-900 dark:text-blue-200">
                  Draft prepared and handed off to your device&apos;s mail client. If no mail app
                  opened, use &ldquo;Copy Formatted Message&rdquo; or email{' '}
                  <span className="font-mono">{CANDIDATE.email}</span> directly.
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white dark:text-slate-950 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Send className="w-4 h-4" />
                  <span>Open in Email Client</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#080D16] hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Draft Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Formatted Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
