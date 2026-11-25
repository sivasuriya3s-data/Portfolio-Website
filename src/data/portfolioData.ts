export const RESUME_URL = '/assets/aistudio/Siva_Suriya_S_Resume_572d4c7f.pdf';
export const PORTRAIT_URL = '/assets/aistudio/Confident_Startup_Office_Portrait_13610736.png';

export const CANDIDATE = {
  name: 'Siva Suriya S',
  shortName: 'Siva Suriya',
  title:
    'AI Engineer | Agentic AI · GenAI · RAG · LangGraph · MCP · LLMOps | AWS · Kubernetes · DevSecOps',
  roleLine: 'AI Engineer · Agentic AI & Cloud Infrastructure',
  location: 'Chennai, Tamil Nadu, India',
  shortLocation: 'Chennai, India',
  experienceSummary: '2.5 Years of Experience',
  currentOrg: 'Sify Technologies Limited',
  currentRole: 'AI Engineer (Cloud, DevSecOps & Agentic AI)',
  tenure: 'Jul 2024 – Present',
  phone: '+91 73970 39768',
  email: 'sivasuriyasettu@gmail.com',
  linkedin: 'https://linkedin.com/in/siva-suriya-s-b95869205',
  linkedinDisplay: 'linkedin.com/in/siva-suriya-s-b95869205',
  github: 'https://github.com/sivasuriya3s-data',
  githubUsername: 'sivasuriya3s-data',
  githubDisplay: 'github.com/sivasuriya3s-data',
  education: {
    degree: 'B.E., Computer Science and Engineering',
    institution: 'Sri Sairam Engineering College',
    period: 'Oct 2020 – Apr 2024',
    cgpa: '8.61',
  },
};

export interface SnapshotMetric {
  id: string;
  target: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
  context: string;
}

export const SNAPSHOT_METRICS: SnapshotMetric[] = [
  {
    id: 'experience',
    target: 2.5,
    decimals: 1,
    suffix: ' Yrs',
    label: 'AI & Infrastructure Experience',
    context: 'Progressed from Cloud & DevSecOps into production Agentic AI systems at Sify Technologies',
  },
  {
    id: 'eval-effort',
    target: 70,
    suffix: '%',
    label: 'Less Manual Evaluation Effort',
    context: 'LangGraph supervisor-agent HITL platform routing questions to specialized scoring pipelines',
  },
  {
    id: 'release-cycles',
    target: 78,
    suffix: '%',
    label: 'Faster Release Cycles',
    context: 'Reduced software delivery cycle from 2 weeks to 3 days via Jenkins, GitHub Actions & Gitea',
  },
  {
    id: 'soc-planes',
    target: 5,
    suffix: '-Plane',
    label: 'Autonomous SOC Architecture',
    context: 'AI-Driven Incident Intelligence POC integrating 6+ security & infrastructure telemetry sources',
  },
  {
    id: 'signal-reduction',
    target: 99,
    suffix: '%+',
    label: 'Target Alert-Volume Reduction',
    context: 'Campaign clustering up to 2,000 signals with vLLM Outlines (targeting 500K events/sec)',
  },
  {
    id: 'certifications',
    target: 4,
    suffix: 'x',
    label: 'Cloud, AI & DevOps Certifications',
    context:
      'AWS Developer Associate, OCI AI Foundation Associate, OCI DevOps Pro & Multicloud Architect Pro',
  },
];

export interface HeroNodeSpec {
  id: string;
  label: string;
  sublabel: string;
  layer: string;
  summary: string;
  stack: string[];
  outcome: string;
}

