import { GitBranch, ExternalLink, ArrowUpRight } from 'lucide-react';
import { content, isConfirmationToken } from '../content';

export function Lab() {
  const { lab } = content.home;
  const isDev = import.meta.env.DEV;

  // Gating rule from PLAN.md:
  // "render the section only if at least one project has a resolved (non-token) description.
  // Hide any card whose description is unresolved."
  const visibleProjects = isDev
    ? lab.projects
    : lab.projects.filter((project) => !isConfirmationToken(project.description));

  if (visibleProjects.length === 0) {
    return null;
  }

  return (
    <section id="lab" className="py-28 md:py-36 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-amber-50 text-[#D97706] border border-amber-200/80 mb-4">
            Open Source &amp; Research
          </div>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1F2A]">
              {lab.sectionTitle}
            </h2>
            {isDev && visibleProjects.some((p) => isConfirmationToken(p.description)) && (
              <span className="px-2.5 py-1 text-xs font-mono font-medium bg-amber-100 text-amber-900 rounded-md border border-amber-300">
                Dev Mode
              </span>
            )}
          </div>
          <p className="mt-5 text-lg sm:text-xl text-[#5B7280] leading-relaxed">
            {lab.intro}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleProjects.map((project) => {
            const hasUnresolvedDesc = isConfirmationToken(project.description);

            return (
              <div
                key={project.id}
                className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-[#5B7280]" />
                      <h3 className="text-xl font-bold text-[#0B1F2A] tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-900 border border-amber-200">
                      {project.statusBadge}
                    </span>
                  </div>

                  {hasUnresolvedDesc ? (
                    <div className="p-3.5 bg-amber-50/80 rounded-xl border border-dashed border-amber-300 text-xs font-mono text-amber-900 mb-6">
                      <span className="font-semibold block mb-1">Unconfirmed Token:</span>
                      {project.description}
                    </div>
                  ) : (
                    <p className="text-sm sm:text-base text-[#5B7280] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  )}
                </div>

                <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#0B1F2A] hover:text-[#D97706] inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#D97706] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
