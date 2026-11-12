import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const NewsView: React.FC = () => {
  const articles = [
    {
      id: '1',
      date: '02 May 2026',
      readTime: '3 min read',
      tag: 'Seasonal Menu',
      title: 'Welcoming the Autumn 2026 Harvest: Organic Feijoas and Smoked Salmon Potato Cakes',
      excerpt: 'As crisp mornings settle over Grey Lynn, we transition our kitchen cabinet to warm braised greens, Matakana feijoas, and our new Agria potato cake with Mt Cook King salmon.',
    },
    {
      id: '2',
      date: '18 April 2026',
      readTime: '4 min read',
      tag: 'Roastery Notes',
      title: 'Inside Our Single-Origin Ethiopian Cold Brew Steep',
      excerpt: 'How a 16-hour slow immersion extraction preserves delicate bergamot, jasmine florals, and subtle stone fruit sweetness without astringency.',
    },
    {
      id: '3',
      date: '28 March 2026',
      readTime: '2 min read',
      tag: 'Community',
      title: 'Our North-Facing Courtyard Pergola Upgrade is Complete',
      excerpt: 'New native cedar timber cladding, integrated ceramic heating, and additional sheltered tables for weekend brunch in any weather.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#E39B0B]">
          Neighbourhood Journal
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#2A1B12] text-balance">
          Stories, seasons and coffee craft
        </h1>
        <p className="text-[#7C6A58] text-base text-pretty">
          Updates from our bakers, seasonal menu notes, and reflections on community life in Grey Lynn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((art) => (
          <article
            key={art.id}
            className="rounded-3xl bg-white border border-[#EBDFC4] p-6 space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#7C6A58] tabular-nums">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F3E6C8] font-bold text-[#2A1B12]">
                  {art.tag}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Calendar className="size-3" />
                  {art.date}
                </span>
              </div>

              <h2 className="font-heading font-bold text-xl text-[#2A1B12] leading-snug">
                {art.title}
              </h2>

              <p className="text-sm text-[#7C6A58] leading-relaxed text-pretty">
                {art.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#EBDFC4]/60 flex items-center justify-between text-xs font-semibold text-[#2A1B12]">
              <span className="text-[#7C6A58]">{art.readTime}</span>
              <span className="inline-flex items-center gap-1 text-[#E39B0B] hover:text-[#2A1B12] transition-colors cursor-pointer">
                <span>Read Story</span>
                <ArrowRight className="size-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
