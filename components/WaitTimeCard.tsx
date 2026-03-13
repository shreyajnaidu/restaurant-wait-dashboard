'use client';

import React from 'react';

interface WaitTimeCardProps {
  waitMinutes: number;
  nextFreeTime: string;
}

const WaitTimeCard: React.FC<WaitTimeCardProps> = ({ waitMinutes, nextFreeTime }) => {
  return (
    <div className="glass w-full max-w-2xl mx-auto rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center">
      
      {/* Decorative Gradient Orbs */}
     <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-700/30 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-700/30 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 w-full space-y-6">
        
        {/* Wait Time Section */}
        <div>
          <p className="uppercase tracking-[0.2em] text-slate-400 text-xs font-bold mb-2">
            Current Wait Time
          </p>
          <div className="flex items-baseline justify-center gap-3">
            <span className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              {waitMinutes}
            </span>
            <span className="text-3xl font-semibold text-slate-300">min</span>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="h-px w-1/4 bg-gradient-to-r from-transparent to-slate-600"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-slate-900/50"></div>
          <div className="h-px w-1/4 bg-gradient-to-l from-transparent to-slate-600"></div>
        </div>

        {/* Next Table Free Section */}
        <div>
          <p className="uppercase tracking-[0.2em] text-slate-400 text-xs font-bold mb-3">
            Next Table Free
          </p>
          <div className="inline-flex items-center gap-3 bg-slate-800/60 border border-slate-700 rounded-xl px-6 py-3 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-3xl md:text-4xl font-bold text-white tracking-wide">
              {nextFreeTime}
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WaitTimeCard;