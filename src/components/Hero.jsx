import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleScrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0e13] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradients for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-emerald-400/80">Coming soon for iOS and Android</p>
        <h1 className="mb-6 font-semibold leading-tight text-white" style={{fontFamily: 'Inter, ui-sans-serif'}}>
          <span className="block text-4xl sm:text-5xl md:text-6xl">Your sports, your stats,</span>
          <span className="block text-4xl sm:text-5xl md:text-6xl">your story.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 sm:text-lg">
          Scoreboxd lets you log games, rate performances, and share takes with fans — just like Letterboxd, but for sports.
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={handleScrollToWaitlist}
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Join the Waitlist
          </button>
          <a
            href="#features"
            className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
