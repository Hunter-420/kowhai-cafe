import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface CateringViewProps {
  onNavigate: (tab: string) => void;
}

export const CateringView: React.FC<CateringViewProps> = ({ onNavigate }) => {
  const [selectedPackage, setSelectedPackage] = useState<string>('morning-tea');

  const packages = [
    {
      id: 'morning-tea',
      title: 'Morning Tea & Cabinet Box',
      price: '$16 per person',
      minGuests: 'Min 8 people',
      desc: 'Assorted warm breakfast pastries, seasonal feijoa loaves, mini savoury frittatas, and fresh seasonal fruit skewers.',
      features: ['Feijoa & almond loaf slices', 'Cardamom morning buns', 'Mini spinach & feta frittatas', 'Napkins & biodegradable serveware'],
    },
    {
      id: 'lunch-platters',
      title: 'Artisan Sandwich Platters',
      price: '$22 per person',
      minGuests: 'Min 10 people',
      desc: 'Generously filled sourdough baguettes and toastie quarters made fresh on the morning of delivery.',
      features: ['House pastrami & Gruyere reubens', 'Stracciatella & heirloom tomato', 'Greens & mature cheddar melts', 'House pickled vegetable sides'],
    },
    {
      id: 'courtyard-event',
      title: 'Private Courtyard Hire',
      price: 'From $450 (Evening hire)',
      minGuests: 'Up to 45 guests',
      desc: 'Exclusive evening access to our lush garden courtyard with outdoor bar setup, barista service, and bespoke grazing tables.',
      features: ['Full courtyard & heated pergola', 'Dedicated barista & floor staff', 'Specialty coffee & beverage service', 'Custom audio sound system access'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-10 sm:space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#E39B0B]">
          Corporate & Celebrations
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#2A1B12] text-balance">
          Catering & Private Gatherings
        </h1>
        <p className="text-[#7C6A58] text-base text-pretty">
          Handcrafted morning boxes, sandwich platters, and exclusive courtyard hire for teams and families across Grey Lynn and Ponsonby.
        </p>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => {
          const isSelected = selectedPackage === pkg.id;
          return (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
              className={`rounded-3xl p-8 border flex flex-col justify-between transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white border-[#E39B0B] shadow-lg ring-2 ring-[#E39B0B]/20'
                  : 'bg-white border-[#EBDFC4] hover:border-[#E39B0B]/60'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-heading font-bold text-xl text-[#2A1B12]">
                    {pkg.title}
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#F3E6C8] text-[#2A1B12]">
                    {pkg.minGuests}
                  </span>
                </div>

                <div>
                  <span className="font-heading font-extrabold text-2xl text-[#2A1B12] tabular-nums">
                    {pkg.price}
                  </span>
                </div>

                <p className="text-sm text-[#7C6A58] text-pretty leading-relaxed">
                  {pkg.desc}
                </p>

                <div className="pt-4 border-t border-[#EBDFC4]/60 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C6A58] block">
                    What is included:
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#2A1B12]">
                      <Check className="size-4 text-[#4F6B3A] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 rounded-full font-bold text-sm transition-colors text-center ${
                    isSelected
                      ? 'bg-[#F6B81A] hover:bg-[#E39B0B] text-[#2A1B12]'
                      : 'bg-[#F3E6C8] hover:bg-[#EBDFC4] text-[#2A1B12]'
                  }`}
                >
                  Enquire for this Package
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Booking Notice */}
      <div className="rounded-3xl bg-[#FFF8E8] border border-[#EBDFC4] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-heading font-bold text-lg text-[#2A1B12]">
            Need 48 hours notice for corporate platters
          </h3>
          <p className="text-xs text-[#7C6A58]">
            We prepare fresh sourdough and bake each platter order on the morning of delivery. Pick up or local courier within 5km of Grey Lynn.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-2.5 rounded-full bg-[#2A1B12] text-[#FFF8E8] font-bold text-xs uppercase tracking-wider hover:bg-[#1D140D] transition-colors shrink-0"
        >
          Submit Enquiries
        </button>
      </div>
    </div>
  );
};
