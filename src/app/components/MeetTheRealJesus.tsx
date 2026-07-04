export default function MeetTheRealJesus() {
  return (
    <section
      id="gospel"
      className="bg-gradient-to-b from-[#0B0B0B] to-black text-white py-28 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-[#D4AF37] mb-4">
          Meet the Real Jesus
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-10">
          Jesus Changes Everything
        </h2>

        <p className="text-2xl leading-10 text-gray-300 max-w-4xl mx-auto mb-12">
          We aren't here to promote a brand, a personality, or a trend.
          We exist for one reason:
          <span className="text-white font-bold">
            {" "}to point people to Jesus Christ.
          </span>
        </p>

        <div className="bg-[#161616] border border-[#D4AF37]/30 rounded-3xl p-10 mb-12">

          <p className="text-3xl italic leading-relaxed mb-8 text-gray-100">
            "I am the way, and the truth, and the life. No one comes to the Father except through Me."
          </p>

          <p className="text-[#D4AF37] text-xl font-bold">
            John 14:6
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-[#181818] rounded-2xl p-8 border border-[#D4AF37]/20">
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
              He Is Savior
            </h3>

            <p className="text-gray-300 leading-8">
              Jesus came to seek and save the lost. Through His death and
              resurrection, we can have forgiveness and eternal life.
            </p>
          </div>

          <div className="bg-[#181818] rounded-2xl p-8 border border-[#D4AF37]/20">
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
              He Is Truth
            </h3>

            <p className="text-gray-300 leading-8">
              In a world full of confusion, Jesus is the unchanging truth
              revealed in Scripture.
            </p>
          </div>

          <div className="bg-[#181818] rounded-2xl p-8 border border-[#D4AF37]/20">
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
              He Is Life
            </h3>

            <p className="text-gray-300 leading-8">
              A relationship with Jesus brings hope, purpose, peace, and the
              promise of eternal life for everyone who believes in Him.
            </p>
          </div>

        </div>

        <div className="mt-20">

          <a
            href="/about"
            className="bg-[#D4AF37] text-black font-bold px-10 py-5 rounded-full hover:scale-105 transition"
          >
            Learn More About Our Mission
          </a>

        </div>

      </div>
    </section>
  );
}