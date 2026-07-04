export default function PageNav({
  previous,
  next,
}: {
  previous?: { label: string; href: string };
  next?: { label: string; href: string };
}) {
  return (
    <section className="bg-[#0B0B0B] px-6 pb-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[#D4AF37]/20 pt-10 sm:flex-row sm:items-center sm:justify-between">
        {previous ? (
          <a
            href={previous.href}
            className="rounded-full border border-[#D4AF37]/50 px-7 py-4 text-center font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            ← {previous.label}
          </a>
        ) : (
          <div />
        )}

        {next ? (
          <a
            href={next.href}
            className="rounded-full bg-[#D4AF37] px-7 py-4 text-center font-bold text-black transition hover:scale-105"
          >
            {next.label} →
          </a>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}