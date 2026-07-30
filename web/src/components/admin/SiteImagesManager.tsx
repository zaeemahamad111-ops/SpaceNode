'use client';

import { useState, useEffect } from 'react';
import ImageUploadInput from '@/components/admin/ImageUploadInput';
import { Save, Check, Layers, Layout, Compass, ShoppingBag, Globe } from 'lucide-react';

interface SiteContent {
  home?: {
    heroBgImage?: string;
    aboutPreviewImage?: string;
    expertiseArchitectureImage?: string;
    expertiseInteriorImage?: string;
    expertiseLandscapeImage?: string;
    expertiseConsultancyImage?: string;
    ctaBgImage?: string;
  };
  about?: {
    heroImage?: string;
    studioStoryImage?: string;
    philosophyImage?: string;
  };
  expertise?: {
    architectureImage?: string;
    interiorImage?: string;
    landscapeImage?: string;
    projectManagementImage?: string;
  };
  products?: {
    heroLogoImage?: string;
  };
  global?: {
    logoImage?: string;
    footerBgImage?: string;
  };
}

export default function SiteImagesManager() {
  const [content, setContent] = useState<SiteContent>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/cms/site-content');
      const data = await res.json();
      setContent(data);
    } catch (err) {
      console.error('Failed to load site content', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);

    try {
      const res = await fetch('/api/cms/site-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });

      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        alert('Failed to save site images');
      }
    } catch (err) {
      alert('Error saving site images');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12 text-gray-400 font-sans text-sm">Loading site images...</div>;
  }

  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="font-serif text-3xl text-[#161616]">Manage Site Images & Section Assets</h1>
        <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">
          Directly preview and upload new photos for any page or section across the website
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Home Page Images */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
          <h2 className="font-serif text-xl text-[#161616] border-b pb-3 flex items-center gap-2">
            <Layout size={20} className="text-[#0D7A9E]" /> Home Page (`/`) Photos
          </h2>

          <div className="space-y-6">
            <ImageUploadInput
              label="Home About Section Image"
              value={content.home?.aboutPreviewImage || ''}
              onChange={(url) =>
                setContent({
                  ...content,
                  home: { ...content.home, aboutPreviewImage: url },
                })
              }
            />

            <div className="pt-4 border-t border-gray-100 space-y-5">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#0D7A9E]">
                Home Page — Areas of Expertise Section Photos
              </h3>

              <ImageUploadInput
                label="01. Architectural Design Card Image"
                value={content.home?.expertiseArchitectureImage || ''}
                onChange={(url) =>
                  setContent({
                    ...content,
                    home: { ...content.home, expertiseArchitectureImage: url },
                  })
                }
              />

              <ImageUploadInput
                label="02. Interior Design Card Image"
                value={content.home?.expertiseInteriorImage || ''}
                onChange={(url) =>
                  setContent({
                    ...content,
                    home: { ...content.home, expertiseInteriorImage: url },
                  })
                }
              />

              <ImageUploadInput
                label="03. Landscape Design Card Image"
                value={content.home?.expertiseLandscapeImage || ''}
                onChange={(url) =>
                  setContent({
                    ...content,
                    home: { ...content.home, expertiseLandscapeImage: url },
                  })
                }
              />

              <ImageUploadInput
                label="04. Project Management Card Image"
                value={content.home?.expertiseConsultancyImage || ''}
                onChange={(url) =>
                  setContent({
                    ...content,
                    home: { ...content.home, expertiseConsultancyImage: url },
                  })
                }
              />
            </div>
          </div>
        </div>

        {/* Expertise Page Images */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
          <h2 className="font-serif text-xl text-[#161616] border-b pb-3 flex items-center gap-2">
            <Compass size={20} className="text-[#0D7A9E]" /> Expertise Page (`/expertise`) Photos
          </h2>

          <div className="space-y-5">
            <ImageUploadInput
              label="01. Architectural Design Showcase Photo"
              value={content.expertise?.architectureImage || ''}
              onChange={(url) =>
                setContent({
                  ...content,
                  expertise: { ...content.expertise, architectureImage: url },
                })
              }
            />

            <ImageUploadInput
              label="02. Interior Design Showcase Photo"
              value={content.expertise?.interiorImage || ''}
              onChange={(url) =>
                setContent({
                  ...content,
                  expertise: { ...content.expertise, interiorImage: url },
                })
              }
            />

            <ImageUploadInput
              label="03. Landscape Design Showcase Photo"
              value={content.expertise?.landscapeImage || ''}
              onChange={(url) =>
                setContent({
                  ...content,
                  expertise: { ...content.expertise, landscapeImage: url },
                })
              }
            />

            <ImageUploadInput
              label="04. Project Management Showcase Photo"
              value={content.expertise?.projectManagementImage || ''}
              onChange={(url) =>
                setContent({
                  ...content,
                  expertise: { ...content.expertise, projectManagementImage: url },
                })
              }
            />
          </div>
        </div>

        {/* About Page Images */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
          <h2 className="font-serif text-xl text-[#161616] border-b pb-3 flex items-center gap-2">
            <Layers size={20} className="text-[#0D7A9E]" /> About Us Page (`/about`) Photos
          </h2>

          <div className="space-y-5">
            <ImageUploadInput
              label="Studio Story Image"
              value={content.about?.studioStoryImage || ''}
              onChange={(url) =>
                setContent({
                  ...content,
                  about: { ...content.about, studioStoryImage: url },
                })
              }
            />

            <ImageUploadInput
              label="Design Philosophy Image"
              value={content.about?.philosophyImage || ''}
              onChange={(url) =>
                setContent({
                  ...content,
                  about: { ...content.about, philosophyImage: url },
                })
              }
            />
          </div>
        </div>

        {/* Products Page Images */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
          <h2 className="font-serif text-xl text-[#161616] border-b pb-3 flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#0D7A9E]" /> Arte 'O' Node Page (`/products`) Assets
          </h2>

          <div className="space-y-5">
            <ImageUploadInput
              label="AON Brand Hero Logo Image"
              value={content.products?.heroLogoImage || ''}
              onChange={(url) =>
                setContent({
                  ...content,
                  products: { ...content.products, heroLogoImage: url },
                })
              }
            />
          </div>
        </div>

        {/* Global Branding & Logos */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
          <h2 className="font-serif text-xl text-[#161616] border-b pb-3 flex items-center gap-2">
            <Globe size={20} className="text-[#0D7A9E]" /> Studio Branding Assets
          </h2>

          <div className="space-y-5">
            <ImageUploadInput
              label="Header & Footer Logo"
              value={content.global?.logoImage || ''}
              onChange={(url) =>
                setContent({
                  ...content,
                  global: { ...content.global, logoImage: url },
                })
              }
            />
          </div>
        </div>

        {/* Save Bar */}
        <div className="pt-4 flex items-center justify-between">
          {saved ? (
            <span className="text-emerald-600 font-sans text-xs font-semibold flex items-center gap-1">
              <Check size={16} /> All site images saved!
            </span>
          ) : (
            <span />
          )}

          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 bg-[#0D7A9E] hover:bg-[#0A2333] text-white rounded-xl font-sans text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow transition-all disabled:opacity-50"
          >
            <Save size={16} /> {saving ? 'Saving...' : 'Save All Site Images'}
          </button>
        </div>
      </form>
    </div>
  );
}
