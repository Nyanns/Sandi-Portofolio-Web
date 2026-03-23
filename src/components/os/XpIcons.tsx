import React from 'react';

// Inline SVG icons styled to look like Windows XP icons
// These are 100% reliable — no external CDN needed

export const Icons: Record<string, React.FC<{ size?: number }>> = {

  portfolio: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="40" height="32" rx="3" fill="#fff" stroke="#bbb" strokeWidth="1"/>
      <rect x="4" y="8" width="40" height="8" rx="3" fill="#1565C0"/>
      <rect x="4" y="13" width="40" height="3" fill="#1565C0"/>
      <circle cx="8" cy="12" r="2" fill="#ef5350"/>
      <circle cx="14" cy="12" r="2" fill="#ffee58"/>
      <circle cx="20" cy="12" r="2" fill="#66bb6a"/>
      <rect x="9" y="20" width="14" height="2" rx="1" fill="#1565C0"/>
      <rect x="9" y="25" width="22" height="1.5" rx="0.75" fill="#ccc"/>
      <rect x="9" y="28" width="18" height="1.5" rx="0.75" fill="#ccc"/>
      <rect x="9" y="31" width="20" height="1.5" rx="0.75" fill="#ccc"/>
      <circle cx="38" cy="24" r="7" fill="#0078D4" opacity="0.15"/>
      <text x="38" y="28" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0078D4">e</text>
    </svg>
  ),

  computer: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="36" height="26" rx="2" fill="#3a4a5c"/>
      <rect x="8" y="8" width="32" height="22" rx="1" fill="#1a90d8"/>
      <rect x="10" y="10" width="28" height="18" rx="1" fill="#6dd5fa"/>
      <ellipse cx="24" cy="19" rx="6" ry="4" fill="#fff" opacity="0.3"/>
      <rect x="16" y="32" width="16" height="3" fill="#5a6a7c"/>
      <rect x="12" y="35" width="24" height="3" rx="1" fill="#8a9aac"/>
    </svg>
  ),

  notepad: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="28" height="40" rx="2" fill="#fff" stroke="#aaa" strokeWidth="1"/>
      <rect x="8" y="4" width="28" height="8" rx="2" fill="#fdd835"/>
      <rect x="12" y="8" width="4" height="8" rx="1" fill="#f57f17"/>
      <rect x="20" y="8" width="4" height="8" rx="1" fill="#f57f17"/>
      <rect x="12" y="16" width="20" height="1.5" rx="0.75" fill="#90a4ae"/>
      <rect x="12" y="19" width="18" height="1.5" rx="0.75" fill="#90a4ae"/>
      <rect x="12" y="22" width="20" height="1.5" rx="0.75" fill="#90a4ae"/>
      <rect x="12" y="25" width="14" height="1.5" rx="0.75" fill="#90a4ae"/>
      <rect x="12" y="28" width="20" height="1.5" rx="0.75" fill="#90a4ae"/>
      <rect x="32" y="4" width="8" height="16" rx="1" fill="#e3f2fd" stroke="#90caf9" strokeWidth="1"/>
      <line x1="36" y1="7" x2="36" y2="10" stroke="#90caf9" strokeWidth="1"/>
      <line x1="34" y1="9" x2="38" y2="9" stroke="#90caf9" strokeWidth="1"/>
    </svg>
  ),

  resume: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="32" height="40" rx="2" fill="#1565C0"/>
      <rect x="8" y="4" width="32" height="40" rx="2" fill="#fff" stroke="#1565C0" strokeWidth="1.5"/>
      <rect x="8" y="4" width="32" height="12" rx="2" fill="#1565C0"/>
      <rect x="8" y="12" width="32" height="4" fill="#1565C0"/>
      <text x="24" y="13" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#fff">W</text>
      <rect x="12" y="20" width="24" height="2" rx="1" fill="#1565C0" opacity="0.8"/>
      <rect x="12" y="24" width="20" height="1.5" rx="0.75" fill="#ccc"/>
      <rect x="12" y="27" width="22" height="1.5" rx="0.75" fill="#ccc"/>
      <rect x="12" y="30" width="18" height="1.5" rx="0.75" fill="#ccc"/>
      <rect x="12" y="33" width="22" height="1.5" rx="0.75" fill="#ccc"/>
    </svg>
  ),

  media_player: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="24" cy="24" r="20" fill="url(#mpGrad1)"/>
      {/* Inner dark ring */}
      <circle cx="24" cy="24" r="14" fill="#111"/>
      {/* Shiny outer rim */}
      <circle cx="24" cy="24" r="20" fill="none" stroke="url(#mpRim)" strokeWidth="2"/>
      {/* Center disc */}
      <circle cx="24" cy="24" r="4" fill="#333"/>
      <circle cx="24" cy="24" r="2" fill="#888"/>
      {/* Colored segments */}
      <path d="M24 10 A14 14 0 0 1 38 24" stroke="#1E88E5" strokeWidth="3" fill="none"/>
      <path d="M38 24 A14 14 0 0 1 24 38" stroke="#43A047" strokeWidth="3" fill="none"/>
      <path d="M24 38 A14 14 0 0 1 10 24" stroke="#E53935" strokeWidth="3" fill="none"/>
      <path d="M10 24 A14 14 0 0 1 24 10" stroke="#FB8C00" strokeWidth="3" fill="none"/>
      {/* Play button */}
      <polygon points="21,20 21,28 29,24" fill="white" opacity="0.9"/>
      <defs>
        <radialGradient id="mpGrad1" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#555"/>
          <stop offset="100%" stopColor="#111"/>
        </radialGradient>
        <linearGradient id="mpRim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#888"/>
          <stop offset="100%" stopColor="#333"/>
        </linearGradient>
      </defs>
    </svg>
  ),

  paint: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="14" fill="#fff" stroke="#e0e0e0" strokeWidth="1"/>
      <circle cx="12" cy="14" r="4" fill="#ef5350"/>
      <circle cx="20" cy="10" r="4" fill="#fdd835"/>
      <circle cx="26" cy="16" r="4" fill="#29b6f6"/>
      <circle cx="24" cy="24" r="4" fill="#66bb6a"/>
      <circle cx="16" cy="24" r="4" fill="#ab47bc"/>
      <rect x="28" y="22" width="5" height="18" rx="1" fill="#795548" transform="rotate(-45 28 22)"/>
      <rect x="34" y="16" width="4" height="7" rx="1" fill="#c8a97e" transform="rotate(-45 34 16)"/>
      <ellipse cx="37" cy="13" rx="3" ry="2" fill="#ff7043" transform="rotate(-45 37 13)"/>
    </svg>
  ),

  calculator: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="32" height="40" rx="4" fill="#546E7A"/>
      <rect x="11" y="7" width="26" height="12" rx="2" fill="#B0BEC5"/>
      <text x="34" y="17" textAnchor="end" fontSize="8" fontFamily="monospace" fill="#263238">0</text>
      {/* Buttons grid */}
      {[0,1,2,3].map(col => [0,1,2,3,4,5].map(row => (
        <rect key={`${col}-${row}`} x={12 + col * 7} y={22 + row * 3.5} width="5.5" height="2.5" rx="0.5"
          fill={col === 3 ? '#1565C0' : row < 2 ? '#78909C' : '#90A4AE'}/>
      )))}
    </svg>
  ),

  recycle_bin: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 14 L14 38 H34 L32 14 Z" fill="#90CAF9" stroke="#1565C0" strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="10" y="12" width="28" height="3" rx="1.5" fill="#1565C0"/>
      <rect x="19" y="8" width="10" height="4" rx="2" fill="#1565C0"/>
      <line x1="20" y1="18" x2="20" y2="34" stroke="#1565C0" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="18" x2="24" y2="34" stroke="#1565C0" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="28" y1="18" x2="28" y2="34" stroke="#1565C0" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),

  folder: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 16 Q6 12 10 12 H20 L24 16 H38 Q42 16 42 20 V36 Q42 40 38 40 H10 Q6 40 6 36 Z" fill="#FFB300"/>
      <path d="M6 20 H42 V36 Q42 40 38 40 H10 Q6 40 6 36 Z" fill="#FFD54F"/>
      <path d="M6 16 H20 L24 20 H42 V16 Q42 14 40 14 H24 L20 10 H10 Q6 10 6 14 Z" fill="#FFB300"/>
    </svg>
  ),

  settings: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="8" fill="#546E7A"/>
      <circle cx="24" cy="24" r="4" fill="#B0BEC5"/>
      {[0,45,90,135,180,225,270,315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 24 + 10 * Math.cos(rad);
        const y1 = 24 + 10 * Math.sin(rad);
        const x2 = 24 + 16 * Math.cos(rad);
        const y2 = 24 + 16 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#546E7A" strokeWidth="4" strokeLinecap="round"/>;
      })}
    </svg>
  ),

  search: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="12" fill="#fff" stroke="#1565C0" strokeWidth="3"/>
      <circle cx="20" cy="20" r="8" fill="#e3f2fd"/>
      <line x1="29" y1="29" x2="40" y2="40" stroke="#1565C0" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),

  help: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#1565C0"/>
      <text x="24" y="32" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#fff">?</text>
    </svg>
  ),
};

// Helper to render an icon to a data URI (for img src usage)
export const IconImg: React.FC<{ name: string; size?: number; className?: string }> = ({ name, size = 48, className }) => {
  const Icon = Icons[name];
  if (!Icon) return <span className={className} style={{ width: size, height: size, display: 'inline-block', background: '#ccc', borderRadius: 4 }} />;
  return (
    <span className={className} style={{ display: 'inline-flex', width: size, height: size }}>
      <Icon size={size} />
    </span>
  );
};
