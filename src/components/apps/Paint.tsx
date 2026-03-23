import React, { useRef, useState, useEffect } from 'react';

const COLORS = [
  '#000000','#808080','#800000','#808000','#008000','#008080','#000080','#800080',
  '#ffffff','#c0c0c0','#ff0000','#ffff00','#00ff00','#00ffff','#0000ff','#ff00ff',
  '#ff8040','#804000','#80ff00','#004040','#0080ff','#8000ff','#ff0080','#ff8080',
];

export const Paint: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [tool, setTool] = useState<'pencil' | 'eraser' | 'fill'>('pencil');
  const [size, setSize] = useState(3);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const getPos = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const scaleX = canvasRef.current!.width / rect.width;
    const scaleY = canvasRef.current!.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    lastPos.current = getPos(e);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !lastPos.current) return;
    const pos = getPos(e);
    ctx.lineWidth = tool === 'eraser' ? size * 5 : size;
    ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    lastPos.current = pos;
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="flex flex-col h-full bg-[#ece9d8] select-none">
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-2 py-1 border-b border-[#aca899] bg-[#ece9d8] flex-wrap">
        {[
          { id: 'pencil', icon: 'edit', label: 'Pencil' },
          { id: 'eraser', icon: 'ink_eraser', label: 'Eraser' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTool(t.id as 'pencil' | 'eraser')}
            title={t.label}
            className={`w-8 h-8 flex items-center justify-center border rounded transition-colors text-sm ${
              tool === t.id
                ? 'bg-[#316ac5] text-white border-[#316ac5]'
                : 'border-[#aca899] hover:bg-[#dae0e8]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">{t.icon}</span>
          </button>
        ))}

        <div className="w-px h-6 bg-[#aca899] mx-1" />

        {/* Brush Size */}
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <span>Size:</span>
          <input
            type="range" min="1" max="20" value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-20 h-1 accent-[#316ac5] cursor-pointer"
          />
          <span>{size}px</span>
        </div>

        <button
          onClick={clear}
          className="ml-auto px-3 h-7 text-xs border border-[#aca899] rounded hover:bg-[#dae0e8] transition-colors"
        >
          Clear
        </button>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 overflow-hidden flex bg-[#6682a4] p-3">
        <canvas
          ref={canvasRef}
          width={1200}
          height={800}
          className="bg-white cursor-crosshair shadow-lg"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={() => { setIsDrawing(false); lastPos.current = null; }}
          onMouseLeave={() => { setIsDrawing(false); lastPos.current = null; }}
        />
      </div>

      {/* Color Palette */}
      <div className="flex items-center gap-2 px-2 py-1.5 border-t border-[#aca899] bg-[#ece9d8]">
        <div className="w-8 h-8 border-2 border-gray-400 shadow-inner" style={{ background: color }} />
        <div className="flex flex-wrap gap-[2px]">
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-5 h-5 border transition-transform hover:scale-110 ${
                c === color ? 'border-2 border-blue-600 scale-110' : 'border-gray-400'
              }`}
              style={{ background: c }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
