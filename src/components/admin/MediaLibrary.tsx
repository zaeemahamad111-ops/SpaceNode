'use client';

import { useState, useEffect } from 'react';
import { Upload, Copy, Check, Trash2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface MediaFile {
  filename: string;
  url: string;
  size: number;
  createdAt: string;
}

export default function MediaLibrary() {
  const [media, setMedia] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/cms/media');
      const data = await res.json();
      setMedia(data);
    } catch (err) {
      console.error('Failed to load media library', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', files[0]);

    try {
      const res = await fetch('/api/cms/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        fetchMedia();
      } else {
        alert('Upload failed');
      }
    } catch (err) {
      alert('Upload error');
    } finally {
      setUploading(false);
    }
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const handleDelete = async (filename: string) => {
    if (!confirm('Are you sure you want to delete this media file?')) return;

    try {
      const res = await fetch(`/api/cms/media?filename=${filename}`, { method: 'DELETE' });
      if (res.ok) {
        fetchMedia();
      }
    } catch (err) {
      alert('Failed to delete file');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header & Upload Box */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
        <div>
          <h1 className="font-serif text-3xl text-[#161616]">Media & Photo Library</h1>
          <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">
            Upload and manage photos for projects, team profiles, and site assets
          </p>
        </div>

        <label className="inline-flex items-center justify-center gap-2 bg-[#0D7A9E] hover:bg-[#0A2333] text-white px-5 py-3 rounded-xl font-sans text-xs uppercase font-semibold tracking-wider transition-all shadow-md cursor-pointer">
          <Upload size={16} />
          {uploading ? 'Uploading...' : 'Upload New Photo'}
          <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" disabled={uploading} />
        </label>
      </div>

      {/* Media Grid */}
      {loading ? (
        <div className="text-center py-12 text-gray-400 font-sans text-sm">Loading media library...</div>
      ) : media.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300 p-8 space-y-3">
          <ImageIcon size={48} className="mx-auto text-gray-300" />
          <p className="font-serif text-xl text-gray-600">No uploaded photos yet</p>
          <p className="font-sans text-xs text-gray-400 max-w-sm mx-auto">
            Click "Upload New Photo" above to add project photography or team images to your server.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {media.map((item) => {
            const isCopied = copiedUrl === item.url;
            return (
              <div
                key={item.filename}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <Image src={item.url} alt={item.filename} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div className="p-4 space-y-2">
                  <p className="font-mono text-[11px] text-gray-600 truncate" title={item.url}>
                    {item.url}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <button
                      onClick={() => handleCopy(item.url)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all ${
                        isCopied
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-gray-100 hover:bg-[#0D7A9E] hover:text-white text-gray-700'
                      }`}
                    >
                      {isCopied ? <Check size={13} /> : <Copy size={13} />}
                      {isCopied ? 'Copied!' : 'Copy URL'}
                    </button>

                    <button
                      onClick={() => handleDelete(item.filename)}
                      className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Image"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
