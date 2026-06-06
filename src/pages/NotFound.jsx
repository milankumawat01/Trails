import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <section className="container-page py-24 sm:py-36 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">404</p>
      <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold">Lost in transit?</h1>
      <p className="mt-4 text-ink-600 max-w-md mx-auto">
        The page you’re looking for doesn’t exist. Let’s get you back on the map.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <FiArrowLeft /> Back to home
      </Link>
    </section>
  );
}
