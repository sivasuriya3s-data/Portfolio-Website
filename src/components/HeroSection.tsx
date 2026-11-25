import React, { useState } from 'react';
import { ArrowRight, Download, Mail, MapPin, Award, Briefcase, User } from 'lucide-react';
import { motion } from 'motion/react';
import { CANDIDATE, PORTRAIT_URL, RESUME_URL } from '../data/portfolioData';
import { HeroArchitectureVisual } from './HeroArchitectureVisual';

export const HeroSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50/55 via-slate-50/40 to-slate-50/70 dark:from-[#070B12]/45 dark:via-[#070B12]/35 dark:to-[#070B12]/65"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-22 space-y-12">
        {/* Top Split: Left Typographic Identity & CTAs | Right Scaled Executive Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col justify-between"
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
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{CANDIDATE.shortLocation}</span>
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.9rem] font-bold tracking-tight text-slate-950 dark:text-white leading-[1.12] [text-wrap:balance]">
                Architecting Production Agentic AI &amp; Zero-Trust Cloud Infrastructure.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                I&apos;m Siva Suriya — an AI Engineer and Cloud Infrastructure Specialist with 2.5
                years of experience building multi-agent LangGraph systems, MCP tool servers,
                vLLM/Bedrock LLMOps gateways, and zero-trust AWS &amp; Kubernetes platforms.
              </p>

              {/* Credentials & Current Context */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm">
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
                      AWS Developer · OCI AI Foundation
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      OCI DevOps Pro · OCI Multicloud Architect Pro
                    </div>
                  </div>
                </div>
              </div>

              {/* Neutral Availability Context */}
              <p className="mt-5 text-xs text-slate-500 dark:text-slate-400">
                Focus: Multi-Agent Orchestration · RAG &amp; LLMOps · OPA &amp; Istio Zero-Trust ·
                Available for engineering &amp; architecture discussions.
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
                download="Siva_Suriya_S_Resume.pdf"
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

          {/* Right Column: Balanced Compact Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[320px] sm:max-w-[340px] overflow-hidden rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-[#0B121E]/90 backdrop-blur-md shadow-sm">
              <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                {!imgError ? (
                  <img
                    src={PORTRAIT_URL}
                    alt="Siva Suriya S — AI Engineer and Cloud Infrastructure Specialist"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover object-[50%_15%]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-400">
                    <User className="h-12 w-12" />
                    <span className="text-sm">{CANDIDATE.name}</span>
                  </div>
                )}
              </div>

              {/* Clean Footer Strip Below Portrait */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-slate-200/80 dark:border-slate-800/80 text-xs">
                <span className="font-display font-semibold text-slate-900 dark:text-slate-100">
                  {CANDIDATE.name}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {CANDIDATE.currentOrg} · {CANDIDATE.shortLocation}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive AI + Infrastructure Control Plane */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroArchitectureVisual />
        </motion.div>
      </div>
    </section>
  );
};
