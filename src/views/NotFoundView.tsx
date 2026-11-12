import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

interface NotFoundViewProps {
  onNavigate: (tab: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="size-20 rounded-full bg-[#F3E6C8] border border-[#EBDFC4] flex items-center justify-center mx-auto text-[#E39B0B]">
        <span className="font-heading font-extrabold text-3xl tabular-nums">404</span>
      </div>

      <div className="space-y-2">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2A1B12]">
          Page Not Found
        </h1>
        <p className="text-[#7C6A58] text-sm text-pretty max-w-md mx-auto">
          The page you requested could not be located. It might have moved, or perhaps the url was typed incorrectly.
        </p>
      </div>

      <div className="pt-4 flex justify-center gap-4">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F6B81A] hover:bg-[#E39B0B] text-[#2A1B12] font-bold text-sm transition-colors"
        >
          <Home className="size-4" />
          <span>Return to Home</span>
        </button>
        <button
          onClick={() => onNavigate('menu')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F3E6C8] text-[#2A1B12] font-semibold text-sm transition-colors border border-[#EBDFC4]"
        >
          <ArrowLeft className="size-4" />
          <span>Explore Menu</span>
        </button>
      </div>
    </div>
  );
};
