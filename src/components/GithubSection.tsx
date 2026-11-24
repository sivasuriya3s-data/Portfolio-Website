import React, { useEffect, useState } from 'react';
import { ExternalLink, GitBranch, Star, BookOpen, RefreshCw } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

interface GithubProfile {
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  html_url: string;
  avatar_url: string;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export const GithubSection: React.FC = () => {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [status, setStatus] = useState<'loading' | 'loaded' | 'unavailable'>('loading');

  const fetchGithub = async (signal?: AbortSignal) => {
    setStatus('loading');
    try {
      const [profileRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${CANDIDATE.githubUsername}`, {
          headers: { Accept: 'application/vnd.github+json' },
          signal,
        }),
        fetch(
          `https://api.github.com/users/${CANDIDATE.githubUsername}/repos?sort=updated&per_page=6`,
          {
            headers: { Accept: 'application/vnd.github+json' },
            signal,
          }
        ),
      ]);

      if (!profileRes.ok) {
        setStatus('unavailable');
        return;
      }

      const profileData: GithubProfile = await profileRes.json();
      setProfile(profileData);

      if (reposRes.ok) {
        const repoData: GithubRepo[] = await reposRes.json();
        setRepos(Array.isArray(repoData) ? repoData : []);
      } else {
        setRepos([]);
      }

      setStatus('loaded');
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return;
      setStatus('unavailable');
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchGithub(controller.signal);
    return () => controller.abort();
  }, []);

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="bg-slate-50/86 dark:bg-[#070B12]/80 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
              Open Source &amp; Engineering Activity
            </p>
            <h2
              id="github-heading"
              className="mt-1.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white"
            >
              GitHub Profile &amp; Public Repositories
            </h2>
          </div>

          <a
            href={CANDIDATE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0C1320] hover:border-blue-500 dark:hover:border-cyan-400 px-4 py-2 text-xs font-semibold text-slate-900 dark:text-slate-100 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <GitBranch className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>{CANDIDATE.githubDisplay}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Loading State */}
        {status === 'loading' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" aria-busy="true">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-40 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1320] p-6 animate-pulse"
              >
                <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded mb-3" />
                <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded mb-2" />
                <div className="h-3 w-4/5 bg-slate-200 dark:bg-slate-800 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* Live Loaded State */}
        {status === 'loaded' && profile && (
          <div className="space-y-6">
            {/* Live Profile Header */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1320] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={profile.avatar_url}
                  alt={`${profile.name || profile.login} GitHub avatar`}
                  referrerPolicy="no-referrer"
                  className="h-12 w-12 rounded-lg border border-slate-200 dark:border-slate-700 object-cover"
                />
                <div>
                  <h3 className="font-display text-base font-bold text-slate-950 dark:text-white">
                    {profile.name || profile.login}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {profile.bio || `GitHub handle: @${profile.login}`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-300 font-mono tabular-nums">
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block">Public Repos</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {profile.public_repos}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block">Followers</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {profile.followers}
                  </span>
                </div>
              </div>
            </div>

            {repos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1320] p-5 flex flex-col justify-between transition-colors hover:border-blue-500/60 dark:hover:border-cyan-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-2 font-display text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 truncate">
                          <BookOpen className="w-4 h-4 shrink-0 text-slate-400" />
                          <span className="truncate">{repo.name}</span>
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      </div>
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {repo.description || 'Public repository on GitHub.'}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                      <span>{repo.language || 'Repository'}</span>
                      <span className="inline-flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" />
                        {repo.stargazers_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1320] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  No public repositories are currently listed on @{profile.login}. Enterprise
                  platform repositories are maintained in private organizational environments.
                </p>
                <a
                  href={CANDIDATE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline whitespace-nowrap shrink-0"
                >
                  <span>View Profile on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Unavailable / Rate-Limited Fallback (Never fabricates metrics or repos) */}
        {status === 'unavailable' && (
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1320] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                GitHub Profile: @{CANDIDATE.githubUsername}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Live GitHub repository metadata could not be retrieved right now (network or API
                rate limit). Visit GitHub directly to inspect public activity.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => fetchGithub()}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>
              <a
                href={CANDIDATE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-4 py-2 text-xs font-semibold text-white dark:text-slate-950 transition-colors"
              >
                <span>Open GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
