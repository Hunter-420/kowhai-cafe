import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#2A1B12] text-[#F3E6C8] border-t border-[#3D291D]">
      {/* Demo Project Banner Notice */}
      <div className="bg-[#1D140D] border-b border-[#3D291D] py-2.5 px-4 text-center">
        <p className="text-xs font-semibold text-[#F6B81A] tracking-wider uppercase">
          Demo project: concept business website for Kowhai Cafe (Grey Lynn, Auckland)
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-[#3D291D] flex items-center justify-center p-2 border border-[#4A382B]">
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
              <span className="font-heading font-extrabold text-2xl text-[#FFF8E8]">
                Kowhai Cafe
              </span>
            </div>
            <p className="text-sm text-[#BFAE95] text-pretty leading-relaxed">
              Rooted in Grey Lynn since 2016. Honest local breakfast, house-baked pastries, and specialty roasted coffee.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#3D291D] text-xs font-semibold text-[#F6B81A] border border-[#4A382B]">
                Locally Owned and Operated
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-[#FFF8E8] tracking-tight">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'menu', label: 'Full Seasonal Menu' },
                { id: 'about', label: 'Our Story & Heritage' },
                { id: 'gallery', label: 'Photo Gallery' },
                { id: 'catering', label: 'Catering & Event Hire' },
                { id: 'news', label: 'Neighbourhood Journal' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#BFAE95] hover:text-[#F6B81A] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-[#FFF8E8] tracking-tight">
              Service Hours
            </h4>
            <div className="space-y-2 text-sm text-[#BFAE95] tabular-nums">
              <div className="flex justify-between py-1 border-b border-[#3D291D]">
                <span>Monday - Friday</span>
                <span className="font-semibold text-[#FFF8E8]">7:00 am - 3:00 pm</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#3D291D]">
                <span>Saturday</span>
                <span className="font-semibold text-[#FFF8E8]">7:30 am - 3:30 pm</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#3D291D]">
                <span>Sunday</span>
                <span className="font-semibold text-[#FFF8E8]">8:00 am - 3:00 pm</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Public Holidays</span>
                <span className="font-semibold text-[#F6B81A]">8:00 am - 2:30 pm</span>
              </div>
            </div>
          </div>

          {/* Contact and Location */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-[#FFF8E8] tracking-tight">
              Visit Us
            </h4>
            <div className="space-y-3 text-sm text-[#BFAE95]">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 text-[#F6B81A] shrink-0 mt-0.5" />
                <span>27 Richmond Road, Grey Lynn, Auckland 1021</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-4 text-[#F6B81A] shrink-0" />
                <span className="tabular-nums">(09) 555 0123</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-4 text-[#F6B81A] shrink-0" />
                <span>hello@kowhaicafe.example</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 rounded-full bg-[#3D291D] hover:bg-[#4A382B] text-[#FFF8E8] font-bold text-xs uppercase tracking-wider transition-colors border border-[#4A382B]"
                >
                  Get Directions & Enquiries
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#3D291D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7C6A58]">
          <p className="tabular-nums">
            &copy; 2026 Kowhai Cafe. Hand-crafted in Auckland, New Zealand.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#F3E6C8] transition-colors cursor-pointer">Privacy Notice</span>
            <span className="hover:text-[#F3E6C8] transition-colors cursor-pointer">Accessibility</span>
            <span className="hover:text-[#F3E6C8] transition-colors cursor-pointer">Allergens Guide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
