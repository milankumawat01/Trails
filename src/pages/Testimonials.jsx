import { Helmet } from 'react-helmet-async';
import { FaStar, FaQuoteLeft } from 'react-icons/fa6';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Testimonials — YOLO Trips</title>
        <meta name="description" content="Real reviews from real travellers who explored the world with YOLO Trips." />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900 via-brand-700 to-sand-500" />
        <div className="container-page py-16 sm:py-24 text-white">
          <span className="chip bg-white/15 text-white border border-white/25">5★ travellers</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight max-w-3xl text-balance">
            Stories from people who travelled with us.
          </h1>
          <p className="mt-4 max-w-2xl text-white/85 text-lg">
            Honest reviews from honeymooners, families and solo adventurers. We’re grateful to be part of every journey.
          </p>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16 grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <article key={t.name} className="surface p-6 sm:p-8 relative overflow-hidden">
            <FaQuoteLeft className="absolute -top-2 -right-2 h-24 w-24 text-brand-50" />
            <div className="relative flex items-center gap-4">
              <img src={t.image} alt={t.name} className="h-16 w-16 rounded-2xl object-cover shadow-soft" />
              <div>
                <h3 className="text-lg font-bold">{t.name}</h3>
                <p className="text-sm text-ink-500">{t.role}</p>
                <div className="mt-1 flex items-center gap-0.5 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <FaStar key={k} className="h-3.5 w-3.5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="relative mt-5 text-ink-700 leading-relaxed">{t.quote}</p>
          </article>
        ))}
      </section>
    </>
  );
}
