'use client';

import React, { useState } from 'react';

interface Props {
  onJoin: (customer: any) => void;
}

export default function WaitlistForm({ onJoin }: Props) {

  const [name, setName] = useState('');
  const [partySize, setPartySize] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onJoin({
      name,
      partySize,
      phone,
      time
    });

    alert(`Added ${name} (Party of ${partySize}) to the waitlist!`);

    setName('');
    setPartySize('');
    setPhone('');
    setTime('');
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold text-white mb-4">
        Join Waitlist
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="number"
          placeholder="Party Size"
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all p-3 rounded-lg font-semibold text-white"
        >
          Join Waitlist
        </button>

      </form>
    </div>
  );
}