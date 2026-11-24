import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Award, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { CANDIDATE, RESUME_URL } from '../data/portfolioData';
import { HeroArchitectureVisual } from './HeroArchitectureVisual';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-tech-grid"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Identity, Headline & Primary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              {/* Clean unboxed identity & location metadata */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mb-5">
                <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                  {CANDIDATE.name}
                </span>
                <span aria-hidden="true">·</span>
                <span>{CANDIDATE.roleLine}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {CANDIDATE.shortLocation}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-tight text-slate-950 dark:text-white leading-[1.12] [text-wrap:balance]">
                Engineering Secure, Scalable &amp; Intelligent Infrastructure.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                I&apos;m Siva Suriya — a DevOps and Cloud Engineer specializing in AWS, Kubernetes,
                DevSecOps and AI Platform Infrastructure. I build automated, secure and
                production-ready cloud-native systems.
              </p>

              {/* Credentials & Current Context (Unboxed structured metadata) */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                  <Briefcase className="w-4 h-4 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-slate-100">
                      {CANDIDATE.experienceSummary}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {CANDIDATE.currentRole} · {CANDIDATE.currentOrg}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                  <Award className="w-4 h-4 mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-slate-100">
                      AWS Certified Developer – Associate
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      OCI Certified DevOps Professional
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Availability Indicator (neutral, non-speculative) */}
              <p className="mt-5 text-xs text-slate-500 dark:text-slate-400">
                Status: Currently building multi-tenant cloud &amp; AI infrastructure at{' '}
                {CANDIDATE.currentOrg} · Available for technical discussions &amp; architecture
                inquiries.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-5 py-2.5 text-sm font-semibold text-white dark:text-slate-950 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={RESUME_URL}
                download="SivaSuriya_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Mail className="w-4 h-4" />
                <span>Let&apos;s Connect</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Enterprise Architecture Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <HeroArchitectureVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
