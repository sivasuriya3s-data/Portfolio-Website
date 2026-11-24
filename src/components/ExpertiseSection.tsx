import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const ExpertiseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const displayedCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="bg-white/88 dark:bg-[#090E17]/84 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
              Technical Expertise
            </p>
            <h2
              id="expertise-heading"
              className="mt-1.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white"
            >
              Production Stack &amp; Platform Capabilities
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Categorized tools and cloud platforms applied across production infrastructure,
            security automation, and AI systems.
          </p>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter technical expertise by domain"
          className="flex flex-wrap items-center gap-1.5 p-1.5 mb-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-[#0C1320]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              activeCategory === 'all'
                ? 'bg-white dark:bg-blue-500 text-slate-950 dark:text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            All Domains
          </button>
          {SKILL_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isActive
                    ? 'bg-white dark:bg-blue-500 text-slate-950 dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Skill Category Grid */}
        <div
          className={`grid grid-cols-1 ${
            displayedCategories.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'
          } gap-5`}
        >
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0C1320] p-6"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                <div>
                  <h3 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {category.summary}
                  </p>
                </div>
                <span className="font-mono text-xs tabular-nums text-slate-400 dark:text-slate-500 shrink-0">
                  {category.skills.length} tools
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-lg border border-slate-200/80 dark:border-slate-800/90 bg-white dark:bg-[#080D16] px-3 py-2 text-xs font-medium text-slate-800 dark:text-slate-200"
                  >
                    {skill.iconKey && (
                      <TechIcon
                        iconKey={skill.iconKey}
                        className="w-3.5 h-3.5 shrink-0 text-blue-600 dark:text-cyan-400"
                      />
                    )}
                    <span className="truncate">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
