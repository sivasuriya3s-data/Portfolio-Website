import React, { useEffect, useRef, useState } from 'react';
import { SNAPSHOT_METRICS, SnapshotMetric } from '../data/portfolioData';

const AnimatedMetricValue: React.FC<{ metric: SnapshotMetric; active: boolean }> = ({
  metric,
  active,
}) => {
  const [count, setCount] = useState<number>(metric.target);

  useEffect(() => {
    if (!active) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCount(metric.target);
      return;
    }

    let rafId = 0;
    const duration = 900;
    const start = performance.now();
    const factor = Math.pow(10, metric.decimals ?? 0);

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * metric.target * factor) / factor);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    setCount(0);
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [active, metric.target, metric.decimals]);

  const formatted =
    metric.decimals && metric.decimals > 0 ? count.toFixed(metric.decimals) : String(count);

  return (
    <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white tabular-nums">
      {metric.prefix || ''}
      {formatted}
      <span className="text-blue-600 dark:text-cyan-400">{metric.suffix}</span>
    </span>
  );
};

export const SnapshotMetrics: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="snapshot-heading"
      className="bg-white/88 dark:bg-[#090E17]/84 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
              Engineering Impact
            </p>
            <h2
              id="snapshot-heading"
              className="mt-1.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
            >
              Professional Snapshot
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Documented AI engineering, LLMOps automation, streaming analytics, and DevSecOps
            delivery outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 gap-px">
          {SNAPSHOT_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-white dark:bg-[#0C1320] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <AnimatedMetricValue metric={metric} active={inView} />
                <h3 className="mt-2 font-display text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                  {metric.label}
                </h3>
              </div>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {metric.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
