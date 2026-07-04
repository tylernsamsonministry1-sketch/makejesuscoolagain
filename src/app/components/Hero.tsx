export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center px-6 text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.92)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0B0B0B]" />

      <div className="relative z-10 max-w-6xl pt-24">
        <p className="mb-6 uppercase tracking-[0.45em] text-[#D4AF37]">
          Make Jesus Cool Again Ministry
        </p>

        <h1 className="text-6xl font-black leading-[0.9] tracking-tight md:text-8xl lg:text-9xl">
          MAKE JESUS
          <br />
          COOL AGAIN
        </h1>

        <p className="mt-6 text-2xl font-semibold tracking-[0.45em] text-[#D4AF37]">
          MINISTRY
        </p>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-200 md:text-2xl">
          Not because Jesus stopped being amazing...
          <br />
          but because our culture stopped looking to Him.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href="#latest"
            className="rounded-full bg-[#D4AF37] px-10 py-5 font-bold text-black transition hover:scale-105"
          >
            Latest From the Ministry
          </a>

          <a
            href="#gospel"
            className="rounded-full border border-[#D4AF37] px-10 py-5 font-bold text-white transition hover:scale-105 hover:bg-[#D4AF37] hover:text-black"
          >
            Discover the Gospel
          </a>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-lg italic text-gray-300">
          “Jesus Christ is the same yesterday and today and forever.”
        </p>

        <p className="mt-3 font-bold text-[#D4AF37]">Hebrews 13:8</p>
      </div>
    </section>
  );
}