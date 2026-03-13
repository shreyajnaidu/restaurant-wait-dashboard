import React from 'react';
import { Table } from '@/types';

interface TableCardProps {
  table: Table;
}

const TableCard: React.FC<TableCardProps> = ({ table }) => {
  const isFree = table.status === 'free';

  return (
    <div 
      className={`
        relative p-6 rounded-2xl border transition-all duration-300 ease-out cursor-pointer
        ${isFree 
          ? 'bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-400 hover:scale-105 glow-green' 
          : 'bg-red-500/5 border-red-500/30 hover:border-red-400 hover:scale-105 glow-red'
        }
      `}
    >
      {/* Top Right Indicator */}
      <div className="absolute top-4 right-4">
        <span className={`
          flex h-3 w-3 rounded-full 
          ${isFree ? 'bg-emerald-500' : 'bg-red-500'}
        `}>
          {isFree && (
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          )}
        </span>
      </div>

      <div className="flex flex-col items-start">
        <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
          Table {table.tableNumber}
        </span>
        <span className={`text-2xl font-bold mt-1 ${isFree ? 'text-emerald-400' : 'text-red-400'}`}>
          {isFree ? 'Available' : 'Occupied'}
        </span>
        
        <div className="mt-4 flex items-center text-slate-500 text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          {table.capacity || 2} Seats
        </div>
      </div>
    </div>
  );
};

export default TableCard;