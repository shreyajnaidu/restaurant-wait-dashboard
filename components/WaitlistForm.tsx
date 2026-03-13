'use client';

import { useState } from 'react';

interface Props {
  onJoin: (customer: any) => void;
}

export default function WaitlistForm({ onJoin }: Props) {

  const [formData, setFormData] = useState({
    name: '',
    partySize: '2',
    phone: '',
    preferredTime: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onJoin(formData);

    alert(`Success! ${formData.name} added to waitlist.`);

    setFormData({
      name: '',
      partySize: '2',
      phone: '',
      preferredTime: ''
    });
  };

  return (
    <div className="glass rounded-2xl p-6 h-full flex flex-col">
      <h2 className="text-xl font-bold text-white mb-2">Join Waitlist</h2>
      <p className="text-slate-400 text-sm mb-6">
        Reserve your spot in line digitally.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex-1 flex flex-col justify-between"
      >

        <div className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white"
          />

          {/* Party Size */}
          <select
            name="partySize"
            value={formData.partySize}
            onChange={handleChange}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white"
          >
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white"
          />

          {/* Preferred Time */}
          <input
            type="time"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white"
          />

        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all"
        >
          Join Waitlist
        </button>

      </form>
    </div>
  );
}