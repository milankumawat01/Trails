import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import Modal from '../ui/Modal';
import InquiryForm from '../forms/InquiryForm';
import bg from '../../Assets/blue-bg.jpg';

export default function PlanCta() {
  const [open, setOpen] = useState(false);
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl p-8 sm:p-14 text-white shadow-glow">
          <div className="absolute inset-0">
            <img src={bg} alt="" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-br from-ink-900/85 via-brand-800/70 to-brand-600/50" />
          </div>
          <div className="relative max-w-2xl">
            <span className="chip bg-white/15 text-white border border-white/25 backdrop-blur-md">
              Free consultation
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight text-balance text-white">
              Have a destination in mind? Let’s plan it together.
            </h2>
            <p className="mt-3 text-white/85 max-w-xl">
              Share a few details and our concierge will craft a tailor-made itinerary,
              quote and bookings within hours.
            </p>
            <button type="button" onClick={() => setOpen(true)} className="btn-primary mt-7 text-base px-6 py-3.5">
              <FiSend /> Start free planning
            </button>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Plan your trip">
        <InquiryForm kind="HOLIDAY" />
      </Modal>
    </section>
  );
}
