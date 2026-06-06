import { FaStar } from 'react-icons/fa6';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsStrip() {
  const featured = testimonials.slice(0, 3);
  return (
    <section className="py-16 sm:py-24 bg-ink-900 text-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Loved by travellers"
          title="Real stories from real journeys"
          description="Thousands of trips, hundreds of five-star reviews. Here’s what our travellers say."
          align="center"
        >
          <span className="self-center" />
        </SectionHeading>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {featured.map((t) => (
            <article
              key={t.name}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-white/85 leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-white/60">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
