import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { popularDestinations } from '../../data/destinations';

export default function PopularDestinations() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    const step = (card?.clientWidth || 280) + 16;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            eyebrow="Wanderlust starts here"
            title="Most popular destinations"
            description="Handpicked getaways our travellers love — from beach escapes to mountain retreats."
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink-900/5 hover:bg-ink-900 hover:text-white transition"
              aria-label="Previous"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink-900/5 hover:bg-ink-900 hover:text-white transition"
              aria-label="Next"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {popularDestinations.map((d) => (
            <Link
              key={d.slug}
              data-card
              to={`/category/${d.slug}`}
              className="snap-start shrink-0 w-[72%] sm:w-[42%] md:w-[30%] lg:w-[22%] group relative overflow-hidden rounded-3xl bg-ink-900 shadow-soft hover:shadow-glow transition"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-card-glow" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="chip bg-white/15 text-white border border-white/25 backdrop-blur-md">
                  {d.region}
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{d.name}</h3>
                <p className="text-sm text-white/80">{d.tagline}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sand-200 group-hover:text-white transition">
                  Explore packages <FiArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
