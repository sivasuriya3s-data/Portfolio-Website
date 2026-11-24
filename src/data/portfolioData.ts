export const RESUME_URL = '/assets/aistudio/SivaSuriya_Resume_89e095ea.pdf';

export const CANDIDATE = {
  name: 'Siva Suriya S',
  shortName: 'Siva Suriya',
  title: 'DevOps Engineer | Platform & AI Infrastructure | AWS | Kubernetes | DevSecOps',
  roleLine: 'DevOps Engineer | Platform & AI Infrastructure',
  location: 'Chennai, Tamil Nadu, India',
  shortLocation: 'Chennai, India',
  experienceSummary: '2+ Years of Experience',
  currentOrg: 'Sify Technologies Limited',
  currentRole: 'Systems Engineer (DevOps/Cloud)',
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
  prefix?: string;
  suffix: string;
  label: string;
  context: string;
}

export const SNAPSHOT_METRICS: SnapshotMetric[] = [
  {
    id: 'experience',
    target: 2,
    suffix: '+',
    label: 'Years Professional Experience',
    context: 'Cloud, DevOps, Kubernetes & AI platform engineering',
  },
  {
    id: 'release-cycles',
    target: 78,
    suffix: '%',
    label: 'Faster Release Cycles',
    context: 'Reduced delivery cycle from 2 weeks to 3 days via Jenkins & GitHub Actions',
  },
  {
    id: 'iac-provisioning',
    target: 70,
    prefix: '~',
    suffix: '%',
    label: 'Faster Infrastructure Provisioning',
    context: 'Modular Terraform & Ansible across 4+ isolated environments',
  },
  {
    id: 'k8s-errors',
    target: 40,
    suffix: '%',
    label: 'Fewer Kubernetes Deployment Errors',
    context: 'Standardized EKS, k3s & Rancher manifests with RBAC enforcement',
  },
  {
    id: 'incident-detection',
    target: 50,
    prefix: '~',
    suffix: '%',
    label: 'Faster Incident Detection',
    context: 'Prometheus & Grafana alerting across 10+ monitored services',
  },
  {
    id: 'kyverno-policies',
    target: 15,
    suffix: '+',
    label: 'Kyverno Policies Implemented',
    context: 'Policy-as-code admission controls enforced across EKS & AKS clusters',
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
    id: 'aws',
    label: 'AWS',
    sublabel: 'Multi-Tenant Foundation',
    layer: 'Cloud Infrastructure',
    summary:
      'Segmented VPC architecture with public/private subnets, PrivateLink VPC endpoints, NAT egress controls, AWS WAF, RDS, S3, Lambda, and least-privilege IAM.',
    stack: ['EKS', 'PrivateLink', 'VPC', 'RDS', 'S3', 'IAM', 'AWS WAF'],
    outcome: 'Audit-ready multi-tenant isolation across dev, staging, and production.',
  },
  {
    id: 'kubernetes',
    label: 'Kubernetes',
    sublabel: 'Container Orchestration',
    layer: 'Orchestration & Service Mesh',
    summary:
      'Multi-cluster operations across EKS, AKS, and k3s via Rancher, enforcing namespace-per-tenant Network Policies, Istio strict mTLS, RBAC, and Kyverno admission control.',
    stack: ['EKS', 'AKS', 'Rancher', 'Helm', 'ArgoCD', 'Istio', 'Kyverno'],
    outcome: '40% fewer deployment errors and 15+ enforced admission policies.',
  },
  {
    id: 'terraform',
    label: 'Terraform',
    sublabel: 'Modular IaC',
    layer: 'Infrastructure as Code',
    summary:
      'Multi-workspace modular Terraform and Ansible playbooks provisioning repeatable cloud foundations and eliminating configuration drift across environments.',
    stack: ['Terraform', 'HCL', 'Ansible', 'Python', 'FastAPI', 'Bash'],
    outcome: '~70% faster environment provisioning across 4+ environments.',
  },
  {
    id: 'cicd',
    label: 'CI/CD',
    sublabel: 'Automated Delivery',
    layer: 'Pipeline Automation',
    summary:
      'Declarative multi-stage pipelines in Jenkins, Harness, GitLab CI, and GitHub Actions running automated Jest/Playwright tests and health-check Helm rollbacks.',
    stack: ['Jenkins', 'Harness', 'GitLab CI', 'GitHub Actions', 'Gitea', 'Docker'],
    outcome: '78% faster release cycles (2 weeks reduced to 3 days).',
  },
  {
    id: 'security',
    label: 'Security',
    sublabel: 'Shift-Left DevSecOps',
    layer: 'Security & Governance',
    summary:
      'Three-layer scanning with SonarQube SAST, OWASP Dependency-Check SCA, and Trivy container scans plus IRSA, Permissions Boundaries, External Secrets Operator, and ACM TLS.',
    stack: ['SonarQube', 'Trivy', 'OWASP', 'IRSA', 'Secrets Manager', 'cert-manager'],
    outcome: '100% of vulnerable builds blocked prior to gated production deploys.',
  },
  {
    id: 'monitoring',
    label: 'Monitoring',
    sublabel: 'Full-Stack Observability',
    layer: 'Telemetry & Reliability',
    summary:
      'OpenTelemetry instrumentation feeding CloudWatch, Prometheus, Grafana, ELK, and Loki with SLO-based runbooks, LLM cost alerts, and RCA workflows.',
    stack: ['Prometheus', 'Grafana', 'OpenTelemetry', 'CloudWatch', 'Loki', 'ELK'],
    outcome: '~50% faster incident detection and ~40% faster AWS mean time to diagnose.',
  },
  {
    id: 'ai',
    label: 'AI Infra',
    sublabel: 'GenAI, RAG & Agents',
    layer: 'AI Platform Engineering',
    summary:
      'LiteLLM gateway fronting Amazon Bedrock with rate limiting and PII-redaction guardrails, RAG pipelines on Amazon OpenSearch, LangGraph agents with MCP, and Kafka MSK event streaming.',
    stack: ['Amazon Bedrock', 'LiteLLM', 'OpenSearch', 'LangGraph', 'MCP', 'Kafka MSK'],
    outcome: 'Secure, cost-tracked multi-tenant GenAI and agentic execution.',
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
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    summary: 'Multi-cloud architecture, compute, storage, networking, and managed AI & messaging services.',
    skills: [
      { name: 'AWS', iconKey: 'aws' },
      { name: 'Azure', iconKey: 'azure' },
      { name: 'GCP', iconKey: 'gcp' },
      { name: 'EC2' },
      { name: 'EKS', iconKey: 'kubernetes' },
      { name: 'ECS' },
      { name: 'S3' },
      { name: 'Lambda' },
      { name: 'RDS' },
      { name: 'IAM' },
      { name: 'VPC' },
      { name: 'Bedrock', iconKey: 'bedrock' },
      { name: 'OpenSearch', iconKey: 'opensearch' },
      { name: 'Amazon MSK (Kafka)', iconKey: 'kafka' },
    ],
  },
  {
    id: 'containers',
    title: 'Containers & Orchestration',
    summary: 'Production Kubernetes operations, GitOps delivery, admission control, and multi-tenant isolation.',
    skills: [
      { name: 'Docker', iconKey: 'docker' },
      { name: 'Kubernetes', iconKey: 'kubernetes' },
      { name: 'EKS', iconKey: 'aws' },
      { name: 'AKS', iconKey: 'azure' },
      { name: 'k3s' },
      { name: 'Helm', iconKey: 'helm' },
      { name: 'Rancher', iconKey: 'rancher' },
      { name: 'ArgoCD', iconKey: 'argocd' },
      { name: 'Kyverno', iconKey: 'kyverno' },
    ],
  },
  {
    id: 'cicd',
    title: 'DevOps & CI/CD',
    summary: 'Declarative multi-stage delivery pipelines, automated quality gates, and artifact management.',
    skills: [
      { name: 'Jenkins', iconKey: 'jenkins' },
      { name: 'GitHub Actions', iconKey: 'github' },
      { name: 'GitLab CI', iconKey: 'gitlab' },
      { name: 'Gitea Actions' },
      { name: 'Harness', iconKey: 'harness' },
      { name: 'AWS CodePipeline', iconKey: 'aws' },
      { name: 'Nexus' },
    ],
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    summary: 'Modular, multi-workspace cloud provisioning, configuration management, and automation scripting.',
    skills: [
      { name: 'Terraform', iconKey: 'terraform' },
      { name: 'HCL' },
      { name: 'Ansible', iconKey: 'ansible' },
      { name: 'Bash', iconKey: 'bash' },
      { name: 'Python', iconKey: 'python' },
      { name: 'PowerShell' },
      { name: 'FastAPI', iconKey: 'fastapi' },
    ],
  },
  {
    id: 'devsecops',
    title: 'DevSecOps & Security',
    summary: 'Shift-left SAST/SCA/container scanning, least-privilege IAM, secrets management, and policy guardrails.',
    skills: [
      { name: 'SonarQube', iconKey: 'sonarqube' },
      { name: 'Trivy', iconKey: 'trivy' },
      { name: 'OWASP Dependency-Check', iconKey: 'owasp' },
      { name: 'IAM & IRSA' },
      { name: 'Permissions Boundaries' },
      { name: 'Secrets Manager' },
      { name: 'External Secrets Operator' },
      { name: 'RBAC' },
      { name: 'Network Policies' },
      { name: 'KubeAudit' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Platform Engineering',
    summary: 'Enterprise LLM gateways, RAG vector architectures, agentic workflows, and usage governance.',
    skills: [
      { name: 'Amazon Bedrock', iconKey: 'bedrock' },
      { name: 'RAG Pipelines' },
      { name: 'OpenSearch', iconKey: 'opensearch' },
      { name: 'LangChain', iconKey: 'langchain' },
      { name: 'LangGraph' },
      { name: 'MCP' },
      { name: 'LiteLLM' },
      { name: 'FastAPI', iconKey: 'fastapi' },
      { name: 'PII Redaction & Rate Limiting' },
    ],
  },
  {
    id: 'observability',
    title: 'Monitoring & Observability',
    summary: 'Metrics, distributed tracing, centralized log aggregation, SLO/SLI runbooks, and incident RCA.',
    skills: [
      { name: 'Prometheus', iconKey: 'prometheus' },
      { name: 'Grafana', iconKey: 'grafana' },
      { name: 'CloudWatch', iconKey: 'aws' },
      { name: 'OpenTelemetry', iconKey: 'otel' },
      { name: 'ELK' },
      { name: 'Loki' },
    ],
  },
  {
    id: 'networking',
    title: 'Networking & Systems',
    summary: 'Segmented VPCs, zero-trust tunnels, service mesh mTLS, DNS resolution, and Linux hardening.',
    skills: [
      { name: 'Linux (Ubuntu, Rocky)', iconKey: 'linux' },
      { name: 'NGINX', iconKey: 'nginx' },
      { name: 'TLS / mTLS' },
      { name: 'Istio', iconKey: 'istio' },
      { name: 'DNS / Route 53 / CoreDNS' },
      { name: 'Firewalls (ufw, iptables)' },
      { name: 'Zero Trust / Cloudflare Tunnel' },
      { name: 'PostgreSQL', iconKey: 'postgres' },
    ],
  },
];

export interface ExperiencePillar {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export const AI_SDLC_HUB_PILLARS: ExperiencePillar[] = [
  {
    id: 'aws-platform',
    title: 'Enterprise AWS Platform Engineering',
    summary: 'Repeatable, audit-ready multi-tenant cloud foundation provisioned strictly through code.',
    bullets: [
      'Architected a multi-tenant AWS platform spanning EKS, Lambda, RDS, S3, and IAM.',
      'Structured modular Terraform with isolated dev, staging, and production workspaces.',
      'Established a repeatable, audit-ready onboarding standard for new platform tenants.',
    ],
    technologies: ['AWS EKS', 'Lambda', 'RDS', 'S3', 'IAM', 'Modular Terraform'],
  },
  {
    id: 'cloud-networking',
    title: 'Cloud Networking & Security',
    summary: 'Zero-trust network segmentation, private AWS service connectivity, and strict edge enforcement.',
    bullets: [
      'Segmented VPC topology with public/private subnets, security groups, and NACLs.',
      'Configured private access to Amazon Bedrock and AWS services via VPC Endpoints (PrivateLink) and namespace-per-tenant Kubernetes Network Policies.',
      'Enforced default-deny NAT egress with allow-listed destinations, Route 53 / CoreDNS / ExternalDNS, ACM & cert-manager TLS, Istio strict mTLS, AWS WAF, and NGINX ingress.',
    ],
    technologies: ['VPC & PrivateLink', 'Istio mTLS', 'AWS WAF', 'NGINX Ingress', 'Network Policies', 'cert-manager'],
  },
  {
    id: 'ai-infra',
    title: 'AI Infrastructure Engineering',
    summary: 'Production Generative AI, RAG vector retrieval, and governed agentic execution.',
    bullets: [
      'Fronted LLM traffic with a LiteLLM gateway over Amazon Bedrock for centralized routing, rate limiting, and PII-redaction guardrails.',
      'Built RAG pipelines using Bedrock embeddings and Amazon OpenSearch as the vector store.',
      'Deployed LangChain and LangGraph AI agents connected via MCP to enterprise data sources, exposed through Python/FastAPI services with scoped IAM, External Secrets Operator, and per-tenant access boundaries.',
    ],
    technologies: ['Amazon Bedrock', 'LiteLLM', 'Amazon OpenSearch', 'LangChain', 'LangGraph', 'MCP', 'FastAPI'],
  },
  {
    id: 'cicd-devsecops',
    title: 'CI/CD & DevSecOps',
    summary: 'Zero-vulnerable-build delivery pipelines with integrated quality and security gates.',
    bullets: [
      'Built multi-stage CI/CD pipelines on Harness and GitLab CI with automated Jest and Playwright test suites.',
      'Enforced SonarQube (SAST), Trivy (container), and OWASP Dependency-Check (SCA) security gates prior to gated production Helm deployments.',
      'Standardized container packaging and release promotion with Docker and Helm.',
    ],
    technologies: ['Harness', 'GitLab CI', 'SonarQube', 'Trivy', 'OWASP Dependency-Check', 'Docker', 'Helm'],
  },
  {
    id: 'automation-obs',
    title: 'Automation, Messaging & Observability',
    summary: 'Event-driven telemetry, automated onboarding, health-check rollbacks, and LLM cost governance.',
    bullets: [
      'Integrated Apache Kafka (Amazon MSK) for event-driven tenant usage, audit, and telemetry streaming using pub/sub patterns, consumer groups, and dead-letter queues.',
      'Implemented IRSA with permissions boundaries and MFA-enforced admin access; instrumented services with OpenTelemetry into CloudWatch and maintained SLO-based incident runbooks.',
      'Built Python automation for tenant onboarding, Helm deployments with health-check rollback, and LLM cost/usage reporting with Slack and email alerting.',
    ],
    technologies: ['Amazon MSK (Kafka)', 'OpenTelemetry', 'CloudWatch', 'IRSA', 'Python', 'Slack Alerting'],
  },
];

export interface ExperienceStream {
  id: string;
  title: string;
  bullets: string[];
  tags: string[];
}

export const EXPERIENCE_STREAMS: ExperienceStream[] = [
  {
    id: 'stream-cicd',
    title: 'CI/CD Pipeline Development & DevSecOps',
    bullets: [
      'Designed Jenkins declarative pipelines integrating SonarQube quality gates, GitHub Actions workflows, and Gitea-based SCM, cutting release cycles 78% (2 weeks to 3 days).',
      'Integrated OWASP Dependency-Check, Trivy, and SonarQube gates into 3 Jenkins pipelines across 2 client environments, blocking 100% of vulnerable builds from reaching production.',
      'Automated infrastructure provisioning with Terraform and Ansible, cutting environment setup time ~70% and eliminating configuration drift across 4+ environments.',
    ],
    tags: ['Jenkins', 'GitHub Actions', 'Gitea', 'SonarQube', 'OWASP', 'Trivy', 'Terraform', 'Ansible'],
  },
  {
    id: 'stream-k8s',
    title: 'Kubernetes & Container Orchestration',
    bullets: [
      'Deployed and managed workloads across k3s, EKS, and Rancher-managed clusters, authoring Deployment, Service, Ingress, ConfigMap, Secret manifests, and RBAC policies, reducing deployment errors 40%.',
      'Managed multi-cloud Kubernetes operations across EKS and AKS via Rancher, enforcing 15+ Kyverno policies (policy-as-code / admission control) and deploying 10+ Helm charts across internal teams.',
    ],
    tags: ['EKS', 'AKS', 'k3s', 'Rancher', 'Helm', 'Kyverno', 'RBAC'],
  },
  {
    id: 'stream-net',
    title: 'Network & Infrastructure Operations',
    bullets: [
      'Operated and troubleshot network services across self-hosted Linux environments: DNS (resolved unbound resolver failures on a Mailcow mail stack), NGINX reverse proxy and TLS.',
      'Hardened hosts with firewall rules (ufw/iptables), SSH hardening, and zero-trust access via Cloudflare Tunnel.',
    ],
    tags: ['Linux', 'DNS / Unbound', 'NGINX', 'TLS', 'ufw / iptables', 'SSH Hardening', 'Cloudflare Tunnel'],
  },
  {
    id: 'stream-obs',
    title: 'Monitoring & Observability',
    bullets: [
      'Built Prometheus + Grafana dashboards tracking 10+ services with custom alerting rules, cutting incident detection time ~50%.',
      'Added CloudWatch dashboards for 4+ AWS workloads, cutting mean time to diagnose ~40%, and handled production incident response and root cause analysis (RCA).',
    ],
    tags: ['Prometheus', 'Grafana', 'CloudWatch', 'Custom Alerting', 'Incident Response', 'RCA'],
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
  diagramType: 'ai-sdlc' | 'devsecops' | 'multi-k8s';
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'ai-sdlc-hub',
    title: 'AI-SDLC Hub — Secure Multi-Tenant AI Platform',
    context: 'Enterprise Platform Engineering · Sify Technologies Limited',
    summary:
      'Multi-tenant AWS and EKS platform hosting production Generative AI, RAG vector pipelines, and MCP-connected agentic workflows with strict network, IAM, and LLM guardrails.',
    technologies: [
      'AWS',
      'EKS',
      'Terraform',
      'Amazon Bedrock',
      'OpenSearch',
      'Kafka',
      'Istio',
      'LiteLLM',
      'LangGraph',
    ],
    problemStatement:
      'Enterprise teams needed a unified, repeatable platform to run Generative AI, RAG, and agentic workloads without exposing model traffic to the public internet, leaking PII, or mixing tenant data and LLM spend.',
    architectureOverview:
      'Modular Terraform provisions isolated dev, staging, and production AWS environments. Ingress traffic passes through AWS WAF and NGINX into an Istio mTLS mesh on EKS, where tenant namespaces are isolated via Network Policies. AI requests route through LiteLLM to Amazon Bedrock over PrivateLink, backed by OpenSearch vector stores, LangGraph/MCP agents, and Amazon MSK event streams.',
    infrastructureDesign: [
      'Modular multi-workspace Terraform provisioning EKS, Lambda, RDS, S3, IAM, and Amazon MSK.',
      'Segmented VPC with public/private subnets, NACLs, and VPC Endpoints (PrivateLink) for private Bedrock & AWS API traffic.',
      'Python automation for repeatable tenant onboarding and Helm deployments with automated health-check rollback.',
    ],
    securityImplementation: [
      'Default-deny egress policies with allow-listed NAT destinations and namespace-per-tenant Kubernetes Network Policies.',
      'Strict Istio service-mesh mTLS, ACM & cert-manager TLS certificates, AWS WAF, and security-group firewalls.',
      'IRSA with permissions boundaries, MFA-enforced admin access, External Secrets Operator, and LiteLLM PII-redaction + rate-limiting guardrails.',
    ],
    cicdWorkflow: [
      'Multi-stage Harness and GitLab CI pipelines executing automated Jest and Playwright test suites.',
      'Mandatory SonarQube (SAST), Trivy (container image), and OWASP Dependency-Check (SCA) security gates.',
      'Zero-vulnerable-build gate prior to Docker packaging and Helm production deployment.',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Preventing sensitive enterprise data leakage across shared GenAI endpoints.',
        solution:
          'Centralized LLM traffic behind a LiteLLM gateway enforcing PII redaction, per-tenant rate limits, and private Bedrock access via AWS PrivateLink.',
      },
      {
        challenge: 'Onboarding new tenants rapidly without configuration drift or manual errors.',
        solution:
          'Built modular Terraform workspaces paired with Python tenant onboarding automation and automated Helm rollback on failed health checks.',
      },
    ],
    outcomes: [
      'Created a repeatable, audit-ready onboarding standard across dev, staging, and production workspaces.',
      'Enabled per-tenant observability via OpenTelemetry into CloudWatch and automated LLM cost/usage Slack and email reporting.',
      'Enforced zero-vulnerable-build promotion across Harness/GitLab CI pipelines.',
    ],
    diagramType: 'ai-sdlc',
  },
  {
    id: 'full-devsecops',
    title: 'Full DevSecOps CI/CD Automation',
    context: 'Client Delivery Pipelines & Personal Workflow Engineering',
    summary:
      'Multi-stage declarative CI/CD pipelines embedding 3-layer security scanning (SAST, SCA, container scanning), Nexus artifact governance, and automated container pruning.',
    technologies: ['Jenkins', 'Docker', 'Nexus', 'SonarQube', 'OWASP', 'Trivy', 'Linux'],
    problemStatement:
      'Manual release steps and late-stage security reviews caused slow two-week release cycles, oversized Docker images, and risk of vulnerable dependencies reaching production environments.',
    architectureOverview:
      'Source commits in GitHub/Gitea trigger declarative Jenkins pipelines that run unit tests, static analysis (SonarQube), dependency vulnerability checks (OWASP Dependency-Check), multi-stage Docker builds pushed to Nexus, container image scanning (Trivy), smoke health-checks, and image pruning.',
    infrastructureDesign: [
      'Declarative Jenkinsfiles integrated with GitHub Actions workflows and Gitea-based SCM.',
      'Multi-stage Docker builds optimized for minimal runtime footprint and stored in Nexus Registry.',
      'Terraform and Ansible automation standardizing underlying client build and runtime environments.',
    ],
    securityImplementation: [
      '3-layer shift-left security gates: SonarQube (SAST), OWASP Dependency-Check (SCA), and Trivy (container & OS CVEs).',
      'Automated quality and vulnerability thresholds preventing non-compliant builds from advancing to production.',
    ],
    cicdWorkflow: [
      'Stage 1: SCM checkout & automated build/test execution.',
      'Stage 2: Parallel SonarQube SAST + OWASP Dependency-Check SCA evaluation.',
      'Stage 3: Multi-stage Docker build, Trivy image scan, Nexus push, smoke health-check deploy, and disk pruning.',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Eliminating vulnerable builds and long two-week deployment bottlenecks across client environments.',
        solution:
          'Embedded automated OWASP, Trivy, and SonarQube gates directly into 3 Jenkins pipelines across 2 client environments.',
      },
      {
        challenge: 'Preventing CI host disk exhaustion from frequent container builds.',
        solution:
          'Implemented multi-stage Dockerfiles with Nexus caching and automated post-deploy image pruning.',
      },
    ],
    outcomes: [
      '78% faster release cycles (reduced from 2 weeks to 3 days) in enterprise Jenkins + GitHub Actions workflows.',
      '100% of vulnerable builds blocked from reaching production across 3 client pipelines.',
      '~30% less disk usage via multi-stage Docker builds and automated image pruning in the Node.js/React DevSecOps workflow.',
    ],
    diagramType: 'devsecops',
  },
  {
    id: 'multi-cloud-k8s',
    title: 'Kubernetes & Multi-Cloud Platform Operations',
    context: 'Multi-Cluster Fleet Management · EKS, AKS & k3s',
    summary:
      'Unified multi-cloud Kubernetes governance across AWS EKS, Azure AKS, and k3s clusters via Rancher, GitOps workflows, Helm standardization, and Kyverno policy-as-code.',
    technologies: ['EKS', 'AKS', 'k3s', 'Rancher', 'Helm', 'ArgoCD', 'Kyverno', 'Terraform'],
    problemStatement:
      'Operating workloads across heterogeneous Kubernetes distributions (EKS, AKS, k3s) introduced manifest inconsistencies, privilege risks, and deployment errors across internal engineering teams.',
    architectureOverview:
      'Rancher provides unified cluster lifecycle and RBAC governance across EKS, AKS, and k3s clusters. Standardized Helm charts and ArgoCD GitOps synchronize workloads while Kyverno admission controllers validate security and compliance policies on every API request.',
    infrastructureDesign: [
      'Terraform-provisioned EKS and multi-environment infrastructure eliminating drift across 4+ environments.',
      '10+ reusable Helm charts and standardized Deployment, Service, Ingress, ConfigMap, and Secret templates.',
      'Centralized multi-cluster fleet management through Rancher and GitOps reconciliation via ArgoCD.',
    ],
    securityImplementation: [
      '15+ Kyverno admission control policies enforcing pod security standards, resource limits, and compliance rules.',
      'Granular Kubernetes RBAC policies and namespace-scoped Secret & Network Policy isolation.',
    ],
    cicdWorkflow: [
      'Versioned Helm charts and declarative Kubernetes manifests validated by Kyverno before admission.',
      'Automated rollout verification and GitOps drift reconciliation.',
    ],
    challengesAndSolutions: [
      {
        challenge: 'High deployment error rate from hand-crafted manifests across multiple clusters.',
        solution:
          'Standardized Deployment/Service/Ingress/RBAC templates and packaged 10+ Helm charts for internal teams.',
      },
      {
        challenge: 'Maintaining consistent security posture across both AWS EKS and Azure AKS.',
        solution:
          'Unified cluster management under Rancher and enforced 15+ Kyverno admission policies automatically at deploy time.',
      },
    ],
    outcomes: [
      '40% fewer Kubernetes deployment errors across EKS, k3s, and Rancher-managed clusters.',
      '15+ Kyverno admission control policies enforced continuously across EKS and AKS.',
      '10+ production Helm charts adopted across internal engineering teams.',
    ],
    diagramType: 'multi-k8s',
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
    focus: ['Serverless & Lambda', 'IAM & Security', 'CI/CD & CodePipeline', 'CloudWatch & X-Ray'],
    description:
      'Validates proficiency in developing, deploying, securing, and debugging cloud-native applications on AWS using core services, IAM least privilege, and automated delivery pipelines.',
  },
  {
    id: 'oci-devops-pro',
    name: 'OCI Certified DevOps Professional',
    issuer: 'Oracle Cloud Infrastructure (OCI)',
    brand: 'oci',
    focus: ['CI/CD Automation', 'Container Orchestration', 'Infrastructure as Code', 'Observability & Security'],
    description:
      'Validates expertise in designing and automating cloud infrastructure provisioning, container-based microservice delivery, DevSecOps pipelines, and production observability.',
  },
];
