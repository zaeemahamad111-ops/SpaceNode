'use client';

import { useState, useEffect } from 'react';
import ImageUploadInput from '@/components/admin/ImageUploadInput';
import { Save, Check, Search, Share2 } from 'lucide-react';

interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
}

interface SEOData {
  home?: PageSEO;
  about?: PageSEO;
  expertise?: PageSEO;
  projects?: PageSEO;
  products?: PageSEO;
  contact?: PageSEO;
}

const pagesList = [
  { key: 'home' as keyof SEOData, label: 'Home Page (`/`)' },
  { key: 'about' as keyof SEOData, label: 'About Us Page (`/about`)' },
  { key: 'expertise' as keyof SEOData, label: 'Expertise Page (`/expertise`)' },
  { key: 'projects' as keyof SEOData, label: 'Selected Works (`/projects`)' },
  { key: 'products' as keyof SEOData, label: 'Arte \'O\' Node (`/products`)' },
  { key: 'contact' as keyof SEOData, label: 'Contact Page (`/contact`)' },
];

export default function SEOManager() {
  const [seo, setSeo] = useState<SEOData>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [selectedPage, setSelectedPage] = useState<keyof SEOData>('home');

  useEffect(() => {
    fetchSEO();
  }, []);

  const fetchSEO = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/cms/seo');
      const data = await res.json();
      setSeo(data);
    } catch (err) {
      console.error('Failed to load SEO tags', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageSEOChange = (pageKey: keyof SEOData, field: keyof PageSEO, val: string) => {
    const currentPageSEO = seo[pageKey] || { title: '', description: '', keywords: '', ogImage: '' };
    setSeo({
      ...seo,
      [pageKey]: {
        ...currentPageSEO,
        [field]: val,
      },
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);

    try {
      const res = await fetch('/api/cms/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(seo),
      });

      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        alert('Failed to save SEO settings');
      }
    } catch (err) {
      alert('Error saving SEO settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12 text-gray-400 font-sans text-sm">Loading SEO settings...</div>;
  }

  const activePageData = seo[selectedPage] || { title: '', description: '', keywords: '', ogImage: '' };

  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="font-serif text-3xl text-[#161616]">Manage SEO & Meta Tags</h1>
        <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">
          Customize search engine page titles, meta descriptions, search keywords, and WhatsApp/Social share cards
        </p>
      </div>

      {/* Page Tabs Switcher */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
        {pagesList.map((p) => (
          <button
            key={p.key}
            onClick={() => setSelectedPage(p.key)}
            className={`px-4 py-2 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedPage === p.key
                ? 'bg-[#0D7A9E] text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {p.label.split(' (`')[0]}
          </button>
        ))}
      </div>

      <form onSubmit={handleSave} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="font-serif text-xl text-[#161616] flex items-center gap-2">
            <Search size={20} className="text-[#0D7A9E]" /> {pagesList.find((p) => p.key === selectedPage)?.label}
          </h2>
          <span className="font-mono text-xs text-gray-400">SEO Settings</span>
        </div>

        <div className="space-y-5">
          {/* Meta Title */}
          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 font-medium">
              Page Title (&lt;title&gt;)
            </label>
            <input
              type="text"
              value={activePageData.title || ''}
              onChange={(e) => handlePageSEOChange(selectedPage, 'title', e.target.value)}
              placeholder="e.g. Space Node Architects | Structured · Styled · Sustained"
              className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:border-[#0D7A9E] focus:outline-none"
            />
            <p className="mt-1 font-sans text-[11px] text-gray-400">Appears as the main title in Google search results and browser tab.</p>
          </div>

          {/* Meta Description */}
          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 font-medium">
              Meta Description
            </label>
            <textarea
              rows={3}
              value={activePageData.description || ''}
              onChange={(e) => handlePageSEOChange(selectedPage, 'description', e.target.value)}
              placeholder="Summarize the page content for search engines..."
              className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:border-[#0D7A9E] focus:outline-none"
            />
            <p className="mt-1 font-sans text-[11px] text-gray-400">Recommended length: 150-160 characters for optimal snippet preview.</p>
          </div>

          {/* Meta Keywords */}
          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 font-medium">
              Search Keywords (Comma separated)
            </label>
            <input
              type="text"
              value={activePageData.keywords || ''}
              onChange={(e) => handlePageSEOChange(selectedPage, 'keywords', e.target.value)}
              placeholder="architecture, interior design, Kerala architects, Space Node..."
              className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:border-[#0D7A9E] focus:outline-none"
            />
          </div>

          {/* OpenGraph Share Image */}
          <div className="pt-2">
            <h3 className="font-sans text-xs uppercase tracking-wider text-gray-700 mb-3 flex items-center gap-1.5 font-medium">
              <Share2 size={14} className="text-[#0D7A9E]" /> Social Share Card Image (OpenGraph)
            </h3>
            <ImageUploadInput
              label="Share Preview Image URL"
              value={activePageData.ogImage || ''}
              onChange={(url) => handlePageSEOChange(selectedPage, 'ogImage', url)}
              placeholder="/images/filename.jpg or /uploads/filename.jpg"
            />
            <p className="mt-1 font-sans text-[11px] text-gray-400">This image appears when sharing this page link on WhatsApp, Facebook, or iMessage.</p>
          </div>
        </div>

        {/* Save Bar */}
        <div className="pt-4 border-t flex items-center justify-between">
          {saved ? (
            <span className="text-emerald-600 font-sans text-xs font-semibold flex items-center gap-1">
              <Check size={16} /> SEO settings saved!
            </span>
          ) : (
            <span />
          )}

          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 bg-[#0D7A9E] hover:bg-[#0A2333] text-white rounded-xl font-sans text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow transition-all disabled:opacity-50"
          >
            <Save size={16} /> {saving ? 'Saving...' : 'Save All SEO Settings'}
          </button>
        </div>
      </form>
    </div>
  );
}
