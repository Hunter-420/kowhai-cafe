import React, { useState } from 'react';
import { Menu, X, Clock, MapPin, Phone } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'catering', label: 'Catering & Events' },
    { id: 'news', label: 'Journal' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#2A1B12] text-[#F3E6C8] text-xs py-2 px-4 sm:px-8 border-b border-[#3D291D]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-pretty">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="size-3.5 text-[#F6B81A]" aria-hidden="true" />
              27 Richmond Road, Grey Lynn, Auckland
            </span>
            <span className="hidden md:flex items-center gap-1.5 font-medium tabular-nums">
              <Clock className="size-3.5 text-[#F6B81A]" aria-hidden="true" />
              Mon-Fri 7:00-15:00 | Sat 7:30-15:30 | Sun 8:00-15:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#3D291D] text-[#F6B81A] font-semibold text-[11px] tracking-wide uppercase">
              Open Today
            </span>
            <a
              href="tel:+6495550123"
              className="hidden sm:flex items-center gap-1 text-[#F3E6C8] hover:text-[#F6B81A] transition-colors tabular-nums"
              aria-label="Call Kowhai Cafe"
            >
              <Phone className="size-3 text-[#F6B81A]" aria-hidden="true" />
              (09) 555 0123
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#FFF8E8]/95 backdrop-blur-md border-b border-[#EBDFC4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E39B0B] rounded-lg p-1"
            aria-label="Kowhai Cafe Home"
          >
            <div className="size-11 rounded-full bg-[#F3E6C8] flex items-center justify-center p-2 border border-[#EBDFC4] shadow-sm group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" className="size-full" aria-hidden="true">
                <g transform="translate(50,50)">
                  <path d="M 0 -10 C -15 -25, -20 -45, 0 -48 C 20 -45, 15 -25, 0 -10 Z" fill="#F6B81A" />
                  <path d="M 0 -10 C -15 -25, -20 -45, 0 -48 C 20 -45, 15 -25, 0 -10 Z" fill="#F6B81A" transform="rotate(72)" />
                  <path d="M 0 -10 C -15 -25, -20 -45, 0 -48 C 20 -45, 15 -25, 0 -10 Z" fill="#F6B81A" transform="rotate(144)" />
                  <path d="M 0 -10 C -15 -25, -20 -45, 0 -48 C 20 -45, 15 -25, 0 -10 Z" fill="#F6B81A" transform="rotate(216)" />
                  <path d="M 0 -10 C -15 -25, -20 -45, 0 -48 C 20 -45, 15 -25, 0 -10 Z" fill="#F6B81A" transform="rotate(288)" />
                  <circle cx="0" cy="0" r="12" fill="#E39B0B" />
                </g>
              </svg>
            </div>
            <div>
              <span className="block font-heading font-extrabold text-2xl text-[#2A1B12] leading-none tracking-tight">
                Kowhai
              </span>
              <span className="block font-body text-xs font-semibold text-[#7C6A58] uppercase tracking-wider">
                Cafe, Grey Lynn
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-2 rounded-full font-body font-semibold text-sm transition-all duration-150 ${
                    isActive
                      ? 'bg-[#2A1B12] text-[#FFF8E8] shadow-sm'
                      : 'text-[#2A1B12] hover:bg-[#F3E6C8] hover:text-[#2A1B12]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#F6B81A] hover:bg-[#E39B0B] text-[#2A1B12] font-body font-bold text-sm transition-all duration-150 shadow-sm active:scale-95"
            >
              Find a Table
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden size-11 flex items-center justify-center rounded-full bg-[#F3E6C8] text-[#2A1B12] hover:bg-[#EBDFC4] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E39B0B]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (390px responsive) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FFF8E8] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EBDFC4]">
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-full bg-[#F3E6C8] flex items-center justify-center p-1.5 border border-[#EBDFC4]">
                    <svg viewBox="0 0 100 100" className="size-full" aria-hidden="true">
                      <g transform="translate(50,50)">
                        <path d="M 0 -10 C -15 -25, -20 -45, 0 -48 C 20 -45, 15 -25, 0 -10 Z" fill="#F6B81A" />
                        <path d="M 0 -10 C -15 -25, -20 -45, 0 -48 C 20 -45, 15 -25, 0 -10 Z" fill="#F6B81A" transform="rotate(72)" />
                        <path d="M 0 -10 C -15 -25, -20 -45, 0 -48 C 20 -45, 15 -25, 0 -10 Z" fill="#F6B81A" transform="rotate(144)" />
                        <path d="M 0 -10 C -15 -25, -20 -45, 0 -48 C 20 -45, 15 -25, 0 -10 Z" fill="#F6B81A" transform="rotate(216)" />
                        <path d="M 0 -10 C -15 -25, -20 -45, 0 -48 C 20 -45, 15 -25, 0 -10 Z" fill="#F6B81A" transform="rotate(288)" />
                        <circle cx="0" cy="0" r="12" fill="#E39B0B" />
                      </g>
                    </svg>
                  </div>
                  <span className="font-heading font-bold text-lg text-[#2A1B12]">Kowhai Cafe</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="size-10 rounded-full bg-[#F3E6C8] flex items-center justify-center text-[#2A1B12] hover:bg-[#EBDFC4]"
                  aria-label="Close navigation drawer"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 mt-6" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const isActive = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`w-full text-left px-4 py-3 rounded-xl font-body font-semibold text-base transition-colors ${
                        isActive
                          ? 'bg-[#2A1B12] text-[#FFF8E8]'
                          : 'text-[#2A1B12] hover:bg-[#F3E6C8]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#EBDFC4] flex flex-col gap-3">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 rounded-full bg-[#F6B81A] text-[#2A1B12] font-body font-bold text-base text-center shadow-sm"
              >
                Find a Table
              </button>
              <p className="text-xs text-[#7C6A58] text-center font-medium">
                27 Richmond Road, Grey Lynn
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
