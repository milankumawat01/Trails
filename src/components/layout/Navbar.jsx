import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import logo from '../../Assets/logo.svg';
import { contact, navLinks } from '../../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center gap-2" aria-label="YOLO Trips home">
          <img src={logo} alt="YOLO Trips" className="h-8 sm:h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition ${
                  isActive
                    ? 'bg-ink-900 text-white'
                    : 'text-ink-700 hover:bg-ink-900/5'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${contact.phones[0]}`} className="btn-ghost text-sm">
            <FiPhone /> {contact.phones[0]}
          </a>
          <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
            Plan a trip
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-900/5 text-ink-800"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-900/5 bg-white animate-fade-in">
          <div className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium transition ${
                    isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-700 hover:bg-ink-900/5'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-2 justify-center">
              Plan a trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
