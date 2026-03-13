'use client';

import { useState, useEffect } from 'react';

const Header = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }));
    };

    updateClock(); // Run once on mount
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="glass w-full rounded-2xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-center mb-8 shadow-xl">
      {/* Left Side */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Notch on Top
        </h1>
        <p className="text-slate-400 text-sm font-medium mt-1">
          Live Table Dashboard
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 bg-slate-800/50 px-5 py-2 rounded-xl border border-slate-700/50">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-semibold text-sm hidden sm:block">LIVE</span>
        </div>
        
        <div className="h-6 w-px bg-slate-700"></div>
        
        <div className="font-mono text-lg text-white tracking-wider">
          {time || '...Loading'}
        </div>
      </div>
    </header>
  );
};

export default Header;