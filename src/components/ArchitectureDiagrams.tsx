import React, { useEffect, useState } from 'react';

export type BlueprintId =
  | 'aws-multitenant'
  | 'k8s-deployment'
  | 'devsecops-cicd'
  | 'rag-ai'
  | 'observability';

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
  label?: string;
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
    id: 'aws-multitenant',
    title: 'Secure AWS Multi-Tenant Architecture',
    subtitle:
      'Segmented VPC with public/private subnets, PrivateLink to Bedrock, Istio mTLS, and namespace-per-tenant Network Policies.',
    viewBox: '0 0 820 340',
    zones: [
      { x: 18, y: 18, w: 170, h: 304, label: 'Edge & DNS Perimeter' },
      { x: 210, y: 18, w: 380, h: 304, label: 'Private VPC · EKS & Istio Mesh' },
      { x: 612, y: 18, w: 190, h: 304, label: 'PrivateLink & Data Plane' },
    ],
    nodes: [
      {
        id: 'edge',
        label: 'Route 53 & AWS WAF',
        sublabel: 'ACM TLS + Filtering',
        x: 34,
        y: 62,
        w: 138,
        h: 58,
        accent: 'blue',
        detail:
          'DNS management via Route 53 and ExternalDNS with AWS WAF filtering malicious requests and ACM handling edge TLS certificates.',
        tools: 'Route 53 · AWS WAF · ACM · ExternalDNS',
      },
      {
        id: 'ingress',
        label: 'NGINX Ingress & API GW',
        sublabel: 'Security Groups / NACLs',
        x: 34,
        y: 152,
        w: 138,
        h: 58,
        accent: 'cyan',
        detail:
          'Public subnet ingress controlled by stateful security groups and stateless NACLs routing traffic into private EKS worker subnets.',
        tools: 'NGINX Ingress · API Gateway · NACLs',
      },
      {
        id: 'nat',
        label: 'Controlled NAT Egress',
        sublabel: 'Default-Deny Allowlist',
        x: 34,
        y: 242,
        w: 138,
        h: 58,
        accent: 'amber',
        detail:
          'Strict outbound egress routing through NAT Gateways with default-deny policies and explicit destination allow-lists.',
        tools: 'NAT Gateway · Egress Allow-List',
      },
      {
        id: 'istio',
        label: 'Istio Service Mesh',
        sublabel: 'Strict mTLS + cert-manager',
        x: 230,
        y: 62,
        w: 340,
        h: 56,
        accent: 'cyan',
        detail:
          'Enforces mutual TLS encryption across all pod-to-pod service traffic inside the EKS cluster with automated cert-manager rotation.',
        tools: 'Istio · cert-manager · CoreDNS',
      },
      {
        id: 'tenant-a',
        label: 'Tenant A Namespace',
        sublabel: 'NetworkPolicy + IRSA',
        x: 230,
        y: 146,
        w: 162,
        h: 64,
        accent: 'blue',
        detail:
          'Namespace-per-tenant isolation enforced by Kubernetes Network Policies and scoped IAM Roles for Service Accounts (IRSA) with permissions boundaries.',
        tools: 'EKS · NetworkPolicy · IRSA',
      },
      {
        id: 'tenant-b',
        label: 'Tenant B Namespace',
        sublabel: 'NetworkPolicy + IRSA',
        x: 408,
        y: 146,
        w: 162,
        h: 64,
        accent: 'blue',
        detail:
          'Isolated tenant workload boundary preventing cross-namespace lateral movement while sharing hardened Terraform-managed control planes.',
        tools: 'EKS · RBAC · Secrets Operator',
      },
      {
        id: 'secrets',
        label: 'Secrets & Event Bus',
        sublabel: 'Secrets Manager + MSK',
        x: 230,
        y: 238,
        w: 340,
        h: 58,
        accent: 'emerald',
        detail:
          'External Secrets Operator syncs tenant credentials from AWS Secrets Manager while Amazon MSK (Kafka) streams audit and usage events.',
        tools: 'AWS Secrets Manager · Amazon MSK (Kafka)',
      },
      {
        id: 'privatelink',
        label: 'AWS PrivateLink',
        sublabel: 'VPC Interface Endpoints',
        x: 628,
        y: 62,
        w: 158,
        h: 64,
        accent: 'cyan',
        detail:
          'Routes traffic privately to Amazon Bedrock and AWS APIs over the AWS backbone without traversing the public internet.',
        tools: 'VPC Endpoints · PrivateLink',
      },
      {
        id: 'data',
        label: 'RDS & S3 Storage',
        sublabel: 'Private Subnets + KMS',
        x: 628,
        y: 152,
        w: 158,
        h: 64,
        accent: 'blue',
        detail:
          'Tenant relational databases on Amazon RDS and encrypted S3 object storage isolated in private subnets via Modular Terraform.',
        tools: 'RDS · S3 · Lambda · Modular Terraform',
      },
      {
        id: 'iam-gov',
        label: 'IAM & MFA Governance',
        sublabel: 'Least Privilege + Audit',
        x: 628,
        y: 238,
        w: 158,
        h: 58,
        accent: 'amber',
        detail:
          'MFA-enforced admin access and permission boundaries governing dev, staging, and prod Terraform workspaces.',
        tools: 'IAM · Permissions Boundaries · MFA',
      },
    ],
    edges: [
      { from: [103, 120], to: [103, 152] },
      { from: [172, 181], to: [230, 90] },
      { from: [311, 118], to: [311, 146] },
      { from: [489, 118], to: [489, 146] },
      { from: [311, 210], to: [311, 238] },
      { from: [489, 210], to: [489, 238] },
      { from: [570, 90], to: [628, 94] },
      { from: [570, 178], to: [628, 184] },
      { from: [172, 271], to: [230, 267] },
    ],
  },
  {
    id: 'k8s-deployment',
    title: 'Kubernetes & Multi-Cloud Deployment Architecture',
    subtitle:
      'Unified multi-cluster orchestration across EKS, AKS, and k3s via Rancher, ArgoCD GitOps, Helm, and 15+ Kyverno admission policies.',
    viewBox: '0 0 820 320',
    zones: [
      { x: 18, y: 18, w: 230, h: 284, label: 'GitOps & Control Plane' },
      { x: 268, y: 18, w: 210, h: 284, label: 'Policy & Admission Gate' },
      { x: 498, y: 18, w: 304, h: 284, label: 'Multi-Cloud Cluster Fleet' },
    ],
    nodes: [
      {
        id: 'git',
        label: 'Git / Helm Charts',
        sublabel: '10+ Reusable Charts',
        x: 34,
        y: 62,
        w: 198,
        h: 60,
        accent: 'blue',
        detail:
          'Versioned Deployment, Service, Ingress, ConfigMap, Secret, and RBAC templates packaged into 10+ standardized Helm charts.',
        tools: 'Helm · Git · Terraform',
      },
      {
        id: 'argocd',
        label: 'ArgoCD Reconciliation',
        sublabel: 'Declarative GitOps Sync',
        x: 34,
        y: 146,
        w: 198,
        h: 60,
        accent: 'cyan',
        detail:
          'Continuously reconciles cluster desired state against Git definitions with automated health checks and drift detection.',
        tools: 'ArgoCD · Health-Check Rollback',
      },
      {
        id: 'rancher',
        label: 'Rancher Management',
        sublabel: 'Multi-Cluster RBAC',
        x: 34,
        y: 230,
        w: 198,
        h: 56,
        accent: 'emerald',
        detail:
          'Centralized cluster provisioning, team RBAC administration, and operational visibility across EKS, AKS, and k3s.',
        tools: 'Rancher · RBAC · Multi-Tenancy',
      },
      {
        id: 'kyverno',
        label: 'Kyverno Engine',
        sublabel: '15+ Admission Policies',
        x: 284,
        y: 86,
        w: 178,
        h: 72,
        accent: 'amber',
        detail:
          'Policy-as-code admission controller validating security contexts, non-root containers, resource quotas, and image registries.',
        tools: 'Kyverno · Admission Control',
      },
      {
        id: 'rbac-net',
        label: 'RBAC & NetworkPolicy',
        sublabel: 'Least-Privilege Pods',
        x: 284,
        y: 186,
        w: 178,
        h: 72,
        accent: 'blue',
        detail:
          'Enforces namespace isolation, HPA autoscaling bounds, and scoped Kubernetes secrets reducing deployment errors by 40%.',
        tools: 'RBAC · HPA · Network Policies',
      },
      {
        id: 'eks',
        label: 'AWS EKS Clusters',
        sublabel: 'Production AI & Apps',
        x: 516,
        y: 60,
        w: 268,
        h: 64,
        accent: 'blue',
        detail:
          'Terraform-provisioned Amazon EKS clusters hosting multi-tenant microservices, LiteLLM gateways, and FastAPI workloads.',
        tools: 'Amazon EKS · IRSA · Istio',
      },
      {
        id: 'aks',
        label: 'Azure AKS Clusters',
        sublabel: 'Multi-Cloud Workloads',
        x: 516,
        y: 144,
        w: 268,
        h: 64,
        accent: 'cyan',
        detail:
          'Managed Azure Kubernetes Service clusters governed centrally through Rancher with identical Kyverno policy baselines.',
        tools: 'Azure AKS · Rancher · Kyverno',
      },
      {
        id: 'k3s',
        label: 'k3s / Kubeadm Nodes',
        sublabel: 'Lightweight & Self-Hosted',
        x: 516,
        y: 228,
        w: 268,
        h: 58,
        accent: 'emerald',
        detail:
          'Lightweight Kubernetes clusters supporting client delivery workloads, internal tooling, and CI/CD staging runners.',
        tools: 'k3s · Kubeadm · Linux',
      },
    ],
    edges: [
      { from: [133, 122], to: [133, 146] },
      { from: [232, 176], to: [284, 122] },
      { from: [232, 258], to: [284, 222] },
      { from: [462, 122], to: [516, 92] },
      { from: [462, 140], to: [516, 176] },
      { from: [462, 222], to: [516, 257] },
    ],
  },
  {
    id: 'devsecops-cicd',
    title: 'CI/CD DevSecOps Pipeline Architecture',
    subtitle:
      'Multi-stage delivery pipeline with Jest/Playwright tests, 3-layer security gates (SonarQube, OWASP, Trivy), Nexus registry, and automated rollback.',
    viewBox: '0 0 820 300',
    zones: [
      { x: 18, y: 20, w: 180, h: 260, label: '1. Source & Test' },
      { x: 214, y: 20, w: 230, h: 260, label: '2. Shift-Left Security Gates' },
      { x: 460, y: 20, w: 165, h: 260, label: '3. Artifact & Scan' },
      { x: 641, y: 20, w: 161, h: 260, label: '4. Gated Deploy' },
    ],
    nodes: [
      {
        id: 'scm',
        label: 'GitHub / GitLab / Gitea',
        sublabel: 'SCM & Webhook Trigger',
        x: 32,
        y: 66,
        w: 152,
        h: 64,
        accent: 'blue',
        detail:
          'Code commits and pull requests trigger declarative pipelines across Jenkins, Harness, GitLab CI, and GitHub Actions.',
        tools: 'Jenkins · Harness · GitLab CI · Gitea',
      },
      {
        id: 'test',
        label: 'Build & Automated Tests',
        sublabel: 'Jest + Playwright Suites',
        x: 32,
        y: 166,
        w: 152,
        h: 68,
        accent: 'cyan',
        detail:
          'Automated compilation, unit testing (Jest), and end-to-end verification (Playwright) cutting release cycles by 78%.',
        tools: 'Jest · Playwright · Node.js / Python',
      },
      {
        id: 'sonar',
        label: 'SonarQube Quality Gate',
        sublabel: 'SAST & Code Coverage',
        x: 230,
        y: 60,
        w: 198,
        h: 58,
        accent: 'amber',
        detail:
          'Static Application Security Testing (SAST) blocking builds with critical code smells, bugs, or security hotspots.',
        tools: 'SonarQube SAST',
      },
      {
        id: 'owasp',
        label: 'OWASP Dependency-Check',
        sublabel: 'SCA Vulnerability Gate',
        x: 230,
        y: 132,
        w: 198,
        h: 58,
        accent: 'amber',
        detail:
          'Software Composition Analysis scanning third-party libraries for known CVEs before image packaging.',
        tools: 'OWASP Dependency-Check (SCA)',
      },
      {
        id: 'gate-policy',
        label: 'Zero-Vulnerable-Build Gate',
        sublabel: '100% Vulnerable Block',
        x: 230,
        y: 204,
        w: 198,
        h: 58,
        accent: 'emerald',
        detail:
          'Hard pipeline threshold blocking 100% of vulnerable builds across 3 client Jenkins pipelines and Harness workflows.',
        tools: 'Shift-Left Policy Gate',
      },
      {
        id: 'docker-nexus',
        label: 'Multi-Stage Docker + Nexus',
        sublabel: '~30% Less Disk Footprint',
        x: 474,
        y: 66,
        w: 137,
        h: 76,
        accent: 'blue',
        detail:
          'Optimized multi-stage Docker builds pushed to Nexus Repository with automated post-build image pruning.',
        tools: 'Docker · Nexus · Image Pruning',
      },
      {
        id: 'trivy',
        label: 'Trivy Container Scan',
        sublabel: 'OS & Layer CVE Audit',
        x: 474,
        y: 166,
        w: 137,
        h: 68,
        accent: 'amber',
        detail:
          'Scans container images and OS packages for critical and high CVEs prior to Helm chart promotion.',
        tools: 'Trivy · KubeAudit',
      },
      {
        id: 'helm-deploy',
        label: 'Helm Production Deploy',
        sublabel: 'Smoke Test + Rollback',
        x: 655,
        y: 106,
        w: 133,
        h: 96,
        accent: 'cyan',
        detail:
          'Python-automated Helm deployments executing smoke health checks with automatic rollback on failure.',
        tools: 'Helm · Python · Health-Check Rollback',
      },
    ],
    edges: [
      { from: [108, 130], to: [108, 166] },
      { from: [184, 200], to: [230, 89] },
      { from: [184, 200], to: [230, 161] },
      { from: [329, 190], to: [329, 204] },
      { from: [428, 233], to: [474, 104] },
      { from: [542, 142], to: [542, 166] },
      { from: [611, 200], to: [655, 154] },
    ],
  },
  {
    id: 'rag-ai',
    title: 'RAG & Agentic AI Infrastructure Architecture',
    subtitle:
      'LiteLLM gateway fronting Amazon Bedrock over PrivateLink, OpenSearch vector RAG pipelines, and LangGraph agents connected via MCP.',
    viewBox: '0 0 820 320',
    zones: [
      { x: 18, y: 18, w: 178, h: 284, label: 'API & Guardrails' },
      { x: 214, y: 18, w: 204, h: 284, label: 'LLM Gateway & Agents' },
      { x: 436, y: 18, w: 186, h: 284, label: 'Private AWS AI & RAG' },
      { x: 640, y: 18, w: 162, h: 284, label: 'Enterprise & Telemetry' },
    ],
    nodes: [
      {
        id: 'fastapi',
        label: 'Python / FastAPI Tier',
        sublabel: 'Tenant Access Boundaries',
        x: 34,
        y: 80,
        w: 146,
        h: 66,
        accent: 'blue',
        detail:
          'Exposes RAG and agentic endpoints per tenant with scoped IAM credentials and strict input validation.',
        tools: 'Python · FastAPI · Scoped IAM',
      },
      {
        id: 'guardrails',
        label: 'PII & Rate Guardrails',
        sublabel: 'Centralized Governance',
        x: 34,
        y: 182,
        w: 146,
        h: 66,
        accent: 'amber',
        detail:
          'Applies PII-redaction filters and per-tenant token/request rate limiting before invoking foundation models.',
        tools: 'PII Redaction · Rate Limiting',
      },
      {
        id: 'litellm',
        label: 'LiteLLM Gateway',
        sublabel: 'Centralized Model Routing',
        x: 230,
        y: 64,
        w: 172,
        h: 72,
        accent: 'cyan',
        detail:
          'Unified proxy routing inference and embedding calls to Amazon Bedrock while emitting per-tenant token and cost metrics.',
        tools: 'LiteLLM · Cost Tracking',
      },
      {
        id: 'agents',
        label: 'LangChain & LangGraph',
        sublabel: 'Stateful Agent Orchestrator',
        x: 230,
        y: 172,
        w: 172,
        h: 76,
        accent: 'blue',
        detail:
          'Multi-step agentic workflows using LangChain and LangGraph to reason over retrieved context and enterprise tools.',
        tools: 'LangChain · LangGraph · Agentic AI',
      },
      {
        id: 'bedrock',
        label: 'Amazon Bedrock',
        sublabel: 'LLMs + Embeddings (PrivateLink)',
        x: 452,
        y: 64,
        w: 154,
        h: 72,
        accent: 'emerald',
        detail:
          'Foundation models and embedding generation accessed exclusively over AWS PrivateLink VPC endpoints.',
        tools: 'Amazon Bedrock · PrivateLink',
      },
      {
        id: 'opensearch',
        label: 'Amazon OpenSearch',
        sublabel: 'Vector Store (RAG)',
        x: 452,
        y: 172,
        w: 154,
        h: 76,
        accent: 'cyan',
        detail:
          'Stores tenant-partitioned vector embeddings for low-latency Retrieval-Augmented Generation queries.',
        tools: 'Amazon OpenSearch · Vector RAG',
      },
      {
        id: 'mcp',
        label: 'MCP Data Connectors',
        sublabel: 'Enterprise Tool Bridge',
        x: 654,
        y: 64,
        w: 134,
        h: 72,
        accent: 'blue',
        detail:
          'Model Context Protocol (MCP) servers connecting AI agents securely to enterprise data sources via Secrets Manager.',
        tools: 'MCP · Secrets Manager',
      },
      {
        id: 'msk-cost',
        label: 'Kafka MSK + Cost Alerts',
        sublabel: 'Slack & Email Reporting',
        x: 654,
        y: 172,
        w: 134,
        h: 76,
        accent: 'amber',
        detail:
          'Streams tenant usage and audit events through Amazon MSK with Python-automated LLM cost reporting to Slack/email.',
        tools: 'Amazon MSK · Python · Slack Alerts',
      },
    ],
    edges: [
      { from: [107, 146], to: [107, 182] },
      { from: [180, 113], to: [230, 100] },
      { from: [180, 215], to: [230, 210] },
      { from: [402, 100], to: [452, 100] },
      { from: [402, 210], to: [452, 210] },
      { from: [529, 136], to: [529, 172] },
      { from: [402, 192], to: [654, 100] },
      { from: [402, 120], to: [654, 210] },
    ],
  },
  {
    id: 'observability',
    title: 'Monitoring & Observability Architecture',
    subtitle:
      'OpenTelemetry, Prometheus, Grafana, CloudWatch, and Loki delivering ~50% faster incident detection and ~40% faster AWS diagnostics.',
    viewBox: '0 0 820 300',
    zones: [
      { x: 18, y: 20, w: 190, h: 260, label: 'Telemetry Sources' },
      { x: 226, y: 20, w: 188, h: 260, label: 'Collection & Storage' },
      { x: 432, y: 20, w: 196, h: 260, label: 'Dashboards & Analysis' },
      { x: 646, y: 20, w: 156, h: 260, label: 'Alerting & Incident RCA' },
    ],
    nodes: [
      {
        id: 'workloads',
        label: 'EKS, AKS & AWS Services',
        sublabel: '10+ Services + 4+ AWS Apps',
        x: 32,
        y: 66,
        w: 162,
        h: 66,
        accent: 'blue',
        detail:
          'Instrumented platform microservices, Kubernetes nodes, and AWS workloads emitting metrics, logs, and traces.',
        tools: 'EKS · Lambda · RDS · LiteLLM',
      },
      {
        id: 'otel',
        label: 'OpenTelemetry Collectors',
        sublabel: 'Per-Tenant Tracing',
        x: 32,
        y: 166,
        w: 162,
        h: 66,
        accent: 'cyan',
        detail:
          'Standardized OpenTelemetry instrumentation capturing distributed traces and per-tenant AI platform telemetry.',
        tools: 'OpenTelemetry · OTLP',
      },
      {
        id: 'prom',
        label: 'Prometheus + CloudWatch',
        sublabel: 'Time-Series Metrics',
        x: 240,
        y: 66,
        w: 160,
        h: 66,
        accent: 'emerald',
        detail:
          'Scrapes Kubernetes/service metrics into Prometheus while streaming AWS infrastructure & tenant telemetry to CloudWatch.',
        tools: 'Prometheus · AWS CloudWatch',
      },
      {
        id: 'logs',
        label: 'ELK Stack & Grafana Loki',
        sublabel: 'Centralized Log Streams',
        x: 240,
        y: 166,
        w: 160,
        h: 66,
        accent: 'blue',
        detail:
          'Aggregates container, ingress, and audit logs for rapid cross-service correlation during production troubleshooting.',
        tools: 'Loki · ELK · CloudWatch Logs',
      },
      {
        id: 'grafana',
        label: 'Grafana & CloudWatch UI',
        sublabel: 'SLO / SLI Dashboards',
        x: 446,
        y: 106,
        w: 168,
        h: 92,
        accent: 'cyan',
        detail:
          'Unified dashboards across 10+ services and 4+ AWS workloads cutting incident detection ~50% and mean time to diagnose ~40%.',
        tools: 'Grafana · CloudWatch Dashboards',
      },
      {
        id: 'alerts',
        label: 'Custom Alerts & Slack',
        sublabel: 'LLM Cost + Health Alerts',
        x: 660,
        y: 66,
        w: 128,
        h: 66,
        accent: 'amber',
        detail:
          'Custom Prometheus/CloudWatch alerting rules and automated Python LLM usage/cost notifications to Slack and email.',
        tools: 'Alertmanager · Slack · Email',
      },
      {
        id: 'rca',
        label: 'SLO Runbooks & RCA',
        sublabel: 'Incident Response',
        x: 660,
        y: 166,
        w: 128,
        h: 66,
        accent: 'emerald',
        detail:
          'Maintained SLO-based incident runbooks and executed production incident triage and Root Cause Analysis (RCA).',
        tools: 'SLO/SLI · Incident Runbooks · RCA',
      },
    ],
    edges: [
      { from: [113, 132], to: [113, 166] },
      { from: [194, 99], to: [240, 99] },
      { from: [194, 199], to: [240, 99] },
      { from: [194, 199], to: [240, 199] },
      { from: [400, 99], to: [446, 138] },
      { from: [400, 199], to: [446, 166] },
      { from: [614, 138], to: [660, 99] },
      { from: [614, 166], to: [660, 199] },
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

  // Ensure selected node always belongs to current blueprint when blueprint changes
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
                  className="fill-slate-900 dark:fill-slate-100 font-display text-[11.5px] font-semibold pointer-events-none"
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
