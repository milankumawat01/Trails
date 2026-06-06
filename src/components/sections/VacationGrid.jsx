import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { vacationCards } from '../../data/destinations';

export default function VacationGrid() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Vacation for everyone"
          title="Made for every kind of traveller"
          description="Whether you’re chasing reefs, mountains, food trails or quiet beaches — we’ll match you with the right destination."
          align="center"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {vacationCards.map((c) => (
            <Link
              key={c.slug}
              to={`/category/${c.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-ink-900 shadow-soft hover:shadow-glow transition-all hover:-translate-y-1"
            >
              <div className="aspect-[5/6] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-card-glow" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-2xl font-extrabold">{c.name}</h3>
                <p className="text-sm text-white/85">{c.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sand-200 group-hover:text-white">
                  View packages <FiArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
