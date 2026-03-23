// ============================================================
// components/os/Desktop.tsx
// Renders the desktop background layer with:
//   - Draggable icons (positions stored in local state)
//   - Single-click selection
//   - Double-click to open a window
//   - Right-click context menu
// ============================================================

import React, { useState, useCallback, useRef } from 'react';
import { useStore } from '../../store/useStore';
import { ContextMenu } from './ContextMenu';
import { Icons } from './XpIcons';
import { DESKTOP_ICONS } from '../../config/apps.config';

// ── Types ────────────────────────────────────────────────────
interface DraggableIcon {
  id: string;
  label: string;
  iconName: string;
  x: number;
  y: number;
}

// ── Initial positions for all icons ──────────────────────────
const ICON_SPACING = 90;
const INITIAL_ICONS: DraggableIcon[] = DESKTOP_ICONS.map((icon, i) => ({
  ...icon,
  x: 10,
  y: 10 + i * ICON_SPACING,
}));

// ── Desktop Component ────────────────────────────────────────
export const Desktop: React.FC = () => {
  const { openWindow } = useStore();

  const [icons, setIcons] = useState<DraggableIcon[]>(INITIAL_ICONS);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);

  // Track drag state without causing re-renders
  const dragging = useRef<{
    id: string;
    startMouseX: number;
    startMouseY: number;
    startIconX: number;
    startIconY: number;
  } | null>(null);
  const hasMoved = useRef(false);

  // ── Drag logic ──────────────────────────────────────────────
  const handleMouseDown = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    hasMoved.current = false;
    const icon = icons.find((ic) => ic.id === id)!;
    dragging.current = {
      id,
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startIconX: icon.x,
      startIconY: icon.y,
    };
    setSelectedId(id);

    const onMouseMove = (ev: MouseEvent) => {
      if (!dragging.current) return;
      const dx = ev.clientX - dragging.current.startMouseX;
      const dy = ev.clientY - dragging.current.startMouseY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) hasMoved.current = true;
      setIcons((prev) =>
        prev.map((ic) =>
          ic.id === dragging.current!.id
            ? {
                ...ic,
                x: Math.max(0, dragging.current!.startIconX + dx),
                y: Math.max(0, dragging.current!.startIconY + dy),
              }
            : ic
        )
      );
    };

    const onMouseUp = () => {
      dragging.current = null;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }, [icons]);

  // ── Open app on double-click ────────────────────────────────
  const handleDoubleClick = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    // Don't open if the mouse moved (it was a drag, not a click)
    if (!hasMoved.current && id !== 'recycle_bin') {
      openWindow(id);
    }
  }, [openWindow]);

  // ── Context menu on right-click ──────────────────────────────
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <>
      {/* ── Background Catcher ───────────────────────────────── */}
      {/* Captures clicks on the desktop background (z-index 0, behind windows which are z-index 1+) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-auto"
        onContextMenu={handleContextMenu}
        onClick={() => { setContextMenu(null); setSelectedId(null); }}
      />

      {/* ── Icons Layer ──────────────────────────────────────── */}
      {/* This layer sits in front of windows (z-10) but passes clicks through (pointer-events-none) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
      {/* ── Desktop Icons ──────────────────────────────────────── */}
      {icons.map((icon) => {
        const SvgIcon = Icons[icon.iconName];
        const isSelected = selectedId === icon.id;

        return (
          <button
            key={icon.id}
            className="absolute flex flex-col items-center gap-0.5 w-[72px] p-1 focus:outline-none pointer-events-auto"
            style={{ left: icon.x, top: icon.y, cursor: 'default', userSelect: 'none', background: 'transparent' }}
            onMouseDown={(e) => handleMouseDown(e, icon.id)}
            onDoubleClick={(e) => handleDoubleClick(e, icon.id)}
            onClick={(e) => e.stopPropagation()}
          >
            {/* SVG Icon */}
            <div
              className="w-12 h-12 flex items-center justify-center"
              style={{
                filter: isSelected
                  ? 'brightness(0.6) saturate(0.4) sepia(0.5)'
                  : 'drop-shadow(1px 2px 3px rgba(0,0,0,0.6))',
              }}
            >
              {SvgIcon ? <SvgIcon size={48} /> : (
                <div className="w-12 h-12 bg-gray-400 rounded" />
              )}
            </div>

            {/* Label */}
            <span
              className="text-white text-[11px] font-normal text-center leading-tight w-full px-0.5 rounded-sm pointer-events-none"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,1), 1px 1px 0px rgba(0,0,0,0.8)',
                background: isSelected ? 'rgba(49,106,197,0.85)' : 'transparent',
                padding: isSelected ? '1px 2px' : undefined,
              }}
            >
              {icon.label}
            </span>
          </button>
        );
      })}

      {/* ── Right-click Context Menu ───────────────────────────── */}
      {contextMenu && (
        <div className="pointer-events-auto">
          <ContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            onClose={() => setContextMenu(null)}
            items={[
              { label: 'Arrange Icons By', disabled: true },
              { divider: true },
              { label: 'Refresh', action: () => window.location.reload() },
              { divider: true },
              { label: 'New Folder', disabled: true },
              { label: 'New Shortcut', disabled: true },
              { divider: true },
              { label: 'Display Properties', action: () => openWindow('computer') },
            ]}
          />
        </div>
      )}
      </div>
    </>
  );
};
