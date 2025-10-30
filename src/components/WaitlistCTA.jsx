import React, { useState } from 'react';

const WaitlistCTA = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const validate = () => {
    if (!name.trim()) return 'Please enter your name.';
    const emailOk = /.+@.+\..+/.test(email);
    if (!emailOk) return 'Please enter a valid email address.';
    return '';
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate();
    if (err) {
      setErrorMsg(err);
      setStatus('error');
      return;
    }
    // No backend wiring yet; simulate success and store locally for demo
    try {
      const existing = JSON.parse(localStorage.getItem('scoreboxd_waitlist') || '[]');
      existing.push({ name, email, joinedAt: new Date().toISOString() });
      localStorage.setItem('scoreboxd_waitlist', JSON.stringify(existing));
      setStatus('success');
      setName('');
      setEmail('');
    } catch (err2) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="waitlist" className="relative w-full bg-[#0b0e13] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl" style={{fontFamily: 'Inter, ui-sans-serif'}}>
            Be one of the first to join Scoreboxd.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            We’re launching soon. Get early access and shape the future of sports fandom.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-2xl">
          <div className="grid gap-4 sm:grid-cols-3">
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-emerald-400/30 transition focus:ring sm:col-span-1"
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-emerald-400/30 transition focus:ring sm:col-span-1"
            />
            <button
              type="submit"
              className="col-span-3 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:col-span-1"
            >
              Join the Waitlist
            </button>
          </div>
          <div className="mt-3 text-center text-xs text-white/60">No spam. Just launch updates.</div>
          {status === 'success' && (
            <div className="mt-4 rounded-md border border-emerald-400/30 bg-emerald-400/10 p-3 text-center text-sm text-emerald-300">
              You’re on the list! We’ll be in touch soon.
            </div>
          )}
          {status === 'error' && errorMsg && (
            <div className="mt-4 rounded-md border border-red-400/30 bg-red-500/10 p-3 text-center text-sm text-red-300">
              {errorMsg}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default WaitlistCTA;
