import React, { useState } from 'react';
import { Utensils, Heart, ChevronDown, ChevronUp, Star, ArrowRight, Clock, Award, ShieldCheck } from 'lucide-react';
import { MENU_ITEMS } from '../lib/menu';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you take table reservations on weekends?',
      a: 'We operate primarily on a walk-in basis to welcome neighbourhood regulars quickly. For weekday groups of 6 or more, please contact us 24 hours in advance via our contact form.'
    },
    {
      q: 'What plant milk and dietary alternatives do you offer?',
      a: 'We offer Otis Oat milk, organic soy, almond, and coconut milk at no extra charge. Over half of our seasonal dishes are naturally vegetarian or can be adapted for vegan and gluten-free dietary requirements.'
    },
    {
      q: 'Is there outdoor seating and are dogs welcome?',
      a: 'Yes, our north-facing courtyard features shaded garden seating and heaters during cooler mornings. Well-behaved dogs on leashes are always welcome and fresh water bowls are provided.'
    },
    {
      q: 'Do you cater for corporate breakfasts or private events?',
      a: 'Yes, we provide morning tea boxes, sandwich platters, and whole cakes for local businesses in Grey Lynn and Ponsonby. Visit our Catering page to view packages.'
    },
    {
      q: 'Where do you source your coffee beans?',
      a: 'Our signature Kowhai blend is roasted exclusively in Auckland with ethically traded beans from Colombia and Ethiopia, delivering notes of cocoa nib, toffee, and candied citrus.'
    },
    {
      q: 'Is there parking available nearby?',
      a: 'There is free 60-minute street parking along Richmond Road and unrestricted parking on surrounding residential side streets.'
    }
  ];

  const featuredItems = MENU_ITEMS.filter((item) => item.seasonal || item.id === 'flat-white' || item.id === 'feijoa-almond-loaf').slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 pt-12 lg:pt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E6C8] border border-[#EBDFC4]">
              <span className="size-2 rounded-full bg-[#E39B0B]"></span>
              <span className="font-body text-xs font-bold text-[#7C6A58] uppercase tracking-wider">
                Grey Lynn Neighbourhood Artisan Cafe
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#2A1B12] leading-[1.08] tracking-tight text-balance">
              Honest morning food, roasted properly in Grey Lynn
            </h1>

            <p className="font-body text-lg sm:text-xl text-[#7C6A58] leading-relaxed max-w-xl text-pretty">
              Baking sourdough before sunrise, pouring silky flat whites from 7am, and serving real seasonal sustenance in our sunlit courtyard.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('menu')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F6B81A] hover:bg-[#E39B0B] text-[#2A1B12] font-body font-bold text-base transition-all duration-150 shadow-sm hover:shadow active:scale-95"
              >
                <span>Explore Autumn Menu</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-[#F3E6C8] text-[#2A1B12] font-body font-semibold text-base transition-colors border border-[#EBDFC4]"
              >
                Hours & Location
              </button>
            </div>

            {/* Social Proof Signals */}
            <div className="pt-6 border-t border-[#EBDFC4]/80 flex flex-wrap items-center gap-8 text-xs text-[#7C6A58]">
              <div className="flex items-center gap-2">
                <div className="flex text-[#E39B0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-[#2A1B12] tabular-nums">4.9 / 5.0</span>
                <span>(620+ local reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="size-4 text-[#4F6B3A]" />
                <span className="font-medium">Metro Top 50 Cafe 2024-2026</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-[32px] overflow-hidden bg-gradient-to-br from-[#F6B81A] via-[#E39B0B] to-[#4F6B3A] p-1 shadow-xl">
                <div className="rounded-[28px] bg-[#FFF8E8] p-7 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#E6EDD8] text-[#4F6B3A] font-bold text-xs uppercase tracking-wide">
                      Morning Special
                    </span>
                    <span className="font-heading font-extrabold text-2xl text-[#2A1B12] tabular-nums">
                      $23.50
                    </span>
                  </div>

                  {/* Stylised Illustration Frame */}
                  <div className="h-64 rounded-2xl bg-[#F3E6C8] border border-[#EBDFC4] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                    <div className="size-20 rounded-full bg-[#FFF8E8] border border-[#EBDFC4] flex items-center justify-center mb-3 shadow-inner">
                      <Utensils className="size-8 text-[#E39B0B]" />
                    </div>
                    <p className="font-heading font-extrabold text-xl text-[#2A1B12]">
                      The Kowhai Smash
                    </p>
                    <p className="text-xs text-[#7C6A58] mt-1 text-pretty">
                      Poached free-range eggs, smashed avocado, whipped feta, toasted seeds on seeded sourdough
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-2.5 rounded-xl bg-[#FBF6EF] border border-[#EBDFC4]">
                      <span className="block text-[11px] text-[#7C6A58] uppercase font-semibold">Prep</span>
                      <span className="font-bold text-sm text-[#2A1B12] tabular-nums">8 min</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#FBF6EF] border border-[#EBDFC4]">
                      <span className="block text-[11px] text-[#7C6A58] uppercase font-semibold">Dietary</span>
                      <span className="font-bold text-sm text-[#4F6B3A]">Vegetarian</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#FBF6EF] border border-[#EBDFC4]">
                      <span className="block text-[11px] text-[#7C6A58] uppercase font-semibold">Eggs</span>
                      <span className="font-bold text-sm text-[#2A1B12]">Free Range</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill Tag */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-[#EBDFC4] px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="size-3 rounded-full bg-[#4F6B3A]"></div>
                <div>
                  <p className="text-xs font-bold text-[#2A1B12]">Cabinet Fresh Today</p>
                  <p className="text-[11px] text-[#7C6A58] tabular-nums">Baked at 5:30 am</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white p-8 border border-[#EBDFC4] space-y-4 hover:shadow-md transition-shadow">
              <div className="size-12 rounded-2xl bg-[#E6EDD8] flex items-center justify-center text-[#4F6B3A]">
                <ShieldCheck className="size-6" />
              </div>
              <h2 className="font-heading font-bold text-xl text-[#2A1B12] text-balance">
                12 Auckland Growers
              </h2>
              <p className="text-sm text-[#7C6A58] leading-relaxed text-pretty">
                We know our suppliers by first name. Organic greens from Clevedon, heritage milk from Northland, free-range eggs from Waiuku.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 border border-[#EBDFC4] space-y-4 hover:shadow-md transition-shadow">
              <div className="size-12 rounded-2xl bg-[#FDF1CC] flex items-center justify-center text-[#E39B0B]">
                <Clock className="size-6" />
              </div>
              <h2 className="font-heading font-bold text-xl text-[#2A1B12] text-balance">
                Made Fresh Each Morning
              </h2>
              <p className="text-sm text-[#7C6A58] leading-relaxed text-pretty">
                Bread, loaves, tarts, and slow-cooked sauces made in-house before the front doors unlock at 7am. Nothing frozen or shortcuts.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 border border-[#EBDFC4] space-y-4 hover:shadow-md transition-shadow">
              <div className="size-12 rounded-2xl bg-[#F3E6C8] flex items-center justify-center text-[#2A1B12]">
                <Heart className="size-6" />
              </div>
              <h2 className="font-heading font-bold text-xl text-[#2A1B12] text-balance">
                Everyone is Welcome
              </h2>
              <p className="text-sm text-[#7C6A58] leading-relaxed text-pretty">
                Prams, neighborhood dogs, quick takeaway coffees, or slow catchups across our big communal macrocarpa timber table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Favourites Preview */}
      <section className="px-4 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EBDFC4] pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E39B0B]">
                House Specialties
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2A1B12] mt-1 text-balance">
                Grey Lynn Favourites
              </h2>
            </div>
            <button
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center gap-1.5 font-body font-bold text-sm text-[#2A1B12] hover:text-[#E39B0B] transition-colors"
            >
              <span>View full 14-item menu</span>
              <ArrowRight className="size-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-[#EBDFC4] p-6 space-y-4 flex flex-col justify-between hover:border-[#E39B0B] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading font-bold text-lg text-[#2A1B12] leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-heading font-extrabold text-lg text-[#2A1B12] tabular-nums shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-[#7C6A58] text-pretty leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EBDFC4]/60 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-[#E6EDD8] text-[#4F6B3A] text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.seasonal && (
                      <span className="px-2 py-0.5 rounded-full bg-[#FDF1CC] text-[#E39B0B] text-xs font-bold">
                        Seasonal
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-[#7C6A58] uppercase">Cabinet / Kitchen</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ten Years in Grey Lynn Milestone Strip */}
      <section className="px-4 sm:px-8">
        <div className="max-w-6xl mx-auto rounded-[36px] bg-[#2A1B12] text-[#FFF8E8] p-8 sm:p-14 space-y-10">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6B81A]">
              Our Heritage
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FFF8E8] text-balance">
              Ten years of craft, coffee and community
            </h2>
            <p className="text-sm text-[#BFAE95] text-pretty leading-relaxed">
              We started in 2016 with a single second-hand commercial oven and a passion for honest food.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-[#3D291D]">
            {[
              { year: '2016', label: 'Doors opened', note: 'Single grinder and four tables' },
              { year: '2018', label: 'Courtyard expansion', note: 'Added outdoor garden seating' },
              { year: '2021', label: 'Exclusive roast', note: 'Created signature Kowhai bean' },
              { year: '2026', label: '620+ reviews', note: 'Proudly serving Grey Lynn daily' },
            ].map((stat) => (
              <div key={stat.year} className="space-y-1">
                <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-[#F6B81A] tabular-nums">
                  {stat.year}
                </span>
                <span className="block font-bold text-sm text-[#FFF8E8]">{stat.label}</span>
                <span className="block text-xs text-[#BFAE95]">{stat.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (Accordion) */}
      <section className="px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E39B0B]">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2A1B12] text-balance">
              Everything you need to know before visiting
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-[#EBDFC4] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-[#FFF8E8]/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-base text-[#2A1B12]">
                      {faq.q}
                    </span>
                    <span className="size-7 rounded-full bg-[#F3E6C8] flex items-center justify-center shrink-0 text-[#2A1B12]">
                      {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-[#7C6A58] leading-relaxed text-pretty border-t border-[#EBDFC4]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="px-4 sm:px-8">
        <div className="max-w-6xl mx-auto rounded-[36px] bg-[#F6B81A] p-8 sm:p-12 text-[#2A1B12] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-2 max-w-lg">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2A1B12] text-balance">
              Join us for breakfast tomorrow morning
            </h2>
            <p className="text-base text-[#2A1B12]/80 text-pretty">
              Doors open at 7:00 am sharp on Richmond Road. Warm bread, fresh brew, and relaxed courtyard vibes.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-full bg-[#2A1B12] hover:bg-[#1D140D] text-[#FFF8E8] font-body font-bold text-base transition-colors"
            >
              Get Directions
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-[#FFF8E8] text-[#2A1B12] font-body font-semibold text-base transition-colors border border-[#E39B0B]"
            >
              Full Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
