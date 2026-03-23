import React from 'react';
import { useStore } from '../../store/useStore';

export const LoginScreen: React.FC = () => {
  const login = useStore((state) => state.login);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-blue-800 selection:bg-none font-body">
      {/* Top Banner */}
      <div className="h-20 bg-[#002f9e] border-b-2 border-[#e68a00] w-full shadow-md z-10"></div>
      
      {/* Middle Section */}
      <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-[#5a7fdb] to-[#5171cd] relative overflow-hidden">

        {/* Windows Logo Placeholder */}
        <div className="absolute left-0 w-1/2 flex items-center justify-end pr-8 text-white drop-shadow-md">
          <div className="text-right">
            <h2 className="text-[22px] font-bold tracking-tight leading-none mb-1">Microsoft</h2>
            <h1 className="text-6xl font-black italic tracking-tighter flex items-start justify-end gap-1 leading-none">
              Windows <span className="text-[#ff9c00] text-3xl font-bold mt-1">XP</span>
            </h1>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="absolute left-1/2 top-[15%] bottom-[15%] w-[2px] bg-gradient-to-b from-transparent via-white/50 to-transparent shadow-[1px_0_0_rgba(0,0,0,0.1)]"></div>

        {/* User Selection */}
        <div className="absolute right-0 w-1/2 flex items-center justify-start pl-10 text-white">
          <button 
            onClick={login}
            className="group flex items-center gap-3 p-2 rounded hover:bg-white/10 transition-colors border border-transparent hover:border-white/20"
          >
            <div className="w-14 h-14 rounded-md overflow-hidden border-2 border-white/80 group-hover:border-[#ff9c00] transition-colors shadow-lg">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeNzHd0B9ObqrYgXSl8XP3Olaod80z3gflZi2Nr7PbrxrpeeQJSesqFd_fj4wVfxa2BzZbM_RGk2u4BcjXwcWAiUwVdvMfN4TZ4vFZ1puuAEDTMlGSE2A4b50u06TkK7qTOWyYn2PNj3vN6HUHE12ZhgGrf3k9ojSIXB3pRdGFsiJ4P3XNKioEwOMDnO90so-k9jYHNkOyYLD42tq_6l0yrqyClIseVCWNAeK3j5uHe4aiLdrmd8yNwP_9rLfOqI_BJBgyXY4fFg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Neo-Luna</h2>
              <p className="text-xs text-blue-100 group-hover:underline drop-shadow-sm">Click to log in</p>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="h-24 bg-[#002f9e] border-t-2 border-[#e68a00] w-full flex items-center justify-between px-10 shadow-[0_-2px_10px_rgba(0,0,0,0.2)] z-10">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#f25841] to-[#cf260e] flex items-center justify-center border border-white/50 text-white group-hover:brightness-110 shadow-sm">
            <span className="material-symbols-outlined text-[20px] font-bold">power_settings_new</span>
          </div>
          <span className="text-white text-sm group-hover:underline drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Turn off computer</span>
        </div>
        <div className="text-right text-white/80 text-[11px] leading-tight">
          <p>After you log in, you can add or change accounts.</p>
          <p>Just go to Control Panel and click User Accounts.</p>
        </div>
      </div>
    </div>
  );
};
