import React from 'react';
import { CANDIDATE, RESUME_URL } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-[#070B12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
          <span className="font-display font-semibold text-slate-800 dark:text-slate-200">
            {CANDIDATE.name}
          </span>
          <span aria-hidden="true">·</span>
          <span>{CANDIDATE.roleLine}</span>
          <span aria-hidden="true">·</span>
          <span>{CANDIDATE.shortLocation}</span>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href={`mailto:${CANDIDATE.email}`}
            className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            Email
          </a>
          <a
            href={CANDIDATE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={CANDIDATE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href={RESUME_URL}
            download="SivaSuriya_Resume.pdf"
            className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            Resume
          </a>
          <span className="font-mono tabular-nums">© {year}</span>
        </div>
      </div>
    </footer>
  );
};
