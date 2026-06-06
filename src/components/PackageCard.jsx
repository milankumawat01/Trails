import { FiCheck, FiDownload, FiExternalLink, FiSend } from 'react-icons/fi';
import StarRating from './ui/StarRating';

export default function PackageCard({ item, onInquire }) {
  const isVilla = item.type === 'villa';
  return (
    <article className="group surface overflow-hidden flex flex-col md:flex-row hover:shadow-glow transition-shadow duration-300">
      <div className="relative md:w-2/5 lg:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 chip bg-white/90 text-ink-900 backdrop-blur">
          {item.category}
        </div>
      </div>

      <div className="flex-1 p-5 sm:p-6 lg:p-7 flex flex-col gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold leading-tight text-balance">{item.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-600">
            <StarRating value={item.rating} />
            <span className="text-ink-400">•</span>
            <span>{item.hotel}</span>
          </div>
        </div>

        {item.facilities?.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {item.facilities.slice(0, 8).map((f) => (
              <li key={f} className="chip bg-ink-900/5 text-ink-700">
                <FiCheck className="h-3 w-3 text-brand-600" /> {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2 border-t border-ink-900/5">
          <div className="hidden sm:flex items-center gap-2 text-sm text-ink-600">
            <FiCheck className="h-4 w-4 text-brand-600" /> 24×7 support
            <span className="text-ink-300 mx-1">|</span>
            <FiCheck className="h-4 w-4 text-brand-600" /> Transport included
          </div>
          <div className="flex-1" />
          {item.document && (
            <a
              href={item.document}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-sm py-2 px-4"
            >
              <FiDownload /> View itinerary
            </a>
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-sm py-2 px-4"
            >
              <FiExternalLink /> View on Airbnb
            </a>
          )}
          <button
            type="button"
            onClick={() => onInquire?.(item)}
            className="btn-primary text-sm py-2 px-5"
          >
            <FiSend /> {isVilla ? 'Book villa' : 'Inquire now'}
          </button>
        </div>
      </div>
    </article>
  );
}
