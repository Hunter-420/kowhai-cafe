import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Instagram, ExternalLink } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Coffee' | 'Courtyard' | 'Events';
  height: number;
  bgGradient: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Flat White Art',
    category: 'Coffee',
    height: 300,
    bgGradient: 'from-[#F6B81A] to-[#E39B0B]',
    description: 'Double shot house espresso with silky microfoam poured by Marcus.'
  },
  {
    id: '2',
    title: 'Sunlit Courtyard',
    category: 'Courtyard',
    height: 380,
    bgGradient: 'from-[#8FA66A] to-[#4F6B3A]',
    description: 'Native ferns, outdoor timber tables, and warm morning light.'
  },
  {
    id: '3',
    title: 'Feijoa Almond Loaf',
    category: 'Food',
    height: 260,
    bgGradient: 'from-[#C98B4E] to-[#9E602A]',
    description: 'Fresh out of the oven at 6:30am with salted honey butter.'
  },
  {
    id: '4',
    title: 'Kowhai Smash',
    category: 'Food',
    height: 390,
    bgGradient: 'from-[#F3C14B] to-[#D49B24]',
    description: 'Poached free-range eggs, Clevedon buffalo feta, toasted pumpkin seeds.'
  },
  {
    id: '5',
    title: 'Courtyard Native Greens',
    category: 'Courtyard',
    height: 280,
    bgGradient: 'from-[#9DB57E] to-[#678248]',
    description: 'Our lush garden corner where guests bring their dogs and morning papers.'
  },
  {
    id: '6',
    title: '16-Hour Cold Brew Pour',
    category: 'Coffee',
    height: 320,
    bgGradient: 'from-[#E8C27A] to-[#C49B4B]',
    description: 'Single origin Ethiopian steeped overnight and poured over hand-cut ice.'
  },
  {
    id: '7',
    title: 'Hawke\'s Bay Fudge Brownies',
    category: 'Food',
    height: 260,
    bgGradient: 'from-[#D9A66B] to-[#AD783B]',
    description: 'Flourless 70% dark chocolate with flaky Marlborough sea salt.'
  },
  {
    id: '8',
    title: 'Macrocarpa Service Counter',
    category: 'Events',
    height: 340,
    bgGradient: 'from-[#F6B81A] to-[#F3C14B]',
    description: 'Handcrafted timber counter showcasing our daily morning bake selection.'
  },
  {
    id: '9',
    title: 'Saturday Neighbourhood Gathering',
    category: 'Events',
    height: 380,
    bgGradient: 'from-[#B7C99A] to-[#7B9656]',
    description: 'Friends and families gathering for late Saturday morning brunch.'
  }
];

export const GalleryView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Food', 'Coffee', 'Courtyard', 'Events'];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeFilter === 'All' ? true : item.category === activeFilter
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#E39B0B]">
          Atmosphere & Plates
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#2A1B12] text-balance">
          Life inside Kowhai Cafe
        </h1>
        <p className="text-[#7C6A58] text-base text-pretty">
          A visual glimpse into our Grey Lynn kitchen, sunlit courtyard garden, and daily morning coffee rituals.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter photos">
        {categories.map((cat) => {
          const isSelected = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setActiveLightboxIndex(null);
              }}
              aria-pressed={isSelected}
              className={`px-5 py-2.5 rounded-full font-body font-bold text-xs uppercase tracking-wider transition-all duration-150 ${
                isSelected
                  ? 'bg-[#2A1B12] text-[#FFF8E8] shadow-sm'
                  : 'bg-white text-[#2A1B12] border border-[#EBDFC4] hover:bg-[#F3E6C8]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Masonry-Style Photo Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxIndex(index)}
            className="break-inside-avoid rounded-3xl overflow-hidden border border-[#EBDFC4] group cursor-pointer relative transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E39B0B]"
            tabIndex={0}
            role="button"
            aria-label={`View ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveLightboxIndex(index);
              }
            }}
          >
            <div
              style={{ minHeight: `${item.height}px` }}
              className={`bg-gradient-to-br ${item.bgGradient} p-6 flex flex-col justify-between text-white relative`}
            >
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="size-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="size-4" />
                </span>
              </div>

              <div className="space-y-1 bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <h3 className="font-heading font-bold text-lg text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-white/90 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal Dialog */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Close photo preview"
          >
            <X className="size-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
              );
            }}
            className="absolute left-4 sm:left-8 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Modal Content */}
          <div
            className="max-w-2xl w-full bg-[#FFF8E8] rounded-3xl overflow-hidden shadow-2xl border border-[#EBDFC4] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`h-80 sm:h-96 bg-gradient-to-br ${activeItem.bgGradient} flex flex-col items-center justify-center text-white p-8 relative`}
            >
              <div className="size-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                <Camera className="size-10 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest bg-black/30 px-3.5 py-1 rounded-full">
                {activeItem.category}
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-extrabold text-2xl text-[#2A1B12]">
                  {activeItem.title}
                </h3>
                <span className="text-xs font-bold text-[#7C6A58] tabular-nums">
                  {((activeLightboxIndex ?? 0) + 1)} of {filteredItems.length}
                </span>
              </div>
              <p className="text-sm text-[#7C6A58] leading-relaxed text-pretty">
                {activeItem.description}
              </p>
              <div className="pt-4 border-t border-[#EBDFC4] flex items-center justify-between text-xs text-[#7C6A58]">
                <span>Photographed on site at Kowhai Cafe</span>
                <span className="font-semibold text-[#2A1B12]">Grey Lynn, Auckland</span>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : 0
              );
            }}
            className="absolute right-4 sm:right-8 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      )}

      {/* Instagram Community Banner */}
      <div className="rounded-[36px] bg-[#2A1B12] text-[#FFF8E8] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#3D291D]">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F6B81A] uppercase tracking-wider">
            <Instagram className="size-4" />
            <span>Community Gallery</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#FFF8E8]">
            Tag us in your morning flat white
          </h2>
          <p className="text-sm text-[#BFAE95] max-w-md">
            Follow @kowhaicafe on Instagram for daily cabinet releases, seasonal feijoa specials, and courtyard events.
          </p>
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F6B81A] hover:bg-[#E39B0B] text-[#2A1B12] font-bold text-sm transition-colors shrink-0"
        >
          <span>Follow @kowhaicafe</span>
          <ExternalLink className="size-4" />
        </a>
      </div>
    </div>
  );
};
