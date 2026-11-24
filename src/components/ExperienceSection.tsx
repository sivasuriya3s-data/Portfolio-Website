import React, { useState } from 'react';
import { Building2, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { AI_SDLC_HUB_PILLARS, CANDIDATE, EXPERIENCE_STREAMS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedPillar, setExpandedPillar] = useState<string>('aws-platform');

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-slate-50 dark:bg-[#070B12]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
            Professional Experience
          </p>
          <h2
            id="experience-heading"
            className="mt-1.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white"
          >
            Production Engineering &amp; Platform Delivery
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Architecting multi-tenant AWS environments, securing GenAI infrastructure, and automating
            CI/CD and Kubernetes operations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-300 dark:border-slate-800 space-y-12">
          {/* Primary Role Entry */}
          <div className="relative">
            {/* Timeline Node */}
            <span
              aria-hidden="true"
              className="absolute -left-[29px] sm:-left-[37px] top-1.5 h-3 w-3 rounded-sm bg-blue-600 dark:bg-cyan-400 ring-4 ring-slate-50 dark:ring-[#070B12]"
            />

            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1320] p-6 sm:p-8">
              {/* Role Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
                <div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold">
                      <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                      {CANDIDATE.currentOrg}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {CANDIDATE.shortLocation}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-display text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                    {CANDIDATE.currentRole}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 font-mono text-xs font-medium text-slate-600 dark:text-slate-300 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                  <span>{CANDIDATE.tenure}</span>
                </div>
              </div>

              {/* Flagship Project: AI-SDLC Hub */}
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                  <div>
                    <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
                      Flagship Platform Architecture
                    </p>
                    <h4 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                      AI-SDLC Hub — Secure Multi-Tenant AI Platform
                    </h4>
                  </div>
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    AWS · EKS · Terraform · Bedrock · Kafka
                  </p>
                </div>

                {/* 5 Structured Accordion / Interactive Engineering Pillars */}
                <div className="divide-y divide-slate-200 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
                  {AI_SDLC_HUB_PILLARS.map((pillar, idx) => {
                    const isOpen = expandedPillar === pillar.id;
                    return (
                      <div key={pillar.id} className="bg-slate-50/50 dark:bg-[#090F19]">
                        <button
                          type="button"
                          onClick={() => setExpandedPillar(isOpen ? '' : pillar.id)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left hover:bg-slate-100/70 dark:hover:bg-slate-900/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
                        >
                          <div className="flex items-baseline gap-3 min-w-0">
                            <span className="font-mono text-xs text-blue-600 dark:text-cyan-400 tabular-nums shrink-0">
                              0{idx + 1}.
                            </span>
                            <div className="min-w-0">
                              <span className="font-display text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 block">
                                {pillar.title}
                              </span>
                              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                                {pillar.summary}
                              </span>
                            </div>
                          </div>
                          <span className="text-slate-400 dark:text-slate-500 shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-4 sm:px-5 pb-5 pt-1 bg-white dark:bg-[#0C1320] border-t border-slate-200/70 dark:border-slate-800/70">
                            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
                              {pillar.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2.5">
                                  <span
                                    aria-hidden="true"
                                    className="mt-2 h-1 w-1 rounded-full bg-blue-600 dark:bg-cyan-400 shrink-0"
                                  />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                            <p className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/70 font-mono text-xs text-slate-500 dark:text-slate-400">
                              Stack: {pillar.technologies.join(' · ')}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Dedicated Engineering Focus Streams */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[29px] sm:-left-[37px] top-1.5 h-3 w-3 rounded-sm bg-slate-400 dark:bg-slate-600 ring-4 ring-slate-50 dark:ring-[#070B12]"
            />

            <div className="mb-5">
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                Core Operational &amp; Delivery Domains
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Cross-environment execution across CI/CD security gates, multi-cloud Kubernetes,
                Linux networking, and observability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {EXPERIENCE_STREAMS.map((stream) => (
                <div
                  key={stream.id}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1320] p-6 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                      {stream.title}
                    </h4>
                    <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {stream.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 rounded-full bg-blue-600 dark:bg-cyan-400 shrink-0"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    {stream.tags.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
