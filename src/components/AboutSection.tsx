import React from 'react';
import { GraduationCap, Cloud, Box, Layers, ShieldCheck, Cpu, Activity } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

const FOCUS_PILLARS = [
  {
    icon: <Cloud className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    title: 'AWS & Multi-Cloud Infrastructure',
    detail:
      'Production architecture across AWS (EKS, Lambda, RDS, S3, VPC, PrivateLink), Azure (AKS), and GCP (GKE) with strict tenant isolation.',
  },
  {
    icon: <Box className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    title: 'Kubernetes & Container Orchestration',
    detail:
      'Multi-cluster lifecycle management across EKS, AKS, k3s, and Rancher with Helm charts, ArgoCD GitOps, RBAC, and Kyverno admission control.',
  },
  {
    icon: <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    title: 'Terraform Infrastructure Automation',
    detail:
      'Modular, multi-workspace Terraform and Ansible workflows creating repeatable, drift-free dev, staging, and production environments.',
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    title: 'Enterprise CI/CD & DevSecOps',
    detail:
      'Declarative pipelines in Jenkins, Harness, GitLab CI, and GitHub Actions enforced with SonarQube, Trivy, and OWASP Dependency-Check gates.',
  },
  {
    icon: <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    title: 'Secure GenAI & RAG Infrastructure',
    detail:
      'Production LLM gateways (LiteLLM) over Amazon Bedrock, OpenSearch vector RAG pipelines, LangGraph/MCP agents, PII redaction, and rate limiting.',
  },
  {
    icon: <Activity className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    title: 'Production Observability & Incident Management',
    detail:
      'End-to-end telemetry using OpenTelemetry, Prometheus, Grafana, CloudWatch, and Loki paired with SLO-based runbooks and root cause analysis.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-slate-50 dark:bg-[#070B12]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative & Education */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
                Engineering Philosophy
              </p>
              <h2
                id="about-heading"
                className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white [text-wrap:balance]"
              >
                Building the Infrastructure Behind Modern Technology.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I am a DevOps, DevSecOps, and Platform Engineer with 2+ years of hands-on experience
                designing, automating, and operating cloud-native infrastructure at enterprise scale.
                At Sify Technologies Limited, I architect secure multi-tenant AWS platforms and
                containerized workloads built for reliability, auditability, and operational speed.
              </p>
              <p>
                My work bridges traditional infrastructure reliability with modern AI platform
                engineering—connecting private VPC topologies, Istio service-mesh mTLS, and shift-left
                security pipelines directly to production Generative AI, RAG, and agentic systems on
                Amazon Bedrock and OpenSearch.
              </p>
              <p>
                Every system I deliver emphasizes repeatable Infrastructure as Code, automated
                vulnerability gates, least-privilege IAM, and clear observability so engineering teams
                can ship faster without compromising security or stability.
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