export const HERO_PIPELINE_NODES: HeroNodeSpec[] = [
  {
    id: 'agents',
    label: 'Agentic AI',
    sublabel: 'LangGraph & MCP',
    layer: 'Multi-Agent Orchestration',
    summary:
      'Stateful multi-agent workflows using LangGraph with conditional branching, supervisor-agent routing, and Model Context Protocol (MCP) tool-calling servers across enterprise APIs.',
    stack: ['LangGraph', 'LangChain', 'MCP', 'Tool Calling', 'OpenAI SDK'],
    outcome: 'Cut manual LLM evaluation effort by 70% and automated multi-vendor firewall audits.',
  },
  {
    id: 'llmops',
    label: 'LLMOps & RAG',
    sublabel: 'vLLM, LiteLLM & Bedrock',
    layer: 'Inference & Retrieval',
    summary:
      'Centralized LiteLLM inference gateways over Amazon Bedrock and Azure OpenAI with multi-LLM routing, vLLM Outlines grammar-constrained JSON, PII redaction, and OpenSearch/FAISS RAG.',
    stack: ['vLLM', 'LiteLLM', 'Amazon Bedrock', 'OpenSearch', 'FAISS', 'ChromaDB'],
    outcome: 'Sub-1.5s target investigation latency with token optimization & PII guardrails.',
  },
  {
    id: 'streaming',
    label: 'Stream & Data',
    sublabel: 'Kafka, Flink & ClickHouse',
    layer: 'Real-Time Telemetry Plane',
    summary:
      'High-throughput Apache Kafka & Flink streaming engines combining 5 detection techniques across 5s/30m/24h windows, backed by ClickHouse temporal analytics and Redis entity context.',
    stack: ['Apache Kafka', 'Apache Flink', 'ClickHouse', 'Redis', 'Amazon MSK'],
    outcome: 'Targeting 500K events/sec, sub-15 ms UEBA scoring & sub-35 ms ClickHouse queries.',
  },
  {
    id: 'cloud',
    label: 'AWS & K8s',
    sublabel: 'EKS, AKS & Terraform',
    layer: 'Cloud & Orchestration',
    summary:
      'Multi-tenant AWS platforms (EKS, Lambda, RDS, S3, PrivateLink) and multi-cloud Kubernetes (EKS, AKS, k3s, Rancher, ArgoCD) provisioned via reusable modular Terraform workspaces.',
    stack: ['AWS EKS', 'Terraform', 'Docker', 'Helm', 'ArgoCD', 'Rancher'],
    outcome: 'Isolated dev, staging, and production environments with repeatable tenant onboarding.',
  },
  {
    id: 'security',
    label: 'Zero-Trust',
    sublabel: 'OPA, Istio & IRSA',
    layer: 'Policy & Governance',
    summary:
      'OPA authorization frameworks with 4 blast-radius tiers (Tier 0–3) and HITL approval gates, paired with Istio strict mTLS, IRSA permissions boundaries, Kyverno, AWS WAF, and PrivateLink.',
    stack: ['OPA', 'Istio mTLS', 'IRSA', 'Kyverno', 'AWS WAF', 'FortiGate'],
    outcome: 'Low-latency zero-trust AI execution with human-in-the-loop governance.',
  },
  {
    id: 'cicd',
    label: 'DevSecOps',
    sublabel: 'Jenkins, Trivy & SAST',
    layer: 'Secure Delivery Pipelines',
    summary:
      'Declarative CI/CD pipelines across Jenkins, GitHub Actions, GitLab CI, Harness, and Gitea embedding SonarQube SAST, Trivy container scans, and OWASP Dependency-Check gates.',
    stack: ['Jenkins', 'GitHub Actions', 'SonarQube', 'Trivy', 'OWASP', 'Harness'],
    outcome: '78% faster release cycles (2 weeks to 3 days) blocking vulnerable builds.',
  },
  {
    id: 'observability',
    label: 'Observability',
    sublabel: 'OTel, Prometheus & Grafana',
    layer: 'AI & Infra Telemetry',
    summary:
      'End-to-end AI observability, LLM-as-a-Judge model evaluation, and infrastructure telemetry across OpenTelemetry, Prometheus, Grafana, AWS CloudWatch, ELK, and Loki with SLI/SLO tracking.',
    stack: ['OpenTelemetry', 'Prometheus', 'Grafana', 'CloudWatch', 'Loki', 'ELK'],
    outcome: 'Full-stack tracing across agentic reasoning, inference costs, and cluster health.',
  },
];

