import React from 'react';
import { ShieldCheck, Clock, Users, Award } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const teamMembers = [
    {
      name: 'Aroha Tane',
      role: 'Co-Founder & Head Baker',
      bio: 'Trained in French artisan viennoiserie, Aroha begins firing our ovens at 4:30 am every weekday morning to ensure warm sourdough and morning buns for the neighbourhood.',
      focus: 'Heritage Sourdough & Lamination'
    },
    {
      name: 'Marcus Chen',
      role: 'Co-Founder & Coffee Director',
      bio: 'A former New Zealand Barista Championship finalist with 14 years behind espresso machines, Marcus personally cupps every microlot and calibrates extraction profiles daily.',
      focus: 'Roast Profiling & Extraction'
    },
    {
      name: 'Priya Sharma',
      role: 'Head Chef',
      bio: 'Bringing a background in modern Auckland bistros, Priya leads our kitchen with a firm commitment to zero food waste and relationships with organic regional growers.',
      focus: 'Seasonal Menu Development'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-20">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E6C8] border border-[#EBDFC4]">
            <span className="size-2 rounded-full bg-[#E39B0B]"></span>
            <span className="font-body text-xs font-bold text-[#7C6A58] uppercase tracking-wider">
              About Kowhai Cafe
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#2A1B12] leading-[1.1] text-balance">
            Rooted in Grey Lynn, brewed with intentional care
          </h1>

          <p className="font-body text-lg text-[#7C6A58] leading-relaxed text-pretty">
            In the winter of 2016, we opened on Richmond Road with a single espresso grinder, a secondhand deck oven, and four wooden tables. Ten years later, our philosophy has never budged: honest seasonal food, proper specialty coffee, and an open seat for every neighbour.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-[#F6B81A] hover:bg-[#E39B0B] text-[#2A1B12] font-bold text-sm transition-colors"
            >
              Come Say Hello
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="px-6 py-3 rounded-full bg-white hover:bg-[#F3E6C8] text-[#2A1B12] font-semibold text-sm transition-colors border border-[#EBDFC4]"
            >
              View Menu
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-[32px] bg-[#F3E6C8] border border-[#EBDFC4] p-8 space-y-6 relative overflow-hidden">
            <div className="h-64 rounded-2xl bg-[#FFF8E8] border border-[#EBDFC4] flex flex-col items-center justify-center p-6 text-center">
              <div className="size-16 rounded-full bg-[#F6B81A]/20 flex items-center justify-center text-[#E39B0B] mb-3">
                <Award className="size-8" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#2A1B12]">
                Our Grey Lynn Corner
              </h3>
              <p className="text-xs text-[#7C6A58] mt-2 text-pretty">
                Corner of Richmond Road & Chamberlain Street. A meeting place for the community since 2016.
              </p>
            </div>
            <div className="flex justify-between items-center text-xs font-semibold text-[#7C6A58] tabular-nums">
              <span>Established 2016</span>
              <span>100% Auckland Owned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Promises Values */}
      <section className="space-y-8">
        <div className="border-b border-[#EBDFC4] pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E39B0B]">Our Philosophy</span>
          <h2 className="font-heading font-extrabold text-3xl text-[#2A1B12] mt-1 text-balance">
            Three simple promises we keep every day
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white border border-[#EBDFC4] p-8 space-y-4">
            <div className="size-12 rounded-2xl bg-[#E6EDD8] flex items-center justify-center text-[#4F6B3A]">
              <ShieldCheck className="size-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#2A1B12]">
              1. Local First
            </h3>
            <p className="text-sm text-[#7C6A58] leading-relaxed text-pretty">
              We work with twelve Auckland growers, bakers, and micro-roasters, almost all known by first name. Money spent here stays in our local regional ecosystem.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-[#EBDFC4] p-8 space-y-4">
            <div className="size-12 rounded-2xl bg-[#FDF1CC] flex items-center justify-center text-[#E39B0B]">
              <Clock className="size-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#2A1B12]">
              2. Made Every Morning
            </h3>
            <p className="text-sm text-[#7C6A58] leading-relaxed text-pretty">
              Bread, morning buns, relish, dressings, and slow-braised meats are prepared from raw scratch in our kitchen every single morning. No industrial mixes, no preservatives.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-[#EBDFC4] p-8 space-y-4">
            <div className="size-12 rounded-2xl bg-[#F3E6C8] flex items-center justify-center text-[#2A1B12]">
              <Users className="size-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#2A1B12]">
              3. Everyone Welcome
            </h3>
            <p className="text-sm text-[#7C6A58] leading-relaxed text-pretty">
              Whether you are grabbing a quick 3-minute takeaway long black on your commute or sitting for two hours over the weekend papers with your dog, our space belongs to you.
            </p>
          </div>
        </div>
      </section>

      {/* Ten Years in the Making Timeline */}
      <section className="rounded-[36px] bg-[#2A1B12] text-[#FFF8E8] p-8 sm:p-14 space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F6B81A]">A Decade in Grey Lynn</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FFF8E8] text-balance">
            Ten years in the making
          </h2>
          <p className="text-sm text-[#BFAE95] max-w-xl text-pretty">
            How a tiny corner bakehouse grew into a beloved Grey Lynn fixture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-[#3D291D]">
          <div className="space-y-2">
            <span className="font-heading font-extrabold text-3xl text-[#F6B81A] tabular-nums">2016</span>
            <h3 className="font-bold text-base text-[#FFF8E8]">We Open</h3>
            <p className="text-xs text-[#BFAE95] leading-relaxed text-pretty">
              First batch of sourdough pulled from our secondhand stone deck oven. We served 42 coffees on day one.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-heading font-extrabold text-3xl text-[#F6B81A] tabular-nums">2018</span>
            <h3 className="font-bold text-base text-[#FFF8E8]">The Courtyard</h3>
            <p className="text-xs text-[#BFAE95] leading-relaxed text-pretty">
              Transformed the rear asphalt car park into a leafy, sun-drenched native plant sanctuary with outdoor heating.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-heading font-extrabold text-3xl text-[#F6B81A] tabular-nums">2021</span>
            <h3 className="font-bold text-base text-[#FFF8E8]">House Blend</h3>
            <p className="text-xs text-[#BFAE95] leading-relaxed text-pretty">
              Partnered with regional micro-roasters to formulate our bespoke high-altitude Ethiopian & Colombian espresso profile.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-heading font-extrabold text-3xl text-[#F6B81A] tabular-nums">2026</span>
            <h3 className="font-bold text-base text-[#FFF8E8]">A Decade Strong</h3>
            <p className="text-xs text-[#BFAE95] leading-relaxed text-pretty">
              Over 600 verified community reviews, thousands of morning loaves, and a team of 9 passionate local hospo professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <div className="border-b border-[#EBDFC4] pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E39B0B]">Our People</span>
          <h2 className="font-heading font-extrabold text-3xl text-[#2A1B12] mt-1 text-balance">
            Meet the faces behind the counter
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl bg-white border border-[#EBDFC4] p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-44 rounded-2xl bg-gradient-to-br from-[#F3E6C8] to-[#EBDFC4] flex flex-col items-center justify-center p-4 text-center">
                  <div className="size-16 rounded-full bg-white border border-[#EBDFC4] flex items-center justify-center font-heading font-extrabold text-2xl text-[#2A1B12] mb-2">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-xs font-bold text-[#4F6B3A] bg-[#E6EDD8] px-2.5 py-0.5 rounded-full">
                    {member.focus}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-xl text-[#2A1B12]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#E39B0B] uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>

                <p className="text-sm text-[#7C6A58] leading-relaxed text-pretty">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBDFC4]/60 text-[11px] font-bold text-[#7C6A58] uppercase">
                Grey Lynn Resident
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Callout */}
      <section className="rounded-3xl bg-[#F6B81A] p-8 sm:p-12 text-[#2A1B12] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#2A1B12]">
            Want to collaborate or host an event?
          </h2>
          <p className="text-sm text-[#2A1B12]/80 text-pretty">
            We partner with local artists, neighborhood groups, and host private evening events in our courtyard.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-full bg-[#2A1B12] text-[#FFF8E8] font-bold text-sm shrink-0 hover:bg-[#1D140D] transition-colors"
        >
          Contact Our Team
        </button>
      </section>
    </div>
  );
};
