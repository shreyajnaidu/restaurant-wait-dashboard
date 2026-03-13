'use client';

import { useState } from 'react';
import Header from '../components/Header';
import WaitTimeCard from '../components/WaitTimeCard';
import TableGrid from '../components/TableGrid';
import WaitlistForm from '../components/WaitlistForm';
import { dummyTables } from '../data/dummyTables';

export default function Home() {

  const [waitlist, setWaitlist] = useState<any[]>([]);

  const freeTables = dummyTables.filter(t => t.status === 'free').length;

  const waitTime = freeTables > 0 ? 0 : 18;

  const nextFreeTime =
    freeTables > 0
      ? "Available Now"
      : new Date(Date.now() + waitTime * 60000).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });

  const addToWaitlist = (customer: any) => {
    setWaitlist(prev => [...prev, customer]);
  };

  return (
    <div className="min-h-screen w-full px-4 py-8 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <Header />

        <section className="w-full py-4">
          <WaitTimeCard waitMinutes={waitTime} nextFreeTime={nextFreeTime} />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 w-full">
            <TableGrid tables={dummyTables} />
          </div>

          <div className="w-full">
            <WaitlistForm onJoin={addToWaitlist} />
          </div>
          
        </div>

        {/* Live Waitlist */}
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">
            Live Waitlist
          </h2>

          {waitlist.length === 0 ? (
            <p className="text-slate-400">No customers waiting.</p>
          ) : (
            <ul className="space-y-2">
              {waitlist.map((customer, index) => (
                <li
                  key={index}
                  className="bg-slate-800/60 border border-slate-700 rounded-lg p-3 flex justify-between"
                >
                  <span className="text-white font-medium">
                    {index + 1}. {customer.name}
                  </span>

                  <span className="text-slate-400">
                    Party of {customer.partySize} • {customer.time || "ASAP"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}