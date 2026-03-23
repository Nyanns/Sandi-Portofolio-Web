// ============================================================
// store/useStore.ts
// Global Zustand store for the desktop OS state.
//
// Responsible for:
//   - Open/close/minimize/maximize windows
//   - Focus/z-index management
//   - Start menu visibility
//   - Login/logout state
// ============================================================

import { create } from 'zustand';
import type { AppWindow, WindowId } from '../types';
import { WINDOW_REGISTRY } from '../config/apps.config';

// Re-export for backward compatibility (old imports still work)
export type { AppWindow, WindowId } from '../types';

// ── Initial window state factory ─────────────────────────────
// Builds the windows map from the central app registry.
function buildInitialWindows(): Record<WindowId, AppWindow> {
  return Object.entries(WINDOW_REGISTRY).reduce((acc, [id, meta]) => {
    acc[id] = {
      id,
      title: meta.title,
      icon: meta.icon,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
    };
    return acc;
  }, {} as Record<WindowId, AppWindow>);
}

// ── Store interface ──────────────────────────────────────────
interface StoreState {
  windows: Record<WindowId, AppWindow>;
  activeWindowId: WindowId | null;
  isStartMenuOpen: boolean;
  isLoggedIn: boolean;

  // Window actions
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  maximizeWindow: (id: WindowId) => void;
  restoreWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;

  // UI actions
  toggleStartMenu: () => void;
  closeStartMenu: () => void;
  login: () => void;
  logout: () => void;
}

// ── Helper: get the next z-index value ───────────────────────
function nextZIndex(windows: Record<WindowId, AppWindow>): number {
  return Math.max(0, ...Object.values(windows).map((w) => w.zIndex)) + 1;
}

// ── Store implementation ─────────────────────────────────────
export const useStore = create<StoreState>((set) => ({
  windows: buildInitialWindows(),
  activeWindowId: null,
  isStartMenuOpen: false,
  isLoggedIn: false,

  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false, isStartMenuOpen: false }),

  openWindow: (id) =>
    set((state) => ({
      activeWindowId: id,
      isStartMenuOpen: false,
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isOpen: true,
          isMinimized: false,
          zIndex: nextZIndex(state.windows),
        },
      },
    })),

  closeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isOpen: false },
      },
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    })),

  minimizeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMinimized: true },
      },
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    })),

  maximizeWindow: (id) =>
    set((state) => ({
      activeWindowId: id,
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isMaximized: true,
          isMinimized: false,
          zIndex: nextZIndex(state.windows),
        },
      },
    })),

  restoreWindow: (id) =>
    set((state) => ({
      activeWindowId: id,
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isMaximized: false,
          isMinimized: false,
          zIndex: nextZIndex(state.windows),
        },
      },
    })),

  focusWindow: (id) =>
    set((state) => {
      // Already focused and visible — only close the start menu
      if (state.activeWindowId === id && !state.windows[id].isMinimized) {
        return { isStartMenuOpen: false };
      }
      return {
        activeWindowId: id,
        isStartMenuOpen: false,
        windows: {
          ...state.windows,
          [id]: {
            ...state.windows[id],
            isMinimized: false,
            zIndex: nextZIndex(state.windows),
          },
        },
      };
    }),

  toggleStartMenu: () =>
    set((state) => ({ isStartMenuOpen: !state.isStartMenuOpen })),

  closeStartMenu: () => set({ isStartMenuOpen: false }),
}));
