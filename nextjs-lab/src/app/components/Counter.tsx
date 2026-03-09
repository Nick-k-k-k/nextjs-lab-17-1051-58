'use client';
import { useState } from 'react';

export default function Counter() {
  const [val, setVal] = useState(0);

  return (
    <div className="p-10 neo-border bg-accent text-white mb-10 text-center">
      <h1 className="text-4xl font-black uppercase italic mb-2">Internal Counter</h1>
      <p className="text-xs font-mono uppercase mb-6 opacity-80">Signal Frequency Tracking</p>
      
      <div className="text-8xl font-black mb-8 tabular-nums">
        {val.toString().padStart(2, '0')}
      </div>
      
      <div className="flex justify-center gap-4">
        <button 
          onClick={() => setVal(v => v + 1)} 
          className="px-8 py-3 border-4 border-white font-black uppercase hover:bg-white hover:text-black transition-all active:translate-y-1"
        >
          INC
        </button>
        
        <button 
          onClick={() => setVal(v => Math.max(0, v - 1))} 
          className="px-8 py-3 border-4 border-white font-black uppercase hover:bg-white hover:text-black transition-all active:translate-y-1"
        >
          DEC
        </button>
        
        <button 
          onClick={() => setVal(0)} 
          className="px-8 py-3 bg-black text-white font-black uppercase border-4 border-white hover:bg-zinc-800 transition-all active:translate-y-1"
        >
          CLR
        </button>
      </div>
    </div>
  );
}