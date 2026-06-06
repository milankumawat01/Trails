import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

export default function Modal({ open, onClose, children, title, maxWidth = 'max-w-3xl' }) {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
        aria-label="Close"
      />
      <div className={`relative w-full ${maxWidth} max-h-[92vh] overflow-hidden rounded-3xl bg-white shadow-glow animate-scale-in`}>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-700 shadow-soft hover:bg-ink-900 hover:text-white transition"
          aria-label="Close dialog"
        >
          <FiX className="h-5 w-5" />
        </button>
        <div className="max-h-[92vh] overflow-y-auto">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