export interface SkillItem {
  name: string;
  iconKey?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  summary: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'agentic',
    title: 'Generative AI & Agentic Systems',
    summary: 'Multi-agent orchestration, stateful reasoning graphs, MCP tool servers, RAG, and AI guardrails.',
    skills: [
      { name: 'LangGraph', iconKey: 'langchain' },
      { name: 'LangChain', iconKey: 'langchain' },
      { name: 'MCP (Model Context Protocol)', iconKey: 'bedrock' },
      { name: 'Multi-Agent Orchestration' },
      { name: 'RAG Pipelines' },
      { name: 'Tool Calling' },
      { name: 'OpenAI SDK' },
      { name: 'Hugging Face Transformers' },
      { name: 'Prompt Engineering' },
      { name: 'AI Guardrails' },
    ],
  },
  {
    id: 'llmops',
    title: 'LLMs & LLMOps',
    summary: 'Inference gateways, multi-LLM routing, grammar-constrained outputs, evaluation, and token optimization.',
    skills: [
      { name: 'Amazon Bedrock', iconKey: 'bedrock' },
      { name: 'Azure OpenAI', iconKey: 'azure' },
      { name: 'Claude & Groq' },
      { name: 'vLLM & Outlines' },
      { name: 'LiteLLM Gateway' },
      { name: 'Multi-LLM Routing' },
      { name: 'LLM-as-a-Judge & Eval' },
      { name: 'AI Observability & Tracing' },
      { name: 'Token & Cost Optimization' },
    ],
  },
  {
    id: 'vector-data',
    title: 'Vector Search & Data Engineering',
    summary: 'Semantic/hybrid vector retrieval, high-speed analytical stores, caching, and data pipelines.',
    skills: [
      { name: 'Amazon OpenSearch', iconKey: 'opensearch' },
      { name: 'FAISS' },
      { name: 'ChromaDB' },
      { name: 'Hybrid & Semantic Search' },
      { name: 'ClickHouse', iconKey: 'postgres' },
      { name: 'Redis' },
      { name: 'PostgreSQL & MySQL', iconKey: 'postgres' },
      { name: 'Pandas & NumPy' },
    ],
  },
  {
    id: 'backend-ml',
    title: 'Backend, Full Stack & Deep Learning',
    summary: 'Async Python APIs, full-stack human-in-the-loop review platforms, and ML frameworks.',
    skills: [
      { name: 'Python & Asyncio', iconKey: 'python' },
      { name: 'FastAPI & Pydantic', iconKey: 'fastapi' },
      { name: 'Flask & REST APIs' },
      { name: 'React.js' },
      { name: 'Node.js & Express.js' },
      { name: 'JWT Auth & RBAC' },
      { name: 'PyTorch & TensorFlow' },
      { name: 'Deep Learning & NLP' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Platforms & Streaming',
    summary: 'Multi-tenant AWS and Azure infrastructure paired with high-throughput Kafka and Flink streaming.',
    skills: [
      { name: 'AWS (EKS, EC2, S3, Lambda, RDS)', iconKey: 'aws' },
      { name: 'VPC, PrivateLink & AWS WAF', iconKey: 'aws' },
      { name: 'Amazon MSK & Secrets Manager', iconKey: 'aws' },
      { name: 'Azure (AKS)', iconKey: 'azure' },
      { name: 'Apache Kafka', iconKey: 'kafka' },
      { name: 'Apache Flink' },
      { name: 'Event-Driven Architecture' },
      { name: 'Linux (Ubuntu, Rocky) & NGINX', iconKey: 'linux' },
    ],
  },
  {
    id: 'containers-iac',
    title: 'Kubernetes, IaC & GitOps',
    summary: 'Modular Terraform provisioning, multi-cluster Kubernetes orchestration, and service mesh.',
    skills: [
      { name: 'Kubernetes (EKS, AKS, k3s)', iconKey: 'kubernetes' },
      { name: 'Docker', iconKey: 'docker' },
      { name: 'Helm & Rancher', iconKey: 'helm' },
      { name: 'ArgoCD (GitOps)', iconKey: 'argocd' },
      { name: 'Istio Service Mesh', iconKey: 'istio' },
      { name: 'Kyverno', iconKey: 'kyverno' },
      { name: 'Terraform (Modular/Workspaces)', iconKey: 'terraform' },
      { name: 'Ansible & HCL', iconKey: 'ansible' },
    ],
  },
  {
    id: 'devsecops',
    title: 'DevSecOps, Security & Policy',
    summary: 'OPA policy-as-code, zero-trust networking, shift-left vulnerability gates, and firewall automation.',
    skills: [
      { name: 'OPA (Open Policy Agent)', iconKey: 'kyverno' },
      { name: 'IAM, IRSA & Permissions Boundaries' },
      { name: 'TLS/mTLS & Zero-Trust' },
      { name: 'FortiGate & Check Point' },
      { name: 'Jenkins & GitHub Actions', iconKey: 'jenkins' },
      { name: 'GitLab CI & Harness', iconKey: 'gitlab' },
      { name: 'SonarQube (SAST)', iconKey: 'sonarqube' },
      { name: 'Trivy & OWASP Dependency-Check', iconKey: 'trivy' },
    ],
  },
  {
    id: 'observability',
    title: 'Monitoring & Observability',
    summary: 'OpenTelemetry tracing, metrics dashboards, centralized logging, SLI/SLO tracking, and RCA.',
    skills: [
      { name: 'Prometheus', iconKey: 'prometheus' },
      { name: 'Grafana', iconKey: 'grafana' },
      { name: 'OpenTelemetry', iconKey: 'otel' },
      { name: 'AWS CloudWatch', iconKey: 'aws' },
      { name: 'ELK Stack' },
      { name: 'Grafana Loki' },
      { name: 'SLI/SLO & RCA' },
    ],
  },
];

export interface ExperiencePillar {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export const EXPERIENCE_INITIATIVES: ExperiencePillar[] = [
  {
    id: 'agentic-soc',
    title: 'AI-Driven Incident Intelligence System',
    subtitle: 'Agentic SOC Automation - POC',
    summary:
      '5-plane autonomous SOC analytics platform combining Kafka/Flink streaming, dual-model LangGraph AI investigation, and OPA 4-tier remediation.',
    bullets: [
      'Architected a 5-plane autonomous SOC analytics platform integrating telemetry from 6+ security and infrastructure sources across ingestion, detection, AI investigation, analyst assistance, and automated response orchestration.',
      'Designed a Kafka-based streaming pipeline and Flink detection engine combining 5 detection techniques—rule-based detection, CEP, UEBA, behavioral analytics, and threat intelligence correlation—across 5-second, 30-minute, and 24-hour windows.',
      'Proposed a dual-model AI investigation architecture using 8B and 70B parameter LLMs, LangGraph agent orchestration, RAG-based SOP retrieval, Redis entity context, and ClickHouse temporal analytics targeting sub-1.5-second investigation latency.',
      'Designed an OPA-based authorization framework with 4 blast-radius tiers (Tier 0–3), integrating remediation workflows across Fortinet, CrowdStrike, and Active Directory with human-in-the-loop (HITL) approval gates.',
      'Designed campaign-based alert clustering to consolidate up to 2,000 correlated security signals into a single LLM investigation using vLLM Outlines for grammar-constrained JSON, targeting 500K events/sec, 99%+ event-volume reduction, sub-15 ms UEBA scoring, sub-35 ms ClickHouse queries, and sub-3-second end-to-end remediation.',
    ],
    technologies: [
      'Python',
      'LangGraph',
      'LangChain',
      'Apache Kafka',
      'Apache Flink',
      'vLLM Outlines',
      'ClickHouse',
      'Redis',
      'OPA',
      'FastAPI',
      'Fortinet',
      'CrowdStrike',
    ],
  },
  {
    id: 'agentic-firewall',
    title: 'Agentic AI Firewall Audit System',
    subtitle: 'Multi-Vendor Security Automation',
    summary:
      'MCP and LangGraph agentic application executing live policy audits and compliance reporting across FortiGate and Check Point firewalls.',
    bullets: [
      'Built a fully agentic firewall audit application using Model Context Protocol (MCP) and LangGraph for AI-driven security policy analysis across FortiGate and Check Point firewalls.',
      'Implemented tool calling to dynamically invoke FortiGate REST API and Check Point Management API endpoints, extracting firewall rules, policy configurations, and compliance posture in real time.',
      'Designed stateful audit workflows using LangGraph graphs with conditional branching, enabling the agent to reason across multi-vendor environments and generate consolidated compliance reports.',
      'Leveraged MCP server architecture to expose firewall audit tools as structured, reusable AI-callable functions, improving modularity and LLM-driven orchestration.',
    ],
    technologies: [
      'Python',
      'MCP',
      'LangGraph',
      'Claude',
      'OpenAI',
      'Tool Calling',
      'FortiGate REST API',
      'Check Point Management API',
    ],
  },
  {
    id: 'hitl-eval',
    title: 'Human-in-the-Loop AI Evaluation Platform',
    subtitle: 'LLM Evaluation & Review Automation',
    summary:
      'LangGraph supervisor-agent evaluation platform and full-stack review workflow cutting manual evaluation effort by 70%.',
    bullets: [
      'Built a Human-in-the-Loop LLM evaluation platform using LangGraph and a supervisor-agent architecture to classify questions and dynamically route them to specialized scoring pipelines, reducing manual evaluation effort by 70%.',
      'Developed the full-stack review system using FastAPI, React.js, Node.js, Express.js, MySQL, JWT, and RBAC, supporting AI-assisted evaluation, human review, and multi-stage approval workflows.',
    ],
    technologies: ['LangGraph', 'FastAPI', 'LLMs', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'RBAC'],
  },
  {
    id: 'aws-multitenant',
    title: 'AWS Multi-Tenant Cloud Platform',
    subtitle: 'Cloud-Native Infrastructure & Security',
    summary:
      'Terraform-provisioned multi-tenant AWS & EKS foundation hosting LiteLLM gateways, Amazon Bedrock inference, and OpenSearch RAG pipelines.',
    bullets: [
      'Architected and provisioned a secure, multi-tenant AWS platform using Amazon EKS, Lambda, RDS, S3, and IAM through reusable, modular Terraform configurations across isolated dev, staging, and production environments.',
      'Implemented cloud-native identity and workload security using IRSA, IAM permissions boundaries, least-privilege access controls, AWS WAF, Istio-based mutual TLS, certificate automation, and default-deny egress policies.',
      'Integrated Amazon Bedrock through a centralized LiteLLM inference gateway with model routing, request rate limiting, and PII-redaction guardrails; engineered RAG pipelines using Bedrock embeddings and Amazon OpenSearch vector search.',
    ],
    technologies: [
      'AWS',
      'EKS',
      'Terraform',
      'Lambda',
      'RDS',
      'S3',
      'VPC & PrivateLink',
      'Amazon Bedrock',
      'OpenSearch',
      'Istio mTLS',
      'LiteLLM',
    ],
  },
  {
    id: 'cicd-devsecops',
    title: 'CI/CD Pipeline & DevSecOps Automation',
    subtitle: 'Secure Software Delivery',
    summary:
      'Declarative Jenkins, GitHub Actions, and Gitea pipelines with shift-left security gates cutting release cycles by 78%.',
    bullets: [
      'Architected and optimized declarative CI/CD pipelines using Jenkins, integrating GitHub Actions and Gitea-based source control to standardize automated build, validation, and deployment workflows, reducing release cycles by 78% (2 weeks to 3 days).',
      'Embedded DevSecOps security gates across three Jenkins pipelines in two client environments, integrating SonarQube static analysis, Trivy container vulnerability scanning, and OWASP Dependency-Check to prevent vulnerable builds from advancing to production.',
    ],
    technologies: [
      'Jenkins',
      'GitHub Actions',
      'Gitea',
      'Terraform',
      'Ansible',
      'Docker',
      'Kubernetes',
      'Helm',
      'SonarQube',
      'Trivy',
      'OWASP Dependency-Check',
    ],
  },
];

export interface FeaturedProject {
  id: string;
  title: string;
  context: string;
  summary: string;
  technologies: string[];
  problemStatement: string;
  architectureOverview: string;
  infrastructureDesign: string[];
  securityImplementation: string[];
  cicdWorkflow: string[];
  challengesAndSolutions: { challenge: string; solution: string }[];
  outcomes: string[];
  diagramType: 'agentic-soc' | 'mcp-firewall' | 'hitl-eval' | 'aws-rag';
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'agentic-soc-platform',
    title: 'AI-Driven Incident Intelligence System (Agentic SOC)',
    context: 'Agentic AI & Streaming Infrastructure · Sify Technologies',
    summary:
      '5-plane autonomous SOC analytics architecture unifying Kafka/Flink streaming detection, dual-model 8B/70B LangGraph investigation, vLLM Outlines JSON generation, and OPA 4-tier remediation.',
    technologies: [
      'Python',
      'LangGraph',
      'Apache Kafka',
      'Apache Flink',
      'vLLM Outlines',
      'ClickHouse',
      'Redis',
      'OPA',
      'FastAPI',
    ],
    problemStatement:
      'Security operations teams face massive alert fatigue across fragmented security and infrastructure telemetry sources, requiring sub-second correlation and strictly governed automated remediation.',
    architectureOverview:
      'Ingests telemetry from 6+ sources into Apache Kafka and an Apache Flink detection engine running 5 detection techniques across 5s, 30m, and 24h windows. Correlated signals cluster into campaigns fed to 8B/70B LLMs via vLLM Outlines and LangGraph with RAG SOP retrieval, Redis entity context, ClickHouse temporal analytics, and OPA 4-tier HITL remediation.',
    infrastructureDesign: [
      '5-plane architecture spanning ingestion, streaming detection, AI investigation, analyst assistance, and response orchestration.',
      'Kafka + Flink pipeline performing rule-based, CEP, UEBA, behavioral analytics, and threat intel correlation.',
      'Low-latency context layer combining Redis entity state with ClickHouse temporal analytics.',
    ],
    securityImplementation: [
      'OPA authorization framework enforcing 4 blast-radius tiers (Tier 0–3) across Fortinet, CrowdStrike, and Active Directory.',
      'Mandatory human-in-the-loop (HITL) approval gates for high-risk remediation actions and analyst oversight.',
      'Grammar-constrained JSON outputs via vLLM Outlines eliminating malformed agent tool payloads.',
    ],
    cicdWorkflow: [
      'Modular FastAPI microservices packaged for fault-tolerant distributed execution with graceful degradation.',
      'Campaign-based alert clustering consolidating up to 2,000 correlated signals into a single LLM investigation.',
    ],
    challengesAndSolutions: [
      {
        challenge: 'High false-positive volume and slow manual triage across thousands of correlated alerts.',
        solution:
          'Designed campaign-based alert clustering consolidating up to 2,000 signals into one grammar-constrained vLLM Outlines investigation.',
      },
      {
        challenge: 'Executing automated SOC remediation safely across firewalls and identity providers.',
        solution:
          'Implemented an OPA policy engine with 4 blast-radius tiers and HITL approval gates before executing Fortinet, CrowdStrike, or AD actions.',
      },
    ],
    outcomes: [
      'Architected 5-plane SOC platform integrating 6+ telemetry sources and 5 detection techniques across 5s/30m/24h windows.',
      'Designed targets of 500K events/sec, 99%+ event-volume reduction, sub-15 ms UEBA scoring, sub-35 ms ClickHouse queries, sub-1.5s AI investigation, and sub-3s remediation.',
    ],
    diagramType: 'agentic-soc',
  },
  {
    id: 'mcp-firewall-audit',
    title: 'Agentic AI Firewall Audit System',
    context: 'MCP & Multi-Vendor Security Automation · Sify Technologies',
    summary:
      'Model Context Protocol (MCP) and LangGraph agentic application performing live multi-vendor firewall rule extraction, policy reasoning, and compliance reporting across FortiGate and Check Point.',
    technologies: [
      'Python',
      'MCP',
      'LangGraph',
      'Claude',
      'OpenAI',
      'Tool Calling',
      'FortiGate REST API',
      'Check Point API',
    ],
    problemStatement:
      'Auditing heterogeneous enterprise firewall estates (FortiGate and Check Point) manually across APIs and rule bases is slow, error-prone, and difficult to standardize into unified compliance reports.',
    architectureOverview:
      'A stateful LangGraph agent with conditional branching orchestrates multi-step policy reasoning over an MCP server that exposes FortiGate REST API and Check Point Management API integrations as structured, reusable AI-callable tools.',
    infrastructureDesign: [
      'Dedicated MCP server exposing vendor firewall inspection tools as standardized schemas.',
      'Stateful LangGraph workflow graph supporting conditional multi-vendor audit branching.',
    ],
    securityImplementation: [
      'Read-scoped API tool calling against FortiGate REST API and Check Point Management API.',
      'Real-time extraction of firewall rules, policy configurations, and compliance posture without manual credential sprawl.',
    ],
    cicdWorkflow: [
      'Modular Python + MCP tool registry enabling independent tool updates and multi-LLM compatibility (Claude & OpenAI).',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Inconsistent schemas and rule structures across FortiGate and Check Point firewalls.',
        solution:
          'Abstracted vendor APIs behind structured MCP server tools so LangGraph conditional graphs normalize and reason across both platforms.',
      },
    ],
    outcomes: [
      'Delivered fully agentic real-time compliance posture extraction across FortiGate and Check Point environments.',
      'Improved orchestration modularity by decoupling firewall API connectors into reusable MCP server functions.',
    ],
    diagramType: 'mcp-firewall',
  },
  {
    id: 'hitl-eval-platform',
    title: 'Human-in-the-Loop AI Evaluation Platform',
    context: 'LLM Evaluation & Full-Stack AI Engineering · Sify Technologies',
    summary:
      'Supervisor-agent LangGraph evaluation engine paired with a full-stack React, Node.js, Express, FastAPI, and MySQL review workflow reducing manual evaluation effort by 70%.',
    technologies: [
      'LangGraph',
      'FastAPI',
      'LLMs',
      'React.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'JWT',
      'RBAC',
    ],
    problemStatement:
      'Evaluating diverse LLM responses manually across domain categories created an engineering bottleneck and lacked structured auditability or multi-stage human sign-off.',
    architectureOverview:
      'A LangGraph supervisor-agent classifies incoming evaluation questions and routes them to specialized LLM scoring pipelines via FastAPI, backed by a React.js + Node.js/Express.js + MySQL review console secured with JWT and RBAC.',
    infrastructureDesign: [
      'Hybrid AI + full-stack architecture separating LangGraph/FastAPI scoring services from the Express/MySQL workflow backend.',
      'Multi-stage approval state machine persisting AI scores alongside human reviewer overrides.',
    ],
    securityImplementation: [
      'JWT authentication and Role-Based Access Control (RBAC) governing reviewer and approver permissions.',
      'Structured audit trail tracking AI-generated evaluations and human-in-the-loop sign-offs.',
    ],
    cicdWorkflow: [
      'Modular scoring pipelines allowing independent prompt/judge iteration per question category.',
    ],
    challengesAndSolutions: [
      {
        challenge: 'One-size-fits-all LLM judges produced inconsistent scoring across heterogeneous question types.',
        solution:
          'Implemented a LangGraph supervisor-agent that classifies inputs first and routes them to specialized domain scoring pipelines.',
      },
    ],
    outcomes: [
      'Reduced manual LLM evaluation effort by 70% across review workflows.',
      'Enabled seamless AI-assisted evaluation paired with RBAC-governed human review and multi-stage approval.',
    ],
    diagramType: 'hitl-eval',
  },
  {
    id: 'aws-multitenant-rag',
    title: 'AWS Multi-Tenant Cloud & RAG Platform',
    context: 'Cloud-Native Infrastructure, DevSecOps & GenAI · Sify Technologies',
    summary:
      'Modular Terraform multi-tenant AWS/EKS platform featuring Istio mTLS, PrivateLink, LiteLLM Bedrock gateway, OpenSearch RAG, and 78% faster DevSecOps CI/CD pipelines.',
    technologies: [
      'AWS',
      'EKS',
      'Terraform',
      'Amazon Bedrock',
      'OpenSearch',
      'LiteLLM',
      'Istio',
      'Jenkins',
      'Trivy',
    ],
    problemStatement:
      'Enterprise teams needed isolated multi-tenant AWS infrastructure for Bedrock RAG workloads alongside fast, vulnerability-gated CI/CD pipelines across dev, staging, and production.',
    architectureOverview:
      'Modular Terraform provisions EKS, Lambda, RDS, S3, and VPC PrivateLink with IRSA, AWS WAF, Istio mTLS, and default-deny egress. Centralized LiteLLM routes Bedrock inference and OpenSearch RAG queries with PII redaction, while Jenkins + GitHub Actions + SonarQube/Trivy/OWASP pipelines automate secure delivery.',
    infrastructureDesign: [
      'Reusable modular Terraform configurations establishing isolated dev, staging, and production workspaces.',
      'Amazon Bedrock + OpenSearch RAG pipelines fronted by a centralized LiteLLM inference gateway.',
    ],
    securityImplementation: [
      'IRSA, IAM permissions boundaries, AWS WAF, Istio mutual TLS, certificate automation, and default-deny egress.',
      'LiteLLM request rate limiting and PII-redaction guardrails plus SonarQube, Trivy, and OWASP CI/CD gates.',
    ],
    cicdWorkflow: [
      'Declarative Jenkins pipelines integrated with GitHub Actions and Gitea SCM using Docker and Helm.',
      'Embedded SonarQube SAST, Trivy container scanning, and OWASP Dependency-Check across 3 pipelines in 2 client environments.',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Balancing strict multi-tenant security isolation with rapid release velocity.',
        solution:
          'Standardized Terraform workspaces and declarative Jenkins/GitHub Actions pipelines with automated SAST/SCA/container gates.',
      },
    ],
    outcomes: [
      'Reduced release cycles by 78% (from 2 weeks to 3 days) across standardized build and deployment workflows.',
      'Prevented vulnerable builds from reaching production across 3 client Jenkins pipelines.',
    ],
    diagramType: 'aws-rag',
  },
];

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  brand: 'aws' | 'oci';
  focus: string[];
  description: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'aws-dev-associate',
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services (AWS)',
    brand: 'aws',
    focus: ['Serverless & Lambda', 'IAM & IRSA Security', 'CI/CD Automation', 'CloudWatch & Tracing'],
    description:
      'Validates proficiency in developing, deploying, securing, and debugging cloud-native applications on AWS using core services, least-privilege IAM, and automated delivery pipelines.',
  },
  {
    id: 'oci-ai-foundation',
    name: 'OCI AI Foundation Associate',
    issuer: 'Oracle Cloud Infrastructure (OCI)',
    brand: 'oci',
    focus: ['Generative AI & LLMs', 'Deep Learning & NLP', 'AI Services', 'Responsible AI Foundations'],
    description:
      'Validates foundational knowledge of artificial intelligence, machine learning, deep learning, and generative AI concepts alongside Oracle Cloud Infrastructure AI services.',
  },
  {
    id: 'oci-devops-pro',
    name: 'OCI Certified DevOps Professional',
    issuer: 'Oracle Cloud Infrastructure (OCI)',
    brand: 'oci',
    focus: ['CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code', 'DevSecOps & Observability'],
    description:
      'Validates expertise in automating cloud infrastructure provisioning, Kubernetes microservice delivery, DevSecOps security gates, and production observability.',
  },
  {
    id: 'oci-multicloud-arch',
    name: 'OCI Certified Multicloud Architect Professional',
    issuer: 'Oracle Cloud Infrastructure (OCI)',
    brand: 'oci',
    focus: ['Multicloud Architecture', 'Cross-Cloud Networking', 'Identity & Governance', 'Enterprise Security'],
    description:
      'Validates architectural expertise in designing resilient, interconnected multicloud topologies spanning identity federation, private connectivity, and enterprise workload placement.',
  },
];
