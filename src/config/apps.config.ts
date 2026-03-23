// ============================================================
// config/apps.config.tsx
// Central registry of every app window in the desktop OS.
//
// To ADD a new app:
//   1. Add a record here with a unique id
//   2. Register the same id in the Zustand store (store/useStore.ts)
//   3. Render a <Window id="..."> in App.tsx
// ============================================================

import React from 'react';
import type { DesktopIconConfig } from '../types';

// ── App Window Metadata ──────────────────────────────────────
// Determines the initial Zustand window state for every app.
export const WINDOW_REGISTRY: Record<
  string,
  { title: string; icon: string }
> = {
  portfolio:    { title: 'Portfolio - Internet Explorer', icon: 'language' },
  computer:     { title: 'My Computer',                  icon: 'computer' },
  notepad:      { title: 'about_me.txt - Notepad',       icon: 'edit_document' },
  resume:       { title: 'Resume.doc',                   icon: 'description' },
  media_player: { title: 'Windows Media Player',         icon: 'music_note' },
  paint:        { title: 'Untitled - Paint',             icon: 'brush' },
  calculator:   { title: 'Calculator',                   icon: 'calculate' },
};

// ── Desktop Icon Layout ──────────────────────────────────────
// Defines which icons appear on the desktop and their SVG icon keys.
export const DESKTOP_ICONS: DesktopIconConfig[] = [
  { id: 'portfolio',    label: 'Portfolio.ie',  iconName: 'portfolio' },
  { id: 'computer',     label: 'My Computer',   iconName: 'computer' },
  { id: 'notepad',      label: 'about_me.txt',  iconName: 'notepad' },
  { id: 'resume',       label: 'Resume.doc',    iconName: 'resume' },
  { id: 'media_player', label: 'Media Player',  iconName: 'media_player' },
  { id: 'paint',        label: 'Paint',         iconName: 'paint' },
  { id: 'calculator',   label: 'Calculator',    iconName: 'calculator' },
  { id: 'recycle_bin',  label: 'Recycle Bin',   iconName: 'recycle_bin' }, // No associated window
];

// ── Start Menu Shortcuts ─────────────────────────────────────
export const START_MENU_APPS: { id: string; iconName: string; name: string; sub?: string }[] = [
  { id: 'portfolio',    iconName: 'portfolio',    name: 'Internet Explorer', sub: 'Portfolio Browser' },
  { id: 'notepad',      iconName: 'notepad',      name: 'Notepad',           sub: 'about_me.txt' },
  { id: 'media_player', iconName: 'media_player', name: 'Media Player' },
  { id: 'paint',        iconName: 'paint',        name: 'Paint' },
  { id: 'calculator',   iconName: 'calculator',   name: 'Calculator' },
  { id: 'resume',       iconName: 'resume',       name: 'Resume.doc' },
];

export const START_MENU_SYSTEM_LINKS: { id?: string; iconName: string; name: string }[] = [
  { id: 'computer', iconName: 'computer', name: 'My Computer' },
  { id: 'resume',   iconName: 'folder',   name: 'My Documents' },
  { iconName: 'settings', name: 'Control Panel' },
  { iconName: 'search',   name: 'Search' },
  { iconName: 'help',     name: 'Help and Support' },
];
