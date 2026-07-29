'use client';

import { useState, useEffect } from 'react';
import AdminLoginForm from '@/components/admin/AdminLoginForm';
import AdminNavbar, { AdminTab } from '@/components/admin/AdminNavbar';
import ProjectsManager from '@/components/admin/ProjectsManager';
import TeamManager from '@/components/admin/TeamManager';
import MediaLibrary from '@/components/admin/MediaLibrary';
import ContactManager from '@/components/admin/ContactManager';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<AdminTab>('projects');

  useEffect(() => {
    // Check if authenticated
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/cms/projects');
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/cms/auth', { method: 'DELETE' });
    } catch (err) {
      console.error(err);
    }
    setIsAuthenticated(false);
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#0A2333] flex items-center justify-center text-white/50 font-sans text-sm">
        Verifying security credentials...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLoginForm onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#161616]">
      <AdminNavbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout}
      />

      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-10">
        {activeTab === 'projects' && <ProjectsManager />}
        {activeTab === 'team' && <TeamManager />}
        {activeTab === 'media' && <MediaLibrary />}
        {activeTab === 'contact' && <ContactManager />}
      </main>
    </div>
  );
}
