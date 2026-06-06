import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import logo from '../../Assets/logo.svg';
import partners from '../../Assets/PartneredCompanies.webp';
import { contact } from '../../data/site';

const social = [
  { href: contact.social.instagram, label: 'Instagram', Icon: FaInstagram },
  { href: contact.social.facebook, label: 'Facebook', Icon: FaFacebookF },
  { href: contact.social.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
  { href: contact.social.youtube, label: 'YouTube', Icon: FaYoutube },
  { href: contact.social.twitter, label: 'Twitter', Icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="mt-16 sm:mt-24">
      <div className="container-page">
        <div className="surface p-6 sm:p-10 grid gap-8">
          <div className="text-center">
            <p className="field-label">Trusted by leading travel brands</p>
            <div className="mt-4 overflow-hidden mask-fade-r">
              <img
                src={partners}
                alt="Partner companies"
                loading="lazy"
                className="h-12 sm:h-14 w-auto mx-auto opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-page mt-12 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2 max-w-md">
          <img src={logo} alt="YOLO Trips" className="h-10 w-auto" />
          <p className="mt-4 text-ink-600 leading-relaxed">
            YOLO Trips is a professionally managed travel company offering corporate &
            leisure travel, MICE, foreign exchange, car rentals, visa assistance, and
            travel insurance — all from our office in Vaishali, Ghaziabad.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-900/5 text-ink-700 hover:bg-brand-600 hover:text-white transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-sm font-bold uppercase tracking-wider text-ink-900">Explore</h5>
          <ul className="mt-4 space-y-2 text-ink-600">
            <li><Link to="/" className="hover:text-brand-700">Home</Link></li>
            <li><Link to="/category/International" className="hover:text-brand-700">International</Link></li>
            <li><Link to="/category/Domestic" className="hover:text-brand-700">Domestic</Link></li>
            <li><Link to="/category/villas" className="hover:text-brand-700">Luxury Villas</Link></li>
            <li><Link to="/testimonials" className="hover:text-brand-700">Testimonials</Link></li>
            <li><Link to="/about" className="hover:text-brand-700">About us</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-bold uppercase tracking-wider text-ink-900">Talk to us</h5>
          <ul className="mt-4 space-y-3 text-ink-600">
            <li>
              <a href={`mailto:${contact.emails[0]}`} className="flex items-center gap-2 hover:text-brand-700">
                <FiMail className="h-4 w-4 text-brand-600" /> {contact.emails[0]}
              </a>
            </li>
            {contact.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p}`} className="flex items-center gap-2 hover:text-brand-700">
                  <FiPhone className="h-4 w-4 text-brand-600" /> {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-brand-700"
              >
                <FaWhatsapp className="h-4 w-4 text-emerald-500" /> {contact.whatsapp}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FiMapPin className="h-4 w-4 text-brand-600 mt-0.5" />
              {contact.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 pt-6 pb-8 border-t border-ink-900/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-500">
        <p>© {new Date().getFullYear()} YOLO Trips. All rights reserved.</p>
        <p>Crafted with care for travellers worldwide.</p>
      </div>
    </footer>
  );
}
