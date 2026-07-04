export default function DonatePage() {
  const giving = [
    ["Outreach", "Community events, youth ministry, evangelism, and local outreach."],
    ["Media", "Cameras, microphones, lighting, editing tools, and content creation."],
    ["Missions", "Future mission trips, ministry travel, and Gospel-centered outreach."],
    ["Resources", "Bible studies, teaching materials, discipleship tools, and ministry supplies."],
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-24 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-center uppercase tracking-[0.35em] text-[#D4AF37]">
          Give
        </p>

        <h1 className="mb-8 text-center text-5xl font-black md:text-7xl">
          SUPPORT THE MINISTRY
        </h1>

        <p className="mx-auto mb-16 max-w-3xl text-center text-xl leading-9 text-gray-300">
          Your generosity helps us proclaim the Gospel, make disciples, create
          biblical content, serve communities, and prepare for future mission
          work.
        </p>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {giving.map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-[#D4AF37]/30 bg-[#181818] p-8"
            >
              <h2 className="mb-4 text-2xl font-bold text-[#D4AF37]">
                {title}
              </h2>

              <p className="leading-7 text-gray-300">{text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-[#D4AF37]/30 bg-black p-10 text-center">
          <h2 className="mb-5 text-4xl font-bold">
            Online Giving Coming Soon
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-gray-300">
            We plan to connect this page to a secure giving platform for
            one-time and monthly donations. Until then, please contact us
            directly for giving questions or ministry support.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-full bg-[#D4AF37] px-10 py-4 font-bold text-black"
          >
            Contact Us About Giving
          </a>
        </div>
      </section>
    </main>
  );
}