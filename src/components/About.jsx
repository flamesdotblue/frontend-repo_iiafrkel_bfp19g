import React from 'react';

const About = () => {
  return (
    <section className="relative w-full bg-[#0b0e13] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold md:text-4xl" style={{fontFamily: 'Inter, ui-sans-serif'}}>
            Track every game. Relive every moment.
          </h2>
          <span className="hidden rounded-full border border-white/10 px-3 py-1 text-xs text-white/60 md:inline-block">Concept</span>
        </div>
        <p className="mx-auto mb-12 max-w-3xl text-white/80">
          Scoreboxd is the ultimate home for sports fans. Log every game you watch, rate performances, build your fan identity, and connect with others who live and breathe sports.
        </p>

        {/* Minimalist mockups */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="mb-4 h-6 w-24 rounded-full bg-white/10" />
            <div className="mb-3 h-10 w-48 rounded-md bg-white/10" />
            <div className="mb-2 h-4 w-3/4 rounded bg-white/10" />
            <div className="mb-2 h-4 w-2/3 rounded bg-white/10" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="h-24 rounded-md bg-white/10" />
              <div className="h-24 rounded-md bg-white/10" />
              <div className="h-24 rounded-md bg-white/10" />
            </div>
            <p className="mt-4 text-sm text-white/60">Profile • Recent games • Highlights</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/10" />
              <div>
                <div className="mb-1 h-3 w-24 rounded bg-white/10" />
                <div className="h-3 w-16 rounded bg-white/10" />
              </div>
            </div>
            <div className="mb-2 h-4 w-5/6 rounded bg-white/10" />
            <div className="mb-2 h-4 w-3/4 rounded bg-white/10" />
            <div className="mb-6 h-4 w-2/3 rounded bg-white/10" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-24 rounded-md bg-white/10" />
              <div className="h-24 rounded-md bg-white/10" />
            </div>
            <p className="mt-4 text-sm text-white/60">Reviews • Reactions • Feed</p>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <blockquote className="text-lg text-white/90">“Letterboxd for sports? I’m in.” — Early beta tester</blockquote>
          <div className="mt-4 flex items-center gap-4 text-white/40">
            <span className="text-xs">As seen in</span>
            <div className="h-4 w-20 rounded bg-white/10" />
            <div className="h-4 w-24 rounded bg-white/10" />
            <div className="h-4 w-16 rounded bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
