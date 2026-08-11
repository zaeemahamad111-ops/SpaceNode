'use client';

import { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';

interface AdminLoginFormProps {
  onSuccess: () => void;
}

export default function AdminLoginForm({ onSuccess }: AdminLoginFormProps) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/cms/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });

      const data = await res.json();
      if (data.success) {
        onSuccess();
      } else {
        setError(data.message || 'Invalid passcode');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A2333] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl text-white">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-[#0D7A9E]/20 border border-[#0D7A9E]/40 flex items-center justify-center mx-auto mb-4 text-[#0D7A9E]">
            <ShieldCheck size={28} />
          </div>
          <h1 className="font-serif text-3xl font-light tracking-wide mb-2">Space Node CMS</h1>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/60">Admin Access Control</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-sans text-xs uppercase tracking-[0.15em] text-white/70 mb-2">
              Security Passcode
            </label>
            <div className="relative">
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode..."
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-11 text-white placeholder-white/40 focus:outline-none focus:border-[#0D7A9E] focus:ring-1 focus:ring-[#0D7A9E] transition-all font-sans text-sm"
              />
              <Lock className="absolute left-4 top-3.5 text-white/40" size={16} />
            </div>
            <p className="mt-2 font-sans text-[11px] text-white/40">Default passcode: <span className="font-mono text-white/70">spacenode2026</span></p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl font-sans text-xs text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0D7A9E] hover:bg-[#0B6583] text-white py-3.5 px-6 rounded-xl font-sans text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#0D7A9E]/20 disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Enter Dashboard'}
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
