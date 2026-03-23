import React, { useState } from 'react';

export const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState<string | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [reset, setReset] = useState(false);

  const input = (val: string) => {
    if (reset) { setDisplay(val); setReset(false); return; }
    setDisplay(d => d === '0' ? val : d.length >= 12 ? d : d + val);
  };

  const dot = () => {
    if (reset) { setDisplay('0.'); setReset(false); return; }
    if (!display.includes('.')) setDisplay(d => d + '.');
  };

  const operate = (nextOp: string) => {
    if (op && prev !== null && !reset) {
      const result = calculate(parseFloat(prev), parseFloat(display), op);
      setDisplay(String(result));
      setPrev(String(result));
    } else {
      setPrev(display);
    }
    setOp(nextOp);
    setReset(true);
  };

  const calculate = (a: number, b: number, operation: string): number => {
    switch (operation) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const equals = () => {
    if (op && prev !== null) {
      const result = calculate(parseFloat(prev), parseFloat(display), op);
      const formatted = parseFloat(result.toPrecision(10)).toString();
      setDisplay(formatted);
      setPrev(null);
      setOp(null);
      setReset(true);
    }
  };

  const clear = () => { setDisplay('0'); setPrev(null); setOp(null); setReset(false); };
  const negate = () => setDisplay(d => String(-parseFloat(d)));
  const percent = () => setDisplay(d => String(parseFloat(d) / 100));

  const Btn = ({ label, onClick, wide, blue, dark }: {
    label: string; onClick: () => void; wide?: boolean; blue?: boolean; dark?: boolean;
  }) => (
    <button
      onClick={onClick}
      className={`
        h-9 flex items-center justify-center text-sm font-bold border rounded 
        shadow-[inset_-1px_-1px_1px_rgba(0,0,0,0.3),inset_1px_1px_1px_rgba(255,255,255,0.8)]
        active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.4)] transition-all
        ${wide ? 'col-span-2' : ''}
        ${blue ? 'bg-[#3169c4] text-white border-[#1e4aa0] hover:bg-[#2155aa]' : ''}
        ${dark ? 'bg-[#c8c0b8] text-black border-[#aaa098] hover:bg-[#bab3aa]' : ''}
        ${!blue && !dark ? 'bg-[#ece9d8] text-black border-[#aaa098] hover:bg-[#dddaca]' : ''}
      `}
    >
      {label}
    </button>
  );

  return (
    <div className="h-full flex items-center justify-center bg-[#ece9d8] select-none p-4">
      <div className="w-64 bg-[#ece9d8] border border-[#aaa098] rounded shadow-md p-2">
        {/* Display */}
        <div className="bg-white border border-gray-400 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15)] p-2 mb-2 text-right">
          {op && <div className="text-xs text-gray-400 h-4">{prev} {op}</div>}
          {!op && <div className="h-4" />}
          <div className="text-2xl font-mono tracking-tighter truncate">{display}</div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-1">
          <Btn label="MC" onClick={() => {}} dark />
          <Btn label="MR" onClick={() => {}} dark />
          <Btn label="MS" onClick={() => {}} dark />
          <Btn label="M+" onClick={() => {}} dark />

          <Btn label="←" onClick={() => setDisplay(d => d.length > 1 ? d.slice(0,-1) : '0')} dark />
          <Btn label="CE" onClick={() => setDisplay('0')} dark />
          <Btn label="C" onClick={clear} dark />
          <Btn label="±" onClick={negate} dark />

          <Btn label="7" onClick={() => input('7')} />
          <Btn label="8" onClick={() => input('8')} />
          <Btn label="9" onClick={() => input('9')} />
          <Btn label="÷" onClick={() => operate('/')} blue />

          <Btn label="4" onClick={() => input('4')} />
          <Btn label="5" onClick={() => input('5')} />
          <Btn label="6" onClick={() => input('6')} />
          <Btn label="×" onClick={() => operate('*')} blue />

          <Btn label="1" onClick={() => input('1')} />
          <Btn label="2" onClick={() => input('2')} />
          <Btn label="3" onClick={() => input('3')} />
          <Btn label="−" onClick={() => operate('-')} blue />

          <Btn label="0" onClick={() => input('0')} wide />
          <Btn label="." onClick={dot} />
          <Btn label="+" onClick={() => operate('+')} blue />

          <Btn label="%" onClick={percent} wide />
          <Btn label="√" onClick={() => setDisplay(d => String(Math.sqrt(parseFloat(d))))} wide />

          <Btn label="=" onClick={equals} wide blue />
        </div>
      </div>
    </div>
  );
};
