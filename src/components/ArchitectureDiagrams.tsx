import React, { useEffect, useState } from 'react';

export type BlueprintId =
  | 'agentic-soc'
  | 'mcp-firewall'
  | 'hitl-eval'
  | 'aws-rag'
  | 'devsecops-obs';

interface DiagramNode {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  w: number;
  h: number;
  accent?: 'blue' | 'cyan' | 'amber' | 'emerald';
  detail: string;
  tools: string;
}

interface DiagramEdge {
  from: [number, number];
  to: [number, number];
}

interface BlueprintConfig {
  id: BlueprintId;
  title: string;
  subtitle: string;
  viewBox: string;
  zones: { x: number; y: number; w: number; h: number; label: string }[];
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

export const ARCHITECTURE_BLUEPRINTS: BlueprintConfig[] = [
  {
    id: 'agentic-soc',
    title: '5-Plane Agentic SOC Intelligence Architecture',
    subtitle:
      'Kafka + Flink 5-window streaming detection feeding ClickHouse/Redis, dual-model 8B/70B LangGraph + vLLM Outlines investigation, and OPA 4-tier HITL remediation.',
    viewBox: '0 0 820 330',
    zones: [
      { x: 18, y: 18, w: 186, h: 294, label: 'Ingestion & Streaming' },
      { x: 222, y: 18, w: 196, h: 294, label: 'Detection & Context' },
      { x: 436, y: 18, w: 190, h: 294, label: 'AI Investigation Plane' },
      { x: 644, y: 18, w: 158, h: 294, label: 'OPA Governance & Response' },
    ],
    nodes: [
      {
        id: 'sources',
        label: '6+ Telemetry Sources',
        sublabel: 'Security & Infra Logs',
        x: 32,
        y: 64,
        w: 158,
        h: 62,
        accent: 'blue',
        detail:
          'Ingests telemetry from 6+ security and infrastructure sources including Fortinet, CrowdStrike, Active Directory, and network logs.',
        tools: 'Fortinet · CrowdStrike · AD · Infra Telemetry',
      },
      {
        id: 'kafka-flink',
        label: 'Kafka + Flink Engine',
        sublabel: '5s / 30m / 24h Windows',
        x: 32,
        y: 170,
        w: 158,
        h: 82,
        accent: 'cyan',
        detail:
          'Combines 5 detection techniques—rule-based, CEP, UEBA, behavioral analytics, and threat intel correlation—targeting 500K events/sec.',
        tools: 'Apache Kafka · Apache Flink · CEP · UEBA',
      },
      {
        id: 'clustering',
        label: 'Campaign Clustering',
        sublabel: '2,000 Signals → 1 Case',
        x: 238,
        y: 64,
        w: 164,
        h: 68,
        accent: 'emerald',
        detail:
          'Consolidates up to 2,000 correlated security signals into a single LLM investigation targeting 99%+ event-volume reduction and sub-15 ms UEBA.',
        tools: 'Alert Clustering · UEBA Scoring',
      },
      {
        id: 'context-db',
        label: 'Redis + ClickHouse',
        sublabel: 'Entity State & Temporal DB',
        x: 238,
        y: 170,
        w: 164,
        h: 82,
        accent: 'blue',
        detail:
          'Redis serves live entity context while ClickHouse executes temporal analytics targeting sub-35 ms query latency.',
        tools: 'Redis · ClickHouse · RAG SOP Store',
      },
      {
        id: 'langgraph',
        label: 'LangGraph Agents',
        sublabel: '8B / 70B Dual-Model LLM',
        x: 452,
        y: 64,
        w: 158,
        h: 72,
        accent: 'cyan',
        detail:
          'Proposed dual-model AI investigation using 8B & 70B LLMs, LangGraph orchestration, and RAG-based SOP retrieval targeting sub-1.5s latency.',
        tools: 'LangGraph · LangChain · 8B/70B LLMs · RAG',
      },
      {
        id: 'vllm',
        label: 'vLLM Outlines',
        sublabel: 'Grammar-Constrained JSON',
        x: 452,
        y: 174,
        w: 158,
        h: 78,
        accent: 'amber',
        detail:
          'Enforces grammar-constrained JSON generation via vLLM Outlines for deterministic analyst assistance and downstream OPA evaluation.',
        tools: 'vLLM · Outlines · FastAPI',
      },
      {
        id: 'opa',
        label: 'OPA 4-Tier Policy',
        sublabel: 'Tier 0–3 + HITL Gates',
        x: 658,
        y: 64,
        w: 130,
        h: 74,
        accent: 'amber',
        detail:
          'OPA authorization framework enforcing 4 blast-radius tiers (Tier 0–3) with human-in-the-loop approval gates for high-risk actions.',
        tools: 'OPA · Blast-Radius Tiers · HITL',
      },
      {
        id: 'remediation',
        label: 'Response Orchestration',
        sublabel: 'Sub-3s Target Remediation',
        x: 658,
        y: 174,
        w: 130,
        h: 78,
        accent: 'emerald',
        detail:
          'Executes approved containment across Fortinet, CrowdStrike, and Active Directory with fault-tolerant processing and graceful degradation.',
        tools: 'Fortinet · CrowdStrike · Active Directory',
      },
    ],
    edges: [
      { from: [111, 126], to: [111, 170] },
      { from: [190, 210], to: [238, 98] },
      { from: [190, 210], to: [238, 210] },
      { from: [402, 98], to: [452, 98] },
      { from: [402, 210], to: [452, 118] },
      { from: [531, 136], to: [531, 174] },
      { from: [610, 213], to: [658, 101] },
      { from: [723, 138], to: [723, 174] },
    ],
  },
  {
    id: 'mcp-firewall',
    title: 'Agentic AI Firewall Audit Architecture',
    subtitle:
      'Stateful LangGraph conditional workflows invoking reusable MCP server tools against FortiGate REST API and Check Point Management API.',
    viewBox: '0 0 820 300',
    zones: [
      { x: 18, y: 20, w: 220, h: 260, label: 'Agentic Reasoning Graph' },
      { x: 256, y: 20, w: 214, h: 260, label: 'MCP Tool Server Layer' },
      { x: 488, y: 20, w: 314, h: 260, label: 'Multi-Vendor Firewall Estate' },
    ],
    nodes: [
      {
        id: 'llm-brain',
        label: 'Claude / OpenAI LLM',
        sublabel: 'Policy Reasoning Engine',
        x: 34,
        y: 66,
        w: 188,
        h: 64,
        accent: 'cyan',
        detail:
          'Reasons over extracted multi-vendor firewall rulesets, detecting shadowed rules, overly permissive policies, and compliance gaps.',
        tools: 'Claude · OpenAI · Tool Calling',
      },
      {
        id: 'langgraph-state',
        label: 'LangGraph Conditional Flow',
        sublabel: 'Stateful Multi-Vendor Audit',
        x: 34,
        y: 164,
        w: 188,
        h: 72,
        accent: 'blue',
        detail:
          'Manages audit state with conditional branching across vendor types, aggregating findings into consolidated compliance reports.',
        tools: 'LangGraph · Python · Conditional Edges',
      },
      {
        id: 'mcp-server',
        label: 'MCP Tool Registry',
        sublabel: 'AI-Callable Audit Functions',
        x: 272,
        y: 102,
        w: 182,
        h: 96,
        accent: 'emerald',
        detail:
          'Model Context Protocol server exposing firewall inspection, rule extraction, and posture verification as structured reusable tools.',
        tools: 'Model Context Protocol (MCP) · Python',
      },
      {
        id: 'fortigate',
        label: 'FortiGate REST API',
        sublabel: 'Live Rules & Policy Posture',
        x: 506,
        y: 66,
        w: 278,
        h: 68,
        accent: 'amber',
        detail:
          'Dynamically queried via MCP tool calling to extract FortiGate firewall rules, NAT policies, and configuration state in real time.',
        tools: 'FortiGate REST API',
      },
      {
        id: 'checkpoint',
        label: 'Check Point Management API',
        sublabel: 'Multi-Vendor Policy Sync',
        x: 506,
        y: 168,
        w: 278,
        h: 68,
        accent: 'blue',
        detail:
          'Dynamically invoked to inspect Check Point policy packages, access layers, and security posture alongside FortiGate.',
        tools: 'Check Point Management API',
      },
    ],
    edges: [
      { from: [128, 130], to: [128, 164] },
      { from: [222, 198], to: [272, 150] },
      { from: [454, 134], to: [506, 100] },
      { from: [454, 166], to: [506, 202] },
    ],
  },
  {
    id: 'hitl-eval',
    title: 'Human-in-the-Loop AI Evaluation Architecture',
    subtitle:
      'LangGraph supervisor-agent routing questions to specialized LLM scoring pipelines, integrated with a React/Node/Express/MySQL HITL review system.',
    viewBox: '0 0 820 300',
    zones: [
      { x: 18, y: 20, w: 206, h: 260, label: 'Full-Stack Review Console' },
      { x: 242, y: 20, w: 238, h: 260, label: 'LangGraph Evaluation Plane' },
      { x: 498, y: 20, w: 304, h: 260, label: 'Scoring & Approval Persistence' },
    ],
    nodes: [
      {
        id: 'react-ui',
        label: 'React.js Review UI',
        sublabel: 'Human Review & Sign-Off',
        x: 34,
        y: 64,
        w: 174,
        h: 66,
        accent: 'cyan',
        detail:
          'Reviewer workspace displaying AI-generated evaluations, rubric scores, and multi-stage human approval controls.',
        tools: 'React.js · RBAC UI',
      },
      {
        id: 'node-api',
        label: 'Node.js / Express + JWT',
        sublabel: 'RBAC & Workflow Gateway',
        x: 34,
        y: 166,
        w: 174,
        h: 68,
        accent: 'blue',
        detail:
          'Authenticates reviewers via JWT, enforces role-based access control, and orchestrates multi-stage approval transitions.',
        tools: 'Node.js · Express.js · JWT · RBAC',
      },
      {
        id: 'fastapi-sup',
        label: 'FastAPI + Supervisor Agent',
        sublabel: 'Question Classification',
        x: 258,
        y: 102,
        w: 206,
        h: 96,
        accent: 'emerald',
        detail:
          'LangGraph supervisor-agent classifies evaluation prompts and dynamically routes each item to specialized scoring pipelines (70% less manual effort).',
        tools: 'FastAPI · LangGraph Supervisor',
      },
      {
        id: 'scorers',
        label: 'Specialized LLM Scorers',
        sublabel: 'Domain Scoring Pipelines',
        x: 516,
        y: 64,
        w: 268,
        h: 68,
        accent: 'cyan',
        detail:
          'Dedicated LLM-as-a-Judge evaluation branches tailored per question class for accurate, consistent scoring.',
        tools: 'LLMs · LLM-as-a-Judge · Evaluation',
      },
      {
        id: 'mysql-hitl',
        label: 'MySQL Audit & Approvals',
        sublabel: 'Multi-Stage HITL Store',
        x: 516,
        y: 166,
        w: 268,
        h: 68,
        accent: 'amber',
        detail:
          'Persists AI scores, human reviewer edits, and multi-stage approval history for enterprise auditability.',
        tools: 'MySQL · HITL Approval State',
      },
    ],
    edges: [
      { from: [121, 130], to: [121, 166] },
      { from: [208, 200], to: [258, 150] },
      { from: [464, 134], to: [516, 98] },
      { from: [464, 168], to: [516, 200] },
    ],
  },
  {
    id: 'aws-rag',
    title: 'AWS Multi-Tenant Cloud & LiteLLM RAG Architecture',
    subtitle:
      'Modular Terraform AWS/EKS platform with IRSA, AWS WAF, Istio mTLS, PrivateLink, LiteLLM Bedrock gateway, and OpenSearch RAG.',
    viewBox: '0 0 820 320',
    zones: [
      { x: 18, y: 18, w: 176, h: 284, label: 'Edge & Zero-Trust' },
      { x: 212, y: 18, w: 286, h: 284, label: 'EKS & Istio mTLS Mesh' },
      { x: 516, y: 18, w: 286, h: 284, label: 'PrivateLink AI & Data' },
    ],
    nodes: [
      {
        id: 'waf',
        label: 'AWS WAF & TLS Edge',
        sublabel: 'Default-Deny Egress',
        x: 32,
        y: 68,
        w: 148,
        h: 66,
        accent: 'amber',
        detail:
          'Protects multi-tenant endpoints with AWS WAF, automated TLS certificates, and strict default-deny egress controls.',
        tools: 'AWS WAF · Cert Automation · VPC',
      },
      {
        id: 'terraform',
        label: 'Modular Terraform',
        sublabel: 'Dev / Staging / Prod',
        x: 32,
        y: 174,
        w: 148,
        h: 68,
        accent: 'blue',
        detail:
          'Reusable modular Terraform configurations provisioning EKS, Lambda, RDS, S3, and scoped IAM across isolated environments.',
        tools: 'Terraform · Workspaces · HCL',
      },
      {
        id: 'eks-istio',
        label: 'Amazon EKS + Istio mTLS',
        sublabel: 'IRSA & Permissions Bounds',
        x: 228,
        y: 68,
        w: 254,
        h: 68,
        accent: 'blue',
        detail:
          'Multi-tenant Kubernetes workloads secured via Istio mutual TLS, IRSA, IAM permissions boundaries, and least-privilege access.',
        tools: 'EKS · Istio mTLS · IRSA · Helm',
      },
      {
        id: 'litellm',
        label: 'LiteLLM Inference Gateway',
        sublabel: 'Routing, Rate Limit & PII',
        x: 228,
        y: 174,
        w: 254,
        h: 68,
        accent: 'cyan',
        detail:
          'Centralized LLM proxy enforcing multi-model routing, per-tenant request rate limiting, and PII-redaction guardrails.',
        tools: 'LiteLLM · PII Redaction · Rate Limiting',
      },
      {
        id: 'bedrock',
        label: 'Amazon Bedrock (PrivateLink)',
        sublabel: 'LLMs + Bedrock Embeddings',
        x: 534,
        y: 68,
        w: 250,
        h: 68,
        accent: 'emerald',
        detail:
          'Private foundation model inference and embedding generation accessed over AWS PrivateLink without public internet exposure.',
        tools: 'Amazon Bedrock · PrivateLink',
      },
      {
        id: 'opensearch-rds',
        label: 'OpenSearch Vector + RDS/S3',
        sublabel: 'RAG & Multi-Tenant Storage',
        x: 534,
        y: 174,
        w: 250,
        h: 68,
        accent: 'cyan',
        detail:
          'RAG pipelines querying Amazon OpenSearch vector search alongside private RDS, S3, and Lambda services.',
        tools: 'Amazon OpenSearch · RDS · S3 · Lambda',
      },
    ],
    edges: [
      { from: [180, 101], to: [228, 101] },
      { from: [355, 136], to: [355, 174] },
      { from: [482, 208], to: [534, 102] },
      { from: [482, 208], to: [534, 208] },
      { from: [659, 136], to: [659, 174] },
    ],
  },
  {
    id: 'devsecops-obs',
    title: 'DevSecOps CI/CD & Observability Architecture',
    subtitle:
      'Jenkins, GitHub Actions & Gitea pipelines with SonarQube, Trivy & OWASP gates (78% faster releases), feeding Prometheus, Grafana & OpenTelemetry.',
    viewBox: '0 0 820 300',
    zones: [
      { x: 18, y: 20, w: 186, h: 260, label: 'SCM & Declarative CI' },
      { x: 222, y: 20, w: 202, h: 260, label: 'DevSecOps Gates' },
      { x: 442, y: 20, w: 164, h: 260, label: 'K8s & IaC Runtime' },
      { x: 624, y: 20, w: 178, h: 260, label: 'Observability & SLO' },
    ],
    nodes: [
      {
        id: 'jenkins',
        label: 'Jenkins + GitHub Actions',
        sublabel: 'Gitea SCM · 78% Faster',
        x: 32,
        y: 102,
        w: 158,
        h: 96,
        accent: 'blue',
        detail:
          'Declarative Jenkins pipelines integrated with GitHub Actions and Gitea SCM, cutting release cycles from 2 weeks to 3 days (78%).',
        tools: 'Jenkins · GitHub Actions · Gitea',
      },
      {
        id: 'sast-sca',
        label: 'SonarQube + OWASP',
        sublabel: 'SAST & SCA Checks',
        x: 238,
        y: 64,
        w: 170,
        h: 66,
        accent: 'amber',
        detail:
          'Static analysis (SonarQube) and dependency vulnerability scanning (OWASP Dependency-Check) across 3 client Jenkins pipelines.',
        tools: 'SonarQube · OWASP Dependency-Check',
      },
      {
        id: 'trivy',
        label: 'Trivy Container Gate',
        sublabel: 'Zero Vulnerable Prod Deploys',
        x: 238,
        y: 166,
        w: 170,
        h: 68,
        accent: 'emerald',
        detail:
          'Scans Docker images for CVEs prior to Helm promotion, preventing vulnerable builds from advancing to production.',
        tools: 'Trivy · Docker · Container Security',
      },
      {
        id: 'k8s-helm',
        label: 'EKS / AKS / k3s + Helm',
        sublabel: 'Rancher & ArgoCD GitOps',
        x: 456,
        y: 102,
        w: 136,
        h: 96,
        accent: 'cyan',
        detail:
          'Terraform and Ansible provisioned infrastructure deploying workloads via Helm, Rancher, ArgoCD, and Kyverno policies.',
        tools: 'Kubernetes · Helm · ArgoCD · Kyverno',
      },
      {
        id: 'otel-prom',
        label: 'Prometheus + OTel + CW',
        sublabel: 'Metrics, Traces & Logs',
        x: 638,
        y: 64,
        w: 150,
        h: 66,
        accent: 'blue',
        detail:
          'Collects cluster metrics, OpenTelemetry traces, CloudWatch telemetry, and ELK/Loki log streams.',
        tools: 'Prometheus · OpenTelemetry · CloudWatch',
      },
      {
        id: 'grafana-slo',
        label: 'Grafana & SLI/SLO RCA',
        sublabel: 'AI & Infra Visibility',
        x: 638,
        y: 166,
        w: 150,
        h: 68,
        accent: 'cyan',
        detail:
          'Unified Grafana dashboards for SLI/SLO monitoring, incident analysis, and root cause analysis.',
        tools: 'Grafana · ELK · Loki · SLI/SLO',
      },
    ],
    edges: [
      { from: [190, 150], to: [238, 97] },
      { from: [323, 130], to: [323, 166] },
      { from: [408, 200], to: [456, 150] },
      { from: [592, 136], to: [638, 97] },
      { from: [592, 164], to: [638, 200] },
    ],
  },
];

interface InteractiveBlueprintProps {
  blueprintId: BlueprintId;
  compact?: boolean;
}

export const InteractiveBlueprint: React.FC<InteractiveBlueprintProps> = ({
  blueprintId,
  compact = false,
}) => {
  const blueprint =
    ARCHITECTURE_BLUEPRINTS.find((b) => b.id === blueprintId) || ARCHITECTURE_BLUEPRINTS[0];

  const [selectedNodeId, setSelectedNodeId] = useState<string>(blueprint.nodes[0].id);

  useEffect(() => {
    setSelectedNodeId(blueprint.nodes[0].id);
  }, [blueprint.id, blueprint.nodes]);

  const activeNode =
    blueprint.nodes.find((n) => n.id === selectedNodeId) || blueprint.nodes[0];

  const getAccentClasses = (accent: DiagramNode['accent'], isSelected: boolean) => {
    if (isSelected) {
      return 'fill-blue-50 dark:fill-blue-950/70 stroke-blue-600 dark:stroke-cyan-400';
    }
    switch (accent) {
      case 'cyan':
        return 'fill-white dark:fill-[#0F1727] stroke-cyan-500/45 dark:stroke-cyan-500/40 hover:stroke-cyan-500';
      case 'amber':
        return 'fill-white dark:fill-[#0F1727] stroke-amber-500/45 dark:stroke-amber-400/40 hover:stroke-amber-500';
      case 'emerald':
        return 'fill-white dark:fill-[#0F1727] stroke-emerald-500/45 dark:stroke-emerald-400/40 hover:stroke-emerald-500';
      default:
        return 'fill-white dark:fill-[#0F1727] stroke-blue-500/40 dark:stroke-blue-400/35 hover:stroke-blue-500';
    }
  };

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#080D16] p-3 sm:p-4">
        <svg
          viewBox={blueprint.viewBox}
          className={`w-full h-auto ${compact ? 'min-w-[620px]' : 'min-w-[680px]'}`}
          role="img"
          aria-label={blueprint.title}
        >
          <defs>
            <marker
              id={`arrow-${blueprint.id}`}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" className="fill-blue-500/70 dark:fill-cyan-400/70" />
            </marker>
          </defs>

          {/* Architectural Boundary Zones */}
          {blueprint.zones.map((zone) => (
            <g key={zone.label}>
              <rect
                x={zone.x}
                y={zone.y}
                width={zone.w}
                height={zone.h}
                rx="8"
                className="fill-slate-100/60 dark:fill-[#0C1322]/75 stroke-slate-300/80 dark:stroke-slate-800"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <text
                x={zone.x + 12}
                y={zone.y + 18}
                className="fill-slate-500 dark:fill-slate-400 font-mono text-[10px] font-medium"
              >
                {zone.label}
              </text>
            </g>
          ))}

          {/* Directional Edges */}
          {blueprint.edges.map((edge, idx) => (
            <line
              key={idx}
              x1={edge.from[0]}
              y1={edge.from[1]}
              x2={edge.to[0]}
              y2={edge.to[1]}
              className="stroke-blue-500/45 dark:stroke-cyan-400/40 animate-flow-line"
              strokeWidth="1.6"
              markerEnd={`url(#arrow-${blueprint.id})`}
            />
          ))}

          {/* Interactive Component Nodes */}
          {blueprint.nodes.map((node) => {
            const isSelected = activeNode.id === node.id;
            return (
              <g
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedNodeId(node.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                aria-label={`Inspect ${node.label}`}
                className="cursor-pointer focus:outline-none"
              >
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.w}
                  height={node.h}
                  rx="7"
                  strokeWidth={isSelected ? '2' : '1.25'}
                  className={`transition-colors ${getAccentClasses(node.accent, isSelected)}`}
                />
                <text
                  x={node.x + 12}
                  y={node.y + 24}
                  className="fill-slate-900 dark:fill-slate-100 font-display text-[11px] font-semibold pointer-events-none"
                >
                  {node.label}
                </text>
                <text
                  x={node.x + 12}
                  y={node.y + 42}
                  className="fill-slate-500 dark:fill-slate-400 font-mono text-[9.5px] pointer-events-none"
                >
                  {node.sublabel}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Component Specification Bar */}
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1320] p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-display font-semibold text-slate-900 dark:text-slate-100">
              {activeNode.label}
            </span>
            <span aria-hidden="true" className="text-slate-400">
              ·
            </span>
            <span className="text-slate-500 dark:text-slate-400">{activeNode.sublabel}</span>
          </div>
          <span className="font-mono text-[11px] text-blue-600 dark:text-cyan-400">
            {activeNode.tools}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {activeNode.detail}
        </p>
      </div>
    </div>
  );
};
