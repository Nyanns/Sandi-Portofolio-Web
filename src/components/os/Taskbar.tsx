import React, { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import clsx from 'clsx';

export const Taskbar: React.FC = () => {
  const { windows, activeWindowId, focusWindow, toggleStartMenu } = useStore();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const openWindows = Object.values(windows).filter(w => w.isOpen);

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-1 py-0.5 h-[34px] bg-gradient-to-b from-[#1f2f86] via-[#3165c4] to-[#1c3280] border-t border-[#4176d6] shadow-[0_-1px_3px_rgba(0,0,0,0.4)] select-none">
      <button 
        onClick={toggleStartMenu}
        className="flex items-center gap-1 bg-gradient-to-b from-[#44c744] via-[#33a833] to-[#288528] hover:brightness-110 text-white font-black italic px-4 h-full rounded-r-[14px] rounded-l-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] border border-[#1b611b] transition-all active:brightness-90 duration-75"
      >
        <span className="material-symbols-outlined text-xl drop-shadow-md">grid_view</span>
        <span className="text-[17px] tracking-tighter drop-shadow-md">start</span>
      </button>

      <div className="flex-grow flex items-center px-2 gap-1 h-full overflow-hidden">
        {openWindows.map((w) => {
          const isActive = activeWindowId === w.id && !w.isMinimized;
          return (
            <div 
              key={w.id}
              onClick={() => focusWindow(w.id)}
              className={clsx(
                "flex items-center justify-start rounded-[3px] px-2 h-full border text-white gap-2 w-36 max-w-[160px] truncate cursor-pointer transition-colors shadow-sm",
                isActive 
                  ? "bg-gradient-to-b from-[#1e4299] to-[#163377] border-[#0f2352] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" 
                  : "bg-gradient-to-b from-[#3c7ee8] to-[#255fd5] border-[#1e4cae] hover:brightness-110"
              )}
            >
              <span className="material-symbols-outlined text-[13px] drop-shadow-sm shrink-0">{w.icon}</span>
              <span className="font-bold text-[11px] truncate md:inline drop-shadow-sm">{w.title}</span>
            </div>
          )
        })}
      </div>

      <div className="flex items-center gap-3 pl-3 pr-4 h-full bg-gradient-to-b from-[#0f91e0] via-[#097bbf] to-[#0465a3] border-l border-[#004eeb] text-white shadow-[inset_1px_0_1px_rgba(255,255,255,0.2)]">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[14px] opacity-90 drop-shadow-sm">wifi</span>
          <span className="material-symbols-outlined text-[14px] opacity-90 drop-shadow-sm">volume_up</span>
        </div>
        <div className="flex flex-col items-center justify-center leading-none h-full pt-0.5">
          <span className="text-[11px] font-normal drop-shadow-sm tracking-wide">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </footer>
  );
};
