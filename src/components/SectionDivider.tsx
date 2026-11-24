import React from 'react';

interface SectionDividerProps {
  variant?: 'default' | 'accent';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'default' }) => {
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className="relative w-full bg-slate-100/40 dark:bg-[#080C14]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative h-px w-full">
          {/* Base structural fade rule */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/80 dark:via-slate-700/60 to-transparent" />

          {/* Centered electric-blue / cyan enterprise accent gradient */}
          <div
            className={`absolute inset-y-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent ${
              variant === 'accent'
                ? 'w-3/4 sm:w-2/3 via-blue-600/45 dark:via-cyan-400/45'
                : 'w-2/3 sm:w-1/2 via-blue-500/30 dark:via-blue-400/30'
            }`}
          />

          {/* Subtle center focal highlight */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] w-14 rounded-full bg-gradient-to-r from-transparent via-blue-500/60 dark:via-cyan-400/60 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
