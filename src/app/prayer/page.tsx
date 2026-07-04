export default function PrayerPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-24 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-center uppercase tracking-[0.35em] text-[#D4AF37]">
          Prayer
        </p>

        <h1 className="mb-8 text-center text-5xl font-black md:text-7xl">
          HOW CAN WE PRAY FOR YOU?
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-center text-xl leading-9 text-gray-300">
          No request is too small, and no burden is too heavy. We would be
          honored to pray with you and for you.
        </p>

        <div className="mx-auto mb-16 max-w-4xl rounded-3xl border border-[#D4AF37]/30 bg-[#181818] p-10 text-center">
          <p className="mb-5 text-2xl italic leading-9 text-gray-200">
            “Do not be anxious about anything, but in everything by prayer and
            supplication with thanksgiving let your requests be made known to God.”
          </p>

          <p className="font-bold text-[#D4AF37]">
            Philippians 4:6
          </p>
        </div>

        <form
          action="https://formspree.io/f/xnjklelk"
          method="POST"
          className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-[#D4AF37]/30 bg-[#181818] p-10"
        >
          <input
            name="name"
            type="text"
            className="w-full rounded-xl border border-gray-700 bg-black p-4"
            placeholder="Your Name (Optional)"
          />

          <input
            name="email"
            type="email"
            className="w-full rounded-xl border border-gray-700 bg-black p-4"
            placeholder="Email (Optional)"
          />

          <select
            name="requestType"
            className="w-full rounded-xl border border-gray-700 bg-black p-4"
          >
            <option>Prayer Request</option>
            <option>Praise Report</option>
            <option>Pastoral Care</option>
          </select>

          <textarea
            name="prayer"
            className="w-full rounded-xl border border-gray-700 bg-black p-4"
            rows={8}
            placeholder="How can we pray for you?"
            required
          />

          <input
            type="hidden"
            name="_subject"
            value="New Prayer Request"
          />

          <button
            type="submit"
            className="rounded-full bg-[#D4AF37] px-10 py-4 font-bold text-black transition hover:scale-105"
          >
            Submit Prayer Request
          </button>
        </form>
      </section>
    </main>
  );
}