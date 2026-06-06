import { useMemo, useState } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiArrowLeft } from 'react-icons/fi';
import PackageCard from '../components/PackageCard';
import Modal from '../components/ui/Modal';
import InquiryForm from '../components/forms/InquiryForm';
import { packagesByCategory, categoryLabels } from '../data/packages';

export default function Category() {
  const { category } = useParams();
  const [inquiry, setInquiry] = useState(null);

  const items = useMemo(() => packagesByCategory[category] || [], [category]);
  const label = categoryLabels[category] || category;

  if (!items.length) return <Navigate to="/" replace />;

  const isVillaCategory = category === 'villas';

  return (
    <>
      <Helmet>
        <title>{label} Packages — YOLO Trips</title>
        <meta name="description" content={`Curated ${label} holiday packages with flights, stays and 24×7 support.`} />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900 via-brand-700 to-sand-500 opacity-95" />
        <div className="absolute inset-0 -z-10 opacity-25 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.5),transparent)]" />
        <div className="container-page py-12 sm:py-20 text-white">
          <Link to="/" className="inline-flex items-center gap-2 text-white/85 hover:text-white">
            <FiArrowLeft /> Back to home
          </Link>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            {label}{' '}
            <span className="text-white/70 font-semibold">
              {isVillaCategory ? 'villas' : 'packages'}
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-white/85">
            {isVillaCategory
              ? 'Hand-picked private pool villas and serviced apartments across Goa.'
              : `Discover ${items.length} curated ${label} itineraries — fully customisable, expert-designed.`}
          </p>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="grid gap-5">
          {items.map((item, idx) => (
            <PackageCard
              key={`${item.title}-${idx}`}
              item={item}
              onInquire={setInquiry}
            />
          ))}
        </div>
      </section>

      <Modal open={!!inquiry} onClose={() => setInquiry(null)} title="Inquiry">
        {inquiry && (
          <InquiryForm
            kind={inquiry.type === 'villa' ? 'VILLA' : 'HOLIDAY'}
            defaultLocation={inquiry.type === 'villa' ? 'Goa' : label}
          />
        )}
      </Modal>
    </>
  );
}
