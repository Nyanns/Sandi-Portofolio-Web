// ============================================================
// components/apps/MyComputer.tsx
// A Windows XP-style My Computer / file explorer window.
// ============================================================

import React from 'react';

const DRIVES = [
  {
    name: 'Local Disk (C:)',
    free: '120 GB free',
    total: '500 GB',
    icon: 'https://img.icons8.com/color/48/hard-drive.png',
  },
  {
    name: 'DVD Drive (D:)',
    free: 'Empty',
    total: '4.7 GB',
    icon: 'https://img.icons8.com/color/48/dvd.png',
  },
  {
    name: 'Control Panel',
    free: '',
    total: '',
    icon: 'https://img.icons8.com/color/48/control-panel.png',
  },
  {
    name: 'Shared Documents',
    free: '45 GB free',
    total: '200 GB',
    icon: 'https://img.icons8.com/color/48/folder-invoices.png',
  },
];

export const MyComputer: React.FC = () => (
  <div className="flex flex-col h-full bg-[#f0f0ec]">
    {/* Menu bar */}
    <div className="bg-[#ece9d8] border-b border-[#aca899] px-3 py-1 flex items-center gap-4 text-xs">
      {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map((item) => (
        <span key={item} className="text-[#0040ae] cursor-pointer hover:underline">
          {item}
        </span>
      ))}
    </div>

    <div className="flex flex-1 overflow-hidden">
      {/* Left panel */}
      <aside className="w-48 bg-[#dce4f5] border-r border-[#aca899] p-3 flex flex-col gap-4 text-[11px]">
        <div>
          <p className="text-[10px] font-bold text-[#0040ae] uppercase tracking-wider mb-1">
            System Information
          </p>
          <p className="text-black font-bold mb-1">SandiOS™ Pro</p>
          <p className="text-gray-600 mb-2">Version 2026.03</p>
          <p className="text-[#0040ae] hover:underline cursor-pointer">› View system history</p>
          <p className="text-[#0040ae] hover:underline cursor-pointer">› Device Manager</p>
        </div>
        <div>
          <p className="text-[10px] font-bold text-[#0040ae] uppercase tracking-wider mb-1">
            Other Places
          </p>
          <p className="text-[#0040ae] hover:underline cursor-pointer">› My Documents</p>
          <p className="text-[#0040ae] hover:underline cursor-pointer">› My Network Places</p>
        </div>
      </aside>

      {/* Drive grid */}
      <main className="flex-1 p-4 overflow-y-auto bg-white grid grid-cols-2 gap-4 content-start">
        {DRIVES.map((drive) => (
          <div
            key={drive.name}
            className="flex items-center gap-2 p-2 hover:bg-[#e8f0fe] rounded cursor-pointer"
          >
            <img src={drive.icon} alt={drive.name} className="w-10 h-10 object-contain" />
            <div>
              <p className="text-[12px] font-bold">{drive.name}</p>
              {drive.free && (
                <p className="text-[10px] text-gray-500">
                  {drive.free} of {drive.total}
                </p>
              )}
            </div>
          </div>
        ))}
      </main>
    </div>

    {/* Status bar */}
    <div className="bg-[#ece9d8] border-t border-[#aca899] px-3 py-0.5 text-[10px] text-gray-600">
      {DRIVES.length} objects
    </div>
  </div>
);
