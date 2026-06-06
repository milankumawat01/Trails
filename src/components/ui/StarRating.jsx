import { FaStar } from 'react-icons/fa';

export default function StarRating({ value, size = 'sm', label }) {
  const v = Number(value) || 0;
  const sz = size === 'lg' ? 'h-5 w-5' : size === 'md' ? 'h-4 w-4' : 'h-3.5 w-3.5';
  return (
    <span className="inline-flex items-center gap-1 text-amber-500">
      <FaStar className={sz} />
      <span className="text-sm font-semibold text-ink-900">{v.toFixed(1)}</span>
      {label && <span className="text-xs text-ink-500">{label}</span>}
    </span>
  );
}
