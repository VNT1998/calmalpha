import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B1F2A]">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-[#F59E0B] text-[#0B1F2A] px-4 py-2 rounded-md font-semibold shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}
