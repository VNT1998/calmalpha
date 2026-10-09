import { ArrowUpRight, Globe, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { content } from '../content';

export function Team() {
  const { team } = content.home;
  const { founder } = team;

  return (
    <section id="team" className="py-28 md:py-36 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-slate-200/60 text-[#0B1F2A] border border-slate-300/80 mb-4">
            People &amp; Accountability
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1F2A]">
            {team.sectionTitle}
          </h2>
        </div>

        {/* Founder Showcase Card */}
        <div className="max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:border-slate-300 transition-all">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Founder Photo */}
            <div className="md:w-5/12 relative min-h-[360px] md:min-h-[460px] bg-[#0B1F2A] overflow-hidden">
              <img
                src={founder.photoUrl}
                alt={`${founder.name}, ${founder.role} of Calm Alpha`}
                className="w-full h-full object-cover object-center grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                width="600"
                height="750"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/90 via-transparent to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 right-4 md:hidden">
                <span className="text-white font-bold text-lg">{founder.name}</span>
                <p className="text-amber-400 text-xs font-medium">{founder.title}</p>
              </div>
            </div>

            {/* Founder Details */}
            <div className="md:w-7/12 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-amber-50 text-[#D97706] border border-amber-200/80">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{founder.role}</span>
                  </div>
                  <span className="text-xs font-mono text-[#5B7280]">
                    Mumbai, India
                  </span>
                </div>

                <h3 className="hidden md:block text-2xl sm:text-3xl font-extrabold text-[#0B1F2A] tracking-tight">
                  {founder.name}
                </h3>
                <p className="hidden md:block mt-1 text-sm font-semibold text-[#D97706]">
                  {founder.title}
                </p>

                <p className="mt-6 text-sm sm:text-base text-[#5B7280] leading-relaxed">
                  {founder.bio}
                </p>

                {/* Technical Focus Chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#0B1F2A] border border-slate-200">
                    7+ Yrs Engineering
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#0B1F2A] border border-slate-200">
                    Agentic &amp; Voice Systems
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#0B1F2A] border border-slate-200">
                    Full-Stack AI Architecture
                  </span>
                </div>
              </div>

              {/* Links */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-5">
                <a
                  href={founder.links.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B1F2A] hover:text-[#D97706] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1"
                >
                  <Globe className="w-4 h-4 text-[#5B7280]" />
                  <span>Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={founder.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B1F2A] hover:text-[#D97706] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1"
                >
                  <GithubIcon className="w-4 h-4 text-[#5B7280]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={founder.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B1F2A] hover:text-[#D97706] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#5B7280]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
