import React, { useState } from 'react';

export const Notepad: React.FC = () => {
  const [content, setContent] = useState(`Hi there! 
Welcome to my interactive portfolio.

I built this Windows XP interface using React, TailwindCSS, and Zustand. 

Feel free to edit this text, drag the windows around, open the Start Menu, and explore my projects. 

Enjoy your stay!
- Neo-Luna`);

  return (
    <div className="flex flex-col h-full bg-white font-mono text-sm">
      {/* Menu Bar */}
      <div className="flex items-center gap-4 px-2 py-1 bg-surface-container-low border-b border-surface-dim text-xs">
        <span className="hover:bg-blue-500 hover:text-white px-2 py-0.5 cursor-pointer">File</span>
        <span className="hover:bg-blue-500 hover:text-white px-2 py-0.5 cursor-pointer">Edit</span>
        <span className="hover:bg-blue-500 hover:text-white px-2 py-0.5 cursor-pointer">Format</span>
        <span className="hover:bg-blue-500 hover:text-white px-2 py-0.5 cursor-pointer">View</span>
        <span className="hover:bg-blue-500 hover:text-white px-2 py-0.5 cursor-pointer">Help</span>
      </div>
      
      {/* Text Area */}
      <textarea 
        className="flex-grow p-2 resize-none outline-none custom-scrollbar"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        spellCheck={false}
      />
    </div>
  );
};
