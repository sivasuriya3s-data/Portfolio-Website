import React, { Component, ErrorInfo, ReactNode, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SnapshotMetrics } from './components/SnapshotMetrics';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { CertificationsSection } from './components/CertificationsSection';
import { GithubSection } from './components/GithubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    // Handled gracefully by fallback UI
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#070B12] text-slate-100 p-6">
          <div className="max-w-md rounded-xl border border-slate-800 bg-[#0C1320] p-6 text-center space-y-3">
            <h1 className="font-display text-lg font-bold">Unable to render section</h1>
            <p className="text-sm text-slate-400">
              An unexpected rendering error occurred. Reload the page to restore the portfolio.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-blue-400 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem('portfolio-theme');
        if (saved === 'light' || saved === 'dark') return saved;
      }
    } catch {
      // Ignore restricted storage access
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Ignore restricted storage access
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#070B12] dark:text-slate-100">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="flex-1">
          <HeroSection />
          <SectionDivider variant="accent" />
          <SnapshotMetrics />
          <SectionDivider />
          <AboutSection />
          <SectionDivider />
          <ExpertiseSection />
          <SectionDivider />
          <ExperienceSection />
          <SectionDivider variant="accent" />
          <ProjectsSection />
          <SectionDivider />
          <ArchitectureShowcase />
          <SectionDivider />
          <CertificationsSection />
          <SectionDivider />
          <GithubSection />
          <SectionDivider variant="accent" />
          <ContactSection />
        </main>
        <SectionDivider />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
