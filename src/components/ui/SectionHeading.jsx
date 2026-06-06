export default function SectionHeading({ eyebrow, title, description, align = 'left', children }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-2xl ${alignClass} flex flex-col gap-3`}>
      {eyebrow && (
        <span className="chip self-start">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-ink-600 leading-relaxed">{description}</p>
      )}
      {children}
    </div>
  );
}
