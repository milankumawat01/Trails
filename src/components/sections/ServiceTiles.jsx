import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaPlane, FaPassport } from 'react-icons/fa6';
import Modal from '../ui/Modal';
import InquiryForm from '../forms/InquiryForm';

const tiles = [
  {
    kind: 'FLIGHT',
    title: 'Book flights',
    sub: 'Domestic & international fares — round-trip or one-way.',
    badge: 'Best fares',
    bg: 'from-brand-700 to-brand-500',
    Icon: FaPlane,
  },
  {
    kind: 'VISA',
    title: 'Visa assistance',
    sub: '95% success rate. End-to-end documentation support.',
    badge: '95% approval',
    bg: 'from-sand-700 to-sand-400',
    Icon: FaPassport,
  },
];

export default function ServiceTiles() {
  const [openKind, setOpenKind] = useState(null);

  return (
    <section className="py-12 sm:py-16">
      <div className="container-page grid md:grid-cols-2 gap-5 sm:gap-6">
        {tiles.map(({ kind, title, sub, badge, bg, Icon }) => (
          <button
            key={kind}
            type="button"
            onClick={() => setOpenKind(kind)}
            className={`relative overflow-hidden text-left rounded-3xl p-7 sm:p-9 text-white bg-gradient-to-br ${bg} shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="absolute -right-10 -bottom-10 opacity-20">
              <Icon className="h-48 w-48" />
            </div>
            <span className="chip bg-white/15 text-white border border-white/25 backdrop-blur-md">
              {badge}
            </span>
            <h3 className="mt-5 text-3xl sm:text-4xl font-extrabold leading-tight">{title}</h3>
            <p className="mt-2 text-white/80 max-w-sm">{sub}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
              Start inquiry <FiArrowRight />
            </span>
          </button>
        ))}
      </div>

      <Modal open={openKind !== null} onClose={() => setOpenKind(null)} title={openKind || ''}>
        {openKind && <InquiryForm kind={openKind} />}
      </Modal>
    </section>
  );
}
