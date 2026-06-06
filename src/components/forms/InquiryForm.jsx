import { useState } from 'react';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Counter from '../ui/Counter';
import { useInquiry } from '../../hooks/useInquiry';

const CONFIG = {
  HOLIDAY: {
    title: 'Plan your holiday',
    subtitle: 'Tell us where you want to escape — our concierge will design it for you.',
    fields: ['name', 'email', 'mobile', 'travellers', 'triplocation', 'checkin', 'checkout'],
  },
  VILLA: {
    title: 'Book your luxury villa',
    subtitle: 'Lock in dates and we’ll get back with the best available villa options.',
    fields: ['name', 'email', 'mobile', 'travellers', 'checkin', 'checkout'],
  },
  FLIGHT: {
    title: 'Search flights',
    subtitle: 'Share your route and dates — we’ll find the best fares for you.',
    fields: ['name', 'email', 'mobile', 'travellers', 'from', 'triplocation', 'category', 'checkin', 'checkout'],
  },
  VISA: {
    title: 'Visa assistance',
    subtitle: '95% success rate. Submit basic details, our visa team will reach out.',
    fields: ['name', 'email', 'mobile', 'travellers', 'triplocation', 'checkin', 'checkout'],
  },
};

const labelFor = {
  triplocation: 'Destination',
  from: 'Departure city',
  checkin: 'Check-in / Departure',
  checkout: 'Check-out / Return',
};

export default function InquiryForm({ kind = 'HOLIDAY', defaultLocation = '', accent }) {
  const cfg = CONFIG[kind];
  const { send, status, error, reset } = useInquiry(kind);

  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    triplocation: defaultLocation,
    from: '',
    category: 'round',
    checkin: '',
    checkout: '',
  });
  const [travellers, setTravellers] = useState(2);

  const has = (f) => cfg.fields.includes(f);
  const onChange = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      from_name: form.name,
      from_email: form.email,
      from_mobile: form.mobile,
      travellers,
      triplocation: form.triplocation,
      from: form.from,
      category: form.category,
      checkin: form.checkin,
      checkout: form.checkout,
      departuredate: form.checkin,
      arrivaldate: form.checkout,
    };
    await send(payload);
  };

  if (status === 'success') {
    return (
      <div className="p-8 sm:p-12 text-center flex flex-col items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 inline-flex items-center justify-center">
          <FiCheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold">Thank you!</h3>
        <p className="text-ink-600 max-w-md">
          Your inquiry has been received. Our travel expert will reach out within a few hours.
        </p>
        <button type="button" onClick={reset} className="btn-secondary">
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="p-6 sm:p-8 grid gap-4">
      <header className="mb-1">
        <h3 className="text-2xl sm:text-3xl font-bold">{cfg.title}</h3>
        <p className="text-ink-600 mt-1">{cfg.subtitle}</p>
      </header>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <label className="field-label" htmlFor="name">Full name</label>
          <input id="name" required value={form.name} onChange={onChange('name')} placeholder="Your name" className="input" />
        </div>
        <div className="grid gap-1.5">
          <label className="field-label" htmlFor="email">Email</label>
          <input id="email" type="email" required value={form.email} onChange={onChange('email')} placeholder="you@example.com" className="input" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <label className="field-label" htmlFor="mobile">Mobile</label>
          <input id="mobile" type="tel" required value={form.mobile} onChange={onChange('mobile')} placeholder="+91 98xxxxxxxx" className="input" />
        </div>
        <div className="grid gap-1.5">
          <label className="field-label">Travellers</label>
          <Counter value={travellers} onChange={setTravellers} label="" />
        </div>
      </div>

      {(has('from') || has('triplocation')) && (
        <div className="grid sm:grid-cols-2 gap-3">
          {has('from') && (
            <div className="grid gap-1.5">
              <label className="field-label" htmlFor="from">{labelFor.from}</label>
              <input id="from" required value={form.from} onChange={onChange('from')} placeholder="e.g. New Delhi" className="input" />
            </div>
          )}
          {has('triplocation') && (
            <div className="grid gap-1.5">
              <label className="field-label" htmlFor="triplocation">{labelFor.triplocation}</label>
              <input id="triplocation" required value={form.triplocation} onChange={onChange('triplocation')} placeholder="e.g. Bali" className="input" />
            </div>
          )}
        </div>
      )}

      {has('category') && (
        <div className="grid gap-1.5">
          <label className="field-label">Trip type</label>
          <div className="flex gap-2">
            {[
              { v: 'one-way', label: 'One-way' },
              { v: 'round', label: 'Round trip' },
            ].map((opt) => (
              <button
                type="button"
                key={opt.v}
                onClick={() => setForm((p) => ({ ...p, category: opt.v }))}
                className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition ${
                  form.category === opt.v
                    ? 'border-brand-500 bg-brand-50 text-brand-700'
                    : 'border-ink-300/60 bg-white text-ink-600 hover:border-brand-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-3">
        {has('checkin') && (
          <div className="grid gap-1.5">
            <label className="field-label" htmlFor="checkin">{labelFor.checkin}</label>
            <input id="checkin" type="date" required value={form.checkin} onChange={onChange('checkin')} className="input" />
          </div>
        )}
        {has('checkout') && (
          <div className="grid gap-1.5">
            <label className="field-label" htmlFor="checkout">{labelFor.checkout}</label>
            <input id="checkout" type="date" required value={form.checkout} onChange={onChange('checkout')} className="input" />
          </div>
        )}
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-xl bg-rose-50 text-rose-700 px-4 py-3 text-sm">
          <FiAlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold">Couldn’t send your inquiry.</p>
            <p>{error || 'Please try again or call us directly.'}</p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`btn-primary mt-2 disabled:opacity-60 disabled:cursor-not-allowed ${accent || ''}`}
      >
        <FiSend />
        {status === 'sending' ? 'Sending…' : 'Submit inquiry'}
      </button>

      <p className="text-xs text-ink-500 text-center">
        We respect your privacy. Your details are only used to plan your trip.
      </p>
    </form>
  );
}
