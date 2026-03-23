// ============================================================
// types.ts
// Shared TypeScript types used across the application.
// ============================================================

export type WindowId = string;

export interface AppWindow {
  id: WindowId;
  /** Window title bar text */
  title: string;
  /** Material Symbols icon name shown in the title bar */
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  /** CSS z-index; managed by the store to handle focus order */
  zIndex: number;
}

export interface DesktopIconConfig {
  /** Matches a key in the Zustand windows registry */
  id: WindowId;
  label: string;
  /** Key into the Icons map from XpIcons.tsx */
  iconName: string;
}
