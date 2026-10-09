import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';
import { content } from '../content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F2A] text-[#8CA1AF] border-t border-[#1E3A47] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#1E3A47]/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-1 rounded-lg bg-[#132B3A] border border-[#1E3A47]">
                <img
                  src="/logo-mark.svg"
                  alt="Calm Alpha"
                  className="h-7 w-7"
                  width="28"
                  height="28"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Calm <span className="text-amber-400">Alpha</span>
              </span>
            </div>
            <p className="text-sm text-[#8CA1AF] max-w-sm leading-relaxed">
              Software development and AI solutions studio based in Mumbai, India. Engineering agents, voice automation, and production-grade full-stack systems.
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              {content.header.nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={`/${item.href}`}
                    className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Governance &amp; Contact
            </span>
            <ul className="space-y-2 text-sm">
              {content.footer.legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`mailto:${content.footer.contactEmail}`}
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium text-xs bg-[#132B3A] px-3 py-1.5 rounded-lg border border-[#1E3A47]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{content.footer.contactEmail}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B7280]">
          <div>
            © {currentYear} {content.footer.companyName}. All rights reserved. {content.footer.city}.
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>Systems operational • Mumbai, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
