import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { content } from '../content';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getAnchorHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B1F2A]/90 backdrop-blur-md border-b border-[#1E3A47]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3.5 group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            onClick={closeMenu}
          >
            <div className="relative p-1 rounded-lg bg-[#132B3A] border border-[#1E3A47] group-hover:border-amber-400/50 transition-colors">
              <img
                src="/logo-mark.svg"
                alt="Calm Alpha"
                className="h-8 w-8 transition-transform duration-200 group-hover:scale-105"
                width="32"
                height="32"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">
                Calm <span className="text-amber-400">Alpha</span>
              </span>
              <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#8CA1AF] font-semibold mt-1">
                CALM, DECISIVE AI
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {content.header.nav.map((item) => (
              <a
                key={item.label}
                href={getAnchorHref(item.href)}
                className="text-sm font-medium text-[#8CA1AF] hover:text-white hover:bg-white/[0.04] transition-all duration-150 rounded-lg px-3.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center">
            <a
              href={getAnchorHref('#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#132B3A] text-amber-300 hover:text-white hover:bg-[#1E3A47] border border-[#1E3A47] hover:border-amber-400/40 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#8CA1AF] hover:text-white hover:bg-[#132B3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 border border-transparent hover:border-[#1E3A47]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1E3A47] bg-[#0B1F2A]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
          {content.header.nav.map((item) => (
            <a
              key={item.label}
              href={getAnchorHref(item.href)}
              onClick={closeMenu}
              className="block px-3.5 py-2.5 rounded-lg text-base font-medium text-[#8CA1AF] hover:text-white hover:bg-[#132B3A] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={getAnchorHref('#contact')}
              onClick={closeMenu}
              className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#FDE047] to-[#F59E0B] text-[#0B1F2A]"
            >
              Start a conversation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
