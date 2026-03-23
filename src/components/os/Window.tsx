import React from 'react';
import { Rnd } from 'react-rnd';
import { useStore } from '../../store/useStore';
import type { WindowId } from '../../types';
import clsx from 'clsx';

interface WindowProps {
  id: WindowId;
  children: React.ReactNode;
  defaultWidth?: number | string;
  defaultHeight?: number | string;
  defaultX?: number;
  defaultY?: number;
}

export const Window: React.FC<WindowProps> = ({
  id,
  children,
  defaultWidth = 800,
  defaultHeight = 600,
  defaultX = 100,
  defaultY = 100,
}) => {
  const windowState = useStore((state) => state.windows[id]);
  const activeWindowId = useStore((state) => state.activeWindowId);
  const { closeWindow, minimizeWindow, maximizeWindow, restoreWindow, focusWindow } = useStore();

  if (!windowState?.isOpen || windowState?.isMinimized) return null;

  const isActive = activeWindowId === id;

  const handleFocus = () => focusWindow(id);

  return (
    <Rnd
      default={{
        x: defaultX,
        y: defaultY,
        width: defaultWidth,
        height: defaultHeight,
      }}
      minWidth={300}
      minHeight={200}
      bounds="parent"
      dragHandleClassName="window-drag-handle"
      onDragStart={handleFocus}
      onResizeStart={handleFocus}
      style={{ zIndex: windowState.zIndex, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
      disableDragging={windowState.isMaximized}
      enableResizing={!windowState.isMaximized}
      className={clsx(
        "bg-surface-container-lowest shadow-2xl border border-white/40 backdrop-blur-sm transition-opacity duration-200",
        windowState.isMaximized ? "!w-full !h-[calc(100%-34px)] !top-0 !left-0 !transform-none rounded-none" : "rounded-xl"
      )}
    >
      {/* Window Header */}
      <div 
        className={clsx(
          "window-drag-handle flex items-center justify-between px-3 py-1 w-full border-b border-[#003ea8] select-none",
          isActive ? "bg-gradient-to-b from-[#0058e6] via-[#3a93ff] to-[#004eeb]" : "bg-gradient-to-b from-[#7ba2e7] via-[#a3c2f1] to-[#6a8ce1]",
          windowState.isMaximized ? "rounded-none" : "rounded-t-lg"
        )}
        onMouseDown={handleFocus}
        onDoubleClick={() => windowState.isMaximized ? restoreWindow(id) : maximizeWindow(id)}
      >
        <div className="flex items-center gap-1.5 pointer-events-none drop-shadow-md">
          <span className="material-symbols-outlined text-white text-[18px]">{windowState.icon}</span>
          <h1 className={clsx("font-headline font-bold text-[13px] tracking-tight", isActive ? "text-white" : "text-gray-100")}>{windowState.title}</h1>
        </div>
        
        <div className="flex gap-[2px] pointer-events-auto h-5">
          <div 
            onClick={() => minimizeWindow(id)}
            className="w-6 h-full rounded-sm border border-white/50 bg-gradient-to-b from-blue-300 to-blue-500 flex items-center justify-center hover:brightness-110 active:brightness-90 transition-all cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-white text-[12px] translate-y-1">minimize</span>
          </div>
          <div 
            onClick={() => windowState.isMaximized ? restoreWindow(id) : maximizeWindow(id)}
            className="w-6 h-full rounded-sm border border-white/50 bg-gradient-to-b from-blue-300 to-blue-500 flex items-center justify-center hover:brightness-110 active:brightness-90 transition-all cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-white text-[10px]">
              {windowState.isMaximized ? "filter_none" : "check_box_outline_blank"}
            </span>
          </div>
          <div 
            onClick={() => closeWindow(id)}
            className="w-6 h-full rounded-sm border border-white/50 bg-gradient-to-b from-[#e36d5e] to-[#cc2817] flex items-center justify-center hover:brightness-110 active:brightness-90 transition-all cursor-pointer shadow-sm ml-0.5"
          >
            <span className="material-symbols-outlined text-white text-[14px]">close</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-hidden flex flex-col" onMouseDown={handleFocus}>
        {children}
      </div>
    </Rnd>
  );
};
