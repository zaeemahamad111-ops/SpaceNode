'use client';

import { useState, useEffect } from 'react';
import { TestimonialItem } from '@/app/api/cms/testimonials/route';
import ImageUploadInput from '@/components/admin/ImageUploadInput';
import { Plus, Edit2, Trash2, Quote, X, Save, User } from 'lucide-react';
import Image from 'next/image';

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<Partial<TestimonialItem> | null>(null);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/cms/testimonials');
      const data = await res.json();
      setTestimonials(data);
    } catch (err) {
      console.error('Failed to fetch testimonials', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNew = () => {
    setIsNew(true);
    setEditingItem({
      id: Date.now().toString(),
      quote: '',
      name: '',
      designation: 'Client',
      company: 'Residential Project',
      image: '/images/expertise-architecture.png',
      clientImage: '',
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem || !editingItem.quote || !editingItem.name) return;

    const method = isNew ? 'POST' : 'PUT';
    try {
      const res = await fetch('/api/cms/testimonials', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingItem),
      });

      if (res.ok) {
        setEditingItem(null);
        fetchTestimonials();
      }
    } catch (err) {
      alert('Error saving testimonial');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const res = await fetch(`/api/cms/testimonials?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchTestimonials();
      }
    } catch (err) {
      alert('Failed to delete testimonial');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
        <div>
          <h1 className="font-serif text-3xl text-[#161616]">Manage Client Testimonials</h1>
          <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">
            Add client quotes, photos, designations, and background showcase photos
          </p>
        </div>
        <button
          onClick={handleCreateNew}
          className="inline-flex items-center justify-center gap-2 bg-[#0D7A9E] hover:bg-[#0A2333] text-white px-5 py-3 rounded-xl font-sans text-xs uppercase font-semibold tracking-wider transition-all shadow-md"
        >
          <Plus size={16} /> Add Testimonial
        </button>
      </div>

      {/* Testimonials List Grid */}
      {loading ? (
        <div className="text-center py-12 text-gray-400 font-sans text-sm">Loading testimonials...</div>
      ) : testimonials.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 text-gray-500 font-sans text-sm">
          No testimonials added yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-40 bg-gray-100">
                  {item.image ? (
                    <Image src={item.image} alt={item.company} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Quote size={32} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-sans text-xs font-semibold tracking-wider">
                    {item.company}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <p className="font-serif italic text-sm text-gray-800 leading-relaxed line-clamp-3">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                    <div className="relative w-9 h-9 rounded-full bg-gray-100 border overflow-hidden flex items-center justify-center flex-shrink-0">
                      {item.clientImage ? (
                        <Image src={item.clientImage} alt={item.name} fill className="object-cover" />
                      ) : (
                        <User size={18} className="text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-semibold text-[#161616]">{item.name}</h4>
                      <p className="font-sans text-[10px] text-[#0D7A9E] uppercase tracking-wider">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <span className="font-mono text-[10px] text-gray-400">ID: {item.id}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsNew(false);
                      setEditingItem(item);
                    }}
                    className="p-2 text-gray-600 hover:text-[#0D7A9E] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-200"
                    title="Edit"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit / Create Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="font-serif text-2xl text-[#161616]">
                {isNew ? 'Add Client Testimonial' : `Edit Testimonial: ${editingItem.name}`}
              </h2>
              <button
                onClick={() => setEditingItem(null)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-5">
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 font-medium">
                  Client Quote / Review *
                </label>
                <textarea
                  rows={4}
                  required
                  value={editingItem.quote || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, quote: e.target.value })}
                  placeholder="Space Node transformed our vision into a timeless space..."
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:border-[#0D7A9E] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 font-medium">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingItem.name || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    placeholder="e.g. Anand Menon"
                    className="w-full border border-gray-300 rounded-xl p-2.5 text-sm focus:border-[#0D7A9E] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 font-medium">
                    Designation / Title
                  </label>
                  <input
                    type="text"
                    required
                    value={editingItem.designation || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, designation: e.target.value })}
                    placeholder="e.g. Client / CEO / Managing Director"
                    className="w-full border border-gray-300 rounded-xl p-2.5 text-sm focus:border-[#0D7A9E] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 font-medium">
                  Project Name / Company *
                </label>
                <input
                  type="text"
                  required
                  value={editingItem.company || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, company: e.target.value })}
                  placeholder="e.g. The Kerala Residence"
                  className="w-full border border-gray-300 rounded-xl p-2.5 text-sm focus:border-[#0D7A9E] focus:outline-none"
                />
              </div>

              {/* Background Showcase Photo */}
              <ImageUploadInput
                label="Showcase Background Photo"
                value={editingItem.image || ''}
                onChange={(url) => setEditingItem({ ...editingItem, image: url })}
              />

              {/* Client Avatar Photo */}
              <ImageUploadInput
                label="Client Avatar / Profile Photo (Optional)"
                value={editingItem.clientImage || ''}
                onChange={(url) => setEditingItem({ ...editingItem, clientImage: url })}
              />

              <div className="flex items-center justify-end gap-3 border-t pt-4">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-5 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-sans text-xs font-semibold uppercase tracking-wider hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0D7A9E] hover:bg-[#0A2333] text-white rounded-xl font-sans text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow"
                >
                  <Save size={16} /> Save Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
