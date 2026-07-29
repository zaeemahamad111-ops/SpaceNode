'use client';

import { useState, useEffect } from 'react';
import { ContactInfo } from '@/app/api/cms/contact/route';
import { Save, Check, MapPin, Phone, Mail, Map, Share2, Globe } from 'lucide-react';

export default function ContactManager() {
  const [contact, setContact] = useState<ContactInfo>({
    address: '',
    phone: '',
    email: '',
    mapUrl: '',
    mapEmbedUrl: '',
    instagramUrl: '',
    facebookUrl: '',
    linkedinUrl: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/cms/contact');
      const data = await res.json();
      setContact(data);
    } catch (err) {
      console.error('Failed to load contact info', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);

    try {
      const res = await fetch('/api/cms/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      });

      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        alert('Failed to save contact info');
      }
    } catch (err) {
      alert('Error saving contact info');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12 text-gray-400 font-sans text-sm">Loading contact info...</div>;
  }

  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="font-serif text-3xl text-[#161616]">Manage Contact & Social Links</h1>
        <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">
          Update business address, contact numbers, map links, and social media handles
        </p>
      </div>

      <form onSubmit={handleSave} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
        <h2 className="font-serif text-xl text-[#161616] border-b pb-3 flex items-center gap-2">
          <MapPin size={20} className="text-[#0D7A9E]" /> Office & Contact Details
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1">
              Office Address
            </label>
            <textarea
              rows={2}
              value={contact.address || ''}
              onChange={(e) => setContact({ ...contact, address: e.target.value })}
              className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:border-[#0D7A9E] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 flex items-center gap-1.5">
                <Phone size={14} className="text-gray-400" /> Phone Number
              </label>
              <input
                type="text"
                value={contact.phone || ''}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:border-[#0D7A9E] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 flex items-center gap-1.5">
                <Mail size={14} className="text-gray-400" /> Business Email
              </label>
              <input
                type="email"
                value={contact.email || ''}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:border-[#0D7A9E] focus:outline-none"
              />
            </div>
          </div>
        </div>

        <h2 className="font-serif text-xl text-[#161616] border-b pb-3 pt-4 flex items-center gap-2">
          <Map size={20} className="text-[#0D7A9E]" /> Google Maps Integration
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1">
              Google Maps Clickable Link
            </label>
            <input
              type="text"
              value={contact.mapUrl || ''}
              onChange={(e) => setContact({ ...contact, mapUrl: e.target.value })}
              placeholder="https://maps.google.com/?q=..."
              className="w-full border border-gray-300 rounded-xl p-3 text-sm font-mono text-xs focus:border-[#0D7A9E] focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1">
              Google Maps Embed iFrame Source URL
            </label>
            <input
              type="text"
              value={contact.mapEmbedUrl || ''}
              onChange={(e) => setContact({ ...contact, mapEmbedUrl: e.target.value })}
              placeholder="https://maps.google.com/maps?q=...&output=embed"
              className="w-full border border-gray-300 rounded-xl p-3 text-sm font-mono text-xs focus:border-[#0D7A9E] focus:outline-none"
            />
          </div>
        </div>

        <h2 className="font-serif text-xl text-[#161616] border-b pb-3 pt-4 flex items-center gap-2">
          <Share2 size={20} className="text-[#0D7A9E]" /> Social Media Handles
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 flex items-center gap-1.5">
              <Globe size={14} className="text-gray-400" /> Instagram Profile Link
            </label>
            <input
              type="text"
              value={contact.instagramUrl || ''}
              onChange={(e) => setContact({ ...contact, instagramUrl: e.target.value })}
              className="w-full border border-gray-300 rounded-xl p-3 text-sm font-mono text-xs focus:border-[#0D7A9E] focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 flex items-center gap-1.5">
              <Globe size={14} className="text-gray-400" /> Facebook Page Link
            </label>
            <input
              type="text"
              value={contact.facebookUrl || ''}
              onChange={(e) => setContact({ ...contact, facebookUrl: e.target.value })}
              className="w-full border border-gray-300 rounded-xl p-3 text-sm font-mono text-xs focus:border-[#0D7A9E] focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 flex items-center gap-1.5">
              <Globe size={14} className="text-gray-400" /> LinkedIn Profile Link
            </label>
            <input
              type="text"
              value={contact.linkedinUrl || ''}
              onChange={(e) => setContact({ ...contact, linkedinUrl: e.target.value })}
              className="w-full border border-gray-300 rounded-xl p-3 text-sm font-mono text-xs focus:border-[#0D7A9E] focus:outline-none"
            />
          </div>
        </div>

        <div className="pt-4 border-t flex items-center justify-between">
          {saved ? (
            <span className="text-emerald-600 font-sans text-xs font-semibold flex items-center gap-1">
              <Check size={16} /> Saved successfully!
            </span>
          ) : (
            <span />
          )}

          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 bg-[#0D7A9E] hover:bg-[#0A2333] text-white rounded-xl font-sans text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow transition-all disabled:opacity-50"
          >
            <Save size={16} /> {saving ? 'Saving...' : 'Save All Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
