import React, { useState, useRef, useEffect } from 'react';

const tracks = [
  { title: 'Bliss', artist: 'Brian Eno', duration: '4:02' },
  { title: 'XP Theme', artist: 'Microsoft', duration: '0:10' },
  { title: 'Hey There Delilah', artist: 'Plain White T\'s', duration: '3:55' },
  { title: 'Boulevard of Broken Dreams', artist: 'Green Day', duration: '4:20' },
  { title: 'In the End', artist: 'Linkin Park', duration: '3:36' },
];

export const MediaPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(22);
  const [volume, setVolume] = useState(75);
  const [visualBars, setVisualBars] = useState<number[]>(Array(30).fill(2));
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setVisualBars(Array(30).fill(0).map(() => Math.random() * 90 + 10));
        animRef.current = requestAnimationFrame(animate);
      };
      animRef.current = requestAnimationFrame(animate);
    } else {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      setVisualBars(Array(30).fill(2));
    }
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [isPlaying]);

  return (
    <div className="flex flex-col h-full bg-black text-white select-none font-body">
      {/* Visualization */}
      <div className="flex-1 bg-gradient-to-b from-[#0a0a1a] to-[#001030] flex flex-col items-center justify-center p-4 overflow-hidden">
        <div className="w-full flex items-end justify-center gap-[2px] h-32 mb-4">
          {visualBars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm transition-all duration-75"
              style={{
                height: `${h}%`,
                background: `linear-gradient(to top, #ff6b00, #ffb300, #00d4ff)`,
                opacity: isPlaying ? 1 : 0.2,
              }}
            />
          ))}
        </div>
        <div className="text-center">
          <p className="text-[#00d4ff] font-bold text-lg">{tracks[currentTrack].title}</p>
          <p className="text-gray-400 text-sm">{tracks[currentTrack].artist}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-2 bg-[#111827]">
        <div
          className="w-full h-2 bg-gray-700 rounded-full cursor-pointer relative"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setProgress(((e.clientX - rect.left) / rect.width) * 100);
          }}
        >
          <div
            className="h-full bg-gradient-to-r from-[#ff6b00] to-[#00d4ff] rounded-full"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md"
            style={{ left: `calc(${progress}% - 6px)` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0:{Math.floor(progress * 2.4).toString().padStart(2, '0')}</span>
          <span>{tracks[currentTrack].duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-[#0d1117] px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentTrack(t => (t - 1 + tracks.length) % tracks.length)}
            className="w-8 h-8 rounded-sm bg-[#1e293b] hover:bg-[#334155] flex items-center justify-center text-gray-300 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">skip_previous</span>
          </button>
          <button
            onClick={() => setIsPlaying(p => !p)}
            className="w-10 h-10 rounded-sm bg-gradient-to-b from-[#ff6b00] to-[#cc4400] hover:brightness-110 flex items-center justify-center text-white transition-all shadow-md"
          >
            <span className="material-symbols-outlined text-lg">{isPlaying ? 'pause' : 'play_arrow'}</span>
          </button>
          <button
            onClick={() => { setIsPlaying(false); setProgress(0); }}
            className="w-8 h-8 rounded-sm bg-[#1e293b] hover:bg-[#334155] flex items-center justify-center text-gray-300 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">stop</span>
          </button>
          <button
            onClick={() => setCurrentTrack(t => (t + 1) % tracks.length)}
            className="w-8 h-8 rounded-sm bg-[#1e293b] hover:bg-[#334155] flex items-center justify-center text-gray-300 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">skip_next</span>
          </button>
        </div>

        {/* Volume */}
        <div className="flex-1 flex items-center gap-2 ml-2">
          <span className="material-symbols-outlined text-gray-500 text-sm">volume_up</span>
          <input
            type="range" min="0" max="100" value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-1 accent-[#00d4ff] h-1 cursor-pointer"
          />
        </div>
      </div>

      {/* Playlist */}
      <div className="bg-[#0a0f1a] border-t border-gray-800 max-h-32 overflow-y-auto custom-scrollbar">
        {tracks.map((t, i) => (
          <button
            key={i}
            onClick={() => { setCurrentTrack(i); setProgress(0); }}
            className={`w-full text-left px-4 py-1.5 flex items-center gap-3 text-xs transition-colors ${
              i === currentTrack
                ? 'bg-[#ff6b00]/20 text-[#ff6b00]'
                : 'text-gray-400 hover:bg-white/5'
            }`}
          >
            <span>{i === currentTrack && isPlaying ? '▶' : `${i + 1}.`}</span>
            <span className="flex-1">{t.title}</span>
            <span>{t.artist}</span>
            <span className="text-gray-600">{t.duration}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
