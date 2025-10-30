import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import WaitlistCTA from './components/WaitlistCTA';
import { Instagram, Twitter, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0e13] text-white">
      <Hero />
      <About />
      <Features />
      <WaitlistCTA />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0b0e13] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif'}}>Scoreboxd<span className="text-emerald-400">.</span></div>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="Website" className="rounded p-2 transition hover:bg-white/5 hover:text-white"><Globe className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="rounded p-2 transition hover:bg-white/5 hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="rounded p-2 transition hover:bg-white/5 hover:text-white"><Instagram className="h-5 w-5" /></a>
          </div>
          <div className="text-xs text-white/50">© 2025 Scoreboxd. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
