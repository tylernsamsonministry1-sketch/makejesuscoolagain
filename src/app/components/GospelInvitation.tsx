export default function GospelInvitation() {
  return (
    <section
      id="gospel"
      className="bg-gradient-to-b from-[#0B0B0B] to-black py-28 px-6 text-white"
    >
      <div className="mx-auto max-w-5xl text-center">

        <p className="mb-4 uppercase tracking-[0.35em] text-[#D4AF37]">
          The Gospel
        </p>

        <h2 className="mb-8 text-5xl font-black md:text-7xl">
          Jesus Still Saves
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-xl leading-9 text-gray-300">
          No matter who you are or what you've done, there is hope in Jesus
          Christ. God loves you, Christ died for your sins, and through His
          death and resurrection He offers forgiveness, new life, and eternal
          salvation to everyone who places their faith in Him.
        </p>

        <div className="mb-12 rounded-3xl border border-[#D4AF37]/30 bg-[#161616] p-10">

          <p className="mb-6 text-3xl italic leading-relaxed">
            "For God so loved the world, that He gave His only Son, that whoever
            believes in Him should not perish but have eternal life."
          </p>

          <p className="text-xl font-bold text-[#D4AF37]">
            John 3:16
          </p>

        </div>

        <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-gray-300">
          If you'd like to know more about Jesus, have questions about the
          Gospel, or simply want someone to talk with, we'd love to connect
          with you.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="/beliefs"
            className="rounded-full bg-[#D4AF37] px-10 py-5 font-bold text-black"
          >
            Learn About Jesus
          </a>

          <a
            href="/contact"
            className="rounded-full border border-[#D4AF37] px-10 py-5 font-bold"
          >
            Contact Us
          </a>

        </div>

      </div>
    </section>
  );
}