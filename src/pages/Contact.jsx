import { Helmet } from 'react-helmet-async';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube, FaFacebookF } from 'react-icons/fa6';
import InquiryForm from '../components/forms/InquiryForm';
import { contact } from '../data/site';

const channels = [
  { Icon: FiMail, label: 'Email us', value: contact.emails[0], href: `mailto:${contact.emails[0]}`, tone: 'bg-brand-50 text-brand-700' },
  { Icon: FiPhone, label: 'Call us', value: contact.phones[0], href: `tel:${contact.phones[0]}`, tone: 'bg-sand-100 text-sand-700' },
  { Icon: FaWhatsapp, label: 'WhatsApp', value: contact.whatsapp, href: `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`, tone: 'bg-emerald-50 text-emerald-700' },
  { Icon: FiMapPin, label: 'Visit us', value: contact.address, href: '#', tone: 'bg-ink-900/5 text-ink-700' },
];

const social = [
  { Icon: FaInstagram, href: contact.social.instagram },
  { Icon: FaFacebookF, href: contact.social.facebook },
  { Icon: FaLinkedin, href: contact.social.linkedin },
  { Icon: FaYoutube, href: contact.social.youtube },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact YOLO Trips</title>
        <meta name="description" content="Talk to YOLO Trips for customised holidays, flights, visas and luxury villas." />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500" />
        <div className="container-page py-16 sm:py-24 text-white">
          <span className="chip bg-white/15 text-white border border-white/25">We’re here for you</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight">Talk to us</h1>
          <p className="mt-4 max-w-2xl text-white/85 text-lg">
            Planning your next escape? Our concierge team replies within hours, every day of the week.
          </p>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 grid gap-4 self-start">
          {channels.map(({ Icon, label, value, href, tone }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="surface p-5 flex items-center gap-4 hover:shadow-glow transition group"
            >
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${tone}`}>
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-500 font-semibold">{label}</p>
                <p className="text-lg font-semibold text-ink-900 group-hover:text-brand-700">{value}</p>
              </div>
            </a>
          ))}

          <div className="surface p-5">
            <p className="text-xs uppercase tracking-wider text-ink-500 font-semibold">Follow us</p>
            <div className="mt-3 flex gap-2">
              {social.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-900/5 text-ink-700 hover:bg-brand-600 hover:text-white transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 surface">
          <InquiryForm kind="HOLIDAY" />
        </div>
      </section>
    </>
  );
}
