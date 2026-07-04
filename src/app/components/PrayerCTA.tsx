export default function PrayerCTA() {
  return (
    <section className="bg-[#111111] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0F0F0F] border border-[#D4AF37]/30 rounded-3xl p-12 text-center">

          <p className="uppercase tracking-[0.35em] text-[#D4AF37] mb-4">
            Prayer
          </p>

          <h2 className="text-5xl font-bold mb-8">
            We Would Be Honored to Pray for You
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-9 mb-10">
            No matter what you're facing, you're not alone. Whether you're
            celebrating God's faithfulness, walking through a difficult season,
            or simply need someone to pray with you, we'd love to stand with
            you in prayer.
          </p>

          <blockquote className="max-w-3xl mx-auto italic text-2xl text-gray-100 mb-4">
            "Do not be anxious about anything, but in everything by prayer and
            supplication with thanksgiving let your requests be made known to God."
          </blockquote>

          <p className="text-[#D4AF37] font-bold mb-10">
            Philippians 4:6
          </p>

          <a
            href="/prayer"
            className="inline-block rounded-full bg-[#D4AF37] px-10 py-5 text-lg font-bold text-black hover:opacity-90 transition"
          >
            Submit a Prayer Request
          </a>

        </div>

      </div>
    </section>
  );
}