import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiStar } from 'react-icons/fi';
import heroImg from '../../Assets/main-background.jpg';
import googleIcon from '../../Assets/fa-google.avif';

const badges = [
  { icon: <img src={googleIcon} alt="" className="h-5 w-5" />, label: '4.6 Google rated', sub: <FiStar className="h-3.5 w-3.5 text-amber-400" /> },
  { icon: <FiCheck className="text-emerald-400 h-4 w-4" />, label: '100% Customised Trips' },
  { icon: <FiCheck className="text-emerald-400 h-4 w-4" />, label: '95% Visa Success Rate' },
  { icon: <FiCheck className="text-emerald-400 h-4 w-4" />, label: '24×7 Concierge' },
];

export default function Hero() {
  return (
    <section className="relative -mt-16 sm:-mt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      <div className="relative container-page pt-28 sm:pt-36 pb-16 sm:pb-24 text-white">
        <span className="chip bg-white/10 text-white backdrop-blur-md border border-white/20">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Trusted by 10,000+ travellers
        </span>

        <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] max-w-4xl text-balance text-white">
          Plan your next{' '}
          <span className="bg-gradient-to-r from-sand-300 to-sand-500 bg-clip-text text-transparent">
            hassle-free
          </span>{' '}
          holiday.
        </h1>

        <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
          From overwater villas in the Maldives to private pools in Goa — we design
          handcrafted itineraries with flights, visas, stays and 24×7 support, all in one place.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/category/International" className="btn-primary text-base px-6 py-3.5">
            Explore destinations <FiArrowRight />
          </Link>
          <Link
            to="/contact"
            className="btn bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white/20 px-6 py-3.5"
          >
            Talk to a concierge
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {badges.map((b, i) => (
            <li
              key={i}
              className="glass border-white/20 bg-white/10 text-white rounded-2xl px-4 py-3 flex items-center gap-2.5"
            >
              {b.icon}
              <div className="text-sm font-semibold leading-tight">{b.label}</div>
              {b.sub && <span className="ml-auto">{b.sub}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
