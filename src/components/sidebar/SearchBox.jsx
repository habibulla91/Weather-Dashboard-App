// src/components/sidebar/SearchBox.jsx
import { Search } from "lucide-react";
import { useState } from "react";
/**
 * Static search input — purely presentational, no submit logic.
 */
export default function SearchBox({ onSearch }) {
  const [city, setCity] = useState('');

   function handleSubmit(e) {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city);

    setCity("");
  }
  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full rounded-xl border border-accent-500/40 bg-base-900/60 py-3 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 outline-none transition-colors focus:border-accent-500"
      />
    </form>
  );
}
