'use client';
import Link from "next/link"
import { useState } from 'react';
import Header from '@/components/Header';
import WaitTimeCard from '@/components/WaitTimeCard';
import TableGrid from '@/components/TableGrid';
import WaitlistForm from '@/components/WaitlistForm';
import { dummyTables } from '@/data/dummyTables';
<Link
  href="/orders"
  className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold"
>
  New Order
</Link>
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

        {/* Header */}
        <Header />

        {/* Wait Time Card */}
        <section className="w-full py-4">
          <WaitTimeCard waitMinutes={waitTime} nextFreeTime={nextFreeTime} />
        </section>

        {/* Table grid + form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 w-full">
            <TableGrid tables={dummyTables} />
          </div>

          <div className="w-full">
            <WaitlistForm onJoin={addToWaitlist} />
          </div>

        </div>

        {/* Waitlist Queue */}
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">
            Live Waitlist
          </h2>

          {waitlist.length === 0 && (
            <p className="text-slate-400">No customers waiting.</p>
          )}

          <ul className="space-y-3">
            {waitlist.map((customer, index) => (
              <li
                key={index}
                className="bg-slate-800/60 border border-slate-700 rounded-lg p-4 flex items-center justify-between"
              >

                {/* Queue number */}
                <span className="text-indigo-400 font-bold text-lg">
                  #{index + 1}
                </span>

                {/* Customer name */}
                <span className="text-white font-medium">
                  {customer.name}
                </span>

                {/* Party size */}
                <span className="text-slate-400">
                  Party of {customer.partySize}
                </span>

                {/* Phone */}
                <span className="text-slate-500 text-sm hidden md:block">
                  {customer.phone}
                </span>

              </li>
            ))}
          </ul>

        </div>

      </div>
    </div>
  );
}