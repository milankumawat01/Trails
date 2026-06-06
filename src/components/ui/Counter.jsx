import { FiMinus, FiPlus } from 'react-icons/fi';

export default function Counter({ value, onChange, min = 1, max = 30, label }) {
  const set = (v) => onChange(Math.max(min, Math.min(max, v)));
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-ink-300/60 bg-white px-3 py-2">
      {label && <span className="text-sm text-ink-600">{label}</span>}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => set(value - 1)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink-900/5 text-ink-700 hover:bg-brand-600 hover:text-white transition"
          aria-label="Decrease"
        >
          <FiMinus />
        </button>
        <span className="w-8 text-center text-sm font-semibold">{value}</span>
        <button
          type="button"
          onClick={() => set(value + 1)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink-900/5 text-ink-700 hover:bg-brand-600 hover:text-white transition"
          aria-label="Increase"
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
}
