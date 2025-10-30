import React from 'react';
import { Trophy, Star, Users, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'Log Games',
    desc: 'Record every match you watch across leagues and seasons.'
  },
  {
    icon: Star,
    title: 'Rate & Review',
    desc: 'Share takes, ratings, and highlight moments with your feed.'
  },
  {
    icon: Users,
    title: 'Follow & Discuss',
    desc: 'Connect with fans who see the game your way.'
  },
  {
    icon: BarChart3,
    title: 'Your Stats',
    desc: 'Discover your habits across teams, players, and eras.'
  }
];

const Features = () => {
  return (
    <section id="features" className="w-full bg-[#0b0e13] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="mb-4 text-center text-sm uppercase tracking-[0.25em] text-emerald-400/80">Features</h3>
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold md:text-4xl" style={{fontFamily: 'Inter, ui-sans-serif'}}>
          Built for how fans watch sports today
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-emerald-400/30 hover:bg-white/[0.04]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-emerald-400/10 p-3 text-emerald-300 ring-1 ring-emerald-400/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h4 className="mb-2 text-lg font-semibold">{f.title}</h4>
              <p className="text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
