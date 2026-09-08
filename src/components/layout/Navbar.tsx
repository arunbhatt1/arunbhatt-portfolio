import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Menu, X, FileDown, Code2, ExternalLink } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0e12]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Arun Bhatt Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#14161f] border border-white/10 flex items-center justify-center group-hover:border-spider-red/60 group-hover:bg-spider-red/10 transition-all shadow-md">
              <Code2 className="w-5 h-5 text-spider-red transition-transform group-hover:rotate-12" />
            </div>
            <span className="font-display font-extrabold text-lg sm:text-xl text-slate-100 tracking-tight group-hover:text-spider-red transition-colors">
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#14161f]/80 border border-white/10 backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-spider-red shadow-[0_0_12px_rgba(230,36,41,0.5)] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Resume & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumePath}
              download="Arun_Bhatt_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-spider-red/10 border border-spider-red/40 text-spider-red hover:bg-spider-red hover:text-white hover:border-spider-red transition-all duration-200 shadow-md shadow-spider-red/10 hover:shadow-spider-red/30"
              aria-label="Download Resume PDF"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-[#14161f] border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-spider-red" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0d0e12]/98 backdrop-blur-2xl px-6 pt-4 pb-8 space-y-3 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium ${
                activeSection === link.href.substring(1)
                  ? 'text-white bg-spider-red/20 border border-spider-red/40 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={personalInfo.resumePath}
              download="Arun_Bhatt_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-spider-red text-white shadow-lg shadow-spider-red/30"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-medium bg-[#14161f] border border-white/10 text-slate-300 hover:text-white"
            >
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

