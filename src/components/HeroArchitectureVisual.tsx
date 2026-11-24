import React, { useState } from 'react';
import {
  Cloud,
  Box,
  Layers,
  GitBranch,
  ShieldCheck,
  Activity,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import { HERO_PIPELINE_NODES, HeroNodeSpec } from '../data/portfolioData';

const NODE_ICONS: Record<string, React.ReactNode> = {
  aws: <Cloud className="w-4 h-4" />,
  kubernetes: <Box className="w-4 h-4" />,
  terraform: <Layers className="w-4 h-4" />,
  cicd: <GitBranch className="w-4 h-4" />,
  security: <ShieldCheck className="w-4 h-4" />,
  monitoring: <Activity className="w-4 h-4" />,
  ai: <Cpu className="w-4 h-4" />,
};

export const HeroArchitectureVisual: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('aws');

  const selectedNode: HeroNodeSpec =
    HERO_PIPELINE_NODES.find((n) => n.id === selectedId) || HERO_PIPELINE_NODES[0];

  const topRow = HERO_PIPELINE_NODES.slice(0, 4); // AWS -> Kubernetes -> Terraform -> CI/CD
  const bottomRow = HERO_PIPELINE_NODES.slice(4, 7); // Security -> Monitoring -> AI Infra

  return (
    <div className="flex flex-col justify-between h-full rounded-xl border border-slate-200 dark:border-slate-800/90 bg-white/90 dark:bg-[#0B121E]/90 p-5 sm:p-6 shadow-sm">
      {/* Diagram Header */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
          <h2 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
            Enterprise Platform Topology
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Select any architecture layer to inspect production stack and outcomes
          </p>
        </div>
        <span className="font-mono text-xs text-blue-600 dark:text-cyan-400 whitespace-nowrap shrink-0">
          7 Core Layers
        </span>
      </div>

      {/* Connected Node Topology */}
      <div className="relative my-5">
        {/* Background SVG Flow Connectors (Desktop/Tablet visual alignment) */}
        <svg
          viewBox="0 0 600 220"
          className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Row 1 horizontal flow: AWS -> K8s -> Terraform -> CI/CD */}
          <line
            x1="80"
            y1="44"
            x2="520"
            y2="44"
            className="stroke-blue-500/35 dark:stroke-blue-400/30 animate-flow-line"
            strokeWidth="1.5"
          />
          {/* Connector from CI/CD down to Security/Monitoring/AI */}
          <path
            d="M 520 44 L 520 110 L 95 110 L 95 150"
            fill="none"
            className="stroke-cyan-500/35 dark:stroke-cyan-400/30 animate-flow-line"
            strokeWidth="1.5"
          />
          {/* Row 2 horizontal flow: Security -> Monitoring -> AI Infra */}
          <line
            x1="95"
            y1="168"
            x2="505"
            y2="168"
            className="stroke-blue-500/35 dark:stroke-blue-400/30 animate-flow-line"
            strokeWidth="1.5"
          />
        </svg>

        <div className="relative z-10 space-y-6">
          {/* Row 1: AWS -> Kubernetes -> Terraform -> CI/CD */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {topRow.map((node, index) => {
              const active = node.id === selectedId;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedId(node.id)}
                  className={`group relative flex flex-col items-start text-left rounded-lg border p-3 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    active
                      ? 'border-blue-500 dark:border-blue-400 bg-blue-50/90 dark:bg-blue-950/50 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#0F1726] hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex w-full items-center justify-between gap-2 mb-2">
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-md ${
                        active
                          ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-slate-950'
                          : 'bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {NODE_ICONS[node.id]}
                    </span>
                    <span className="font-mono text-[11px] tabular-nums text-slate-400 dark:text-slate-500">
                      0{index + 1}
                    </span>
                  </div>
                  <span className="font-display text-xs font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                    {node.label}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5 line-clamp-1">
                    {node.sublabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Flow Direction Indicator */}
          <div className="flex items-center justify-between px-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span>AWS</span>
              <ArrowRight className="w-3 h-3 text-blue-500" />
              <span>Kubernetes</span>
              <ArrowRight className="w-3 h-3 text-blue-500" />
              <span>Terraform</span>
              <ArrowRight className="w-3 h-3 text-blue-500" />
              <span>CI/CD</span>
            </span>
            <span className="hidden sm:inline text-cyan-600 dark:text-cyan-400">
              Continuous Governance
            </span>
          </div>

          {/* Row 2: Security -> Monitoring -> AI Infra */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {bottomRow.map((node, index) => {
              const active = node.id === selectedId;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedId(node.id)}
                  className={`group relative flex flex-col items-start text-left rounded-lg border p-3 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    active
                      ? 'border-cyan-500 dark:border-cyan-400 bg-cyan-50/80 dark:bg-cyan-950/35 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#0F1726] hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex w-full items-center justify-between gap-2 mb-2">
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-md ${
                        active
                          ? 'bg-cyan-600 text-white dark:bg-cyan-400 dark:text-slate-950'
                          : 'bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {NODE_ICONS[node.id]}
                    </span>
                    <span className="font-mono text-[11px] tabular-nums text-slate-400 dark:text-slate-500">
                      0{index + 5}
                    </span>
                  </div>
                  <span className="font-display text-xs font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                    {node.label}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5 line-clamp-1">
                    {node.sublabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Layer Inspector */}
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#090F19] p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {selectedNode.label}
            </span>
            <span aria-hidden="true">·</span>
            <span>{selectedNode.layer}</span>
          </div>
          <span className="font-mono text-[11px] text-blue-600 dark:text-cyan-400">
            {selectedNode.stack.slice(0, 4).join(' / ')}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {selectedNode.summary}
        </p>

        <div className="mt-3 pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <span className="text-slate-500 dark:text-slate-400">
            <strong className="font-medium text-slate-800 dark:text-slate-200">Outcome:</strong>{' '}
            {selectedNode.outcome}
          </span>
        </div>
      </div>
    </div>
  );
};
