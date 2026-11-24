import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificationEmblem } from './TechIcons';

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="bg-white/88 dark:bg-[#090E17]/84 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
            Verified Credentials
          </p>
          <h2
            id="certifications-heading"
            className="mt-1.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white"
          >
            Cloud &amp; DevOps Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Industry-recognized cloud architecture and DevOps engineering credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0C1320] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 text-slate-900 dark:text-slate-100">
                      <CertificationEmblem brand={cert.brand} className="w-14 h-14" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {cert.issuer}
                      </p>
                      <h3 className="mt-0.5 font-display text-lg font-bold text-slate-950 dark:text-white">
                        {cert.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <p className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                Focus: {cert.focus.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
