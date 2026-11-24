import React, { useEffect, useState } from 'react';
import { X, Layers, ShieldCheck, GitBranch, CheckCircle2 } from 'lucide-react';
import { FeaturedProject } from '../data/portfolioData';
import { BlueprintId, InteractiveBlueprint } from './ArchitectureDiagrams';

interface ProjectCaseStudyModalProps {
  project: FeaturedProject | null;
  onClose: () => void;
}

const DIAGRAM_MAP: Record<FeaturedProject['diagramType'], BlueprintId> = {
  'ai-sdlc': 'aws-multitenant',
  devsecops: 'devsecops-cicd',
  'multi-k8s': 'k8s-deployment',
};

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'security'>('overview');

  useEffect(() => {
    setActiveTab('overview');
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B121E] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0B121E]/95 backdrop-blur-md px-6 py-5">
          <div>
            <p className="text-xs font-medium text-blue-600 dark:text-cyan-400">
              {project.context}
            </p>
            <h3
              id="case-study-title"
              className="mt-1 font-display text-lg sm:text-xl font-bold text-slate-950 dark:text-white"
            >
              {project.title}
            </h3>
            <p className="mt-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
              {project.technologies.join(' · ')}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Case Study Navigation Tabs */}
        <div className="px-6 pt-4 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#090F19]">
          <div className="flex items-center gap-2 pb-3 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-slate-950'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Problem &amp; Solutions</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('architecture')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'architecture'
                  ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-slate-950'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Architecture Diagram</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('security')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'security'
                  ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-slate-950'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Security, CI/CD &amp; Impact</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {activeTab === 'overview' && (
            <>
              <div>
                <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Problem Statement
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Architecture Overview
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.architectureOverview}
                </p>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  Engineering Challenges &amp; Implemented Solutions
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.challengesAndSolutions.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#090F19] p-4 space-y-2"
                    >
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Challenge: {item.challenge}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Solution: {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Infrastructure Design
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {project.infrastructureDesign.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Click any component inside the diagram to inspect its boundaries, controls, and
                tooling.
              </p>
              <InteractiveBlueprint blueprintId={DIAGRAM_MAP[project.diagramType]} compact />
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#090F19] p-5">
                  <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Security Implementation
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.securityImplementation.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 rounded-full bg-cyan-500 shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#090F19] p-5">
                  <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    CI/CD Workflow
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.cicdWorkflow.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 rounded-full bg-blue-500 shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1320] p-5">
                <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  Documented Engineering Impact
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {project.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
