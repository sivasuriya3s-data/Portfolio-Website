import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURED_PROJECTS, FeaturedProject } from '../data/portfolioData';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-white/88 dark:bg-[#090E17]/84 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
              Featured Case Studies
            </p>
            <h2
              id="projects-heading"
              className="mt-1.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white"
            >
              Systems &amp; Infrastructure Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Select any project to explore the full architecture diagram, security controls, CI/CD
            stages, and resume-documented engineering outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.28,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/85 dark:bg-[#0C1320]/90 p-6 transition-colors hover:border-blue-500/50 dark:hover:border-cyan-500/50"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-mono text-blue-600 dark:text-cyan-400 tabular-nums">
                    0{index + 1}.
                  </span>
                  <span className="truncate">{project.context}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white leading-snug">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Challenge & Outcome Preview */}
                <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 space-y-2">
                  {project.outcomes.slice(0, 2).map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {project.technologies.join(' · ')}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#080D16] hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-slate-950 px-4 py-2.5 text-xs font-semibold text-slate-900 dark:text-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span>Inspect Case Study &amp; Diagram</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
