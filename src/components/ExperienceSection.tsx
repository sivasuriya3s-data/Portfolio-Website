import React, { useState } from 'react';
import { Building2, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { CANDIDATE, EXPERIENCE_INITIATIVES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('agentic-soc');

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-slate-50/86 dark:bg-[#070B12]/80 backdrop-blur-[2px]"
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
            Agentic AI Systems &amp; Cloud Platform Delivery
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Architecting real-time AI investigation engines, MCP automation servers, HITL evaluation
            platforms, multi-tenant AWS infrastructure, and DevSecOps CI/CD pipelines.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-300 dark:border-slate-800">
          <div className="relative">
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

              {/* 5 Key Production & POC Engagements */}
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                  <div>
                    <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
                      Core Engineering Initiatives
                    </p>
                    <h4 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                      AI Engineering, Streaming Analytics &amp; Cloud/DevSecOps Programs
                    </h4>
                  </div>
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    5 Initiatives · AI + Infrastructure
                  </p>
                </div>

                <div className="divide-y divide-slate-200 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
                  {EXPERIENCE_INITIATIVES.map((item, idx) => {
                    const isOpen = expandedId === item.id;
                    return (
                      <div key={item.id} className="bg-slate-50/50 dark:bg-[#090F19]">
                        <button
                          type="button"
                          onClick={() => setExpandedId(isOpen ? '' : item.id)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left hover:bg-slate-100/70 dark:hover:bg-slate-900/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
                        >
                          <div className="flex items-baseline gap-3 min-w-0">
                            <span className="font-mono text-xs text-blue-600 dark:text-cyan-400 tabular-nums shrink-0">
                              0{idx + 1}.
                            </span>
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                                <span className="font-display text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                                  {item.title}
                                </span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                  · {item.subtitle}
                                </span>
                              </div>
                              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                                {item.summary}
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
                              {item.bullets.map((bullet, bIdx) => (
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
                              Stack: {item.technologies.join(' · ')}
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
        </div>
      </div>
    </section>
  );
};
