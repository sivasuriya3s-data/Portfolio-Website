import React, { useState } from 'react';
import {
  ARCHITECTURE_BLUEPRINTS,
  BlueprintId,
  InteractiveBlueprint,
} from './ArchitectureDiagrams';

export const ArchitectureShowcase: React.FC = () => {
  const [selectedBlueprint, setSelectedBlueprint] = useState<BlueprintId>('aws-multitenant');

  const current =
    ARCHITECTURE_BLUEPRINTS.find((b) => b.id === selectedBlueprint) || ARCHITECTURE_BLUEPRINTS[0];

  return (
    <section
      id="architecture"
      aria-labelledby="architecture-heading"
      className="bg-slate-50/86 dark:bg-[#070B12]/80 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
              Architecture &amp; Engineering Showcase
            </p>
            <h2
              id="architecture-heading"
              className="mt-1.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white"
            >
              System Blueprints &amp; Security Boundaries
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Interactive architecture schematics detailing network segmentation, GitOps admission
            control, DevSecOps scanning, RAG inference, and observability pipelines.
          </p>
        </div>

        {/* Blueprint Selector Tabs */}
        <div
          role="tablist"
          aria-label="Architecture blueprints"
          className="flex flex-wrap items-center gap-1.5 p-1.5 mb-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1320]"
        >
          {ARCHITECTURE_BLUEPRINTS.map((bp) => {
            const active = bp.id === selectedBlueprint;
            return (
              <button
                key={bp.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedBlueprint(bp.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  active
                    ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {bp.title.replace(' Architecture', '')}
              </button>
            );
          })}
        </div>

        {/* Active Blueprint Canvas */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1320] p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                {current.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {current.subtitle}
              </p>
            </div>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 shrink-0">
              Click nodes to inspect
            </span>
          </div>

          <InteractiveBlueprint key={current.id} blueprintId={current.id} />
        </div>
      </div>
    </section>
  );
};
