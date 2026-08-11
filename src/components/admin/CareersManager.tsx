'use client';

import { useState, useEffect } from 'react';
import { CareerRole } from '@/app/api/cms/careers/route';
import { Plus, Edit2, Trash2, Briefcase, X, Save, CheckCircle, XCircle } from 'lucide-react';

export default function CareersManager() {
  const [roles, setRoles] = useState<CareerRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingRole, setEditingRole] = useState<Partial<CareerRole> | null>(null);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/cms/careers');
      const data = await res.json();
      setRoles(data);
    } catch (err) {
      console.error('Failed to fetch careers', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNew = () => {
    setIsNew(true);
    setEditingRole({
      id: Date.now().toString(),
      title: '',
      dept: 'Architecture',
      location: 'Cochin, Kerala',
      type: 'Full Time',
      desc: '',
      active: true,
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRole || !editingRole.title) return;

    const method = isNew ? 'POST' : 'PUT';
    try {
      const res = await fetch('/api/cms/careers', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingRole),
      });

      if (res.ok) {
        setEditingRole(null);
        fetchRoles();
      }
    } catch (err) {
      alert('Error saving career role');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this career opportunity?')) return;

    try {
      const res = await fetch(`/api/cms/careers?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchRoles();
      }
    } catch (err) {
      alert('Failed to delete career role');
    }
  };

  const handleToggleActive = async (role: CareerRole) => {
    try {
      const updated = { ...role, active: !role.active };
      const res = await fetch('/api/cms/careers', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
      if (res.ok) {
        fetchRoles();
      }
    } catch (err) {
      alert('Failed to toggle status');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
        <div>
          <h1 className="font-serif text-3xl text-[#161616]">Manage Career Opportunities</h1>
          <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">
            Post job openings, update requirements, locations, and toggle hiring status
          </p>
        </div>
        <button
          onClick={handleCreateNew}
          className="inline-flex items-center justify-center gap-2 bg-[#0D7A9E] hover:bg-[#0A2333] text-white px-5 py-3 rounded-xl font-sans text-xs uppercase font-semibold tracking-wider transition-all shadow-md"
        >
          <Plus size={16} /> Post New Job Opening
        </button>
      </div>

      {/* Roles List Grid */}
      {loading ? (
        <div className="text-center py-12 text-gray-400 font-sans text-sm">Loading careers...</div>
      ) : roles.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 text-gray-500 font-sans text-sm">
          No career opportunities posted yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r) => (
            <div
              key={r.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#0D7A9E] bg-[#0D7A9E]/10 px-2.5 py-1 rounded-full">
                    {r.dept}
                  </span>
                  <button
                    onClick={() => handleToggleActive(r)}
                    className={`flex items-center gap-1 font-sans text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full border ${
                      r.active
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-gray-100 text-gray-500 border-gray-200'
                    }`}
                  >
                    {r.active ? <CheckCircle size={12} /> : <XCircle size={12} />}
                    {r.active ? 'Hiring Active' : 'Closed'}
                  </button>
                </div>

                <h3 className="font-serif text-xl text-[#161616] mb-1">{r.title}</h3>
                <p className="font-sans text-xs text-gray-500 mb-3 font-medium">
                  {r.location} • {r.type}
                </p>
                <p className="font-sans text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                  {r.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="font-mono text-[10px] text-gray-400">ID: {r.id}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsNew(false);
                      setEditingRole(r);
                    }}
                    className="p-2 text-gray-600 hover:text-[#0D7A9E] hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200"
                    title="Edit"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(r.id)}
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
      {editingRole && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="font-serif text-2xl text-[#161616]">
                {isNew ? 'Post New Opportunity' : `Edit: ${editingRole.title}`}
              </h2>
              <button
                onClick={() => setEditingRole(null)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 font-medium">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingRole.title || ''}
                    onChange={(e) =>
                      setEditingRole({
                        ...editingRole,
                        title: e.target.value,
                        id: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
                      })
                    }
                    placeholder="e.g. Senior Architect"
                    className="w-full border border-gray-300 rounded-xl p-2.5 text-sm focus:border-[#0D7A9E] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 font-medium">
                    Department
                  </label>
                  <input
                    type="text"
                    required
                    value={editingRole.dept || ''}
                    onChange={(e) => setEditingRole({ ...editingRole, dept: e.target.value })}
                    placeholder="e.g. Architecture / Interior"
                    className="w-full border border-gray-300 rounded-xl p-2.5 text-sm focus:border-[#0D7A9E] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 font-medium">
                    Location
                  </label>
                  <input
                    type="text"
                    required
                    value={editingRole.location || ''}
                    onChange={(e) => setEditingRole({ ...editingRole, location: e.target.value })}
                    placeholder="e.g. Cochin, Kerala / Dubai"
                    className="w-full border border-gray-300 rounded-xl p-2.5 text-sm focus:border-[#0D7A9E] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 font-medium">
                    Employment Type
                  </label>
                  <input
                    type="text"
                    required
                    value={editingRole.type || ''}
                    onChange={(e) => setEditingRole({ ...editingRole, type: e.target.value })}
                    placeholder="e.g. Full Time / Contract"
                    className="w-full border border-gray-300 rounded-xl p-2.5 text-sm focus:border-[#0D7A9E] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-gray-700 mb-1 font-medium">
                  Role Description & Requirements
                </label>
                <textarea
                  rows={4}
                  required
                  value={editingRole.desc || ''}
                  onChange={(e) => setEditingRole({ ...editingRole, desc: e.target.value })}
                  placeholder="Describe experience requirements, software skills (AutoCAD, SketchUp, Lumion), and responsibilities..."
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:border-[#0D7A9E] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3 py-2">
                <input
                  type="checkbox"
                  id="activeToggle"
                  checked={editingRole.active ?? true}
                  onChange={(e) => setEditingRole({ ...editingRole, active: e.target.checked })}
                  className="w-4 h-4 text-[#0D7A9E] rounded focus:ring-[#0D7A9E]"
                />
                <label htmlFor="activeToggle" className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Currently Hiring (Active on Website)
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 border-t pt-4">
                <button
                  type="button"
                  onClick={() => setEditingRole(null)}
                  className="px-5 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-sans text-xs font-semibold uppercase tracking-wider hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0D7A9E] hover:bg-[#0A2333] text-white rounded-xl font-sans text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow"
                >
                  <Save size={16} /> Save Opportunity
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
