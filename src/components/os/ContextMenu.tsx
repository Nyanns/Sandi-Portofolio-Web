import React, { useEffect, useRef } from 'react';

interface ContextMenuItem {
  label?: string;
  icon?: string;
  action?: () => void;
  divider?: boolean;
  disabled?: boolean;
}

interface ContextMenuProps {
  x: number;
  y: number;
  items: ContextMenuItem[];
  onClose: () => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, items, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = () => onClose();
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  // Adjust position to avoid going off screen
  const adjustedX = Math.min(x, window.innerWidth - 220);
  const adjustedY = Math.min(y, window.innerHeight - items.length * 32 - 50);

  return (
    <div
      ref={menuRef}
      className="fixed z-[9999] select-none"
      style={{ left: adjustedX, top: adjustedY }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="min-w-[200px] bg-[#ece9d8] border border-[#aca899] shadow-[2px_2px_8px_rgba(0,0,0,0.4)] rounded-sm py-1 text-[13px]">
        {items.map((item, i) => (
          item.divider ? (
            <div key={i} className="h-[1px] bg-[#aca899] mx-1 my-1" />
          ) : (
            <button
              key={i}
              disabled={item.disabled}
              onClick={() => { if (!item.disabled) { item.action?.(); onClose(); } }}
              className={`w-full text-left flex items-center gap-2 px-2 py-[3px] transition-colors
                ${item.disabled
                  ? 'text-gray-400 cursor-default'
                  : 'text-black hover:bg-[#316ac5] hover:text-white cursor-default'}`}
            >
              {item.icon && (
                <img src={item.icon} alt="" className="w-4 h-4 object-contain" />
              )}
              <span className={item.icon ? '' : 'pl-5'}>{item.label}</span>
            </button>
          )
        ))}
      </div>
    </div>
  );
};
