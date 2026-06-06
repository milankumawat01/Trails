import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiGlobe, FiHeart, FiShield } from 'react-icons/fi';
import logo from '../Assets/logo.svg';
import travel from '../Assets/travelmanagement.png';

const values = [
  { Icon: FiGlobe, title: 'Global reach', text: 'Domestic and international itineraries — corporate, leisure and MICE.' },
  { Icon: FiAward, title: '4.6 Google rated', text: 'A long-standing reputation built on transparent pricing and quality stays.' },
  { Icon: FiShield, title: '95% visa success', text: 'Expert documentation team across short and long-stay visa categories.' },
  { Icon: FiHeart, title: '24×7 concierge', text: 'Your trip, monitored end-to-end — flights, transfers, stays and surprises.' },
];

const stats = [
  { v: '10K+', l: 'Happy travellers' },
  { v: '150+', l: 'Destinations covered' },
  { v: '15Y', l: 'Industry experience' },
  { v: '24/7', l: 'Concierge support' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About YOLO Trips</title>
        <meta name="description" content="YOLO Trips — a professionally managed travel company providing customised travel solutions across the world." />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-900 via-brand-800 to-brand-600" />
        <div className="container-page py-16 sm:py-24 text-white">
          <span className="chip bg-white/15 text-white border border-white/25">Our company</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight max-w-4xl text-balance">
            We design holidays that feel impossibly easy to live.
          </h1>
          <p className="mt-4 max-w-2xl text-white/85 text-lg">
            YOLO Trips is a professionally managed travel company offering a broad spectrum
            of travel and tourism services — corporate, leisure, MICE, foreign exchange, car
            rentals, visa & passport, and travel insurance — from our office in Vaishali, Ghaziabad.
          </p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="aspect-square rounded-4xl bg-gradient-to-br from-brand-100 to-sand-100 p-6 sm:p-10 flex items-center justify-center">
            <img src={logo} alt="YOLO Trips" className="w-3/5 max-w-xs animate-float" />
          </div>
          <div className="absolute -bottom-6 -right-6 surface px-6 py-4">
            <p className="text-xs uppercase font-semibold tracking-wider text-ink-500">Since 2009</p>
            <p className="text-2xl font-extrabold">Built for travellers</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
            Travel management, redefined.
          </h2>
          <p className="mt-4 text-ink-600 leading-relaxed">
            Our team of professionally qualified travel experts brings unmatched quality
            and negotiating power. You get the most competitive prices without any compromises
            on quality — and optimum value for your travel investments.
          </p>
          <p className="mt-3 text-ink-600 leading-relaxed">
            From consolidated travel purchases to regional, national or global support, we
            understand the business from the ground up — and that lets us serve you better.
          </p>
          <Link to="/contact" className="btn-primary mt-7">
            Plan a trip with us <FiArrowRight />
          </Link>
        </div>
      </section>

      <section className="container-page py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.l} className="surface p-6 text-center">
            <p className="text-4xl font-extrabold text-brand-700">{s.v}</p>
            <p className="text-sm text-ink-500 mt-1">{s.l}</p>
          </div>
        ))}
      </section>

      <section className="container-page py-16 sm:py-24 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-2 surface p-2 overflow-hidden">
          <img src={travel} alt="Travel management" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
            What we promise every traveller
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {values.map(({ Icon, title, text }) => (
              <div key={title} className="surface p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="text-sm text-ink-600 mt-1 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
