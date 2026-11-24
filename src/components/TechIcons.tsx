import React from 'react';
import {
  Cloud,
  Server,
  ShieldCheck,
  Terminal,
  Cpu,
  Activity,
  Network,
  Container,
  GitBranch,
  Database,
  Layers,
  Lock,
} from 'lucide-react';

interface TechIconProps {
  iconKey?: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ iconKey, className = 'w-4 h-4' }) => {
  switch (iconKey) {
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M6.5 14.5c-1.8 0-3-1.2-3-2.9 0-1.5 1-2.7 2.4-2.9C6.4 6.1 8.6 4.5 11.4 4.5c3.1 0 5.6 2.2 6 5.1 1.7.3 3.1 1.7 3.1 3.5 0 2-1.6 3.4-3.6 3.4H6.5z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 18.5c4.2 2.1 9.8 2.1 14 0"
            stroke="#F59E0B"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M17.5 17.5l2 .8-.8 2" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'azure':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M13 3L5 19h5l2-4h6l2 4h1L13 3z" stroke="#38BDF8" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9.5 13.5L13 6.5l3 7H9.5z" fill="#38BDF8" fillOpacity="0.2" />
        </svg>
      );
    case 'gcp':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 4l6.9 4v8L12 20l-6.9-4V8L12 4z"
            stroke="#60A5FA"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2.5" stroke="#34D399" strokeWidth="1.6" />
        </svg>
      );
    case 'kubernetes':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 2.8l7.4 3.6 1.8 8-5.2 6.4H8l-5.2-6.4 1.8-8L12 2.8z"
            stroke="#3B82F6"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2.6" stroke="#3B82F6" strokeWidth="1.6" />
          <path
            d="M12 5v4.4M12 14.6V19M5.5 9l3.8 2.2M14.7 13.8L18.5 16M18.5 9l-3.8 2.2M9.3 13.8L5.5 16"
            stroke="#3B82F6"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'terraform':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M3 4.5l5.5 3.2v6.2L3 10.7V4.5z" fill="#7C3AED" fillOpacity="0.85" />
          <path d="M9.5 8.2L15 11.4v6.2l-5.5-3.2V8.2z" fill="#8B5CF6" />
          <path d="M9.5 15.2L15 18.4v4.1l-5.5-3.2v-4.1z" fill="#7C3AED" fillOpacity="0.7" />
          <path d="M16 11.4l5-2.9v6.2l-5 2.9v-6.2z" fill="#A78BFA" />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="4" y="10" width="3" height="3" stroke="#0EA5E9" strokeWidth="1.5" />
          <rect x="8" y="10" width="3" height="3" stroke="#0EA5E9" strokeWidth="1.5" />
          <rect x="12" y="10" width="3" height="3" stroke="#0EA5E9" strokeWidth="1.5" />
          <rect x="8" y="6.5" width="3" height="3" stroke="#0EA5E9" strokeWidth="1.5" />
          <rect x="12" y="6.5" width="3" height="3" stroke="#0EA5E9" strokeWidth="1.5" />
          <path
            d="M2.5 14h16.2c1.1 0 2.1-.6 2.6-1.5.4.8.2 2-.8 3.2-1.4 1.8-4 2.8-7.5 2.8-5.5 0-9.6-2-10.5-4.5z"
            stroke="#0EA5E9"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'helm':
    case 'rancher':
    case 'argocd':
      return <Container className={className} />;
    case 'jenkins':
    case 'harness':
    case 'gitlab':
    case 'github':
      return <GitBranch className={className} />;
    case 'python':
    case 'bash':
    case 'ansible':
    case 'fastapi':
      return <Terminal className={className} />;
    case 'sonarqube':
    case 'trivy':
    case 'owasp':
    case 'kyverno':
      return <ShieldCheck className={className} />;
    case 'bedrock':
    case 'langchain':
      return <Cpu className={className} />;
    case 'opensearch':
    case 'postgres':
      return <Database className={className} />;
    case 'kafka':
      return <Layers className={className} />;
    case 'prometheus':
    case 'grafana':
    case 'otel':
      return <Activity className={className} />;
    case 'istio':
    case 'nginx':
      return <Network className={className} />;
    case 'linux':
      return <Server className={className} />;
    default:
      return <Cloud className={className} />;
  }
};

export const CertificationEmblem: React.FC<{ brand: 'aws' | 'oci'; className?: string }> = ({
  brand,
  className = 'w-12 h-12',
}) => {
  if (brand === 'aws') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
        <path
          d="M32 4L56 17.5V46.5L32 60L8 46.5V17.5L32 4Z"
          className="fill-blue-500/10 stroke-blue-500/40"
          strokeWidth="2"
        />
        <path
          d="M32 10L50 20.5V43.5L32 54L14 43.5V20.5L32 10Z"
          className="stroke-amber-400/70"
          strokeWidth="1.5"
        />
        <text
          x="32"
          y="33"
          textAnchor="middle"
          className="fill-current font-display text-[13px] font-bold tracking-wider"
        >
          AWS
        </text>
        <path d="M21 40c6.5 3.2 15.5 3.2 22 0" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M40.5 38.5l2.8 1.2-1.2 2.8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M32 4L56 17.5V46.5L32 60L8 46.5V17.5L32 4Z"
        className="fill-cyan-500/10 stroke-cyan-500/40"
        strokeWidth="2"
      />
      <rect
        x="17"
        y="22"
        width="30"
        height="16"
        rx="8"
        className="stroke-red-500/80"
        strokeWidth="2.4"
      />
      <text
        x="32"
        y="33.5"
        textAnchor="middle"
        className="fill-current font-display text-[10px] font-bold tracking-widest"
      >
        OCI
      </text>
      <path d="M22 46h20" className="stroke-slate-400/50" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export const LockIcon = Lock;
