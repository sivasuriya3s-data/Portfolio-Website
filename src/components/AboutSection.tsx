import React from 'react';
import { GraduationCap, Bot, Cpu, Database, Cloud, ShieldCheck, Activity } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

const FOCUS_PILLARS = [
  {
    icon: <Bot className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    title: 'Agentic AI & Multi-Agent Orchestration',
    detail:
      'Stateful LangGraph workflows with conditional branching, supervisor-agent routing, MCP tool-calling servers, and human-in-the-loop governance.',
  },
  {
    icon: <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    title: 'LLMOps, RAG & Grammar-Constrained Inference',
    detail:
      'vLLM Outlines, LiteLLM gateways over Amazon Bedrock and Azure OpenAI, PII-redaction guardrails, LLM-as-a-Judge evaluation, and hybrid vector search.',
  },
  {
    icon: <Database className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    title: 'Real-Time Streaming & Vector Data Engineering',
    detail:
      'High-throughput Apache Kafka and Flink detection engines paired with ClickHouse temporal analytics, Redis entity state, OpenSearch, FAISS, and ChromaDB.',
  },
  {
    icon: <Cloud className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    title: 'AWS & Multi-Cloud Kubernetes Infrastructure',
    detail:
      'Modular Terraform workspaces provisioning EKS, AKS, Lambda, RDS, S3, and PrivateLink with Rancher, Helm, and ArgoCD GitOps delivery.',
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    title: 'Zero-Trust Security, OPA & DevSecOps',
    detail:
      'OPA 4-tier blast-radius authorization, Istio strict mTLS, IRSA permissions boundaries, AWS WAF, and Jenkins/SonarQube/Trivy/OWASP CI/CD gates.',
  },
  {
    icon: <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    title: 'AI Observability & Production Reliability',
    detail:
      'Tracing, token & cost optimization, Prometheus, Grafana, OpenTelemetry, CloudWatch, ELK, and Loki with SLI/SLO monitoring and RCA.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-slate-50/86 dark:bg-[#070B12]/80 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative & Education */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
                AI Developer &amp; Infrastructure Specialist
              </p>
              <h2
                id="about-heading"
                className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white [text-wrap:balance]"
              >
                Where Agentic AI Systems Meet Zero-Trust Infrastructure.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                With 2.5 years of experience at Sify Technologies Limited, I progressed from Cloud
                &amp; DevSecOps engineering into architecting and deploying production Agentic AI
                systems—combining generative AI software engineering with deep infrastructure
                ownership.
              </p>
              <p>
                On the AI engineering side, I specialize in multi-agent LangGraph orchestration,
                Model Context Protocol (MCP) tool servers, RAG pipelines, grammar-constrained vLLM
                inference, and human-in-the-loop evaluation platforms that cut manual review effort
                by 70%.
              </p>
              <p>
                On the infrastructure side, I back every AI workload with reusable Terraform
                modules, Amazon EKS and Azure AKS orchestration, Apache Kafka and Flink streaming,
                Istio mTLS, and OPA policy-as-code—delivering low-latency, zero-trust systems from
                prototype to enterprise production.
              </p>
            </div>

            {/* Education Block */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1320] p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Education · {CANDIDATE.education.period}
                  </p>
                  <h3 className="mt-0.5 font-display text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                    {CANDIDATE.education.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    {CANDIDATE.education.institution}
                  </p>
                  <p className="mt-2 font-mono text-xs font-medium text-blue-600 dark:text-cyan-400 tabular-nums">
                    CGPA: {CANDIDATE.education.cgpa}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Core Capabilities */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FOCUS_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0C1320] p-5 transition-colors hover:border-slate-300 dark:hover:border-slate-700"
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800/80">
                      {pillar.icon}
                    </span>
                    <h3 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
