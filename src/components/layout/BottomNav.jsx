import { NavLink } from 'react-router-dom';
import { FiHome, FiCompass, FiHeart, FiUmbrella, FiPhone } from 'react-icons/fi';

const items = [
  { to: '/', label: 'Home', icon: FiHome, end: true },
  { to: '/category/International', label: 'World', icon: FiCompass },
  { to: '/category/villas', label: 'Villas', icon: FiUmbrella },
  { to: '/testimonials', label: 'Reviews', icon: FiHeart },
  { to: '/contact', label: 'Call', icon: FiPhone },
];

export default function BottomNav() {
  return (
    <nav
      className="lg:hidden fixed bottom-3 inset-x-3 z-40 glass rounded-2xl shadow-glow border border-white/60 px-2 py-1.5 flex items-center justify-between"
      aria-label="Mobile navigation"
    >
      {items.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center gap-0.5 rounded-xl py-1.5 text-[11px] font-medium transition ${
              isActive ? 'text-brand-700 bg-brand-50' : 'text-ink-600 hover:text-ink-900'
            }`
          }
        >
          <Icon className="h-5 w-5" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
