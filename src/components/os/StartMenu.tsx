// ============================================================
// components/os/StartMenu.tsx
// Windows XP-styled Start Menu popup.
// Data is driven from config/apps.config.ts — adding a new
// app to START_MENU_APPS automatically shows it here.
// ============================================================

import React from 'react';
import { useStore } from '../../store/useStore';
import { Icons } from './XpIcons';
import { START_MENU_APPS, START_MENU_SYSTEM_LINKS } from '../../config/apps.config';

const USER_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeNzHd0B9ObqrYgXSl8XP3Olaod80z3gflZi2Nr7PbrxrpeeQJSesqFd_fj4wVfxa2BzZbM_RGk2u4BcjXwcWAiUwVdvMfN4TZ4vFZ1puuAEDTMlGSE2A4b50u06TkK7qTOWyYn2PNj3vN6HUHE12ZhgGrf3k9ojSIXB3pRdGFsiJ4P3XNKioEwOMDnO90so-k9jYHNkOyYLD42tq_6l0yrqyClIseVCWNAeK3j5uHe4aiLdrmd8yNwP_9rLfOqI_BJBgyXY4fFg';

// ── Sub-components ────────────────────────────────────────────

const AppButton: React.FC<{
  id: string;
  iconName: string;
  name: string;
  sub?: string;
  onLaunch: (id: string) => void;
}> = ({ id, iconName, name, sub, onLaunch }) => {
  const SvgIcon = Icons[iconName];
  return (
    <button
      onClick={() => onLaunch(id)}
      className="flex items-center gap-3 px-3 py-2 hover:bg-[#316ac5] hover:text-white transition-colors w-full group"
    >
      <span className="w-8 h-8 shrink-0 flex items-center justify-center">
        {SvgIcon && <SvgIcon size={32} />}
      </span>
      <div className="text-left leading-tight overflow-hidden">
        <p className="font-bold text-sm truncate">{name}</p>
        {sub && <p className="text-xs opacity-60 truncate">{sub}</p>}
      </div>
    </button>
  );
};

const SystemLink: React.FC<{
  id?: string;
  iconName: string;
  name: string;
  onLaunch: (id: string) => void;
}> = ({ id, iconName, name, onLaunch }) => {
  const SvgIcon = Icons[iconName];
  return (
    <button
      onClick={() => id && onLaunch(id)}
      className="flex items-center gap-3 px-3 py-1.5 hover:bg-[#316ac5] hover:text-white transition-colors w-full group"
    >
      <span className="w-6 h-6 shrink-0 flex items-center justify-center">
        {SvgIcon && <SvgIcon size={24} />}
      </span>
      <span className="font-semibold text-sm text-blue-900 group-hover:text-white">{name}</span>
    </button>
  );
};

// ── StartMenu ─────────────────────────────────────────────────

export const StartMenu: React.FC = () => {
  const { isStartMenuOpen, openWindow, closeStartMenu, logout } = useStore();

  if (!isStartMenuOpen) return null;

  const launch = (id: string) => {
    openWindow(id);
    closeStartMenu();
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed bottom-[34px] left-0 w-96 bg-white shadow-[2px_-2px_15px_rgba(0,0,0,0.5)] z-[100] flex flex-col overflow-hidden border border-[#0a246a] font-body select-none"
      style={{ borderRadius: '8px 8px 0 0' }}
    >
      {/* Header: User info */}
      <div className="bg-gradient-to-r from-[#0f3397] to-[#1a8fe3] px-4 py-3 flex items-center gap-3">
        <div className="w-12 h-12 rounded-sm overflow-hidden border border-white/60 shadow-md">
          <img src={USER_AVATAR} alt="User" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-white font-bold text-xl italic drop-shadow tracking-wider">SandiOS<sup className="text-[10px] ml-0.5">™</sup></h2>
      </div>

      {/* Body: Two-column layout */}
      <div className="flex bg-white" style={{ height: '380px' }}>

        {/* Left: Pinned Apps */}
        <div className="w-1/2 flex flex-col border-r border-[#c5d0de]">
          <div className="flex-1 py-1 overflow-y-auto">
            {START_MENU_APPS.map((app) => (
              <AppButton key={app.id} {...app} onLaunch={launch} />
            ))}
          </div>
          <div className="border-t border-[#c5d0de] py-1.5 px-3">
            <button className="w-full flex items-center justify-between py-1.5 px-2 hover:bg-[#316ac5] hover:text-white rounded-sm text-sm font-bold transition-colors">
              <span>All Programs</span>
              <span className="text-xs">▶</span>
            </button>
          </div>
        </div>

        {/* Right: System Links */}
        <div className="w-1/2 bg-[#d3e5fa] flex flex-col py-1">
          {START_MENU_SYSTEM_LINKS.map((link, i) => (
            <SystemLink key={i} {...link} onLaunch={launch} />
          ))}
          <div className="mx-3 my-1 h-px bg-gradient-to-r from-transparent via-[#7fa8cf] to-transparent" />
          <button className="flex items-center gap-3 px-3 py-1.5 hover:bg-[#316ac5] hover:text-white transition-colors group w-full">
            <span className="material-symbols-outlined text-xl text-blue-900 group-hover:text-white">run_circle</span>
            <span className="font-semibold text-sm text-blue-900 group-hover:text-white">Run...</span>
          </button>
        </div>
      </div>

      {/* Footer: Log off / Turn off */}
      <div className="bg-gradient-to-r from-[#0f3397] to-[#1a8fe3] px-4 py-2 flex items-center justify-end gap-8 border-t border-[#0a246a]">
        <button onClick={logout} className="flex items-center gap-1.5 text-white hover:brightness-110">
          <span className="material-symbols-outlined text-lg text-yellow-300">key</span>
          <span className="text-xs">Log Off</span>
        </button>
        <button className="flex items-center gap-1.5 text-white hover:brightness-110">
          <span className="material-symbols-outlined text-lg text-red-400">power_settings_new</span>
          <span className="text-xs">Turn Off Computer</span>
        </button>
      </div>
    </div>
  );
};
