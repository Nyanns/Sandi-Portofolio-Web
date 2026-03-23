// ============================================================
// components/apps/Resume.tsx
// A styled resume/CV viewer window.
// Update RESUME_DATA below to reflect real experience.
// ============================================================

import React from 'react';


// ── Resume content — Detailed for a premium feel ─────────────
const RESUME_SECTIONS = [
  {
    title: 'Professional Profile',
    content: 'Creative technologist with 5+ years of experience bridging the gap between high-end editorial design and robust frontend engineering. Specialized in building design systems that scale and immersive web experiences that prioritize both performance and aesthetic narrative.'
  },
  {
    title: 'Work Experience',
    items: [
      {
        role: 'Senior Frontend Engineer',
        company: 'SandiWorks Digital · Remote',
        year: '2023–Present',
        desc: 'Spearheading the development of SandiOS, a web-based desktop environment. Managed a 40% improvement in asset loading via custom SVG serialization and strategic code-splitting.',
      },
      {
        role: 'Lead UI/UX Designer',
        company: 'Nexus Creative Group · New York',
        year: '2020–2023',
        desc: 'Redesigned the digital presence for 15+ Fortune 500 clients, focusing on micro-interactions and accessibility. Established a unified design language used by 50+ developers globally.',
      },
      {
        role: 'Javascript Developer',
        company: 'EarlyShift Systems · Austin',
        year: '2018–2020',
        desc: 'Developed complex interactive dashboards using React and D3.js. Optimized real-time data visualization pipelines for high-throughput financial data.',
      },
    ],
  },
  {
    title: 'Technical Arsenal',
    items: [
      { role: 'Core Tech', company: 'React, TypeScript, Next.js, Node.js, GraphQL', year: '', desc: '' },
      { role: 'Experimental',   company: 'WebAssembly, Three.js, Canvas API, Framer Motion', year: '', desc: '' },
      { role: 'Design',  company: 'Figma, Adobe Creative Suite, Blender, Design Systems',      year: '', desc: '' },
    ],
  },
  {
    title: 'Education & Certifications',
    items: [
      {
        role: 'B.Sc. Computer Science',
        company: 'Massachusetts Institute of Technology (MIT)',
        year: '2014–2018',
        desc: 'Double major in CS and Philosophy. Recipient of the Academic Excellence Award in Software Engineering.',
      },
      {
        role: 'Google Professional UX Certificate',
        company: 'Coursera',
        year: '2021',
        desc: 'Advanced training in user research, wireframing, and low-to-high fidelity prototyping.',
      },
    ],
  },
];

export const Resume: React.FC = () => (
  <div className="flex flex-col h-full bg-[#525659] overflow-hidden">
    {/* Ribbon / Toolbar (XP Word style) */}
    <div className="bg-[#ece9d8] border-b border-[#aca899] px-2 py-1 flex items-center gap-1 shrink-0 shadow-sm z-10">
      <div className="flex border-r border-gray-400 pr-1 mr-1">
        <button className="p-1 hover:bg-[#316ac5] hover:text-white rounded transition-colors" title="Print">
          <span className="material-symbols-outlined text-[18px]">print</span>
        </button>
        <button className="p-1 hover:bg-[#316ac5] hover:text-white rounded transition-colors" title="Save">
          <span className="material-symbols-outlined text-[18px]">save</span>
        </button>
      </div>
      <div className="flex items-center gap-2 bg-white border border-[#919b9c] px-2 py-0.5 rounded text-[11px] w-32">
        <span className="truncate">Times New Roman</span>
        <span className="text-[10px] opacity-50">▼</span>
      </div>
      <div className="flex items-center gap-2 bg-white border border-[#919b9c] px-2 py-0.5 rounded text-[11px] w-12">
        <span>12</span>
        <span className="text-[10px] opacity-50">▼</span>
      </div>
      <div className="flex gap-1 ml-2">
        <button className="font-bold border border-transparent hover:border-[#316ac5] px-1">B</button>
        <button className="italic border border-transparent hover:border-[#316ac5] px-1">I</button>
        <button className="underline border border-transparent hover:border-[#316ac5] px-1">U</button>
      </div>
    </div>

    {/* Scrollable Container */}
    <div className="flex-1 overflow-y-auto custom-scrollbar p-10 flex justify-center">
      {/* Paper Page */}
      <div className="bg-white w-[800px] min-h-[1100px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col p-16 font-serif relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-400" />
        
        {/* Header Area */}
        <header className="flex justify-between items-start border-b-2 border-black pb-8 mb-10">
          <div>
            <h1 className="text-5xl font-bold tracking-tighter text-black uppercase mb-1">SANDI</h1>
            <p className="text-xl italic text-gray-700 font-sans tracking-[0.2em]">WORKS CREATIVE</p>
          </div>
          <div className="text-right font-sans text-[10px] uppercase tracking-widest text-gray-500 leading-relaxed">
            <p>123 Digital Pastoral Ave</p>
            <p>New York, NY 10001</p>
            <p>hello@sandiworks.io</p>
            <p>+1 (555) 001-SANDI</p>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-12">
          {RESUME_SECTIONS.map((section) => (
            <div key={section.title} className="grid grid-cols-4 gap-8">
              <div className="col-span-1">
                <h3 className="font-sans font-black text-[10px] uppercase tracking-[0.2em] text-blue-800 border-l-2 border-blue-800 pl-4 py-1">
                  {section.title}
                </h3>
              </div>
              <div className="col-span-3">
                {section.content && (
                  <p className="text-gray-800 leading-relaxed text-sm italic">{section.content}</p>
                )}
                {section.items && (
                  <div className="space-y-6">
                    {section.items.map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="text-base font-bold text-black">{item.role}</h4>
                          <span className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.year}</span>
                        </div>
                        <p className="font-sans text-[11px] font-bold text-blue-700 uppercase tracking-widest mb-2">{item.company}</p>
                        {item.desc && (
                          <p className="text-gray-700 text-[13px] leading-relaxed max-w-lg">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-20 border-t border-gray-100 flex justify-between items-end">
          <div className="w-16 h-1 bg-black" />
          <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gray-400">© 2026 SandiWorks Creative — Proprietary Document</p>
        </footer>
      </div>
    </div>
  </div>
);

