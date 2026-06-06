import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Modal from '../ui/Modal';
import InquiryForm from '../forms/InquiryForm';
import hotel1 from '../../Assets/hotel1.webp';
import hotel2 from '../../Assets/hotel2.webp';
import hotel3 from '../../Assets/hotel3.webp';
import hotel4 from '../../Assets/hotel4.webp';
import hotel5 from '../../Assets/hotel5.webp';
import hotel6 from '../../Assets/hotel6.webp';

const tiles = [
  { src: hotel4, name: 'Calangute', tone: 'Beachfront' },
  { src: hotel2, name: 'Candolim', tone: 'Sea view' },
  { src: hotel3, name: 'Baga', tone: 'Private pool' },
  { src: hotel1, name: 'Anjuna', tone: 'Featured' },
  { src: hotel5, name: 'Vagator', tone: 'Hilltop' },
  { src: hotel6, name: 'Morjim', tone: 'Quiet' },
];

export default function LuxuryVillas() {
  const [open, setOpen] = useState(false);
  return (
    <section className="py-16 sm:py-24 bg-ink-900/[0.03]">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            eyebrow="Stays you’ll remember"
            title="Luxury villas in Goa"
            description="Private pools, beachfront balconies and serviced apartments — curated stays for families, friends and celebrations."
          />
          <div className="flex flex-wrap gap-3">
            <Link to="/category/villas" className="btn-secondary">
              View all villas <FiArrowRight />
            </Link>
            <button type="button" className="btn-primary" onClick={() => setOpen(true)}>
              Book now
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <Link
            to="/category/villas"
            className="relative overflow-hidden rounded-3xl col-span-2 row-span-2 md:row-span-2 aspect-square group bg-ink-900"
          >
            <img src={tiles[3].src} alt={tiles[3].name} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-card-glow" />
            <div className="absolute bottom-0 inset-x-0 p-6 text-white">
              <span className="chip bg-white/15 text-white border border-white/25">{tiles[3].tone}</span>
              <h3 className="mt-3 text-3xl font-extrabold">{tiles[3].name}</h3>
              <p className="text-white/80">Featured villa</p>
            </div>
          </Link>

          {tiles.filter((_, i) => i !== 3).map((t) => (
            <Link
              key={t.name}
              to="/category/villas"
              className="relative overflow-hidden rounded-3xl aspect-square group bg-ink-900"
            >
              <img src={t.src} alt={t.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-card-glow" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <span className="text-[11px] uppercase tracking-wider text-white/80">{t.tone}</span>
                <h4 className="text-lg font-bold">{t.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Book villa">
        <InquiryForm kind="VILLA" />
      </Modal>
    </section>
  );
}
