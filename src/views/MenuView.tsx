import React, { useState } from 'react';
import { Search, Sparkles, Filter } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, DietaryTag } from '../lib/menu';

export const MenuView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || item.tags.includes(selectedTag as DietaryTag);
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTag && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-10 space-y-8 sm:space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#E39B0B]">
          Autumn 2026 Season
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#2A1B12] text-balance">
          Our Seasonal Food & Drink
        </h1>
        <p className="text-[#7C6A58] text-base text-pretty">
          Every item is crafted in-house daily with produce from local Auckland growers and ethical regional suppliers.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-6 border border-[#EBDFC4] shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full font-body font-bold text-xs uppercase tracking-wide transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#2A1B12] text-[#FFF8E8]'
                  : 'bg-[#F3E6C8] text-[#2A1B12] hover:bg-[#EBDFC4]'
              }`}
            >
              All Dishes
            </button>
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-body font-bold text-xs uppercase tracking-wide transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#2A1B12] text-[#FFF8E8]'
                    : 'bg-[#F3E6C8] text-[#2A1B12] hover:bg-[#EBDFC4]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="size-4 text-[#7C6A58] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or ingredients..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FFF8E8] border border-[#EBDFC4] text-sm text-[#2A1B12] placeholder-[#7C6A58]/70 focus:outline-none focus:border-[#E39B0B]"
            />
          </div>
        </div>

        {/* Dietary Tag Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#EBDFC4]/60 text-xs">
          <span className="flex items-center gap-1.5 font-bold text-[#7C6A58] mr-2">
            <Filter className="size-3.5" />
            Dietary:
          </span>
          {[
            { id: 'all', label: 'All Diets' },
            { id: 'V', label: 'Vegetarian (V)' },
            { id: 'VG', label: 'Vegan (VG)' },
            { id: 'GF', label: 'Gluten Free (GF)' },
            { id: 'DF', label: 'Dairy Free (DF)' },
          ].map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-3 py-1 rounded-full font-semibold transition-colors ${
                selectedTag === tag.id
                  ? 'bg-[#4F6B3A] text-white'
                  : 'bg-[#FBF6EF] text-[#7C6A58] hover:bg-[#E6EDD8] hover:text-[#4F6B3A] border border-[#EBDFC4]'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Categories Grid */}
      <div className="space-y-12">
        {MENU_CATEGORIES.filter((cat) => selectedCategory === 'all' || selectedCategory === cat.id).map(
          (cat) => {
            const itemsInCat = filteredItems.filter((i) => i.category === cat.id);
            if (itemsInCat.length === 0) return null;

            return (
              <section key={cat.id} className="space-y-6">
                <div className="border-b border-[#EBDFC4] pb-4">
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#2A1B12]">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-[#7C6A58] font-medium">{cat.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {itemsInCat.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-3xl bg-white border border-[#EBDFC4] p-6 space-y-3 flex flex-col justify-between hover:shadow-sm transition-shadow"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-heading font-bold text-lg text-[#2A1B12]">
                            {item.name}
                          </h3>
                          <span className="font-heading font-extrabold text-lg text-[#2A1B12] tabular-nums shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-[#7C6A58] leading-relaxed text-pretty">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-[#EBDFC4]/50">
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-full bg-[#E6EDD8] text-[#4F6B3A] text-xs font-bold"
                            >
                              {tag}
                            </span>
                          ))}
                          {item.seasonal && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FDF1CC] text-[#E39B0B] text-xs font-bold">
                              <Sparkles className="size-3" />
                              Seasonal Special
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-semibold text-[#7C6A58] uppercase">
                          Fresh Today
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          }
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#EBDFC4] space-y-3">
            <p className="font-heading font-bold text-xl text-[#2A1B12]">No dishes match your filter</p>
            <p className="text-sm text-[#7C6A58]">Try selecting "All Dishes" or clearing your search phrase.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTag('all');
                setSearchQuery('');
              }}
              className="mt-2 px-5 py-2 rounded-full bg-[#F6B81A] text-[#2A1B12] font-bold text-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Seasonal Highlight Card */}
      <div className="rounded-3xl bg-[#FDF1CC] border border-[#E39B0B]/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E39B0B] text-[#FFF8E8] text-xs font-bold uppercase tracking-wider">
            Autumn Harvest Note
          </span>
          <h3 className="font-heading font-bold text-xl text-[#2A1B12]">
            Feijoa season is here
          </h3>
          <p className="text-sm text-[#7C6A58] max-w-xl text-pretty">
            We are receiving weekly drops of organic tree-ripened feijoas from the Matakana coast for our daily bircher bowls and house-baked loaves.
          </p>
        </div>
        <div className="shrink-0">
          <span className="text-xs font-bold text-[#7C6A58] block mb-1 uppercase tracking-wide">Serving through May</span>
          <span className="font-heading font-extrabold text-2xl text-[#2A1B12] tabular-nums">$8.50 per slice</span>
        </div>
      </div>
    </div>
  );
};
